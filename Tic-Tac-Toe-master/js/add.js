//alert("add");
var admobid = {};

var video_add_1 ;
var video_add_2 ;
var interstitial_add_1 ;
var interstitial_add_2 ;
var banner_add_1 ;
var banner_add_2 ;
// calling add video links
$.get("https://tic-tac-toe-9fdbe.firebaseio.com/"+"video.json", function(my_add) {
if(my_add){
 console.log(my_add)

 // lets go
 admobid = { // for Android
   banner: my_add.banner_add_one,
   //ca-app-pub-3940256099942544/6300978111
   interstitial: my_add.innertial_add_one,
   rewardvideo: my_add.video_add_one
 };


 if( /(android)/i.test(navigator.userAgent) ) {
   admobid = { // for Android
     banner: my_add.banner_add_one,
     //ca-app-pub-3940256099942544/6300978111
     interstitial: my_add.innertial_add_one,
     rewardvideo: my_add.video_add_one
   };
 }

  else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
   admobid = { // for iOS
     banner: my_add.banner_add_one,
     //ca-app-pub-3940256099942544/6300978111
     interstitial: my_add.innertial_add_one,
     rewardvideo: my_add.video_add_one
   };
 } else {
   admobid = { // for Windows Phone
     banner: my_add.banner_add_one,
     //ca-app-pub-3940256099942544/6300978111
     interstitial: my_add.innertial_add_one,
     rewardvideo: my_add.video_add_one
   };
 }



}
})
/////////////  'ca-app-pub-7555788873308464/4074670095'
console.log(admobid.banner);

function createSelectedBanner(){
  if(AdMob) AdMob.createBanner({
    adId: admobid.banner,
    overlap: true,
    //offsetTopBar: false,
    adSize: 'SMART_BANNER',
    position: 'BOTTOM_CENTER',
  });
}


function onDeviceReady() {
  if (! AdMob) { alert( 'admob plugin not ready' ); return; }

  initAd();
//  rewardPrepare()

    AdMob.removeBanner();
    AdMob.hideBanner();
    //alert("roealoded");
  // display a banner at startup

}

function initAd(){
  AdMob.getAdSettings(function(info){
    console.log('adId: ' + info.adId + '\n' + 'adTrackingEnabled: ' + info.adTrackingEnabled);
  }, function(){
    console.log('failed to get user ad settings');
  });

  AdMob.setOptions({
     adSize: 'SMART_BANNER',
    position: 'BOTTOM_CENTER',
    isTesting: true, // set to true, to receiving test ad for testing purpose
    bgColor: 'lightgray', // color name, or '#RRGGBB'
     autoShow: true, // auto show interstitial ad when loaded, set to false if prepare/show
     offsetTopBar: true, // avoid overlapped by status bar, for iOS7+
  });

  // new events, with variable to differentiate: adNetwork, adType, adEvent
  $(document).on('onAdFailLoad', function(e){
    // when jquery used, it will hijack the event, so we have to get data from original event
    if(typeof e.originalEvent !== 'undefined') e = e.originalEvent;
    var data = e.detail || e.data || e;
alert("Failed to load");
  /*  alert('error: ' + data.error +
        ', reason: ' + data.reason +
        ', adNetwork:' + data.adNetwork +
        ', adType:' + data.adType +
        ', adEvent:' + data.adEvent);*/ // adType: 'banner', 'interstitial', etc.
  });


  $(document).on('onAdPresent', function(e){
          if(typeof e.originalEvent !== 'undefined') e = e.originalEvent;
          var data = e.data || e;
          if(data.adType === 'interstitial') {
            Interstitial_status=false;
          }
          else if(data.adType === 'rewardvideo') {

          //  alert("reward");
          getReward();

                }
      });

  $(document).on('onAdLeaveApp', function(e){
    alert('unfinished');
  });


  // test interstitial ad


  $(document).on('resume', function(){
    AdMob.showInterstitial();
  });
}

// test the webview resized properly
$(window).resize(function(){
  //$('#textinfo').html('web view: ' + $(window).width() + " x " + $(window).height());
});

$(document).ready(function(){
  //$('#btn_showfull').prop('disabled', true);
  //$('#btn_showvideo').prop('disabled', true);

  // on mobile device, we must wait the 'deviceready' event fired by cordova
  if(/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent)) {
    document.addEventListener('deviceready', onDeviceReady, false);
  } else {
    onDeviceReady();
  }
});



  // test rewarded video ad
function rewardPrepare(){
  //alert("prepare");


AdMob.prepareRewardVideoAd({
    adId:admobid.rewardvideo,
    autoShow: false,
  });
}

document.addEventListener('onAdFailLoad', function(e){
    // handle the event
    alert("failed to load");
});

function addCancel(){
  $("body").css('background-image','url("img/back2.jpg")');
  $("#cross").css('display','none');
  $(".loader").css('display','none');
  $("#homepage").css('display','block');
  //$("body").css('background-color','lightgray').delay(800);

}

function prepareInterstitial(){
    AdMob.prepareInterstitial({
      adId:admobid.interstitial,
      autoShow:false,
    });
  }

  $(document).on('onAdLoaded', function(e){
          if(typeof e.originalEvent !== 'undefined') e = e.originalEvent;
          var data = e.data || e;
          if(data.adType === 'interstitial') {
            Interstitial_status=false;
          }
          else if(data.adType === 'rewardvideo') {
            reward_status=true;
          }
      });
var Interstitial_status=false;
var reward_status=false;



$(document).on('onAdDismiss', function(e){
        if(typeof e.originalEvent !== 'undefined') e = e.originalEvent;
        var data = e.data || e;
        if(data.adType === 'interstitial') {
            $("#homepage").css('display','none');
        }
        else if(data.adType === 'rewardvideo') {
addCancel();        }
    });



function reward_show(){
  $("#id15").css('display','none');
  $("#cross").fadeIn();
  $(".loader").fadeIn();
  $("#homepage").css('display','none');

  $("#online_room").css('display','none');

  $("body").css('background-image','url()');
  $("body").css('background-color','lightgray');
/*
if(reward_status===true){
  AdMob.showRewardVideoAd();
}
else{
*/
  AdMob.prepareRewardVideoAd({
      adId:admobid.rewardvideo,
      autoShow: true,
    });
  //rewardPrepare()
//}

}


function show_in(){
  AdMob.showInterstitial();

}
