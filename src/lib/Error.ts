interface IErrorItem{

}
class Error{
    private error:IErrorItem[] = [];

    add(field:string, errorText:string){
        this.error.push({field, errorText});
    }


    hasError(){
        return !!this.error.length
    }

    send(){
        return this.error;
    }

}



export default Error;
