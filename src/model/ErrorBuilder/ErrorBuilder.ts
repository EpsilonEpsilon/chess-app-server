type ResponseError = ResponseErrorField | ResponsePlainError;

interface ResponseErrorField{
    field:string,
    error:string,
}
interface ResponsePlainError{
    error:string,
}
class ErrorBuilder{
    private errors:ResponseError[] = [];

    addError(error:ResponseError){
        this.errors.push(error)
    }

    buildError(){
        return {
            status:"error",
            errors:this.errors
        }
    }

    hasError(){
        return !!this.errors.length
    }
}

export default ErrorBuilder;
