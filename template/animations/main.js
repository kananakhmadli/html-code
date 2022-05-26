let ball = document.querySelector(".mode-ball");

let ballFlag = true;

ball.addEventListener('click', function () {
    if (ballFlag) {
        ball.style.left = "55%";
        ballFlag=false;
        ball.style.backgroundColor="hsl(220, 13%, 10%)";
        document.querySelector("body").style.backgroundColor="#fff"
    }
    else {
        ball.style.left = "11%";
        ballFlag=true;
        ball.style.backgroundColor="#fff";
        document.querySelector("body").style.backgroundColor="#282c34"

    }

})



// var ball = document.querySelector("#ball");

// ball.addEventListener("click", changeTheme);

// var leftside = true;
// function changeTheme() {
//     if (leftside == true) {
//         ball.style.left = "40px";
//         document.querySelector("body").style.backgroundColor = "#111111";
//         ball.style.backgroundColor = "#111111";
//         document.querySelector(".mode").style.backgroundColor = "#ffffff";
//         leftside = false;
//     } else {
//         ball.style.left = "5px";
//         document.querySelector("body").style.backgroundColor = "#ffffff";
//         ball.style.backgroundColor = "#ffffff";
//         document.querySelector(".mode").style.backgroundColor = "#111111";
//         leftside = true;
//     }
// }
