let obj=JSON.parse(localStorage.getItem("student"));
console.log('obj:', obj)

document.getElementById("name").innerText=`${obj.username}(${obj.masaiid})`


document.getElementById("user").innerText=obj.Name;
document.getElementById("masaiid").innerText=obj.masaiid;
document.getElementById("mail").innerText=obj.email;
document.getElementById("username").innerText=obj.username;