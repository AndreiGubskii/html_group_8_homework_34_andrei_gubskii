var btn_show = $("#btn_show"),
    popup = $("#popup"),
    login = $("#input_name"),
    email = $("#input_email"),
    phone = $("#input_phone");
    _body = $("body");
    menu = $("#menu");

btn_show.click(
    function () {
        popup.fadeTo(300,1);
    }
);

function clousePopup () {
    popup.fadeTo(300,0,function () {
        popup.hide();
        login.val("");
        email.val("");
        phone.val("");
    });
}


$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        clousePopup();
   }
});

_body.click(function( event ) {      
  if(event.target.id == "popup"){
    clousePopup();
  }
});
 
// Плавная прокрутка по якорям
menu.on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 700 мс
    $('body,html').animate({scrollTop: top}, 700);
});

