$("#multi").remove();
$("#counter_turn").css('display','none');
//alert("ranjit");
var player_num;
var no_of_player;
var modal=0;
var name_array=[null];

var img_array=[null,'img/eye1.gif','img/face.png','img/blue.gif','img/pink2.png','img/pink.png'];

  var  winner_sound = document.createElement("audio");
                  winner_sound.src = "audio/Winner.wav";
                  winner_sound.volume = 1;
                  winner_sound.autoPlay = false;
                  winner_sound.preLoad = true;
                  winner_sound.controls = true;

$("#close_play").attr('onclick','open_offline_exit_modal();');

$("#offline_play_area_table").addClass('offline_box');


function take_name(z){
player_num=z;
no_of_player=z;

$("#offline_play").css('display','none');
$("#skip_btn").fadeIn();
setTimeout(function(){
for(var p = 1;p<=z;p++){

var name_append="<div class='input-group' style='width:250px'><input id="+p+'player'+" type='text'  style='font-size:20px;' maxlength='15' placeholder="+'Player'+p+"  class='form-control' ><span class='input-group-addon' id="+p+'player_c'+" style='border:solid transparent;border-radius:5px' onclick='change_name("+p+")'><i class='glyphicon glyphicon-pencil' style='color:white'></i></span></div><br>";
$(".show_name").append(name_append);

document.getElementById(p+'player').value="Player"+p;
$("#"+p+'player').html("Player"+p);
$("#"+p+'player_c').css('background-color',color[p]);
$("#"+p+'player').attr('onclick','change_name('+p+')');

$("#"+p+'player').css("color",color[p]);

//alert(p);
}
var btn_append="<br><br><button style='margin-left:0px;margin-top:-40px' class='btn btn-primary btn-lg btnLightBlue' onclick='ready()''>Lets Play</button>"
$(".show_name").append(btn_append);
},50);
}


var count=1;
var p_num;

function change_name(p){
p_num = p;
$("#"+p+'player').attr("placeholder",'write your name ');

}

function ready(){
  $("#back_btn").css('display','none');
  $("#chat_modal_btn").css('display','none');
  $("#game_top").css('display','block');
  $("#close_play").css('display','block');
window.location.hash="#play";


  for(var i=1;i<=player_num;i++){
    var name=document.getElementById(i+'player').value;
    //alert("name"+name);
    if(name){
      name_array.push(name);
      name='';
    }
    else{
      name_array.push('Player'+i);
    }
  }
  game_start();
  console.log(name_array);
}


function submit_player_name(){
$("#skip_btn").fadeOut();
  var name=document.getElementById("player_name").value;
//alert("submit name");
$("#"+p_num+'player').html(name);

}






function game_start(){
  //$("#offline_play_area_table").css("margin-top","30%");

    $("#ofl").css("margin-top","20%");

  $(".offline").css('display','none');
  $("#offline_play_area").fadeIn(700);
  $("#offline_play_area #turn").html(name_array[1]+" turn");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var play_sound;

         play_sound = document.createElement("audio");
         play_sound.src = "audio/td_click.mpeg";
         play_sound.volume = 1;
         play_sound.autoPlay = false;
         play_sound.preLoad = true;
         play_sound.controls = true;


var chance=0;
var color=[null,"red","green","blue","orange","brown","silver","black"]

$(".offline_box td").click(function(){
  id=$(this).attr('id');
play_sound.play();
if(!$("#"+id).attr('class')){
  chance = chance+1;
     // obj.pause();
  //console.log(id_offline);
  for ( z = chance ; z<=chance;z++){
    var player_turn = "player"+z;
    player_color=color[z];
    var player_img=img_array[z];

    //var append=""
    $("#offline_play_area "+"#"+id).css("background-image","url("+player_img+")")
    $("#offline_play_area "+"#"+id).addClass(player_color);
    var box={
      box:id
    }

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

  change=0;
  var color2;
  var color1=$(this).attr("class");
  //console.log(color1);
  var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
  var last=id.toString().charAt( id.length-1 );
  first=parseInt(first);
  last=parseInt(last);

  var color_array=[];
  var id_array=[];
  color_array.push(color1);
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
        //alert(name_array[a]+" win");
  $('#offline_play_area').css('pointer-events','none');

            final_color=color_array;
            final_id=id_array;
          modal=modal+1;
          if(modal===1){
            if(window.location.hash=='#player'){
              winner_sound.play();
            }

            winner_d();
            setTimeout(function(){
              //$("#winner_modal_btn").click();

              open_winner_modal();
            },3000)
              console.log(id_array);
          }
          $("#winner_name").html(name_array[a]+" "+"Won");
          //alert[a];
          color_num=0

          //          alert("clicked");
        }
      }
    }
    //console.log("")
    color_array=[];
  }
  check_over();
}
else{
  //alert("box is taken");
}

});

var final_color=[];
var final_id=[];
var in1;
var in2;
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


function reset(){
//alert("resetting fthe form");
close_winner_modal();
clearInterval(in1);
clearInterval(in2);
winner_sound.pause();
winner_sound.currentTime=0;
for(var t=0;t<=3;t++){
  $('#'+final_id[t]).css('border','');
  $('#'+final_id[t]).css('background-color','');
}

$('#offline_play_area').css('pointer-events','');

modal=0;
//console.log(player);
for(var o=0;o<=8;o++){
  for ( var i =1;i<=8;i++){
    $("#"+o.toString()+i.toString()).attr('class','');
    $("#"+o.toString()+i.toString()).css('background-color','');
    $("#"+o.toString()+i.toString()).css('background-image','');
    $("#"+o.toString()+i.toString()).css('border','');

    console.log("#"+o.toString()+i.toString());
    $("#"+o).css('color','');

  }
}
final_id=[];
final_color=[];
count_box=0;
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


function close_offline(){
  $('#offline_play_area').css('display','none');
  $('#player').css('display','none');
  reload();
  /*
  $('#close_play').css('display','none');

  $('#homepage').css('display','block');

  $('.show_name').empty();
  window.location.hash='#homepage';
  reset();
*/
}
