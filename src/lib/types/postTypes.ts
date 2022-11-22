export type NavElementType = {
    logo?: {
        src: string;
        alt: string;
        href: string;
    };
    sitemap: {
        title: string;
        href: string;
    }[];
    secondary?: {
        media?: {
            facebook: {
                href: string;
            };
            instagram: {
                href: string;
            };
        };
        message?: {
            text: string;
            cta: {
                text: string;
                href: string;
            };
        };
        htr?: {
            email: string;
            address: {
                title: string;
                href: string;
                target: boolean;
            };
        };
    };
}

export type LandingPageType = {
    fullSection: {
        title: string;
        desc: string;
        cta: {
            title: string;
            href: string;
        };
        background: {
            mobile: string;
            desktop: string;
            alt: string;
        }
    }
    ctaSection: {
        title: string;
        desc: string;
        action: {
            title: string;
            href: string;
        };
        background: {
            src: string;
        };
    }
    introduction: {
        image: {
            src: string;
            alt: string;
        };
        about: {
            subTitle: string;
            title: string;
            paragraph: string;
        };
    }
    promises: {
        icon: {
            src: string;
            alt: string;
        };
        title: string;
        desc: string;
    }[]
    services: {
        subtitle: string;
        title: string;
        background: string;
        list: {
            title: string;
            desc: string;
            img: {
                src: string;
            };
        }[];
    }
    portfolio: {
        subtitle: string;
        title: string;
        background: string;
        projects: {
            src: string;
            srcset: never[];
            alt: string;
        }[];
    }
}

export interface ContactSectionDataType {
    subtitle: string;
    title: string,
    desc: string,
    blurbs: Array<{
            title: string,
            href: string,
            target: boolean,
            icon: string
    }>,
    buildForm: InputField[]
}

const _number = 0;
export type RulesList =
| 'required'
| `min:${typeof _number}`
| `max:${typeof _number}`
| 'email'
| 'between'
| 'file'
| 'equal'
| 'url'
| { name: string; fnc: () => Promise<boolean> };

export interface InputField {
	type: 'input' | 'date' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'autocomplete';
	name: string;
	value?: unknown;
	attributes: Attributes;
	messages?: unknown;
	validation?: unknown;
    rules?: RulesList[]
}

export interface Attributes {
    id: string;
	type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'range';
	label?: string;
	classes?: string[];
	placeholder?: string;
    disabled?: boolean;
    min?: number;
	max?: number;
	rows?: number;
	cols?: number;
}


export type FooterElementsType = {
    label: string;
    paragraph: string;
    cta: {
        title: string;
        href: string;
    };
    background: string;
    links: {
        label: string;
        sitemap: NavElementType["sitemap"]
    };
    htrs: {
        label: string,    
        cta: ContactSectionDataType["blurbs"];
    }
}

export type AboutPostType = {
    HeaderPostType: HeaderPostType
    introduction: {
        image: {
            src: string;
            alt: string;
        };
        about: {
            subtitle: string;
            title: string;
            paragraph: string;
        };
    };
}

export type HeaderPostType = {
    title: string;
    background: {
        src: string;
    };
}

export interface HeadItemsType {
    siteTitle: string
    siteDescription: string
    siteImage: string
}
