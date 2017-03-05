var btn_show = $("#btn_show"),
    popup = $("#popup"),
    login = $("#input_name"),
    email = $("#input_email"),
    phone = $("#input_phone");
    _body = $("body");

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