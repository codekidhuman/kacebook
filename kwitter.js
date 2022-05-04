function addUser()
{
    U = document.getElementById('user_name').value;
localStorage.setItem("user_name", U);
window.location = "kwitter_room.html"
}
