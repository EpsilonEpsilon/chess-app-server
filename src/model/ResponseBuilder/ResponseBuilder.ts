import ErrorBuilder from "@model/ErrorBuilder/ErrorBuilder";

class ResponseBuilder<T> extends ErrorBuilder{
    private  data:T | undefined;

    constructor( data?:T) {
        super();
        this.data = data;
    }


    setData(data:T){
        this.data = data;
    }


    build(){
       if(this.hasError())  return this.buildError();

       return {
           status:"success",
           data:this.data
       }
    }

}


export default ResponseBuilder;
