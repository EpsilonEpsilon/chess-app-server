export const createError = ()=>{
    const errors:{field:string, error:string}[] = [];

    return {
        add:(field:string, errorText?:string)=>{
            if(!errorText) errorText = `${field} is invalid`;
            errors.push({field, error:errorText});
        },
        hasError:()=>{
            return !!errors.length
        },
        send:()=>{
            return errors;
        }
    }
}
