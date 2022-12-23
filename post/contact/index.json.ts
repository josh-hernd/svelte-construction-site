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
            label: 'First, Last Name',
            type: 'text', // required
            name: 'firstLastName', // required
            required: true
        },
        {
            label: 'Email',
            type: 'email', // required
            name: 'email', // required
            required: true
        },
        {
            label: 'Phone',
            type: 'tel', // required
            name: 'phone', // required
            required: true,
            max: 11
        },
        {
            label: 'Additional Information',
            type: 'textarea', // required
            name: 'additional', // required
            required: false,
            max: 200,
            rows: 4,
            cols: 30
        }
    ]
}

