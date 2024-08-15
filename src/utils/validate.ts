export const validateEmail = (email:string) => {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!regEmail.test(email)){
        return "invalid email"
    }

    return ""

} 

export const validateText = (text:string) => {
    console.log("Dsfsdf")
    if(!(text.length > 2) ){
        console.log("object")
        return "minimum 3 character"
    }

    return ""

} 