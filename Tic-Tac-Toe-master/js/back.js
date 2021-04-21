var button_obj = document.createElement("audio");
button_obj.src = "audio/button.mp3";
button_obj.volume = 1;
button_obj.autoPlay = false;
button_obj.preLoad = true;
button_obj.controls = true;


var join_c=1;
var host_c=1;
function c_button(y){
  //alert(y);
  if(y===1){
join_c=join_c+1;
  }
  else if(y===2){
host_c=host_c+1;
  }
  console.log(host_c);
  console.log(join_c);
}

var last_loc='homepage';
function goBack(){

  var currnet_loc;
  currnet_loc=window.location.hash;

if(currnet_loc=='#choose_multi'){
  $(currnet_loc).css('display','none');
    window.location.hash='#homepage';

    if(window.location.hash=='#homepage'){
      $('#back_btn').css('display','none');
      $("#error").html("");
      document.getElementById('join_no_multi').value=''
      document.getElementById("join_no_multi").autofocus=false;

    };

    $('#homepage').css("display","block");
    $("#hide_join_button").attr("onclick","hide_join(2);c_button(1)");
    $("#hide_join_button").attr("data-target","#join_m");
//    alert("click",join_c)
if(join_c%2==0){
  $("#hide_host_button").slideToggle();
  $("#hide_host_button").slideToggle();
  $("#hide_join_button").click();

  }
  if(host_c%2==0){
    //alert('clicked')
    $("#hide_host_button").click();
}

}

else if(currnet_loc=='#play'){
  open_offline_exit_modal();
window.location.hash='#offline_exit_modal';

}

else if(currnet_loc=='#offline'){
  $(currnet_loc).css('display','none');
window.location.hash='#homepage';
$(".show_name").empty();
    if(window.location.hash=='#homepage'){
      $('#back_btn').css("display","none");
      $('#homepage').css("display","block");
    };
}


else if(currnet_loc=='#online_room_list'){
  $(currnet_loc).css('display','none');
window.location.hash='#homepage';
if(window.location.hash=='#homepage'){
$('#back_btn').css('display','none');
};

    $('#search_box').css('display','none')
    $('#homepage').css('display','block');
  }

  else if(window.location.hash=='#modal'){
    window.location.hash="#homepage";
close_wallet();
close_exit_modal();
close_coin_modal();
close_diamond_modal();
close_player_exit_modal();
//close_coin_over_modal();

close_offline_exit_modal();
close_modal_app_exit();
$("#id01").css("display","none");
$("#id02").css("display","none");
$("#id03").css("display","none");
$("#id08").css("display","none");

  }

  else if(window.location.hash=='#chat'){
  $("#id12").css('display','none');

  window.location.hash='#online_room';

  }
    else if(window.location.hash=='#modal_e'){
      window.location.hash=='#chat';

      close_exit_modal();
    }
  else if(currnet_loc=='#quick_play'){
    $("#online_room").css('display','none');
    close_modal_quick_play();
  window.location.hash='#homepage';

      if(window.location.hash=='#homepage'){
        $('#back_btn').css('display','none');
        $('#homepage').css('display','block');
        }
      }
  else if(window.location.hash=='#homepage'){
    open_modal_app_exit();
    window.location.hash="#exit_modal";
  }
  else if(window.location.hash=='#exit_modal'){
close_modal_app_exit();
window.location.hash='#homepage';
  }
  else if(window.location.hash=='#online_room'){
    window.location.hash="#exit_modal_online";
    exit_room_show()
    }

    else if(window.location.hash=='#exit_modal_online'){
      close_exit_modal();

      window.location.hash="#online_room";
      }
      else if(window.location.hash=='#exit_modal_offline'){

          close_offline_exit_modal();
        window.location.hash="#play";
        }
        else if(window.location.hash=='#host_modal'){

            $("#id14").css('display','none');
          window.location.hash="#online_room_list";
          }
          else if(window.location.hash=='#room_join'){

            close_join_room_modal();
            window.location.hash="#online_room_list";
            }

            else if(window.location.hash=='#share_frnd'){
				  close_share_freind_code_modal();
              //window.location.hash="#online_room_list";
              }

              else if(window.location.hash=='#toe-online/'){
  				  close_share_freind_code_modal();
                //window.location.hash="#online_room_list";
                }

                              else if(window.location.hash=='#toe-room/'){
                  				  close_share_freind_code_modal();
                                //window.location.hash="#online_room_list";
                                }
                                              else if(window.location.hash=='#toe-multi/'){
                                  				  close_share_freind_code_modal();
                                                //window.location.hash="#online_room_list";
                                                }
                                                else if(window.location.hash=='#quic_m'){
                                            cancel_host();
                                                  //window.location.hash="#online_room_list";
                                                  }
                                                  else if(window.location.hash=='#reward'){
                                              $("#id15").css("display",'none');
                                              window.location.hash='#homepage';
                                                    //window.location.hash="#online_room_list";
                                                    }
                                                    else if(window.location.hash=='#terms'){
                                                $("#id16").css("display",'none');
                                                window.location.hash='#signup';
                                                      //window.location.hash="#online_room_list";
                                                      }
                                                      else if(window.location.hash=='#signup'){
                                                  $("#id09").css("display",'none');
                                                    $("#id010").css("display",'none');
                                                  window.location.hash='#homepage';
                                                        //window.location.hash="#online_room_list";
                                                        }



button_obj.play();
Fullscreen.on();
}
