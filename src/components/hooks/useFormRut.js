import { useState } from "react";

function useFormRut(initialState, validate) {
    const [values, setValues] = useState(initialState);
    const [run, setRun] = useState(null);
    const [error, setError] = useState({ state: false, message: "" });

    function handleBlur(e) {
        if (e.target.value.length === 0) {
            setError({
                ...error,
                state: true,
                message: "Required"
            });
        } else if (e.target.value.length > 0 && e.target.value.length < 10) {
            setError({
                state: true,
                message: "Complete your ID number."
            });
        }
    }

    function handleChange(e) {
        let validationError = error;
        setValues({ Id: "" });

        if (e.target.value.length === 10) {
            validationError = validate(e.target.value);

            if (validationError.state) {
                setError({
                    ...validationError
                });
            } else {
                setValues({
                    Id: e.target.value
                });

                setError({
                    state: false,
                    message: ""
                });
            }
        } else {
            setError({
                state: false,
                message: ""
            });
        }
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        setRun(values.Id);
    }

    return {
        handleOnSubmit,
        handleChange,
        handleBlur,
        values,
        run,
        error
    };
}

export default useFormRut;
