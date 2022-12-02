import { ContactSectionData } from '$post/contact/index.json';

export const NavElement = {
    logo: {
        src: `/logo.svg`,
        alt: 'Main Logo',
        href: '/'
    },
    sitemap: [
        { title: 'Home', href: '/' },
        { title: 'About Us', href: '/about' },
        { title: 'Services', href: '/services' },
        { title: 'Contact', href: '/contact' }
    ],
    secondary: {
        media: {
            facebook: { href: 'https://www.facebook.com/people/JZE-Home-Improvement/100088313413412/' },
            instagram: { href: 'https://www.instagram.com/jzehomeimprovement/' }
        },
        message: {
            text: 'Welcome to JZE',
            cta: {
                text: 'Get A Fre Quote',
                href: '/contact'
            }
        },
        htr: {
            email: 'jzehomeimprovement@gmail.com',
            address: {
                title: 'Long Island, NY',
                href: 'https://goo.gl/maps/UiF1f1nzxTjj8JAq8',
                target: true
            }
        }
    }
}

export const FooterElements = {
    label: 'About',
    paragraph: 'Our experience ensures residentials and commercial owners satisfaction each and every time we do a job. Regardless of contract size, we back our work with the promise that you will not pay one "red cent" until the job is completed to your satisfaction.',
    cta: {
        title: 'Request A Quote',
        href: '/contact'
    },
    background: 'home/footer-background.jpeg',
    links: {
        label: 'Links',
        sitemap: NavElement.sitemap
    },
    htrs: {
        label: 'Contact Info',
        cta: ContactSectionData.blurbs
    }
}
