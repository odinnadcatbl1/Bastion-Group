export interface TypeState {
    name: string;
    id: number;
}

export interface TypeAction {
    type: string;
    payload?: any;
}

export type CheckboxPropTypes = {
    label: string;
    id: string;
};

export interface IProductItem {
    id: string;
    name: string;
    type: string;
    price: number;
    gost: string;
}

export type PageTitlePropTypes = {
    name: string;
    showFilter: boolean;
};

export type InputPropTypes = {
    onChange: (str: string) => void;
    placeholder: string;
    id: string;
    value?: string;
};

export type ButtonPropTypes = {
    onClick: () => void;
    name: string;
};
