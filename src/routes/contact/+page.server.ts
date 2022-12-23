import type { AWSResponse, EmailType } from "$lib/types/postTypes";
import { invalid, type Action, type Actions } from "@sveltejs/kit";

const sendEmail = async (data: EmailType) => {
    const apiEndpoint = import.meta.env.VITE_SEND_EMAIL_API
    const headlist = {
        "Content-Type": "application/json",
        "x-api-key": `${import.meta.env.VITE_API_AUTH_KEY}`
    }
    const send = await fetch(apiEndpoint,
        {
            method: 'POST',
            headers: headlist,
            body: JSON.stringify(data)
        }
    )
    
    return send.json()
}

const contact: Action = async ({ request }) => {
    const headerCaptcha = request.headers.get("gotcha")

    // form data
    const form = await request.formData()
    const clientName = form.get('firstLastName')
    const phone = form.get('phone')
    const email = form.get('email')
    const additionalInfo = form.get('additional')
    const captcha = form.get('_gotcha')

    // Simple validations
    if (captcha != headerCaptcha ||
        !captcha
    ) {
        return invalid(403, { error: 'Not Accepted!' })
    }

    if (
        typeof clientName !== 'string' ||
        !clientName ||
        typeof phone !== 'string' ||
        !phone ||
        typeof email !== 'string' ||
        !email
    ) {
        return invalid(403, { error: 'You provided something wrong.' })
    }

    const firstLast = clientName.split(' ')
    const data: EmailType = {
        fromAddress: import.meta.env.VITE_AWS_VERIFIED_EMAIL,
        toAddress: import.meta.env.VITE_AWS_VERIFIED_EMAIL,
        compose: {
            title: "Email request",
            preheader: "Congratulations you got new client!",
            logo: {
                url: "https://jzehomeimprovement.com",
                src: "https://jzehomeimprovement.com/logo.svg"
            },
            site: {
                label: "JZE Home Improvement",
                url: "https://jzehomeimprovement.com"
            },
            contact: {
                firstName: `${firstLast[0]}`,
                lastName: `${firstLast[1]}`,
                phone: `${phone}`,
                email: `${email}`,
                additional: `${additionalInfo}`
            },
            social: {
                facebook: "https://www.facebook.com/people/JZE-Home-Improvement/100088313413412/",
                instagram: "https://www.instagram.com/jzehomeimprovement/"
            }
        }
    }
    
    const response = await sendEmail(data)
    const meta: AWSResponse = response
    
    if (meta?.Error?.Code) {
        console.log(meta);
        return invalid(400, { error: "It's not your fault but something went wrong." })
    }
    
    return { success: true, msg: 'Form was sent!' }
}

export const actions: Actions = { contact }

