import React, { useState } from "react";

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onBLur = () => {
        setDirty(true);
    };

    return {
        value,
        onChange,
        onBLur,
    };
};
