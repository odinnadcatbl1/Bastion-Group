export interface TypeState {
    name: string;
    id: string;
    isChecked: boolean;
}
export interface IProductItem {
    id: string;
    name: string;
    type: string;
    price: number;
    gost: string;
}

export interface FilterState {
    price: [number, number];
    gost: string[];
    type: string[];
}

export type FilteredProductsPropTypes = {
    filteredProducts: IProductItem[];
};

export type PageTitlePropTypes = {
    name: string;
    showFilter: boolean;
};

export enum ValidationTypes {
    phone = "phone",
    email = "email",
}

export type SliderPropTypes = {
    price: [number, number];
};

export type CheckboxPropTypes = {
    label: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked?: boolean;
};

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

interface ISelectOptions {
    id: string;
    name: string;
}

export type SelectPropTypes = {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    title: string;
    options: ISelectOptions[];
    value: string;
};
