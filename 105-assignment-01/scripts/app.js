//object constructor
function user(Uname,email, password, age){
   this.uName=Uname;
    this.email=email;
    this.password=password;
    this.age=age;
}

//register function
function Register(){
    let Uname= $("#txtUserName").val();
    let userEmail=$("#txtEmail").val();
    let userPass=$("#txtPassword").val();
    let userAge=$("#txtAge").val();

    console.log(Uname,userEmail,userPass,userAge);

    //creating the object
    let newUser = new user(Uname,userEmail,userPass,userAge);
    //clear input fields
    $('input').val("");
    console.log(newUser);
}


function init(){
    console.log("Register")
    //hook events
    $("#btn-register").click(Register);
}

window.onload=init;