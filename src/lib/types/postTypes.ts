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
    buildForm: InputType[]
}
export type EmptyFormType = {
    firstLastName: string;
    email: string;
    phone: string;
    _captcha: string;
}

export interface InputType {
    label: string
    type: 'button' | 'checkbox' | 'color' | 'date' | 'email' | 'datetime-local' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | 'textarea'
    name: string
    required: boolean
    min?: number
    max?: number
    rows?: number
    cols?: number
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

export type SpinnerTypes = {
	size: string | number;
	color: string;
	unit: string;
	duration: string;
	pause: boolean;
};

export type EmailType = {
    fromAddress: string // AWS verified domain or email
    toAddress: string // AWS verified domain or email
    compose: {
        title: string
        preheader: string
        logo: {
            url: string // "https//... required"
            src: string
        }
        site: {
            label: string
            url: string // "https//... required"
        }
        contact: {
            firstName: string
            lastName: string
            phone: string
            email: string
            additional: string
        }
        social: {
            facebook: string // "https//... required"
            instagram: string // "https//... required"
        }
    }
}

export interface AWSResponse {
    name:      string;
    $fault:    string;
    $metadata: Metadata;
    Error:     Error;
    RequestId: string;
    xmlns:     string;
}

export interface Metadata {
    httpStatusCode:  number;
    requestId:       string;
    attempts:        number;
    totalRetryDelay: number;
}

export interface Error {
    Type:    string;
    Code:    string;
    Message: string;
    message: string;
}
