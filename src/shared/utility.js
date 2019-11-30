export const updateObject =(oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = (value, rules) => {
    let isValid = true;
    if(!rules) {
        return true
    }

    if(rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if(rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if(rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if(rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
    }

    if(rules.isEmail) {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = pattern.test(value) && isValid;
    }

    // should contain at least one digit, one lower case, one upper case and minimum 6 characters
    if(rules.isSafePassword) {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
        isValid = pattern.test(value) && isValid;
    }

    return isValid;
};
