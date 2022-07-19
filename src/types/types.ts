export interface TypeState {
    name: string;
    id: string;
    isChecked: boolean;
}

export type CheckboxPropTypes = {
    label: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
};

export interface IProductItem {
    id: string;
    name: string;
    type: TypeState;
    price: number;
    gost: string;
}

export type PageTitlePropTypes = {
    name: string;
    showFilter: boolean;
};

export enum ValidationTypes {
    phone = "phone",
    email = "email",
}

export type InputPropTypes = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    id: string;
    value?: string | number;
    title?: string;
    pattern?: string;
    validation?: ValidationTypes.email | ValidationTypes.phone;
};

export type ButtonPropTypes = {
    onClick?: () => void;
    name: string;
    type?: "submit" | "reset" | "button";
};
