document.addEventListener("DOMContentLoaded", () =>{
    const now = new Date();
    const dateTimeUpdate = document.getElementById('date-time');
    if(dateTimeUpdate){
        dateTimeUpdate.textContent = now.toLocaleString();
    }
    alert("Welcome to my mini project");
});