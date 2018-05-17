(function($){
    
    $(function(){
        console.log(bowser);
        // mobile
        if(bowser.mobile){
            if (bowser.iphone) {
                if (bowser.safari && +bowser.version >= 9) {
                    showApplication();
                } else {
                    showError("For optimal viewing experience, this page can only be viewed with Safari version 9 or higher. Please update your Safari browser before viewing this page.")
                }
            } else if (bowser.ipad) {
                if (bowser.safari && +bowser.version >= 6) {
                    showApplication();
                } else {
                    showError("For optimal viewing experience, this page can only be viewed with Safari version 6 or higher. Please update your Safari browser before viewing this page.")
                }
            }
        }
        // tablet
        else if(bowser.tablet){
            if( bowser.ios ){
                if(bowser.firefox){
                    if(+bowser.version >= 55){
                        showApplication();
                    }
                    else{
                        showError('For optimal viewing experience, this page can only be viewed with Firefox version 55 or higher. Please update your Firefox browser before viewing this page.');
                    }
                }
                else if(bowser.chrome){
                    if(+bowser.version >= 57){
                        showApplication();
                    }
                    else{
                        showError('For optimal viewing experience, this page can only be viewed with Chrome version 57 or higher. Please update your Chrome browser before viewing this page.');
                    }
                }
                else if(bowser.webkit){
                    if(+bowser.version >= 10){
                        showApplication();
                    }
                    else{
                        showError('For optimal viewing experience, this page can only be viewed with Safari version 10 or higher. Please update your Safari browser before viewing this page.');
                    }
                }
                else{
                    showError('For optimal viewing experience, this page can only be viewed on Chrome, Firefox, and Safari browsers.');
                }
            }
            else if(bowser.android){
                if(bowser.chrome){
                    if(+bowser.version >= 57){
                        showApplication();
                    }
                    else{
                        showError('For optimal viewing experience, this page can only be viewed with Chrome version 57 or higher. Please update your Chrome browser before viewing this page.');
                    }
                }
                else if(bowser.firefox){
                    if(+bowser.version >= 53){
                        showApplication();
                    }
                    else{
                        showError('For optimal viewing experience, this page can only be viewed with Firefox version 53 or higher. Please update your Firefox browser before viewing this page.');
                    }
                }
                else{
                    showError('For optimal viewing experience, this page can only be viewed on Chrome and Firefox browsers.');
                }
            }
            else{
                showError('For optimal viewing experience, this page should be viewed on Android, IOS, or Windows Tablets.');
            }
        }
        // desktop
        else{
            if(bowser.mac){
                if (bowser.firefox) {
                    if (+bowser.version <= 52) {
                        showError("For optimal viewing experience, this page can only be viewed with Firefox version 53 or higher. Please update your Chrome browser before viewing this page.")
                    } else {
                        showApplication();
                    }
                } else {
                    showApplication();
                }
            }
            else if(bowser.windows){
                if (+bowser.osversion == 7) {
                    if(bowser.chrome) {
                        showApplication();
                    } else {
                        showError("For Optimal viewing experience, this page can only be viewed on Chrome browsers");
                    }
                } else if (+bowser.osversion >= 8){
                    showApplication();
                } else {
                    showError("For Optimal viewing experience, this page can only be viewed Windows 7 or higher machines. Please view this page on Windows 7 or higher");
                }
            }
        }
    });

    function showApplication(){
        $('#app').show();
    }

    function showError(message){
        $('#error-app-message').html(message);
        $('#error-app').show();
    }

    function showMobileError(){
        $('#mobile-app').show();
    }
})(jQuery);
