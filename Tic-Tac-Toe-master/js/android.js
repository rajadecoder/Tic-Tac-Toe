
$(document).ready(function(){
$("#homepage").fadeOut();
$("#offline_play_area").fadeIn();
})

var id;
var click=true;
var count=2;
$(document).ready(function(){
  var chance=0;
  var no_of_player=2;
  var color=["red","green","blue","brown","gold","orange"]
  var player_color;
  var z;
  // play offline three player
  $("#offline_play_area td").click(function(){
  chance = chance+1;
    id=$(this).attr('id');
  //console.log(id_offline);

    for ( z = chance ; z<=chance;z++){
      var player_turn = "player"+z;
      player_color=color[z];
      $("#offline_play_area "+"#"+id).css("background-color",player_color)
      $("#offline_play_area "+"#"+id).addClass(player_color);
      var box={
        box:id
        }
    //    console.log(player);

     if (chance===no_of_player) {
       $("#offline_play_area #turn").html(color[1]+" turn");
       $("#offline_play_area #turn").css("color" ,color[1]);
       chance=0;
     }

     else{
       $("#offline_play_area #turn").html(color[z+1]+" turn");
       $("#offline_play_area #turn").css("color" ,color[z+1]);

     }


    }

//    console.log(player_turn);
  //  console.log(player_color)
    change=0;
    var color2;
    var color1=$(this).attr("class");
    //console.log(color1);
    var first=id.toString().charAt( id.length-2 );//id.toString().slice(0);
    var last=id.toString().charAt( id.length-1 );
    first=parseInt(first);
    last=parseInt(last);

    var color_array=[];
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

    var color_array=[];
    color_array.push(color1);



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

    var color_array=[];
    color_array.push(color1);



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

    var color_array=[];
    color_array.push(color1);


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

    var color_array=[];
    color_array.push(color1);

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

    var color_array=[];
    color_array.push(color1);

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

    var color_array=[];
    color_array.push(color1);

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

    var color_array=[];
    color_array.push(color1);

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

    var color_array=[];
    color_array.push(color1);

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
        }
        else{
          //  break;
        }
      }
      else{
        //break;
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

    var color_array=[];
    color_array.push(color1);
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

    var color_array=[];
    color_array.push(color1);
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

    var color_array=[];
    color_array.push(color1);
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

    var color_array=[];
    color_array.push(color1);
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

  if(click=== true){
    android_click();
  }
  click=true;


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
          alert(color[a]+" win")
        }
}
      }
      //console.log("")
      color_array=[];
    }

  })
})



var color_array_android=[];
var color1_android;
var color2_android;
color_android=["green","blue"];
function android_click(){
click=false;
//alert("ly")
var id1;
color1_android="green";
var first_android=id.toString().charAt( id.length-2 );//id.toString().slice(0);
var last_android=id.toString().charAt( id.length-1 );
first_android=parseInt(first_android);
last_android=parseInt(last_android);
for(var m =last_android+1;m<=last_android+2;m++)
{
  var c=m-3;
  var d=m-1;
  var e=m;

var id1=first_android.toString()+c.toString();
var id2=first_android.toString()+d.toString();
var id3=first_android.toString()+e.toString();
//id1=first_android.toString()+c.toString()
  var id2=first_android.toString()+m.toString();
  id2=parseInt(id2);
  console.log(id2);
  color2_android=$("#offline_play_area "+"#"+id2).attr("class");
  console.log(color1_android);
  console.log(color2_android);
if(color1_android===color2_android){
  color_array_android.push(color2_android);
}
  //console.log(id2);

  }
console.log(color_array_android);

var left=Math.floor((Math.random() * 7) + 1);
var right=Math.floor((Math.random() * 7) + 1);
var id_random=left.toString()+right.toString();
var random=Math.floor((Math.random() * 10000) + 1);
//var id_random=parseInt(id)+position;
if(random%2==0){
if($("#"+id1).attr("class") == undefined){
$("#"+id1).click();
}
else if ($("#"+id2).attr("class") == undefined) {
$("#"+id2).click();
}
else if($("#"+id3).attr("class") == undefined){
  $("#"+id3).click();
//  color_array_android=[];
}
else if($("#"+id_random).attr("class") == undefined){
  $("#"+id_random).click();
}
}
else{
  if($("#"+id_random).attr("class") == undefined){
  $("#"+id_random).click();
}
}


}
