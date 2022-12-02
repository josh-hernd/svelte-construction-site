import type {ContactSectionDataType} from '$lib/types/postTypes';

export const ContactSectionData: ContactSectionDataType = {
    subtitle: 'Get in Contact',
    title: 'Do You Have <br> Any Questions?',
    desc: 'We work with builders, single family home owners and people just like you. Our skilled team of masonry experts can improve your residential home or any other commercial project you may have to satisfy your every need.',
    blurbs: [
        {
            title: 'Long Island, NY',
            href: 'https://goo.gl/maps/UiF1f1nzxTjj8JAq8',
            target: true,
            icon: "material-symbols:location-on-rounded"
        },
        {
            title: '+1 (631) 575-7538',
            href: 'tel:(631)575-7538',
            target: false,
            icon: 'carbon:phone-voice-filled'
        },
        {
            title: '+1 (914) 502-7924',
            href: 'tel:(914)502-7924',
            target: false,
            icon: 'carbon:phone-voice-filled'
        },
        {
            title: 'jzehomeimprovement@gmail.com',
            href: 'mailto:jzehomeimprovement@gmail.com',
            target: false,
            icon: "ic:baseline-email"
        }
    ],
    buildForm: [
        {
            type: 'input', // required
            name: 'name-first-last', // required
            value: '', // optional
            attributes: {
                type: 'text', // default = text, or password, email, number, tel, optional
                id: 'name-first-last', // optional
                classes: ['form-control'], // optional
                label: 'First, Last Name', // optional
                disabled: false // optional
            },
            rules: ['required']
        },
        {
            type: 'input', // required
            name: 'client-email', // required
            value: '', // optional
            attributes: {
                type: 'email', // default = text, or password, email, number, tel, optional
                id: 'client-email', // optional
                classes: ['form-control'], // optional
                label: 'Email', // optional
                disabled: false // optional
            },
            rules: ['required']
        },
        {
            type: 'input', // required
            name: 'client-phone', // required
            value: '', // optional
            attributes: {
                type: 'tel', // default = text, or password, email, number, tel, optional
                id: 'client-phone', // optional
                classes: ['form-control'], // optional
                label: 'Phone', // optional
                disabled: false // optional
            },
            rules: ['required']
        },
        {
            type: 'textarea', // required
            name: 'additional-info', // required
            value: '', // optional
            attributes: {
                type: 'text', // default = text, or password, email, number, tel, optional
                id: 'id-field-text', // optional
                classes: ['form-control'], // optional
                label: 'Additional Information', // optional
                disabled: false // optional
            }
        }
    ]
}

