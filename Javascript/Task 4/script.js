function validate(){
    var email =document.getElementById("username");
    var password =document.getElementById("password");

    if (email.value.trim() =="" || password.value.trim() =="")
    {
        alert("Please fill all the required fields");
        return false;
    }
    else
    {
        true;
    }

}