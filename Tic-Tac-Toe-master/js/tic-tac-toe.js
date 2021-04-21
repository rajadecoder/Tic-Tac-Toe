
  var chance=0;
  var color=["r","red","green","violet","blue"]
  var player_color;
  var id;
  var z;
  // play offline three player
  $("#offline_play_area td").click(function(){
alert("yes")
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
      //        console.log("player "+player);
      //      console.log("Z "+z);
      number=z;

      if (chance===no_of_player) {
        $("#offline_play_area #turn").html(name_array[z]+" turn");
        $("#offline_play_area #turn").css("color" ,color[1]);
        chance=0;
      }

      else{
        $("#offline_play_area #turn").html(name_array[z+1]+" turn");
        $("#offline_play_area #turn").css("color" ,color[z+1]);

      }


    }
    //    alert("number "+number);
    if(number===1&&player===1){
      $("#offline_play_area").css("pointer-events","none");
      var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+number+"/"+"box"+box_num);
      ref.update(box);
      box_array.push(id);
      console.log(box);
      //alert("sending");
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
    //  center_diagonlal_left_down_two end

    //checking if all color in array is same
    function check_array(){
      var color_num=1;
      for(var o=0;o<=check_length;o++){
        if(color_array[o]==color1){
          color_num=color_num+1;
        }

      }

      if(color_num===check_length+1){
        for(var a=0;a<=color.length;a++){
          if(color1==color[a]){
            //alert(color[a]+" win");
            var data={
              status:"",
              game_timer:""
            }
            var ref = firebase.database().ref("tic "+"tac "+game_send+join_no+"/"+"player"+player);
            ref.update(data);

            modal=modal+1;
            if(modal===1){
              $("#winner_modal_btn").click();
            }
            $("#winner_name").html(color[a]+" "+"Won");
            //alert[a];
            color_num=0;
            //    alert("clicked");
          }
        }
      }   
         color_array=[];
    }

  })
})
/////////////////////////finish/////////////////////////////////////////////////////////////



function reset(){
  //alert("resetting fthe form");
  console.log(player);
  for(var o=0;o<=8;o++){
    for ( var i =1;i<=8;i++){
      $("#"+o.toString()+i.toString()).attr('class','');
      $("#"+o.toString()+i.toString()).css('background-color','');
      console.log("#"+o.toString()+i.toString());
      $("#offline_play_area").fadeOut();
      $("#frnd_list").fadeIn();
      $("#"+o).css('color','');

    }
  }"#play_btn").fadeIn();
  $("#counter").html("");
  $("#counter").css("display","block");
  //chk_new_frnd();
//  check_ready(1);

}
