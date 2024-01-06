const apiRequest = async(url="",OptionObj=null,errMsg=null) =>{
    try{

        const response  = await fetch(url,OptionObj)
        if(!response.ok) throw Error("Please reload the App")

    }
    catch(error){
        errMsg = error.Message
    }
    finally{
        return errMsg
    }
}

export default apiRequest