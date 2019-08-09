console.log('hello world');
console.log($);

var userName = "";
var userPassword = "";



$("#subBtn").on("click", function(event){
    event.preventDefault();
    getLoginInfo();
    
    $("#userName").val("");
    $("#password").val("");
    $("#login-wrapper").hide();

})

function getLoginInfo () {
    userName = $("#userName").val().trim(); 
    userPassword = $("#password").val().trim();
    
    console.log(userName);
    console.log(userPassword); 
    
    localStorage.clear();
    localStorage.setItem("userName", userName);
    localStorage.setItem("userPassword", userPassword);
    
    $("#work-area").html(`
    <div id="welcome" class="welcom">
        <p class= "welTxt">Welcome</p>
        <p id= "name" >${userName}</p>
    </div>`)

    var UsersLogins = [];
    var Users = {
        userName,
        userPassword,
    }

    UsersLogins.push(Users);
    console.log(UsersLogins);

    for ( var i = 0; i < UsersLogins.length; i++){
        if (userName == UsersLogins[i].userName && userPassword == UsersLogins[i].userPassword) {
            console.log (userName + "is logged in !!!")
            return
        }
    }
    console.log("incorrect username or password");

   
}



