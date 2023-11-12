type ResponseError = ResponseErrorField;

interface ResponseErrorField{
    field?:string,
    error:string,
    translationIdentifier?:string,
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
