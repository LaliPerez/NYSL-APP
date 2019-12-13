/* const auth = firebase.auth();
var userLogued = false;

function login() {
    console.log(sessionStorage.getItem('user'));

    if (sessionStorage.getItem('user') == null) {

        let provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider)
            .then(function(result) {

                console.log("user logged");
                sessionStorage.setItem('user', result.user);
                landingPageOut()

            });
    }


    console.log("user already logged");

}
 */
$('#arrow').hide();
$('#header').hide();
$('#dashboard').hide();
//  Al iniciar dashboard la vista de viewGameLocation debe estar oculta
$('#viewGameLocation').hide();
$('#901location').hide();
$('#908location').hide();
$('#915location').hide();
$('#922location').hide();
$('#929location').hide();
$('#1006location').hide();
$('#1013location').hide();
$('#1020location').hide();
$('#1027location').hide();
$('#accesoChat').hide();
$('#accesoChat').hide();


//  Le damos tiempo a la landingPage 
setTimeout(landingPageOut(), 9000);

function landingPageOut() {
    $('#header').show();
    $("#body").css("background-image", "url('../img/fondoform.jpg')");
    $('#dashboard').show();

    $('#accesoChat').show();
    //$('#arrow').show();
    $('#landingPage').hide();
}

$('#arrow').click(function() {
    $('#arrow').hide();
    $('#viewGameLocation').hide();
    $('#header').show();
    $('#dashboard').show();
    $('#landingPage').hide();
    $('#chat').hide();


});

$('#901').click(function() {
    $('#dashboard').hide();
    $('#arrow').show();
    $('#viewGameLocation').show();
    $('#Calendar').show();
    $('#901location').show();
    $('#908location').hide();
    $('#915location').hide();
    $('#922location').hide();
    $('#929location').hide();
    $('#1006location').hide();
    $('#1013location').hide();
    $('#1020location').hide();
    $('#1027location').hide();
    $('#accesoChat').hide();
    $('#accesoChat').hide();
});

$('#908').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#908location').show();
    $('#901location').hide();
    $('#915location').hide();
    $('#922location').hide();
    $('#929location').hide();
    $('#1006location').hide();
    $('#1013location').hide();
    $('#1020location').hide();
    $('#1027location').hide();
    $('#accesoChat').hide();
    $('#accesoChat').hide();

});

$('#915').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#915location').show();
    $('#908location').hide();
    $('#901location').hide();
    $('#922location').hide();
    $('#929location').hide();
    $('#1006location').hide();
    $('#1013location').hide();
    $('#1020location').hide();
    $('#1027location').hide();
    $('#accesoChat').hide();
    $('#accesoChat').hide();

});

$('#922').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#922location').show();
    $('#908location').hide();
    $('#915location').hide();
    $('#901location').hide();
    $('#929location').hide();
    $('#1006location').hide();
    $('#1013location').hide();
    $('#1020location').hide();
    $('#1027location').hide();
    $('#accesoChat').hide();
    $('#accesoChat').hide();

});

$('#929').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#929location').show();
    $('#908location').hide();
    $('#915location').hide();
    $('#922location').hide();
    $('#901location').hide();
    $('#1006location').hide();
    $('#1013location').hide();
    $('#1020location').hide();
    $('#1027location').hide();
    $('#accesoChat').hide();
    $('#accesoChat').hide();

});

$('#1006').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#1006location').show();
    $('#908location').hide();
    $('#915location').hide();
    $('#922location').hide();
    $('#929location').hide();
    $('#901location').hide();
    $('#1013location').hide();
    $('#1020location').hide();
    $('#1027location').hide();
    $('#accesoChat').hide();
    $('#accesoChat').hide();

});


$('#1013').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#1013location').show();
    $('#908location').hide();
    $('#915location').hide();
    $('#922location').hide();
    $('#929location').hide();
    $('#1006location').hide();
    $('#901location').hide();
    $('#1020location').hide();
    $('#1027location').hide();
    $('#accesoChat').hide();
    $('#accesoChat').hide();

});

$('#1020').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#1020location').show();
    $('#908location').hide();
    $('#915location').hide();
    $('#922location').hide();
    $('#929location').hide();
    $('#1006location').hide();
    $('#1013location').hide();
    $('#901location').hide();
    $('#1027location').hide();
    $('#accesoChat').hide();
    $('#accesoChat').hide();

});

$('#1027').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#1020location').show();
    $('#908location').hide();
    $('#915location').hide();
    $('#922location').hide();
    $('#929location').hide();
    $('#1006location').hide();
    $('#1013location').hide();
    $('#1020location').hide();
    $('#901location').hide();
    $('#accesoChat').hide();
    $('#accesoChat').hide();

});
/* 
ahora el otro section  */

$('#a901').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#901location').show();
});


$('#a908').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#908location').show();
});

$('#a915').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#915location').show();
});

$('#a922').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#922location').show();
});

$('#a929').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#929location').show();
});

$('#a1006').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#1006location').show();
});


$('#a1013').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#1013location').show();
});

$('#a1020').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#1020location').show();
});

$('#a1027').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#viewGameLocation').show();
    $('#1020location').show();
});
/* 

y por ultimo las ubicaciones de los estadios */


$('#aj').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#ajkatzenmaier').show();
});

$('#gree').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#greenbay').show();
});


$('#sou').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#south').show();
});

$('#how').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#howard').show();
});

$('#nor').click(function() {
    $('#arrow').show();
    $('#dashboard').hide();
    $('#north').show();
});