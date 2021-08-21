input_1= "";
input_2= "";
function adduser(){
    input_1= document.getElementById("player_login_input_1").value;
    input_2= document.getElementById("player_login_input_2").value;
    localStorage.setItem("name 1", input_1);
    localStorage.setItem("name 2", input_2);
    window.location= "quiz_game_page.html"
}