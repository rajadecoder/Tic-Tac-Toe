

$("#offline_play_area_table").removeClass('offline_box');
$("#offline_js").remove();
var ready;
var game_send="toe-multi/";
//var friend;
var player;
var r_player;
var r_game;
var game;
var img;
var r_img;
var host_random;
var join_no;
var host=false;
var player_num=1;
var box_num=1;
var game_status="room";
var no_of_player=4;
var e;
var game_no=1;
var my_name;
var exit=true;

  var rD='false';

var img_array=[null,'img/eye1.gif','img/face.png','img/blue.gif','img/pink2.png','img/pink.png'];

var batting_coin;
var account_coin;
var name_array=[null]

var chance=0;
var color=["r","red","green","violet","blue","pink","yellow","brown","silver","black"]
var s_turn;
var in1;
var in2

$("#close_play").attr('onclick','exit_room_show()');

function host_multiplayer(q,game_send_p){
  //close_modal_quick_play();
  //alert("hello");
  //  alert(q);
//  alert(game_send_p);
  game_send=game_send_p;
  $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"usersData/"+e+"/"+"coin.json", function(coin_ac) {
    if(coin_ac||coin_ac===0){
      //  alert(coin_ac)
      account_coin=coin_ac;
      if(game_send=='toe-onlin/'){
      q=50;
    }

      if(account_coin>=q){
//alert(q);
        batting_coin=q;
        player=1;
        r_game="Opponent Won"
        game="You Won";
        img="burger.png";

        r_img="face.png";
        r_player="player2";
        window.location.hash='#online_room';
        host_random=Math.floor((Math.random() * 10000) + 1);
        $("#choose_multi").css("display","none");
        $("#online_room_list").css("display","none");
        $("#online_room").css("display","block");
        $("#chat_show").fadeIn();
        $("#offline_play_area #staus").html("waiting for friend..");
        $(".container_c").css("display","block");

        $("#frnd_list").html('');

        console.log(host_random);
        //alert(game_send);
        join_no=host_random;
        $("#share").html("Share to friend :- "+host_random);
        if(game_send=='toe-multi/'){
          open_share_freind_code_modal();

          //          $("#join_modal_share_btn").click();
        }



        //game_send='toe-multi/';
        //console.log(game_send);



        var name;

        $(document).ready(function(){
          // variable for storing coind value for showing winner modal


          ///alert("here"+ e);
          $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"usersData/"+e+"/"+"name"+".json", function(name) {
            if(name){
              name=name.charAt(0).toUpperCase() + name.slice(1);;

              $("#frnd_list #1").html(name);
              var data={
                name:name,
                coin:q
              }
              name_array.push(name);
              console.log(name_array);
              var ref = firebase.database().ref("tic "+"tac "+game_send+host_random+"/"+"player"+player_num);
              ref.set(data);
            }
            else{
              //  alert("no name");
            }
          })
        })
        if(game_send=="toe-room/"){
          var room_name_obj={
            room_name:room_name,
            batting:batting_coin
          }
          var ref = firebase.database().ref("tic "+"tac "+game_send+host_random+"/"+"room_data");
          ref.set(room_name_obj);
        }


        var btn_append= "<button onclick='play_start_counter(1)' id='ready_btn' class='btn btn-success ready' style='font-size:20px;width:160px' >Ready</button><br>"
        var chat_btn = "<button type='button' onclick='focus_input();' id='chat_modal_btn' style='margin-top:5%;width:75px;margin-right:5px'  class='btn btn-info'  style='width:100px;margin-bottom:10px' name=button'><i class='fa fa-comments' style='font-size:25px'></i></button>"
        var btn_append_exit= "<button onclick='exit_room_show(1);' style='margin-top:5%;width:75px;font-size:20px;margin-left:5px;' class='btn btn-danger '>Exit</button>"

        $("#play_btn").append(btn_append);
        $("#play_btn").append(chat_btn);
        $("#play_btn").append(btn_append_exit);

        $("#search_box").fadeOut();
   $("#back_btn").css('display','none');
        $("#counter_main").fadeIn();


        var append="<div id='1status' ><span class='img_span'  style='float:left;margin-left:30px;margin-right:10px;margin-top:0px;height:35px;width:35px' id='1color'></span><span><h3 id='1'style='height:60px;width:80%;text-align:left;color:blue;font-size:35px;'>Connecting...</h3></span></div>"
        $("#frnd_list").append(append);
        $("#1color").css('background-image','url('+img_array[1]+')');
        //$("#1status").css('color','red');


        wait_for_frnd();

        get_chat();
        host=true;
        rD='true';
       createSelectedBanner()
      //host  alert(host);
        //createSelectedBanner();
      }
      else{
        //  alert("not enought coin");
        $("#share").html("Not enought coin");
        $("#online_room").css("display","none");
//        $("#back_btn").css("display","none");
if(game_send=='toe-online/'){
//  alert("here");
  $("#back_btn").css('display','none');
  $("#homepage").css("display",'block')
}
window.location.hash='#'+game_send;

        open_share_freind_code_modal();

      }
    }
  })
}
function exit_room_show(w){
  window.location.hash="#modal_e";
  //$("#exit_modal_hidden_btn").click();
  //alert(game_status);
  if(game_status=='room'){
    $("#exit_alert_append").empty();


    open_exit_modal();
  }
  else if(game_status=='play'){
      $("#exit_alert_append").empty();
    var appnd="<span id='exit_alert' style='color:red'></span><img src='img/coin2.png' style='height:auto;width:25px'></img>";
    $("#exit_alert_append").append(appnd);
    $("#exit_alert").html("You will loos your "+batting_coin+" ");

    open_exit_modal();
  }


  $("#exit_btn").attr('onclick','exit_room('+w+');close_exit_modal()');

}

var ex;
function exit_room(){

  if(host==true){
    var data={
      he:"exit"
    }

    var ref = firebase.database().ref("tic "+"tac "+game_send+host_random+"/"+"player1");
    ref.update(data);
    if(player_num<3 ){
            var ref = firebase.database().ref("tic "+"tac "+game_send+join_no);
            ref.remove();
            }


    setTimeout(function(){

      location.reload();
    },800)
  }
  else{
    var data={
      he:"exit"
    }
    var ref2 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+player);
    ref2.update(data);
    //alert("remove player");
    setTimeout(function(){
      location.reload();
    },800)

  }
}
var modal_click=true;
exit=true;
var player_to_exit;
var check=1;
function check_exit(){

  //console.log('exit'+check+" "+player+exit);
  if(check!=player&&exit==true){
    $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+check+"/"+"he.json", function(player_present) {
      //      alert(check);
      if(!player_present){

        if(check!=player_num-1&&check<player_num-1){
          check=check+1;
          //  console.log('adding '+player_num);
        }

        else{
          check=1;
        }

        setTimeout(function(){
          check_exit();
        }, 500);

      }
      else if(player_present=="exit"){
        if(check===1 && modal_click===true){
          clearInterval(counter);
          modal_click=false;


          if(game_status=='play'){
            $("#exit_information").html("Host has closed the room <br><br> ");
            $("#exit_information").append("<span style='color:green'>You got your "+batting_coin+" "+"</span><img src='img/coin2.png' style='height:auto;width:25px'></img><br><br><button class='btn btn-info btn-lg' stlye='width:200px' onclick='reload()'>Ok</button>");
            var d={
              coin:batting_coin+account_coin
            }
            var ref = firebase.database().ref("usersData/"+e);
            ref.update(d);

            //alert("refunded"+batting_coin);
          }
          else{
            $("#exit_information").html("Host has closed the room ");
            $("#exit_information").append("<br><br><button class='btn btn-info btn-lg' stlye='width:200px' onclick='reload()'>Ok</button>");


          }

          open_player_exit_modal();

        setTimeout(function(){

    if(player_num<2 && player===1){
            var ref = firebase.database().ref("tic "+"tac "+game_send+join_no);
            ref.remove();
            }

                      else if(player_num<4 && player===2){
                        var ref = firebase.database().ref("tic "+"tac "+game_send+join_no);
                        ref.remove();
                      }

                      else if(player_num<5 &&player===3){
                        var ref = firebase.database().ref("tic "+"tac "+game_send+join_no);
                        ref.remove();
                      }
                      else if(player_num<6 && player===4){
                        var ref = firebase.database().ref("tic "+"tac "+game_send+join_no);
                        ref.remove();
                      }

                    },4000);

          var_chk_new_frnd=false;
          exit=false;
          /*if(player ===2){
            setTimeout(function(){
              var ref2 = firebase.database().ref("tic "+"tac "+game_send+join_no);
              ref2.remove();

            },5000);
          }*/

          if(document.getElementById('multi')){
            (elem=document.getElementById("multi")).parentNode.removeChild(elem);
          }

        }

        else if(check>1){
          //exit=false;
          //script for player exit for refunding the coin
          //open_host_room_modal();
          //alert("exit");
          if(game_status=='play'){
            $("#exit_information").html(name_array[check]+" has left the game <br><br> ");
            $("#exit_information").append("<span style='color:green'>You got your "+batting_coin+ " "+"</span><img src='img/coin2.png' style='height:auto;width:25px'></img><br><br><button class='btn btn-info btn-lg' stlye='width:200px' onclick='reload()'>Ok</button>");
            var d={
              coin:account_coin
            }
            var ref = firebase.database().ref("usersData/"+e);
            ref.update(d);
            //alert("refunded"+batting_coin);
            open_player_exit_modal();

          }
          else{
            //$("#exit_information").html("Host has closed the room ");
            //  $("#exit_information").append("<br><br><button class='btn btn-info btn-lg' stlye='width:200px' onclick='reload()'>Ok</button>");
            //open_player_exit_modal();
          }


          //  alert('exit'+player+" "+player_num+" "+check);
          player_to_exit=check;
          exit_player(player_to_exit);
          if(chance===player){
            $("#offline_play_area").css("pointer-events","");
          }
          //alert(check);
        }



        setTimeout(function(){
          if(check!=player_num-1&&check<player_num){
            check=check+1;
          }
          else{
            check=1;
          }

          check_exit();
        }, 2000);
      }
    })
  }
  else{
    if(check!=player_num-1&&check<player_num){
      check=check+1;
    }
    else{
      check=1;
    }
    setTimeout(function(){
      check_exit();
      console.log("checking_exit");
    }, 500);

  }
}


var get_player_data;
function exit_player(s){
  //alert("exit");
  get_player_data=player_to_exit;
  if(get_player_data==2 && player==3){
    //alert("exit"+player_to_exit)
    var g=get_player_data+1;
    $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+g+".json", function(get) {
      if(get){
        var done={
          done:true
        }
        var ref4 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player3");
        ref4.update(done);
        //alert("deleted and created");

        var ref3 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+get_player_data);
        ref3.update(get);
        $('#frnd_list #2status').remove();

        //    $("#frnd_list #2").remove();
        //  alert(color[2]);
        $("#3color").css('background-color',color[2]);
        $("#3color").attr('id','2color');
        $("#frnd_list #3status").attr('id','2status');


        $("#frnd_list #4color").css('background-color',color[3]);
        $("#frnd_list #4color").attr('id','3color');
        $("#frnd_list #4status").attr('id','3status');


        $(".ready").attr('onclick','play_start_counter(2)');
        //alert("player_num 192 "+ player_num);


        player=player-1;
        var_chk_new_frnd=false;
        player_num=player_num-1;
        exit==false;
        setTimeout(function(){
          var_chk_new_frnd=true;
          exit=true;
          chk_new_frnd();
        },5000)
      }

    })
  }
  else if(get_player_data==2&&player==4){
    //alert("exit2 4");

    var g=get_player_data+2
    $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+g+".json", function(get) {
      if(get){
        console.log(get);
        //  alert("get 2 4");
        var c=get_player_data+1;
        var ref3 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+c);
        ref3.update(get);
        $("#frnd_list #2status").remove();

        $("#frnd_list #3color").css('background-color',color[2]);
        $("#frnd_list #3color").attr('id','2color');
        $("#frnd_list #3status").attr('id','2status');


        $("#frnd_list #4color").css('background-color',color[3]);
        $("#frnd_list #4color").attr('id','3color');
        $("#frnd_list #4status").attr('id','3status');

        $(".ready").attr('onclick','play_start_counter(3)');

        player=player-1;

        var_chk_new_frnd=false;
        exit=false;
        player_num=player_num-1;
        done_check();
        function done_check(){
          $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+c+"/"+"done.json", function(done) {
            if(done==true){
              var done={
                done:true
              }
              var ref4 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player4");
              ref4.update(done);
              setTimeout(function(){
                var_chk_new_frnd=true;
                exit=true;
                chk_new_frnd();
              },2000)
            }
            else{
              done_check();
              //  console.log("not done")
            }
          })
        }
      }

    })

  }

  else if(get_player_data==3&&player==4){

    var g=get_player_data+1
    $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+g+".json", function(get) {
      if(get){
        var done={
          done:true
        }
        var ref4 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player4");
        ref4.update(done);

        var ref3 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player3");
        ref3.update(get);
        //  alert("deleted and created");

        $("#frnd_list #3status").remove();


        $("#frnd_list #4color").css('background-color',color[3]);
        $("#frnd_list #4color").attr('id','3color');
        $("#frnd_list #4status").attr('id','3status');

        $(".ready").attr('onclick','play_start_counter(3)');

        player=player-1;

        var_chk_new_frnd=false;
        player_num=player_num-1;
        exit=false;
        setTimeout(function(){
          var_chk_new_frnd=true;
          exit=true;
          chk_new_frnd();
        },5000)}

      })
    }

    else if(get_player_data==4&&player==3){
      $("#frnd_list #4status").remove();
      var_chk_new_frnd=false;
      exit=false;
      player_num=player_num-1;
      var done={
        done:true
      }
      var ref4 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player3");
      ref4.update(done);

      setTimeout(function(){
        exit=true;
        var_chk_new_frnd=true;
        chk_new_frnd()
      },5000);

    }
    else if(get_player_data==4&&player==2){
      $("#frnd_list #4status").remove();
      exit=false;
      var_chk_new_frnd=false;
      player_num=player_num-1;
      var done={
        done:true
      }
      var ref4 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player2");
      ref4.update(done);

      setTimeout(function(){
        exit=true;
        var_chk_new_frnd=true;
        chk_new_frnd();
      },5000);

    }
    else if(get_player_data==2&&player==1){
      ///alert("2 went"+player_num) ;
      player_num=player_num-1;
      var_chk_new_frnd=false;
      exit=false;

      $("#frnd_list #2status").remove();



      $("#frnd_list #3color").css('background-color',color[1]);
      $("#frnd_list #3color").attr('id','2color');
      $("#frnd_list #3status").attr('id','2status');


      $("#frnd_list #4color").css('background-color',color[3]);
      $("#frnd_list #4color").attr('id','3color');
      $("#frnd_list #4status").attr('id','3status');

      if(player_num<2){
        var ref2 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player2");
        ref2.remove();
        //        player_num=player_num-1;
        var_chk_new_frnd=true;
        exit=true;
        setTimeout(function(){
          //chk_new_frnd();
          //chk_new_frnd();
          //alert("time");
        },2000)
      }

      var st=get_data_num+2;//for checking done
      done_check_h();
      function done_check_h(){
        if(player_num===4){
          //  alert('removing');
          $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player4"+"/"+"done.json", function(done) {
            if(done===true){

              var ref1 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player2"+"/"+"he");
              ref1.remove();
              var ref3 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player3"+"/"+"done");
              ref3.remove();

              var ref2 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player4");
              ref2.remove();
              //  alert('removed1' +player_num);

              var_chk_new_frnd=true;
              exit=true;
              chk_new_frnd();
            }
            else{
              done_check_h();
            }
          })
        }
        else if(player_num===3){
          $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player3"+"/"+"done.json", function(done) {
            if(done==true){
              var ref2 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player3");
              ref2.remove();
              var ref1 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player2"+"/"+"he");
              ref1.remove();
              setTimeout(function(){
                exit=true;
                var_chk_new_frnd=true;
                chk_new_frnd();

              },3000)
              //  alert('418removed2' +player_num);

            }
            else{
              done_check_h()
            }
          })

        }
        else if(player_num===2){
          var ref2 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player2");
          ref2.remove();
          exit=true;
          var_chk_new_frnd=true;
          //chk_new_frnd();
        }
      }
    }

    else if(get_player_data==3&&player==1){
      var st=get_player_data+1;
      //  alert("went 3 1")
      $("#frnd_list #3status").remove();


      $("#frnd_list #4color").css('background-color',color[3]);
      $("#frnd_list #4color").attr('id','3color');
      $("#frnd_list #4status").attr('id','3status');

      var_chk_new_frnd=false;
      exit=false;
      player_num=player_num-1;

      done_check_h();
      function done_check_h(){
        //  alert(player_num);
        if(player_num===4){
          $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+st+"/"+"done.json", function(done) {
            if(done===true){
              //  alert("got");
              if(st===2){
                var ref1 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player3"+"/"+"he");
                ref1.remove();

                var ref3 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player2"+"/"+"done");
                ref3.remove();
                var ref2 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player4");
                ref2.remove();
                setTimeout(function(){
                  var_chk_new_frnd=true;
                  exit=true;
                  chk_new_frnd();
                  //  check_exit();
                },1000)

              }
              if(st===4){
                st=st-2;
                done_check_h()
              }
            }else{
              //  console.log('ge2tting done check_h');
              done_check_h()
            }
          })
        }
        else if(player_num===3){
          //  alert(player_num+ "yahoo")
          $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player2"+"/"+"done.json", function(done) {
            if(done===true){
              var ref4 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player3");
              ref4.remove();

              var ref5 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player2"+"/"+'done');
              ref5.remove();
              setTimeout(function(){
                exit=true;
                var_chk_new_frnd=true;
                //  check_exit();
                chk_new_frnd();
              },1000)

            }
            else{
              done_check_h()
            }
          })
        }
      }
    }
    else if(get_player_data==4&&player==1){
      $("#frnd_list #4status").remove();
      var_chk_new_frnd=false;
      exit=false;
      player_num=player_num-1;
      var dele=2;
      done_check_h();
      function done_check_h(){
        $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+dele+"/"+"done.json", function(done) {
          if(done===true){
            dele=dele+1;
            done_check_h()
            if(dele===4){

              var ref3 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player4");
              ref3.remove();
              var ref5 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player3"+"/"+"done");
              ref5.remove();

              var ref6 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player2"+"/"+"done");
              ref6.remove();
              setTimeout(function(){

                var_chk_new_frnd=true;
                exit=true;
                chk_new_frnd();
              },3000)

            }
          }
          else{
            done_check_h()
          }
        })

      }
    }

    else if(get_player_data==3&&player==2){
      var_chk_new_frnd=false;
      exit=false;
      $("#frnd_list #3status").remove();


      $("#frnd_list #4color").css('background-color',color[3]);
      $("#frnd_list #4color").attr('id','3color');
      $("#frnd_list #4status").attr("id","3status");

      $(".ready").attr("onclick","play_start_counter(2)");

      var done={
        done:true
      }
      var ref4 = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player2");
      ref4.update(done);

      player_num=player_num-1;

      setTimeout(function(){
        var_chk_new_frnd=true;
        exit=true;
        chk_new_frnd();
      },5000)


      //player=player-1
    }
  }

  //////////////////////////
  function wait_for_frnd(){
    //alert(game_send);
    $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+host_random+"/player2"+".json", function(player2) {

      if(player2){

        $("#offline_play_area").css("pointer-events","");
        $("#offline_play_area").css("opacity","1");
        $("#offline_play_area #status").html("");
        $("#loader").fadeOut(0);
        $("#offline_play_area #turn").html("Your Turn");
        console.log("connected");
        //$("#2").html("player2");
        player_num=3;
        chk_new_frnd();
        check_ready(1);

        var append="<div id='2status'><span class='img_span' style='float:left;margin-left:30px;margin-right:10px;margin-top:0px;height:35px;width:35px' id='2color'></span><span><h3 id='2' style='text-align:left;height:60px;color:blue;width:80%;margin-top:-26px;font-size:35px'>Connecting...</h3></span></div>"
        $("#frnd_list").append(append);
        $("#2color").css('background-image','url('+img_array[2]+')');
        $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player2"+"/"+"name"+".json", function(name_frnd) {
          if(name_frnd){

               name_frnd=name_frnd.charAt(0).toUpperCase() + name_frnd.slice(1);;

            $("#frnd_list #2").html(name_frnd);
            name_array.push(name_frnd);
            console.log(name_array);
            check_exit()
          }
        })
      }
      else{
        wait_for_frnd();
        //  console.log("not connected");
      }
    })
  }

  var players_name=[];
  var name_num=1;
  function get_names(x){
    //alert("how many times running ge names");
    //console.log(player_num);

    //alert(game_send+" "+join_no+" "+player_name_num);
    $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+x+"/"+"name"+".json", function(name_frnd) {
      if(name_frnd){

        name_frnd=name_frnd.charAt(0).toUpperCase() + name_frnd.slice(1);;

        console.log(x);
        $("#frnd_list #"+x).html(name_frnd);
        players_name.push(name_frnd);

        name_array.push(name_frnd);
        console.log(name_frnd);
        //console.log(name_array);
        //console.log(players_name);

      }
    })

  }


  function join_multi(number,game_send_p){
    $("#back_btn").css('display','none');

    //alert(number);
    //alert(game_send_p);
    $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"usersData/"+e+"/"+"name.json", function(name_me) {
      if(name_me){
        my_name=name_me;
      }
    })

    r_game="You Won"
    game="Opponent Won";
    r_player="player1";
    img="face.png";
    r_img="burger.png"
    //get_chat();
    if(game_send_p&&number){
      game_send=game_send_p;
      join_no=number;
    }
    else{
      game_send="toe-multi/"
      join_no=document.getElementById('join_no_multi').value;
    }
    console.log(join_no);

    if(join_no){

      $(".container_c").css("display","block");
      $("#back_btn").fadeOut();
      $("#homepage").fadeOut();
      $("#search_box").fadeOut();
      $("#choose_multi").css("display","none");
      $("#online_room_list").css("display","none");
      $("#online_room").css("display","block");
      console.log(game_send);
      $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+".json", function(host_no) {
        if(host_no){
          console.log(host_no);
          window.location.hash='#online_room';
          $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player1"+"/"+"coin"+".json", function(coin_host) {
            if(coin_host){
              $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"usersData/"+e+"/"+"coin.json", function(coin_join) {
                if(coin_join||coin_join===0){
                  $("#frnd_list").html('');

                  if(coin_join>=coin_host){
                    batting_coin=coin_host;
                    account_coin=coin_join;

                    console.log(host_no);
                    var players=Object.keys(host_no);

                    if(game_send=="toe-room/"){
                      players.pop(1);
                    }
                    player_num=players.length+1;//
                    var data2={
                      name:my_name
                    }
                    //alert(player_num);
                    if(player_num<5){
                      var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+player_num);
                      ref.update(data2);


                    my_name=my_name.charAt(0).toUpperCase() + my_name.slice(1);;

                    for(var a=1;a<=player_num;a++){
                      if(a===player_num){

                        var append="<div class='fonts' id="+a+'status'+"><span class='img_span' style='float:left;margin-left:30px;margin-right:10px;margin-top:0px;height:35px;width:35px;' id="+a+'color'+"></span><span><h3 id="+a+" style='height:60px;color:blue;width:80%;text-align:left;margin-top:-26px;font-family:'Sniglet''>Connecting...</h3></span></div>"
                        $("#frnd_list").append(append);
                        $("#"+a+'color').css('background-image','url('+img_array[a]+')');

                        my_name=my_name.charAt(0).toUpperCase() + my_name.slice(1);;

                        $("#frnd_list #"+a).html(my_name);
                        setTimeout(function(){
                          name_array.push(my_name);
                          $("#turn").html(name_array[1]+"Turn")
                          console.log(name_array);
                        },3000)
                        check_exit();
                        //createSelectedBanner();

                      }

                      else{
                        var append="<div class='fonts' id="+a+'status'+"><span class='img_span' style='float:left;margin-left:30px;margin-right:10px;margin-top:0px;height:35px;width:35px' id="+a+'color'+"></span><span><h3 id="+a+" style='height:60px;color:blue;width:80%;text-align:left;margin-top:-26px;font-family:'Sniglet'>Connecting...</h3></span></div>"
                        $("#frnd_list").append(append);

                        $("#"+a+'color').css('background-image','url('+img_array[a]+')')
                        get_names(a);
                      }
                    //  $("#frnd_list #"+a).css(  "font-family",'"Comic Sans MS", cursive, sans-serif');
                      $("#frnd_list #"+a).css(  "font-size",'30px');
                    }
}
else{
//  alert("room full");
  $("#share").html("Room is full");
  $("#share_close").css('display','none');
  open_share_freind_code_modal();
  $("#share_close_btn").css('display','block');
  $("#offline_play_area").css("display",'none');
        $(".container_c").css("display","none");
        $("#back_btn").fadIn();
        $("#homepage").fadeOut();
        $("#search_box").fadeOut();
        $("#choose_multi").css("display","none");
        $("#online_room_list").css("display","none");
        $("#online_room").css("display","block");

}
                    var c=a-1;
                    //  alert(c);
                    var btn_append= "<button onclick='play_start_counter("+c+")' class='btn btn-success ready' style='font-size:20px;width:160px' >Ready</button><br>"
                    var chat_btn = "<button type='button' onclick='focus_input();'  id='chat_modal_btn' style='margin-top:5%;width:75px;margin-right:5px'  class='btn btn-info'  style='width:100px;margin-bottom:10px' name=button'><i class='fa fa-comments' style='font-size:25px'></i></button>"
                    var btn_append_exit= "<a href='#modal'><button onclick='exit_room_show(1)'style='margin-top:8%;width:75px;font-size:20px;margin-left:5px;' class='btn btn-danger '>Exit</button><a>"

                    $("#play_btn").append(btn_append);
                    $("#play_btn").append(chat_btn);
                    $("#play_btn").append(btn_append_exit);

                    player=a-1;


                    $("#offline_play_area").css("pointer-events","none");
                    //  $("#offline_play_area").fadeIn();

                    $(".choose").css("display","none");
                    $("#turn").html("Opponent Turn")

                    player_num=player_num+1;
                    //get_data();
                    chk_new_frnd();
                    check_ready(1);

                    get_chat();
                    get_player_won();
                    createSelectedBanner()

                  }else{
//                    alert("not ready coin is not enough"+batting_coin+"/"+account_coin)
$("#share").html("Not enought coin");
$("#online_room").css("display","none");
open_share_freind_code_modal();
window.location.hash="#"+game_send;;

      $(".container_c").css("display","none");
      if(game_send=='toe-online/'){
      //  alert("here");
      $("#back_btn").css('display','none');
      $("#homepage").css("display",'block')
      }


if(game_send=='toe-room/'){
  $("#search_box").fadeIn();
  $("#online_room_list").css('display','block');
}
else if(game_send=='toe-multi/'){
  $("#choose_multi").css('display','block');
}

}


                }
              })
            }
          })
        }
        else{
          //  $("#error").html("Entered code is not hosted");

          $("#back_btn").fadeIn();
          //$("#back_btn").css('margin-top','-70px');

          $(".container_c").css('display','none');
          //$("#search_box").fadeIn();
          $("#choose_multi").css("display","block");
          //$("#online_room_list").css("display","block");
          $("#online_room").css("display","none");
          //$("#chat_show").fadeOut();

          $("#error").html("Please enter correct code ");
          //alert("entered code is tnot valid")
        }
      })
    }
    else{
      //alert('enter code')

      $("#back_btn").fadeIn();
      $("#error").html("Enter hosted code ");
    }
  }




  var var_chk_new_frnd=true;
  //function to check if any new frnd has joined the game
  function chk_new_frnd(){

    if(var_chk_new_frnd===true&&game_status=="room"){
      $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+'player'+player_num+".json", function(new_frnd) {
        if(new_frnd){
          var append="<div id="+player_num+'status'+"><span class='img_span' style='float:left;margin-left:30px;margin-right:10px;margin-top:0px;height:35px;width:35px' id="+player_num+'color'+"></span><span><h3 id="+player_num+" style='height:60px;width:80%;text-align:left;margin-top:-26px;font-size:35px;color:blue'>Connecting...</h3></span></div>"
          $("#frnd_list").append(append);
          $("#"+player_num+'color').css('background-image','url('+img_array[player_num]+')');
          $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+player_num+"/"+"name"+".json", function(name_frnd) {
            if(name_frnd){
              name_frnd=name_frnd.charAt(0).toUpperCase() + name_frnd.slice(1);;

              $("#frnd_list #"+player_num).html(name_frnd);
              player_num=player_num+1;
              name_array.push(name_frnd);
              console.log(name_array);
              //     alert("new"+player_num);

              chk_new_frnd();
            }
          })

        }
        else{
          chk_new_frnd();
          //console.log("cheking new frnd");
        }
      })
    }
    else{
      return;
    }
  }
  var var_chk_ready=true;
  var b=0;
  function check_ready(){
    if(var_chk_ready===true&&game_status=="room"){
      b=b+1;
      $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+'player'+b+'/'+"status"+".json", function(player_status) {

        if(player_status==="ready"){
          $("#"+b).css('color','green');

          $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player1/"+"game_timer"+".json", function(game_timer) {
            if(game_timer=="started"){
              start_game();
              play_start_counter('1');
            }
          })
          if(b===player_num-1||b>player_num-1){
            b=0;
          }
          check_ready();
        }
        else{
          //      console.log("not ready"+b);

          if(b===player_num-1||b>player_num-1){
            b=0;
          }
          check_ready();
        }

      })
    }
    else{
      return;
      check_ready();
    }
  }


  function play_start_counter(hero){//function to start count down for game to start

    //  console.log("play startttttttttt " +hero);//alert(hero);
    if(hero&&hero!='a'){
      if(host===false){

        $("#"+hero).css('color','green');
        ready=true;
        //ready=true;
        var data={
          status:"ready"
        }
        var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+hero);
        ref.update(data);
$('.ready').fadeOut();
      }
        else if(rD=='true'&&player_num>2){

          $("#"+hero).css('color','green');
          ready=true;
          //ready=true;
          var data={
            status:"ready"
          }

          var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+hero);
          ref.update(data);
$('.ready').fadeOut();
        }
        else{
          alert('waiting for player');
        }

      }      //  alert(hero+" update");



    //console.log(player_num);
    if(player_num-1>=2){
      if(host===true){
        var data2={
          game_timer:'started'
        }
        var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player1");
        ref.update(data2);
        if(game_send=='toe-room/'){
          var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"room_data");
          ref.update(data2);
        }

        for (var r=2;r<player_num;r++){
          $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+r+"/"+"status"+".json", function(player_status) {
            if(player_status==="ready"&&ready===true&&game_status=="room"){
              //console.log("ready to play");
              start_game();

              play_start_counter('1');
              //$(".ready").fadeOut();
              //alert("victim 1");
            }
            else{
              //console.log("no player is ready to play");
            }
          })
        }
      }
      else{
        $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player1/"+"status"+".json", function(host_status) {
          if(host_status==="ready"&&ready===true&&game_status=="room"){
            //console.log("host is ready to play");
            $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player1/"+"game_timer"+".json", function(game_timer) {
              if(game_timer=="started"){
                start_game();
$(".ready").fadeOut();

play_start_counter('1');
                //alert("victim");
              }
            })

          }
          else{
            //console.log("host  is not ready to play");
          }
        })
      }
    }
  }
  var var_start_game=true;
  var counts=false;
  var seconds=15;
  function start_game(){ //function to start counter
    //no_of_player=player_num-1;
    if(var_start_game===true){
      var_start_game=false;
      $(".time").fadeIn(0);
      $("#counter_main").fadeIn(0);
      $("#counter").fadeIn(0);
$(".ready").fadeOut();
      check_ready();
      /*
      var s_turn_host= setInterval(function() {
      time=time-1;
      $("#counter_turn").html(time);
      if(time<1){
      time=30;
      //              alert("timeout");
      timeOut()
      clearInterval(s_turn_host);
    }
  },1000)*/
  if(account_coin>=batting_coin){

    var coin_to_update=account_coin-batting_coin;
    ///alert(coin_to_update+" " + batting_coin+" "+ account_coin);

    //ready=true;
    var data={
      coin:coin_to_update
    }
    var ref = firebase.database().ref("usersData/"+e);
    ref.update(data);

  }
  else{
    alert("increase your coin")
  }
  if(counts===false){
    var counter = setInterval(function() {
      if(seconds>=1){
        seconds=seconds-1;
        if(seconds<6){
          $('.time').css('color','red');


        }
        document.getElementById("counter").innerHTML =  seconds ;
        counts=true;
      }
      else{
        var ready_player=player_num-1;
        seconds=15;
        play_start();
        $("#play_btn").hide();
        $("#back_btn").hide();

        var data3={
          no_player:ready_player
        }
        if(game_send=='toe-room/'){
          var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+'room_data');
          ref.update(data3);
        }
        else{
          var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+'player1');
          ref.update(data3);
        }

        $('.time').css('color','');
      //  $('.time').css('font-size','20px');
        clearInterval(counter);
      }
    }, 1000);

    game_status="play";


  }
}else{
  console.log("started");
}
}
var border_interval;
function get_no_of_players(){
  if(game_send=='toe-rom/'){
    $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"room_data/"+"no_player"+".json", function(num) {
      if(num){
        no_of_player=num;
        if(player_num-1==4){
          check_length=3;
          //  alert(check_length);
        }

      }
    })
  }
  else{
    $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player1/"+"no_player"+".json", function(num) {
      if(num){
        no_of_player=num;
        if(player_num-1==4){
          check_length=3;
          //  alert(check_length);
        }

      }
    })
  }

}

function play_start(){

  $(".remove_winner_modal").remove();
  $(".remove_loss_modal").remove();
  //alert(main_account_coin+" "+batting_coin);

  no_of_player=player_num-1;;

  get_no_of_players()
  $("#game_top").fadeIn();
  $("#frnd_list").css("display","none");
  $("#counter_main").css("display","none");
  $('.chat_play_btn').fadeIn();
  $("#offline_play_area").fadeIn();
  $("#offline_play_area").css("pointer-events","");
  var_get_data=true;
  if(host!=true){
    get_data();
    var_chk_new_frnd=false;
    var_chk_ready=false;

  }
  if(host===true && game_no==1){
    get_data_num=2;
    var_chk_new_frnd=false;
    var_chk_ready=false;

    get_data();
  }else{
    get_data();
    //  alert("started")
  }
  exit=true;
}
///////////////////////////main code for online multiplayer/////////////////////////////////////////////////////////////////////////////

var get_data_num=1;

function check_box(){
}

//////////////////////////////////////////////
var box_array=[];
var old_box;
var player1_box;
var player2_box;
var player3_box;
var player4_box;
var var_get_data=false;
function get_data(){
  if(var_get_data===true){
    if(get_data_num!=player){
      //alert(get_data_num);
      $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+get_data_num+"/"+"box"+box_num+"/"+"box"+".json", function(box_d_1) {
        if(box_d_1){

          if(old_box!=box_d_1 && box_d_1!=player1_box && box_d_1!=player2_box && box_d_1!=player3_box && box_d_1!=player4_box){

            old_box=box_d_1;

            if(get_data_num===1){
              player1_box=box_d_1
            }
            else if(get_data_num===2){
              player2_box=box_d_1;
            }
            else if(get_data_num===3){
              player3_box=box_d_1;
            }
            else if(get_data_num===4){
              player4_box=box_d_1;
            }

            $("#"+box_d_1).click();
            get_data_num=get_data_num+1;

            if(get_data_num==player_num){
              get_data_num=1;
            }

            if(get_data_num==player){
              timeOut();
              $("#offline_play_area").css("pointer-events","");
            }
            else{
              $("#offline_play_area").css("pointer-events","none");
            }

            if(get_data_num!=player){
              get_data();
            }
            else{
              //  console.log(get_data_num+" "+player)
              $("#offline_play_area #turn").html("your turn");

            }
          }
          else{
            get_data();
          }
        }//box_d_1 finish
        else{
          get_data();
          //console.log("getting data "+get_data_num);
        }

      })
    }else{
      get_data_num=get_data_num+1;
      //alert("player num" +player_num)
      if(get_data_num===player_num){
        get_data_num=1;
        //alert("get_data_num");
      }
      if(get_data_num!=player){
        get_data();
      }

    }
  }
}
/////////////////////////////
var time=30;
function timeOut(){

  s_turn= setInterval(function() {
    time=time-1;
    $("#counter_turn").html(time);
    if(time<1){
      time=30;
       auto_run();
      clearInterval(s_turn);
    }
  },1000)

}



function auto_run(){
  var f=Math.floor((Math.random() * 8) + 1);
  var s=Math.floor((Math.random() * 8) + 1);
  var b=f.toString()+s.toString();
  if(!$("#"+b).attr('class')){
    $("#"+b).click();
    //alert("click");
  }
  else{
    timeOut();
  }

}
//  $("#offline_play_area #1").click();
//$("#offline_play_area #1").css('background-color','');
//$("#offline_play_area #1").attr('class','');


$(document).ready(function(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user = firebase.auth().currentUser;
      var str=user.email;
      e=str.replace(/[^a-zA-Z0-9]/g, "");
      console.log(e);;

      $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"usersData/"+e+"/"+"name.json", function(name_me) {
        if(name_me){
          my_name=name_me;
          // alert(my_name);
        }
      })

    }
  })
  var id_array=[];
  var player_color;
  var id;
  var z;
  var last_move;
  var border=0;
  var play_sound;
var winner_sound;

         play_sound = document.createElement("audio");
         play_sound.src = "audio/td_click.mpeg";
         play_sound.volume = 1;
         play_sound.autoPlay = false;
         play_sound.preLoad = true;
         play_sound.controls = true;


                  looser_sound = document.createElement("audio");
                  looser_sound.src = "audio/looser.mp3";
                  looser_sound.volume = 1;
                  looser_sound.autoPlay = false;
                  looser_sound.preLoad = true;
                  looser_sound.controls = true;
                  looser_sound.loop = true;

                  winner_sound = document.createElement("audio");
                  winner_sound.src = "audio/Winner.wav";
                  winner_sound.volume = 1;
                  winner_sound.autoPlay = false;
                  winner_sound.preLoad = true;
                  winner_sound.controls = true;

  // play offline three player
  $("#offline_play_area td").click(function(){

    play_sound.play();
    clearInterval(border_interval);

    id=$(this).attr('id');
    $("#"+id).css('border','solid white 3px');
    border_interval=

    $("#"+last_move).css('border','');
    last_move=id;

    if(!$("#"+id).attr('class')){

      chance = chance+1;
      //console.log(id_offline);
      for ( z = chance ; z<=chance;z++){
        var player_turn = "player"+z;
        var player_image=img_array[z];
        player_color=color[z];
        //var append=""
        $("#offline_play_area "+"#"+id).css("background-image",'url('+player_image+')')
        $("#offline_play_area "+"#"+id).addClass(player_color);
        var box={
          box:id
        }
        //        console.log("player "+player);
        //      console.log("Z "+z);
        number=z;

        if (chance===no_of_player) {

          $("#offline_play_area #player_img").css('background-image','url('+img_array[1]+')');
          $("#offline_play_area #turn").html(name_array[1]+" turn");
          $("#offline_play_area #turn").css("color" ,color[1]);
          chance=0;
        }

        else{

          $("#offline_play_area #player_img").css('background-image','url('+img_array[z+1]+')');
          $("#offline_play_area #turn").html(name_array[z+1]+" turn");
          $("#offline_play_area #turn").css("color" ,color[z+1]);

        }


      }

      clearInterval(s_turn);
      time=30;
$('#counter_turn').html(30);
      //    alert("number "+number);
      if(number===1&&player===1){
        $("#offline_play_area").css("pointer-events","none");
        var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+number+"/"+"box"+box_num);
        ref.update(box);
        box_array.push(id);
        console.log(box);
        player1_box=id;
        get_data();
      }

      else if(number===2&&player===2){
        $("#offline_play_area").css("pointer-events","none");
        var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+number+"/"+"box"+box_num);
        ref.update(box);
        player2_box=id;
        get_data();

      }
      else if(number===3&&player===3){

        //  alert(box_num);
        $("#offline_play_area").css("pointer-events","none");
        var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+number+"/"+"box"+box_num);
        ref.update(box);
        player3_box=id;
        get_data();

      }

      else if(number===4&&player===4){

        var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+number+"/"+"box"+box_num);
        ref.update(box);
        $("#offline_play_area").css("pointer-events","none");
        player4_box=id;
        get_data();
      }

      change=0;
      var color2;
      var color1=$(this).attr("class");
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);

      var color_array=[];
      id_array=[];
      color_array.push(color1);
      id_array.push(id);
      // function for deciding the winner

      //for forward direction
      for(var m =last+1;m<=last+3;m++)
      {
        var id2=first.toString()+m.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");

        //console.log("");
        //console.log(color1);
        //console.log(color2);
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }
      }

      check_array();



      id = $(this).attr('id');

      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];
      var color_array=[];
      color_array.push(color1);
      id_array.push(id);


      //for backwad direction
      for(var m=last-1;m>=last-3;m=m-1)
      {
        var id2=first.toString()+m.toString();
        id2=parseInt(id2);
        //console.log(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        //console.log(id2);
        //console.log(color1);
        //console.log(color2);
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }
      }


      check_array();


      id = $(this).attr('id');

      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);


      //for up_diagonal direction
      for(var m =last-1;m>=last-3;m--)
      {
        //console.log(id);
        first=parseInt(first)-1;

        var id2=first.toString() + m.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        //console.log(id2);
        //console.log(color1);
        //console.log(color2);
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }
      check_array();

      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);

      //for down_diagonal direction
      for(var m =last+1;m<=last+3;m++)
      {
        //console.log(id);
        first=parseInt(first)+1;

        var id2=first.toString() + m.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }
      check_array();

      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);

      //for up direction
      for(var m =first-1;m>=first-3;m--)
      {
        //console.log(id);

        var id2=m.toString() + last.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }

      check_array();

      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);
      //for down direction
      for(var m =first+1;m<=first+3;m++)
      {
        //console.log(id);

        var id2=m.toString() + last.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }

      check_array();

      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);
      //for diagonal_up_left direction
      for(var m=last+1;m<=last+3;m++)
      {
        //console.log(id);
        first=parseInt(first)-1;

        var id2=first.toString() + m.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }
      check_array();


      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);
      //for diagonal_down_left direction
      for(var m=first+1;m<=first+3;m++)
      {
        //console.log(id);
        last=parseInt(last)-1;

        var id2=m.toString() + last.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }
      check_array();


      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);

      //for center_left_two direction
      for(var m=last-1;m>=last-2;m--)
      {
        //console.log(id);
        //last=parseInt(last)-1;

        var id2=first.toString() + m.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }

      for( var m = last+1;m<=last+1;m++){

        var id2=first.toString() + m.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*  console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }

          else{
            //  break;
          }
        }
        else{
          //break;
        }
      }
      check_array();
      //  center_left_two end


      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);
      //for center_left_one direction
      for(var m=last-1;m>=last-1;m--)
      {
        //console.log(id);
        //last=parseInt(last)-1;

        var id2=first.toString() + m.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }
      }


      for( var m = last+1;m<=last+2;m++){

        var id2=first.toString() + m.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*  console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }

          else{
            //  break;
          }
        }
        else{
          //break;
        }
      }
      check_array();
      //  center_left_one end


      //for center_up_two direction
      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);
      for(var m=first-1;m>=first-2;m--)
      {
        //console.log(id);
        //last=parseInt(last)-1;

        var id2=m.toString() + last.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*  console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
              break;
          }
        }
        else{
          break;
        }

      }

      for( var m = first+1;m<=first+2;m++){

        var id2=m.toString() + last.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*  console.log(id2);
        console.log(color1);
        console.log(color2);
        */
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }

          else{
              break;
          }
        }
        else{
          break;
        }
      }
      check_array();
      //  center_up_two end

      //for center_down_two direction
      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);
      for(var m=first+1;m>=first+2;m++)
      {
        //console.log(id);
        //last=parseInt(last)-1;

        var id2=m.toString() + last.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*  console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }

      for( var m = first-1;m>=first-1;m--){

        var id2=m.toString() + last.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        /*  console.log(id2);
        console.log(color1);
        console.log(color2);*/
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }

          else{
            //  break;
          }
        }
        else{
          //break;
        }
      }
      check_array();
      //  center_down_two end

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //  center_diagonlal_left_up_two end
      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);
      var count=0;
      for(var m=first-1;m>=first-2;m--)
      {
        count=count+1;
        var last_p=parseInt(last)-count;
        //console.log(id);

        var id2=m.toString() + last_p.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        //  console.log(id2);
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }

          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }
      var count2=0;
      for( var m = first+1;m<=first+1;m++){
        count2=count2+1;
        var last_p=parseInt(last)+count2;
        var id2=m.toString() + last_p.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        //console.log(id2);
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }

          else{
            //  break;
          }
        }
        else{
          //break;
        }
      }
      check_array();
      //  center_diagonlal_left_up_two end


      ////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //  center_diagonlal_right_down_two end
      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);
      var count=0;
      for(var m=first+1;m<=first+2;m++)
      {
        count=count+1;
        var last_p=parseInt(last)+count;
        //console.log(id);

        var id2=m.toString() + last_p.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        //console.log(id2);
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }

          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }
      var count2=0;
      for( var m = first-1;m>=first-1;m--){
        count2=count2+1;
        var last_p=parseInt(last)-count2;
        var id2=m.toString() + last_p.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        //console.log(id2);
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }

          else{
            //  break;
          }
        }
        else{
          //break;
        }
      }
      check_array();
      //  center_diagonlal_left_down_two end


      ////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //  center_diagonlal_right_up_two end
      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];

      color_array.push(color1);
      id_array.push(id);
      var count=0;
      for(var m=first-1;m>=first-2;m--)
      {
        count=count+1;
        var last_p=parseInt(last)+count;
        //console.log(id);

        var id2=m.toString() + last_p.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        //console.log(id2);
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }

          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }
      var count2=0;
      for( var m = first+1;m<=first+1;m++){
        count2=count2+1;
        var last_p=parseInt(last)-count2;
        var id2=m.toString() + last_p.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        //  console.log(id2);
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }

          else{
            //  break;
          }
        }
        else{
          //break;
        }
      }
      check_array();
      //  center_diagonlal_right_up_two end


      ////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //  center_diagonlal_left_down_two end
      id = $(this).attr('id');
      var color2;
      var color1=$(this).attr("class");
      //console.log(color1);
      var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
      var last=id.toString().charAt( id.length-1 );
      first=parseInt(first);
      last=parseInt(last);
      id_array=[];

      var color_array=[];
      color_array.push(color1);
      id_array.push(id);
      var count=0;
      for(var m=first+1;m<=first+2;m++)
      {
        count=count+1;
        var last_p=parseInt(last)-count;
        //console.log(id);

        var id2=m.toString() + last_p.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        //console.log(id2);
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }
          else{
            //  break;
          }
        }
        else{
          //break;
        }

      }
      var count2=0;
      for( var m = first-1;m>=first-1;m--){
        count2=count2+1;
        var last_p=parseInt(last)+count2;
        var id2=m.toString() + last_p.toString();
        id2=parseInt(id2);
        var color2=$("#offline_play_area "+"#"+id2).attr("class");
        //console.log(id2);
        if(color1||color2){
          if(color1==color2){
            color_array.push(color2);
            id_array.push(id2);
          }

          else{
            //  break;
          }
        }
        else{
          //break;
        }
      }
      check_array();
      //  center_diagonlal_left_down_two end

      //checking if all color in array is same
      function check_array(){
        var color_num=1;
        for(var o=0;o<=4;o++){
          if(color_array[o]==color1){
            color_num=color_num+1;
          }

        }

        if(color_num===5){
          for(var a=0;a<=color.length;a++){
            if(color1==color[a]){
              //alert(color[a]+" win");
                $("#offline_play_area").css("pointer-events","none");
              final_id=id_array;
              final_color=color_array;
              console.log(id_array);
              var_get_data=false;

              var data={
                status:"",
                game_timer:""
              }
              if(game_send=='toe-room/'){
                var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"room_data/"+"game_timer");
                ref.remove();

              }
              var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+player);
              ref.update(data);

              modal=modal+1;
              if(modal===1){
								$(".chat_play_btn").css('display','none');
                winner_d();
                prepareInterstitial();
                //  $("#winner_coin").html(update_coin);
                setTimeout(function(){
                  //$("#winner_modal_btn").click();
//                  open_winner_modal_online();
//winner_sound.play()
if(window.location.hash!='#player'){
  document.getElementById('id08').style.display='block'

                  reset();
                  clearInterval(s_turn);
                  time=30;

                  setTimeout(function(){
//                    close_winner_modal_online();
document.getElementById('id08').style.display='none';
winner_sound.pause();
looser_sound.pause();
looser_sound.currentTime=0;
winner_sound.currentTime = 0;
$(".ready").fadeIn();
show_in();
$("#homepage").css('display','none');
                  },5000)
}
                },3000)

              }
              //alert(player);
              setTimeout(function(){
                var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+player+"/"+'box1');
                ref.remove();
                old_box='';
                player1_box='';
                player2_box='';
                player3_box='';
                player4_box='';

              },3000)
              game_no=game_no+1;
              var game_data={
                player_won:a,
                chance:chance,
                game_no:game_no
              }
              var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player1");
              ref.update(game_data);
              if(a===player){
                winner_sound.play();
                var winner_coin=batting_coin*(player_num-2);
                var append_img_won="<div class='remove_loss_modal'><img src='img/money.gif'  style='height:auto;width:230px;margin-top:0px' > <br><h1 style='color:green'>You Won</h1><br> <span style='font-size:20px;'><img src='img/coin2.png' style='height:auto;width:40px;'></img></span><span id='coin_result'  style='font-color:red;font-size:30px'>1000</span><br><br></div>"
                $(".body_append").append(append_img_won);
                $("#winner_name").html();
                $("#won_loss").html("You Won");
                $("#coin_result").html(winner_coin);


                $("#winning_coin").html("You won: "+winner_coin);
                winner_coin=winner_coin+account_coin;
                //  alert(player_num+" "+winner_coin)
                var data={
                  coin:winner_coin
                }
                var ref = firebase.database().ref("usersData/"+e);
                ref.update(data);

              }
              else{
                var append_img_loss="<div class='remove_winner_modal'> <hr><h3 id='winner_name'>"+name_array[a]+" Won </h3><img src='img/cry.gif'  style='height:auto;width:190px;margin-top:0px' > <br><h1 style='color:red'>You Loss!</h1><br> <span   style='font-size:20px;'><img src='img/coin2.png'  style='height:auto;width:40px;'></img></span><span id='result_coin'   style='font-color:red;font-size:30px'></span><br><br></div>"
                $(".winner_modal_header_online").append(append_img_loss);
                console.log(name_array[a]);
                //$("#winner_name").html(name_array[a]+" "+"Won");
                $("#won_loss").html("You Loss");
                $("#result_coin").html(batting_coin);
if(window.location.hash!='#player'){
  looser_sound.play();
}

              }
              color_num=0;
              //          alert("clicked");
            }
          }
        }
        //console.log("")
        color_array=[];
        id_array=[];
      }
      check_over();
    }
    else{
      //alert('Box is taken');
    }
  })
})
/////////////////////////finish/////////////////////////////////////////////////////////////
var final_id=[];
var final_color=[];
function winner_d(){
  for(var u=0;u<=3;u++){
    $('#'+final_id[u]).css('border','solid white 2px');
  }

  var t=0;
  in1=setInterval(function(){
    $('#'+final_id[t]).css('background-color','yellow');
    if(t===4){
      clearInterval(in1);
      t=-1;
      in2=setInterval(function(){
        $('#'+final_id[t]).css('background-color',final_color[0]);
        if(t===4){
          t=0;
          clearInterval(in2);
          winner_d();
        }
        t=t+1;
      },100);
    }
    t=t+1;
  },100)

}

var modal=0;
var check_length=4;
var room_name;
var room_password;

function host_room(game_send_data,z){
  game_send=game_send_data;
  room_name= document.getElementById("room_name1").value;
  //room_password= document.getElementById("room_password").value;

  console.log(room_name);
  console.log(room_password);
  host_multiplayer(game_send,z)
}

function reset(){
  //alert("resetting fthe form");
  $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"usersData/"+e+"/"+"coin.json", function(coin_ac) {
    if(coin_ac||coin_ac===0){
      main_account_coin = coin_ac;
      account_coin=coin_ac;

      if(main_account_coin>=batting_coin){
        //alert("ready");
      }
      else{
        //alert('coin_over')
        setTimeout(function(){
          open_coin_over_modal()

        },6000);
      }
      console.log(main_account_coin);
      //alert(main_account_coin);
      $("#main_account_coin").html(coin_ac);
      //         console.log(main_account_coin);
    }
    else{
      //  alert("vo");
    }
  });

  clearInterval(in1);
  clearInterval(in2);

  for(var t=0;t<=3;t++){
    $("#"+final_id[t]).css('border','');
  }
  $("#game_top").fadeOut();

  console.log(player);
  for(var o=0;o<=8;o++){
    for ( var i =1;i<=8;i++){
      $("#"+o.toString()+i.toString()).attr('class','');
      $("#"+o.toString()+i.toString()).css('background-color','');
      $("#"+o.toString()+i.toString()).css('background-image','');

      console.log("#"+o.toString()+i.toString());
      $("#offline_play_area").fadeOut();
      $("#frnd_list").fadeIn();
      $("#"+o).css('color','');

    }
  }
  game_status="room";
  var_start_game=true;
  var_chk_new_frnd=true;
  var_chk_ready=true;
  counts=false;
  modal=0;

  $("#play_btn").fadeIn();
  $("#counter").html("");
  $("#counter").css("display","block");
  chk_new_frnd();
  check_ready(1);
  get_player_won();
}

function get_player_won(){
  $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player1/"+"game_no.json", function(gm_no) {
    if(gm_no&&gm_no>1){
      //  alert(gm_no);
      $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player1/"+"chance.json", function(chance_) {
        if(chance_){

          var chance__=parseInt(chance_);
          chance=chance__;
          console.log(chance);
          $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player1/"+"player_won.json", function(won) {
            if(won){
              var won_=parseInt(won);
              get_data_num=won+1;
              if(host==true){
                //alert(get_player_data);
              }

              console.log(get_data_num);
            }
          })

          if (chance===no_of_player) {
            $("#offline_play_area #turn").html(name_array[1]+" turn");
            $("#offline_play_area #turn").css("color" ,color[1]);
            chance=0;
          }

          else{
            $("#offline_play_area #turn").html(name_array[chance+1]+" turn");
            $("#offline_play_area #turn").css("color" ,color[chance+1]);
          }
          //alert(chance);
        }
        else{
          //  alert("no chance");
        }
      })
    }
  })
}
//////////////////////////////chat section/////////////////////////////////////////////////////////////////////////////////////////////////////

var chat_to_send;
var my_chat=0;
function send_chat(){
  chat_to_send=document.getElementById('chat_in').value;
  console.log(chat_to_send);
  console.log(player);
  var chat_in={
    chat:chat_to_send
  }
  if(chat_to_send){
    my_chat=my_chat+1;
    var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+'player'+player);
    ref.update(chat_in);
    /*
    var chat_append_my="<span id="+my_chat+'chat_p_me'+" style='color:green;font-size:19px;'>player1: </span><span style='color:green;font-size:19px;' id="+my_chat+'chat_p_show_me'+"> </span><br>";
    $(".chat_show").append(chat_append_my);
    $("#"+my_chat+"chat_p_me").html('You: ');
    $("#"+my_chat+"chat_p_show_me").html(chat_to_send);
    */

    document.getElementById('chat_in').value='';
    chat_to_send='';
  }
}

function send1(chat_data,p){
  var message_to_send;
  if(chat_data){
    message_to_send=name_array[p]+": "+chat_data;
    event.preventDefault();
    var message = $('.message').first().clone();
    message.find('p').text(message_to_send);
    message.prependTo('.chat-container');
  }
  else if($('#chat_in').val()) {
    message_to_send=$('#chat_in').val();
    var chat_in={
      chat:message_to_send
    }
    message_to_send="You: "+$('#chat_in').val();
    var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+'player'+player);
    ref.update(chat_in);
    window.location.hash='#online_room';
    $("#id12").css('display','none');
  event.preventDefault();
  var message = $('.message').first().clone();
  message.find('p').text(message_to_send);


  message.prependTo('.chat-container');

  $('#chat_in').val('');
}
}


var p=1;
var chat_p_1;
var chat_p_2;
var chat_p_3;
var chat_p_4;
var count_chat=0;
function get_chat(){
  if(p!=player){
    $.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"tic "+"tac "+game_send+join_no+"/"+"player"+p+"/"+"chat.json", function(chat_f) {
      if(chat_f){
        if(p===1&&chat_p_1!=chat_f){
          chat_p_1=chat_f;
          count_chat=count_chat+1;
          send1(chat_f,p);
        }

        else if(p===2&&chat_p_2!=chat_f){
          chat_p_2=chat_f;
          count_chat=count_chat+1;
          send1(chat_f,p);

        }
        else if(p===3&&chat_p_3!=chat_f){
          chat_p_3=chat_f;
          count_chat=count_chat+1;
          send1(chat_f,p);
        }
        else if(p===4&&chat_p_4!=chat_f){
          chat_p_4=chat_f;
          count_chat=count_chat+1;

          send1(chat_f,p);
        }
        p=p+1;
        if(p===player_num||p>player_num){
          p=1;
        }
        else{
        }
        setTimeout(function(){
          get_chat();
        },500);
      }
      else{
        p=p+1;
        if(p===player_num||p>player_num){
          p=1;
        }
        setTimeout(function(){
          get_chat();
        },500);

      }
    })
  }
  else{
    p=p+1;
    if(p===player_num||p>player_num){
      p=1;
    }
    setTimeout(function(){
      get_chat();
    },500);
  }
}




var count_box=0;
function check_over(){
  for(var o=0;o<=8;o++){
    for ( var i =1;i<=8;i++){
      var id_o=$("#"+o.toString()+i.toString()).attr('class');
      if(id_o=='red'||id_o=='green'||id_o=='blue'||id_o=='brown'||id_o=='orange'||id_o=='silver'||id_o=='black'){
        count_box=count_box+1;
      };

    }
  }
  console.log(count_box);
  if(count_box>=64){
      $("#winner_name").html('Game Draw');
      open_winner_modal();
  }
  else{
    count_box=0;
  }
}


var modal7 = document.getElementById('id12');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal7) {
        modal7.style.display = "none";
window.location.hash="#online_room";
    }
}
