let students_array = JSON.parse(localStorage.getItem("Login_data")) || [];
let data = JSON.parse(localStorage.getItem("student_data")) || [];
console.log('students_array:', students_array)

class student {
    login(username, password,key) {
        console.log('username:', username)
        console.log('password:', password)
        let flag = false;
        let flag1=false;
        for (let x of students_array) {
            if (x.username == username && x.password == password&&key!='1234') {
                flag = true;
                localStorage.setItem("student",JSON.stringify(x));
                data.push(x);
                localStorage.setItem("student_data",JSON.stringify(data));
                break;
            }
            if(x.username == username && x.password == password&&key=='1234'){
                flag1=true;
                localStorage.setItem("admin",JSON.stringify(x));
                break;
            }
        }
        if (flag1) {
            alert("login success")
            window.location.href='../admin/admin.html';
           
        } else if (flag) {
            alert("login success")
            window.location.href='../student/student.html';
        } else {
            alert("Incorrect username or password");
        }
    }
}

let form = document.querySelector("form");
form.addEventListener("submit", getdata);

function getdata(event) {
    event.preventDefault();
    let username = form.username.value;
    let password = form.pass.value;
    let key =form.key.value
    let s1 = new student();
    s1.login(username, password,key);

}

document.getElementById("checkbox").addEventListener("click",checkbox)
let i=0;
function checkbox(){
    if(i%2==0){
        document.getElementById("key").removeAttribute("disabled")
        i++;
    }else{
        document.getElementById("key").setAttribute("disabled","disabled")
        i++;
    }
}
