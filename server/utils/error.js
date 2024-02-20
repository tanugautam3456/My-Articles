
export const errorHandler =(statusCode,message)=>{

    const error = new Error()
        error.message=message
        error.statusCode= statusCode
        error.statusCode= statusCode

        return error  

}