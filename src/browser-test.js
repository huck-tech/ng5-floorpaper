console.log(bowser);
if(bowser.tablet){
    if (bowser.android) {
        showApplication()
    } else if (bowser.ipad) {
        if (bowser.safari && +bowser.version <= 5) {
            showError("For optimal viewing experience, this page can only be viewed with Safari version 6 or higher. Please update your Safari browser before viewing this page.");
        } else {
            showApplication();
        }
    }
}
// mobile
if(bowser.mobile){
    if (bowser.iphone) {
        if (bowser.safari && +bowser.version <= 8) {
            showError("For optimal viewing experience, this page can only be viewed with Safari version 9 or higher. Please update your Safari browser before viewing this page.");
        } else {
            showApplication()
        }
    } else if (bowser.android) {
        showApplication();
    }
}
// desktop
else{
    if(bowser.mac){
        if (bowser.firefox) {
            if (+bowser.version <= 52) {
                showError("For optimal viewing experience, this page can only be viewed with Firefox version 53 or higher. Please update your Firefox browser before viewing this page.");
            } else {
                showApplication();
            }
        } else {
            showApplication();
        }
    }
    else if(bowser.windows){
        if (bowser.osversion === "Vista" || bowser.osversion === "XP"){
            showError("For Optimal viewing experience, this page can only be viewed Windows 7 or higher machines. Please view this page on Windows 7 or higher");
        } else if (+bowser.osversion == 7) {
            if(bowser.chrome) {
                showApplication();
            } else {
                showError("For Optimal viewing experience, this page can only be viewed on Chrome browsers");
            }
        } else if (+bowser.osversion >= 8){
            showApplication();
        }
    }
}
        

function showApplication(){
    document.getElementById("app").style.display = 'inline';
}

function showError(message){
    document.getElementById("error-app-message").innerHTML = message
    document.getElementById("error-app").style.display = 'inline';
    document.getElementById("app").style.display = 'none';
}
