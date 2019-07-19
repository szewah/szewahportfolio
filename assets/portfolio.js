/*============SCROLLING=============*/
//scroll to the about section from top of page
$('#icon-about').on('click', function() {
    console.log('click');
    //http://blog.jonathanargentiero.com/jquery-scrolltop-not-working-on-mobile-devices-iphone-ipad-android-phones/
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
        window.scrollTo(200, 700) // first value for left offset, second value for top offset
    }
    else{
    $('html').animate({ scrollTop: 800 }, 500);
    console.log('clicked')
    }
});


//scroll to sections
//From https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_smooth_scroll_jquery
$('a').on('click', function(event) {
    if (this.hash !=="") {
        event.preventDefault();
        var hash = this.hash;
        $('html').animate({
            scrollTop: $(hash).offset().top
        }, 700, function() {
            window.location.hash = hash;
        })
    }
});

/*============FIREBASE CONTACT FORM=============*/
// let database = firebase.database();

// let name = "";
// let email = "";
// let message = "";

// $("#contact-submit").on('click', function(event){
//     event.preventDefault();
//     renderMessage();
//     name = $("#inputName").val().trim();
//     email = $("#inputEmail").val().trim();
//     message = $("#inputMessage").val().trim();
//     console.log('it\'s working')

//     database.ref().push({
//         inputName: name,
//         inputEmail: email,
//         inputMessage: message
//     });
//     $("#inputName").val("");
//     $("#inputEmail").val("");
//     $("#inputMessage").val("");
// });


// database.ref().on('child_added', function(snapshot) {
//     snapshot.val(); 
// },     
//     function(errorObject) {
//     console.log("Errors handled: " + errorObject.code)
// });

// function renderMessage() {
//     var thankYoutext = $(".modal-body").text('Thank you for your message. I\'ll be in touch as soon as I can.');
//     var thankYoudiv = $(".modal-content");
//     thankYoudiv.append(thankYoutext);
// };


