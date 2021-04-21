if(typeof Fullscreen !== 'undefined'){
Fullscreen.on();
}


var storage = window.localStorage;



var room_time;

window.location.hash='#homepage';
var var_network_status='online';

var main_account_diamond;
var main_account_coin;
var update_coin;
var e;
var obj;
var offline_obj;
var play_room_sound;
var quick_play_sound;
var giv_reward_coin;

button_obj = document.createElement("audio");
button_obj.src = "audio/button.mp3";
button_obj.volume = 1;
button_obj.autoPlay = false;
button_obj.preLoad = true;
/// function for coverting the coin into diamond

function convert_coin(diamond,coin){
  $(".loader").css('display','block');
  //alert(e);
    //alert(coin-main_account_coin);
    if(coin<=main_account_coin && main_account_coin >=0){
      update_coin = main_account_coin - coin;
      user_acc_coin(update_coin);
    }

    else{
      alert("low coin");
      $(".loader").css('display','none');

    }



  var userData={
    coin:update_coin,
    diamond : main_account_diamond+diamond
  }


  var ref = firebase.database().ref("usersData/"+e);;
  ref.update(userData,function (error){
    if(error){
      console.log("error");
      $("#coin_convert").fadeIn();
      $("#homepage").css('pointer-events','none');
      //alert("eror");
    }
    else{
      main_account_diamond=diamond+main_account_diamond;
      main_account_coin = update_coin;
      $("#close_convert_coin").click();
      $("#main_account_coin").html(main_account_coin);
      $("#main_account_diamond").html(main_account_diamond);
      //alert("datad update successufful");
        close_diamond_modal(1);
    }

  });

  //alert(coin);

}

function close_alert(){
  $("#homepage").css('pointer-events','');

}

$(document).ready(function(){
//  $(".loader").fadeOut();

  $("#back_btn").css('display','none');
  $("#game_top").css('display','none');
  $("#offline_play").css('display','none');

  $("#offline_play_area").css('display','none');
  $(".play_area").css('display','none');
  $(".time").css('display','none');
  //$("#turn").html(player1+" turn");
  $("#turn").css("color" ,"red");
initial_data2();

     document.addEventListener("backbutton", onBackKeyDown, false);
     function onBackKeyDown(e) {
        e.preventDefault();
       goBack();
     }

     $('div .btn').click(function(){
       button_obj.play();
//       alert('ranjit');
     });

     $('.play_select').click(function(){
       button_obj.play();
    //       alert('ranjit');
     });
     $('.glyphicon').click(function(){
       button_obj.play();
    //       alert('ranjit');
     });

     check_network();

   })

function initial_data2(){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user = firebase.auth().currentUser;
        var str=user.email;
         e=str.replace(/[^a-zA-Z0-9]/g, "");
         $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"usersData/"+e+"/"+"coin.json", function(coin_ac) {
           if(coin_ac ||coin_ac===0){
             main_account_coin = coin_ac;
             //alert(main_account_coin);
             $("#main_account_coin").html(coin_ac);
             storage.setItem('coin', coin_ac) ;// Pass a key name and its value to add or update that key.
    //         console.log(main_account_coin);
       }
       else{
         //alert("vo");
       }
     });

     $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"usersData/"+e+"/"+"ref.json", function(ref) {
       if(ref){
         $("#ref_main").html(ref);
    //         console.log(main_account_coin);
    }
    else{
     //alert("vo");
    }
    });


     $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"reward.json", function(reward_coin) {

       giv_reward_coin = reward_coin;
         //console.log(reward_coin);

   })


// calling reward coin value from database

        /*       $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"usersData/"+e+"/"+"diamond.json", function(diamond_ac) {
                 console.log(diamond_ac);
                 if(diamond_ac||diamond_ac===0){
      //              console.log(diamond_ac);
                  main_account_diamond = diamond_ac;
                   $("#main_account_diamond").html(diamond_ac);
             }
             else{
               //alert("vo");
             }
           })*/

  }

})
}

function showing_offline_play_area() {
  var scriptTag = document.createElement('script');
    scriptTag.setAttribute('src','js/offline_play.js');
    document.head.appendChild(scriptTag);
    scriptTag.id="offline_js";
    $("#homepage").css('display','none');
play='#offline';
          //offline_obj.play();

    $("#back_btn").fadeIn();
    $("#offline").css('display','block');
    $("#offline_play").fadeIn();
    //$("#offline_play_area").fadeIn();
    //alert("opne")
    //$("#offline_play_area").css("pointer-events","");
 //(elem=document.getElementById("multi_js")).parentNode.removeChild(elem);


  }




function play_android(){
  $("#back_btn").fadeIn();
  var scriptTag = document.createElement('script');
  scriptTag.setAttribute('src','js/android.js');
  document.head.appendChild(scriptTag);
}




function play_online_multi(){
  if(var_network_status=='online'){
  var e;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {


      $("#back_btn").fadeIn();
      $("#homepage").css('display','none');
      $("#choose_multi").css('display','block');


      var scriptTag = document.createElement('script');
      scriptTag.setAttribute('src','js/multiplayer.js');
      document.head.appendChild(scriptTag);
      scriptTag.id="multi_js";

      var user = firebase.auth().currentUser;
        var str=user.email;
         e=str.replace(/[^a-zA-Z0-9]/g, "");


         }
       else{$("#sign_up_modal_btn").click();
       page='#choose_multi';
     w     }
     })
   }
   else{
     $("#network").css('color','red');
     $("#network").html('Check your connection...');
     $("#network").css("display","block");

   }
   }

function spinner(){
  $("#homepage").fadeOut();
  $("#spinner_div").fadeIn();

}
function exit_app(){
navigator.app.exitApp();
}

var room_join_no;
function play_online_room_show(){
if(var_network_status=='online'){

  var e;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      var user = firebase.auth().currentUser;
        var str=user.email;
         e=str.replace(/[^a-zA-Z0-9]/g, "");
         $("#room_list").css('color','black');
         $(".status_color").css('color','green');
         $(".room_style").css('border-color','blue');

           $("#homepage").css('display','none');
           $("#search_box").fadeIn();
           $("#online_room_list").css("display","block");
           $("#room_list").html("Getting room list...");
           $("#room_list").css("font-size","25px");
           $("#room_list").css("margin-top","50%");

           $("#back_btn").fadeIn();



           $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+"toe-room/"+".json", function(room) {
         if(room){
           clearInterval(room_time);
           $("#room_list").css("font-size","30px");
           $("#room_list").css("margin-top","");
           $("#room_list").html("");

            room_join_no=Object.keys(room);

            //var ref=firebase.database().ref("tic "+"tac "+"toe-room");
            //ref.remove();
           for(var r=0;r<room_join_no.length;r++){
             if(room[room_join_no[r]].room_data){

               var room_batting= room[room_join_no[r]].room_data.batting;

               var status=room[room_join_no[r]].room_data.game_timer;
/*
               var append=  "<div  class='room_style' id="+room_join_no[r]+"   onclick='join_room("+room_join_no[r]+")'><span class='glyphicon glyphicon-triangle-right' id="+room_join_no[r]+" style='margin-top:10px;display:inline'></span><span style='display:inline;margin-top:0px' id="+r+'room'+" style='margin-top:-38px;margin-left:40px;'>room name</span><span><img style='height:auto;width:30px;margin-left:40px'src='img/coin2.png'><span style='margin-left:0px'>200</span><br><span style='font-size:20px;'>Staus</span> </span></div><br>"*/
               //console.log(Object.keys(room[room_join_no[r]]));

               var player_no=Object.keys(room[room_join_no[r]]).length-1;
               var append=  "<div   class='room_style' id="+room_join_no[r]+"   style='margin-left:13px' onclick='join_room("+room_join_no[r]+")'><p  id="+room_join_no[r]+" style='margin-top:10px;margin-left:5px;display:inline;'></span><p style='display:inline;margin-top:0px;font-size:20px;word-wrap: break-word;' id="+r+'room'+" >room name</p><span style='font-size:20px;margin-left:16px;font-size:15px;' id="+r+'player_no'+">Players:4/4</span><span><br><p style='font-size:20px;margin-top:0px;margin-left:5px;color:green;font-size:15px;' ><b id="+r+'status'+" class='status_color'>Status : Playing.. </b> <span style='font-size;margin-right:13px;color:#d19a25' class='pull-right' id="+r+'coin'+"> Loading.. </span><img style='height:auto;width:25px;margin-top:-3px;' class='pull-right' src='img/coin2.png'> </p> </span>  </div><br>"
               $("#room_list").append(append);
               $("#"+r+'room').html(room[room_join_no[r]].room_data.room_name);
               $("#"+r+'coin').html(room_batting);
               $("#"+r+'player_no').html('Players: '+player_no+"/"+'4');
               //$("#"+room_join_no[r]).css('border-color',"red");
               if(player_no===4){
                 $("#"+room_join_no[r]).attr('onclick','room_full()');
               }

               if(status=="started"){
                  $("#"+r+'status').css('color',"red");
                 $("#"+r+'status').html("Status: Playing...");
                 $("#"+room_join_no[r]).attr('onclick','started()');

               }
              else{
                $("#"+r+'status').css('color',"green");
                $("#"+r+'status').html("Status: In lobby...");
              }
             room_time=  setTimeout(function(){
              $("#room_list").css('color','gray');
              $(".status_color").css('color','gray');
              $(".room_style").css('border-color','red');
              $(".status_color").html('Refresh needed..');

            },30000)

           }
           else{
           }

         }
         }
         else{
         $("#room_list").html("No room to show, Host your room");
         $("#room_list").css("font-size","30px");
         $("#room_list").css("margin-top","50%");  }
             })

       }
       else{
         $("#sign_up_modal_btn").click();
         page='#online_room_list';

       }
     })
}else{
  $("#network").css('color','red');
  $("#network").html('Check your connection...');
  $("#network").css("display","block");

}
}

function room_full(){
  alert("room is full");
}

function started(){
  alert("Play in progress");
}

function play_online(){
if(var_network_status=='online'){
$("#frnd_list").html("Matching for you...")
  var e;

  //$("#frnd_list").html('Getting room list..');
  //$("#frnd_list").css('font-size','30px');

  var ref = firebase.database().ref("tic "+"tac toe-online");
  //ref.remove();


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $("#homepage").css('display','none');
//    $("#back_btn").fadeIn();
      $("#online_room").css("display","block");

      var user = firebase.auth().currentUser;
        var str=user.email;
         e=str.replace(/[^a-zA-Z0-9]/g, "");
         var scriptTag = document.createElement('script');
         scriptTag.setAttribute('src','js/multiplayer.js');
         scriptTag.id="multi_js";
         document.head.appendChild(scriptTag);

         $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+"toe-online/"+".json", function(room) {
           if(room){//checking if any room is there
             console.log(room);

             var room_num=Object.keys(room);
             var room_count;
             for(var i=0;i<room_num.length;i++){//checking if room has two player
               //console.log(room[room_num[i]].player1.game_timer);
               ////console.log(room[room_num[i]].player2);

               if(room[room_num[i]].player2||room[room_num[i]].player1.game_timer=='started'){//if player2 is already present
                 ////console.log("room is full");
                 room_count=i;//number of rooms checked
                 if(room_count===room_num.length-1){//if number of room checking is equals to number of total rooms
                   //console.log("all room is full")
              //     $("#offline_play_area").fadeIn();
                   //host("toe-online/");

                   //$("#room").click();
                   //alert("host")
                   open_modal_quick_play();
                   window.location.hash='#quick_play';
                //   $("#back_btn").fadeIn();
                 }

               }
               else{//if player2 is not present


                 $("#homepage").fadeOut();
                // alert(room_num[i]);

                 join_multi(room_num[i],'toe-online/');
                 //$("#offline_play_area").fadeIn();

                 //alert("join");
                 break;
               }
             }

           }
           else{//host if no room is present
             $("#homepage").fadeOut();
             open_modal_quick_play();
             window.location.hash='#quic_m';
             //$("#room").click();
             //alert("host")
             //host_multiplayer(50,"toe-online/");
           }
         })

       }
       else{
         $("#sign_up_modal_btn").click();
        page='#quick_play';

       }
     })
}
else{
  $("#network").css('color','red');
  $("#network").html('Check your connection...');
  $("#network").css("display","block");
}

   }

////
document.addEventListener("deviceready", onDeviceReady_token, false);

function refresh_token(){
  cordova.plugins.firebase.messaging.onTokenRefresh(function() {
      console.log("Device token updated");
generate_token();
  });
}
function onDeviceReady_token() {
 refresh_token();   // Now safe to use device APIs
}

// functin for generatin toekn
function generate_token(){
  cordova.plugins.firebase.messaging.getToken().then(function(token) {
    console.log("Got device token: ", token);
var data ={
  token : token
}
var ref = firebase.database().ref("usersData/"+e);
ref.update(data);

});
}


function cancel_host(){
  close_modal_quick_play();
  $("#online_room").css('display','none');
  $("#back_btn").css('display','none');
  $("#homepage").css('display','block');
  window.location.hash='#homepage';
}

function reload(){
AdMob.removeBanner();
    //  AdMob.hideBanner();
location.reload();
}


function login() {

  $("#login_html").html('Please Wait...');

  var userEmail=document.getElementById('email').value;
  var userPass=document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(firebaseUser) {
    $("#id010").css('display','none');
    $("#login_html").html('Login');
    initial_data2();
    generate_token();
  })


  .catch(function(error) {
    // Error Handling
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Eroor Msg" + errorMessage);
    $("#login_html").html('Login');
  });
};




var userName;
var userEmail;
var userRefno;
var usersData;
var usersData_array;
var page;
function register() {



  $("#sign_up_html").html('Please Wait...');
userEmail=document.getElementById('userEmail').value.toLowerCase();
var userPass=document.getElementById('userPassword').value;
 userName=document.getElementById('userName').value;
 userRefno=document.getElementById('userRefno').value;

//userEmail=userEmail.replace(/[^a-zA-Z0-9]/g, "");
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(firebase){
    window.location.hash=page;
    $.get("https://tic-tac-toe-9fdbe.firebaseio.com/usersData.json", function(usersData_f) {
      if(usersData_f){//}--
    usersData_array=Object.keys(usersData_f);
   console.log(usersData_f);
   console.log(usersData_array);
   console.log(usersData_f[usersData_array[0]].ref);
    for(var i=0;i<usersData_array.length;i++){
if(usersData_f[usersData_array[i]].ref && usersData_f[usersData_array[i]].ref==userRefno){

  share_increase(i);
return;
}else{
console.log("not matching");
}

}
  }
    });

    $("#id09").css('display','none');
    $("#sign_up_html").html('Register');
    var ref_no=Math.floor((Math.random() * 10000) + 1);
  $("#ref_temp").html(ref_no);
    send(ref_no);
initial_data2();
generate_token();
  }).catch(function(error) {
    // Handle Errors here.
      var errorCode = error.code;
  var errorMessage = error.message;
  $("#sign_up_html").html('Register');
  window.alert("Error : " + errorMessage);
})

}
function  share_increase(g){
  //alert("share");
  $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"usersData/"+usersData_array[g]+"/"+"coin"+".json", function(opposite) {
    if(opposite){//}
  //  alert(opposite);

  var data={
  coin:opposite+100
  }
  var ref = firebase.database().ref("usersData/"+usersData_array[g]);
  ref.update(data);
  }
  else{
//  alert("non doata");
  }
  })

}



function dec_coin(d){
  main_account_coin = main_account_coin- d ;
}

function getReward(){
  getReward2();
    main_account_coin=main_account_coin+giv_reward_coin;

alert(main_account_coin);
//  alert("yout got 50 coins");
  var data={
    coin:main_account_coin
      }
  var ref = firebase.database().ref("usersData/"+e);
  ref.update(data);
  //document.getElementById('id011').style.display='block';
  //alert("ranjit");

//alert(main_account_coin);
$("#id15").css("display",'block');
window.location.hash="#reward";
  storage.setItem('coin', main_account_coin) ;
}

//send();
function send(a){
  var data={
    name:userName,
    coin:250,
    ref:a
  }
  var em=userEmail.replace(/[^a-zA-Z0-9]/g, "");;
  console.log(userEmail);
em.toLowerCase();
//console.log(em);
  //e=str.replace(/[^a-zA-Z0-9]/g, "");
  var ref = firebase.database().ref("usersData/"+em);
  ref.set(data);
  //document.getElementById('id011').style.display='block';
  //alert("ranjit");
$("#main_account_coin").html("250");
$("#ref_main").html(a);
  $("#ref").click();


}

function check_network(){
document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);
setTimeout(function(){
  check_network();
},2000)
}

function onOffline() {
  var_network_status='offline';
  //$("#network").css("display","block");
  //$("#network").css("color","red");
//$("#network").html("Check your connection...");
}


function onOnline() {
  var_network_status='online';
  $("#network").css("color","green");
  $("#network").html("Your are online")
initial_data2();
  setTimeout(function(){
    $("#network").css("display","none");
  },2000)

  }

  $(document).ready(function(){

  document.addEventListener('deviceready', function () {
      if(typeof Fullscreen !== 'undefined'){
      Fullscreen.on();
      setInterval(function(){
        Fullscreen.on();

      },10000)

    }
  });

})





function join_room_btn(){
//  alert(join_no)
  if(join_no_o){
//alert(join_no_o);
    join_multi(join_no_o,"toe-room/");

  }
  else{
    open_join_room_modal();
    window.location.hash="#room_join";
  }
}

var old_id;
var join_no_o;
function join_room(room_join_no){
  join_no_o=room_join_no;
//alert(join_no_o);
  $("#"+old_id).css("background-color","lightblue");
  $("#"+join_no_o).css("background-color","#68bfe8");
  old_id=join_no_o;
  var scriptTag = document.createElement('script');
  scriptTag.setAttribute('src','js/multiplayer.js');
  scriptTag.id="multi_js";
  document.head.appendChild(scriptTag);

}
