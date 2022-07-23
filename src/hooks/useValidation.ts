import { useEffect, useState } from "react";

export const useValidation = (value: string, validations: any) => {
    const [isEmpty, setEmpty] = useState(true);
    const [isEmailError, setEmailError] = useState(false);
    const [isPhoneError, setPhoneError] = useState(false);
    const [minLengthError, setMinLengthError] = useState(false);
    const [isStringError, setStringError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case "isEmailError":
                    const reMail =
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    reMail.test(String(value).toLowerCase())
                        ? setEmailError(false)
                        : setEmailError(true);
                    break;
                case "isPhoneError":
                    const rePhone = /^((\+7|7|8)+([0-9]){10})$/;
                    rePhone.test(value)
                        ? setPhoneError(false)
                        : setPhoneError(true);
                    break;
                case "minLength":
                    value.length < validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    break;
                case "isString":
                    const reStr = /^[a-zA-Z?а-яА-Я]*$/;
                    reStr.test(value)
                        ? setStringError(false)
                        : setStringError(true);
            }
        }
    }, [value]);

    useEffect(() => {
        if (isEmpty || isEmailError || isPhoneError || minLengthError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    });

    return {
        isEmpty,
        isEmailError,
        isPhoneError,
        minLengthError,
        isStringError,
        inputValid,
    };
};
