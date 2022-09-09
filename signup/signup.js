let students_array=JSON.parse(localStorage.getItem("Login_data"))||[];
class user{
    constructor(n,i,e){
        this.Name=n;
        this.masaiid=i;
        this.email=e;
    }
    signup(username,password){
        let isvalidated=false;

        isvalidated=this.#validateusername(username) && this.#validatepassword(password);
        if(isvalidated){
            this.username=username;
            this.password=password;
            alert ('user registered succesfully!')
            students_array.push(this);
            localStorage.setItem("Login_data",JSON.stringify(students_array))
            window.location.href='./signup/login.html'
        }else{
            alert ('Please follow username or password rules')
        }
    }
    #validateusername(username){
        if(username.includes('#')==false){
            return true;
        }else{
            return false;
        }
    }
    #validatepassword(password){
        if(password.length>7){
            return true;
        }else{
            return false;
        }
    }
}

let form=document.querySelector("form");
form.addEventListener("submit",getdata);

function getdata(){
    event.preventDefault();
    let name=form.name.value;
    let id=form.masaiid.value;
    let mail=form.mail.value;
    let username=form.username.value;
    let password=form.pass.value;

    let s1=new user(name,id,mail);
    let flag=s1.signup(username,password);
    
}

console.log('students_array:', students_array);
