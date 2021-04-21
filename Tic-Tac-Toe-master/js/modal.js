
var button_sound
button_sound = document.createElement("audio");
button_sound.src = "audio/button.mp3";
button_sound.volume = 1;
button_sound.autoPlay = false;
button_sound.preLoad = true;
button_sound.controls = true;



// Get the modal
var modal = document.getElementById('my');

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function open_modal_quick_play(){
  $("#my").css('display','block');
}


// When the user clicks on <span> (x), close the modal
function close_modal_quick_play(){
  //alert("ranj")
  $("#my").css('display','none');

}
////////////////// end  modal for quick play////

 // staring for hostrooom play
function open_host_room_modal(){
  $("#id14").css('display','block');
  window.location.hash="#host_modal";
  var scriptTag = document.createElement('script');
  scriptTag.setAttribute('src','js/multiplayer.js');
  scriptTag.id="multi_js";
  document.head.appendChild(scriptTag);

}


// When the user clicks on <span> (x), close the modal
function close_host_room_modal(){
  //alert("ranj")
  $("#id14").css('display','none');
    window.location.hash="#online_room_list";

}
///////////////////////////////////////////////////////////////////////


 // staring for hostrooom play
function open_join_room_modal(){
  $("#room_join_modal").css('display','block');
}


// When the user clicks on <span> (x), close the modal
function close_join_room_modal(){
  //alert("ranj")
  $("#room_join_modal").css('display','none');
window.location.hash='#online_room_list';
}

//////////////////////////////


 // staring for exit buttom play
function open_exit_modal(){
  $("#exit_modal").css('display','block');
}


// When the user clicks on <span> (x), close the modal
function close_exit_modal(){
  //alert("ranj")
  $("#exit_modal").css('display','none');
  window.location.hash="#online_room";

}


 // staring for exit buttom play
function open_coin_modal(){
//button_sound.play();
  $("#coin_modal").css('display','block');
    window.location.hash="#modal";
}


// When the user clicks on <span> (x), close the modal
function close_coin_modal(){
  //alert("ranj")
  $("#coin_modal").css('display','none');
  window.location.hash="#homepage";

}


 // staring for exit buttom play
function open_diamond_modal(){
  button_sound.play();
  $("#diamond_modal").css('display','block');
}


// When the user clicks on <span> (x), close the modal
function close_diamond_modal(){
  //alert("ranj")
  $("#diamond_modal").css('display','none');
}

// staring for share friend code modal play
function open_share_freind_code_modal(){
  button_sound.play();

  //alert("working")
 $("#share_freind_code").css('display','block');
}


// When the user clicks on <span> (x), close the modal
function close_share_freind_code_modal(){
 //alert("ranj")
 $("#share_freind_code").css('display','none');
 if(window.location.hash=='#toe-multi/'){
   window.location.hash="#choose_multi";

 }
 else if(window.location.hash=='#toe-room/'){
   window.location.hash="#online_room_list";

 }
 else if(window.location.hash=='#toe-online/'){
 window.location.hash="#homepage";
 //alert("ranjit");
 }


}

// staring for  friend code modal play
function open_player_exit_modal(){
  button_sound.play();
  //alert("working")
 $("#player_exit").css('display','block');
}
// When the user clicks on <span> (x), close the modal
function close_player_exit_modal(){
  button_sound.play();
 //alert("ranj")
 $("#player_exit").css('display','none');
}

// staring for  coin over
function open_coin_over_modal(){
  //alert("working")
 $("#coin_over_modal").css('display','block');
}
// When the user clicks on <span> (x), close the modal
function close_coin_over_modal(){
 //alert("ranj")
 $("#coin_over_modal").css('display','none');
}



// staring for  coin over
function open_wallet(){
//  button_sound.play();
  //alert("working")
 $("#wallet").css('display','block');
}
// When the user clicks on <span> (x), close the modal
function close_wallet(){
 //alert("ranj")
 $("#wallet").css('display','none');
window.location.hash="#homepage";
}



// staring for share friend code modal play
function open_winner_modal(){
 $("#winner_modal").css('display','block');
}


// When the user clicks on <span> (x), close the modal
function close_winner_modal(){
 //alert("ranj")
 $("#winner_modal").css('display','none');

}


// staring for share friend code modal play
function open_winner_modal_online(){
 $("#winner_modal_online").css('display','block');
}


// When the user clicks on <span> (x), close the modal
function close_winner_modal_online(){
 //alert("ranj")
 $("#winner_modal_online").css('display','none');

}



/*
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/




 // staring for exit buttom play
function open_offline_exit_modal(){
  button_sound.play();
  $("#offline_exit_modal").css('display','block');
  window.location.hash='#exit_modal_offline';
}

// When the user clicks on <span> (x), close the modal
function close_offline_exit_modal(){
  $("#offline_exit_modal").css('display','none');
  window.location.hash='#play';
}


function open_modal_app_exit(){
  $("#app_exit_modal").css('display','block');
}

// When the user clicks on <span> (x), close the modal
function close_modal_app_exit(){
  //alert("ranj")
  $("#app_exit_modal").css('display','none');
  window.location.hash='#homepage';
}
