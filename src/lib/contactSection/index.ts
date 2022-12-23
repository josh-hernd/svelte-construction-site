import type { EmptyFormType } from '$lib/types/postTypes';

export { default as ContactSection } from './default.svelte';


export const isEmpty = (emptyForm: EmptyFormType, ramdValue: string) => {    
    return (
        emptyForm._captcha != ramdValue ||
        emptyForm.email == undefined ||
        emptyForm.phone == undefined ||
        emptyForm.firstLastName == undefined
    );
};

export function captchaVal() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export function isNumber(this: { value: string }) {
    this.value = this.value
        .replace(/[^0-9.]/g, '')
        .replace(/(\..*?)\..*/g, '$1')
        .replace(/^0[^.]/, '0');
}

export function random_rgba() {
    const o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}