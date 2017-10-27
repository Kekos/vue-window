import Vue from 'vue';
export declare type Style = Partial<CSSStyleDeclaration>;
export interface WindowStyle {
    window: Style;
    titlebar: Style;
    content: Style;
    button: Style;
    buttonHover: Style;
    buttonActive: Style;
}
export declare function StyleFactory(windowStyle: WindowStyle): Vue.ComponentOptions<Vue>;
export declare const StyleBlack: Vue.ComponentOptions<Vue>;
export declare const StyleWhite: Vue.ComponentOptions<Vue>;
