// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const buttonLeft = document.getElementById("buttonLeft");
    const buttonRight = document.getElementById("buttonRight")
    const buttonUp = document.getElementById("buttonUp")
    const buttonDown = document.getElementById("buttonDown")
    const rocket = document.getElementById("rocket")
    let height = 0
    let centerLine = 0;
    let verticalLine = (shuttleBackground.clientHeight - 75);

    console.log(verticalLine);
    
    // Put your code for the exercises here

    takeOff.addEventListener("click", function(event) {
      if(window.confirm("Confirm the shuttle is ready for take off.")) {
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleBackground.style.backgroundColor = "blue";
        height = 10000;
        spaceShuttleHeight.innerHTML = height;
        verticalLine = 0;
        rocket.style.top = verticalLine + "px";
      }
    });

    landing.addEventListener("click", function(event) {
        window.alert("The shuttle is landing.  Landing gear engaged.");
        flightStatus.innerHTML = "Shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        height = 0;
        spaceShuttleHeight.innerHTML = height;
        verticalLine = (shuttleBackground.clientHeight - 75);
        rocket.style.top = verticalLine + "px";
        centerLine = 0;
        rocket.style.left = centerLine;
    });

    missionAbort.addEventListener("click", function(event) {
        if(window.confirm("Are you sure you want to abort the mission?")) {
            flightStatus.innerHTML = "Mission aborted!";
            shuttleBackground.style.backgroundColor = "red";
            height = 0;
            spaceShuttleHeight.innerHTML = height;
            verticalLine = (shuttleBackground.clientHeight - 75);
            rocket.style.top = verticalLine + "px";
            centerLine = 0;
            rocket.style.left = centerLine;
        }
    });

    buttonLeft.addEventListener("click", function(event) {
        centerLine -= 10;
        if(centerLine < (0-((shuttleBackground.clientWidth - 75)/2))) {
            centerLine = (0-((shuttleBackground.clientWidth - 75)/2))
        }
        rocket.style.left = centerLine + "px";
    })
    buttonRight.addEventListener("click", function(event) {
        centerLine += 10;
        if(centerLine > ((shuttleBackground.clientWidth - 75)/2)) {
            centerLine = ((shuttleBackground.clientWidth - 75)/2)
        }
        rocket.style.left = centerLine + "px";
    })
    buttonUp.addEventListener("click", function(event) {
        verticalLine -= 10;
        if(verticalLine < 0) {
            verticalLine = 0
        }
        rocket.style.top = verticalLine + "px";
        height = Math.round((245 - Number((rocket.style.top).slice(0,-2)))/245*10000);
        spaceShuttleHeight.innerHTML = height;
    })
    buttonDown.addEventListener("click", function(event) {
        verticalLine += 10;
        if(verticalLine > (shuttleBackground.clientHeight - 75)) {
            verticalLine = shuttleBackground.clientHeight - 75;
        }
        rocket.style.top = verticalLine + "px";
        height = Math.round((245 - Number((rocket.style.top).slice(0,-2)))/245*10000);
        spaceShuttleHeight.innerHTML = height;
    })

}

window.addEventListener("load", init);
