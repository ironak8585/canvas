console.log('custom.js');

var newUrl = '';
var currentUrl = '';
// $('#background-video').remove();

// const backgroundOption = document.querySelector("#background-option");
// console.log(backgroundOption);

// backgroundOption.addEventListener('change', (e) => {
//     console.log('Changed');
// });

// https://youtu.be/nsm4ReJaED0
$('#colorChoice').hide();

$('#background-option').on('change', function() {
    // alert(this.value);
    if (this.value != "Video Background") {
        $('#background-video').hide();
    } else {
        $('#playground').css('background', '');
        $('#background-video').show();
        $('#colorChoice').hide();
    }

    if (this.value == "Image Background") {
        console.log(this.value);
        changeBackgroundImage();
        $('#colorChoice').hide();
    } else {
        $('#playground').css("background-image", "");
    }

    if (this.value == "Gradient Background") {
        console.log(this.value);
    } else {

    }

    if (this.value == "Colored Background") {
        console.log(this.value);
        changeBackgroundColor();
    } else {

    }

    if (this.value == "Animation 1") {
        console.log(this.value);
    } else {

    }

    if (this.value == "Animation 2") {
        console.log(this.value);
    } else {

    }

    if (this.value == "Animation 3") {
        console.log(this.value);
    } else {

    }
});

// Applying New Video

$('#video-url').remove();
// $('#video-url').blur(function(e) {
//     console.log(`new url : ${this.value}`);
//     $(this).css('color', 'red');
//     newUrl = this.value;

//     $('video source').each(function() {
//         currentUrl = $(this).attr('src');
//         $(this).attr('src', newUrl);
//         console.log(`current url : ${currentUrl}`);
//         $('#background-video')[0].load();
//     });
// });

// Applying Background Color

function changeBackgroundColor() {
    $('#colorChoice').show();
    $('#colorChoice').on('change', function() {
        var newbgcolor = this.value;
        $('#playground').css('background-color', newbgcolor);
    });
}


function changeBackgroundImage() {
    $('#playground').css("background-image", "url('../../images/background1.jpg')");
}