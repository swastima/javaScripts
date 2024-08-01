const displayMsg=(msg,id,colorname)=>{
    document.getElementById(id).innerHTML= msg
    document.getElementById(id).style.color= colorname
}




const fnameValidate =()=>{
    const first_name =document.getElementById('fname').value 
    if(first_name==""){
        displayMsg("First name is mandatory","fnameMsg", "red")
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg(("First name should contain only alphabets","fnameMsg", "red"))
        return false
    }
    else if(first_name.length<3){
        displayMsg("First name should contain more than 2 characters","fnameMsg", "red")
        return false
    }
    else{
        displayMsg("Validate first name","fnameMsg","green")
        return true
    }
}

const lnameValidate =()=>{
    const last_name =document.getElementById('lname').value 
    if(last_name==""){
        displayMsg("Last name is mandatory","lnameMsg", "red")
        return false
    }

    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg(("Last name should contain only alphabets","lnameMsg", "red"))
        return false
    }
    
    else if(last_name.length<3){
        displayMsg("Last name should contain more than 2 characters","lnameMsg", "red")
        return false
    }
    else{
        displayMsg("Validate last name","lnameMsg","green")
        return true
    }
}

const emailVlidate =()=>{
    const email =document.getElementById('email').value

    if(email==""){
    displayMsg("Email is mandatory", "emailMsg", "red")
    return false
    }
    else if(!email.match(/^([a-z0-9])[a-z0-9\-\_]+\@+([a-z])+\.+([a-z])+$/)){
        displayMsg("invalid email format", "emailMsg","red")
    }
    else{
        displayMsg("valid email" ,"emailMsg", "green")
        return true
    }
    
}

const passwordValidate=()=>{
    const password = document.getElementById('password').value
    if(password==""){
        displayMsg("passwprd is mandatory","passwprd","red")
        return false
    }
    else if(!password.match(/^/))
}

const formValidate =()=>{
    if(fnameValidate()&&lnameValidate()&&emailVlidate()&&passwordValidate()){
        return true
    }
    else{
        return false
    }
}


//regular expression 
// /...regular expression gioes inside this.../

//^ ->  it checks from start
// $ -> it checks from the end
// [a-z] -> matches lower case alphabets
// [A-Z] ->  matches upper case alphabets
// [a-zA-Z] -> matches all alphabets
// [0-9]    -> matches numeric values
// [a-z0-9] -> matches alphanumeric value
// {miniValue , maxValue} -> eg: {3,50}
// for special character use \ eg: \@, \#, \_ etc
// ?=  -> it means position of characters doesnt matter
// . -> ,atches single character
// * -> matches one or more precceding characters