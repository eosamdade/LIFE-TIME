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
        <p class= note1>${userName} If you like to <em>start</em> a project begin with the project name</p>
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

//Date
function renderTime () {
    var mydate = new Date();
    var year = mydate.getFullYear();
        if (year < 1000) {
            year +=1990
        }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var montharray = new Array("January","Febuary","March","April","May","June","July","August","September","October","November","December")

    //Date End

    //Time
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes()
    var s = currentTime.getSeconds();
    // var ms = currentTime.getMilliseconds();

    if (h == 24) {
        h = 0;
    }else if ( h > 12) {
        h = h - 0;
    }

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = " " +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
    myClock.innerText = " " +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

    setTimeout("renderTime()", 1000);
}
renderTime();