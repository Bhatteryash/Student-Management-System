let obj=JSON.parse(localStorage.getItem("admin"));
console.log(obj)

document.getElementById("name").innerText=`${obj.username}(${obj.masaiid})`