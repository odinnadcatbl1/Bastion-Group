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
