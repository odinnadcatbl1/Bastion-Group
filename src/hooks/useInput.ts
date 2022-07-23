import { useState } from "react";
import { useValidation } from "./useValidation";

export const useInput = (initialValue: string, validations: {}) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onBLur = () => {
        setDirty(true);
    };

    return {
        value,
        isDirty,
        onChange,
        onBLur,
        ...valid,
    };
};
