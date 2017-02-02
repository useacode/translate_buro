
$(document).ready(function(){

    var slider = $(".bxslider").bxSlider({
    controls: true,
    adaptiveHeight: true,
    minSlides: 1,
    maxSlides: 2,
    slideWidth: 520,
    slideMargin: 20,
    auto: false,
    });

    $('a[href^="#"]').click(function () { 
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('body,html').animate( { 'scrollTop': destination }, 1500 );
        return false;
   });
})

$("[data-popup]").on("click", function(){
    $(".main_popup").toggle();
})

$("body").on("click", function(e){
    if(!$(e.target).closest(".main_popup, [data-popup]")[0])
        $(".main_popup").hide();
})

function PolicyShow(){
    $(".politics_popup").show();
}

$(function(){

    $("[data-popup]").on("click", function(e){
        e.stopPropagation();
        e.preventDefault();
        setTimeout(function(){
            $(".main-popup.main-form").toggle();
        });
    });

    $("[data-popup-success]").on("click", function(e){
        e.stopPropagation();
        e.preventDefault();
        setTimeout(function(){
            $(".main-popup.success_popup").hide();
        });
    });

    $("[data-policy-success]").on("click", function(e){
        e.stopPropagation();
        e.preventDefault();
        setTimeout(function(){
            $(".politics_popup").hide();
        });
    });

    $("[data-send]").on("click", function(e){
        var succ = true;
        if($("#inputName").val().length < 2) {
            $("#inputName").attr("placeholder", "Имя должно быть не менее 2х букв");
            succ = false;
        }
        else{
            $("#inputName").attr("placeholder", "Ваше имя*");
        }
        if(!$("#inputPhone").val()) {
            $("#inputPhone").attr("placeholder", "Введите номер телефона");
            succ = false;
        }
        else if($("#inputPhone").val().length < 7) {
            $("#inputPhone").attr("placeholder", "Номер телефона должен быть не менее 7 цифр");
            succ = false;
        }
        else if(!/[\d\(\)+-]{7,16}/.test($("#inputPhone").val())) {
            $("#inputPhone").attr("placeholder", "Используйте цифры");
            succ = false;
        }
        else{
             $("#inputPhone").attr("placeholder", "Телефон*");
        }
        if(succ) {
            $(".main-popup.main-form").hide();
            $(".success_popup").show();
            $("#inputName, #inputPhone").val('');
            $("#inputName").attr("placeholder", "Ваше имя*");
            $("#inputPhone").attr("placeholder", "Телефон*");

        }
    });

     $("body").on("click", function(e){
        if($(".main-popup.main-form").css("display") != "none" && !$(e.target).closest(".main-popup.main-form, [data-popup], [data-send]")[0])
            $(".main-popup.main-form").hide();
        if($(".success_popup").css("display") != "none" && !$(e.target).closest(".success_popup, [data-popup-success], [data-send]")[0])
            $(".success_popup").hide();
    })

    $(window).on("scroll", function(){
        $(".navbar-collapse.in").removeClass("in");
    });

    $("body > *").on("click", function(e){

        if(!$(e.target).closest(".navbar-collapse, .navbar-toggle")[0]){
            $(".navbar-collapse.in").removeClass("in");
        }

    });
});