$(document).ready(function () {

    //====MOVING OBJECTS===//
    // var span1 = $("#flying1");
    // span1.style.marginRight = "1px";


    /*============SCROLL TO ABOUT ON ARROW CLICK=============*/
    //scroll to the about section from top of page
    $('#icon-about').bind("click", function(event) {
        // alert("touchstart works");
        event.stopPropagation()
        $('html').stop().animate(
            {scrollTop: $('#about').position().top -20
        }, 500, 'swing');
    });

    /*============SCROLL TO SECTIONS=============*/
    //From https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_smooth_scroll_jquery
    $('a').on('click', function(event) {
        var hash = this.hash;
        if (hash !=="") {
            event.preventDefault();
            $('html').animate({
                scrollTop: $(hash).offset().top
            }, 700, function() {
                window.location.hash = hash;
            })
        }
    });
    /*============CLOSE DROP DOWN ON LINK CLICK=============*/
    $("a.nav-link").click(function() {
        $("#dropDown").dropdown("toggle");
    });
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

