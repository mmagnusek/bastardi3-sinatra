var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-24083266-2']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function recordOutboundLink(category, action) {
  try {
    var pageTracker=_gat._getTracker("UA-15759162-1");
    pageTracker._trackEvent(category, action);
  }catch(err){}
}

TargetDate = "9/20/2012 8:00 PM";
BackColor = "none";
ForeColor = "white";
CountActive = true;
CountStepper = -1;
LeadingZero = true;
DisplayFormat = "%%D%% dní %%H%% hodin %%M%% minut %%S%% vteřin";
FinishMessage = "Nyní už můžete navštívit film ve vašin kinech!";

$(document).ready(function() {

  setInterval("checkAnchor()", 300);

  $('.slideshow').cycle({
		fx: 'fade',
		timeout: 10000
	});
  $(".lavaLamp").lavaLamp({ fx: "backout", speed: 700 });
  $f("audio", "http://releases.flowplayer.org/swf/flowplayer-3.2.3.swf", {
    //http://releases.flowplayer.org/swf/
    clip: {
      onBeforeFinish: function() {
        return false;
      }
    },

  	onLoad: function(){
      this.setVolume(50)
	  }
  });

  $("#aktuality_link").attr('href',"#aktuality");
  $("#o_filmu_link").attr('href',"#o_filmu");
  $("#eshop_link").attr('href',"#eshop");
  $("#herci_link").attr('href',"#herci");
  $("#z_nataceni_link").attr('href',"#z_nataceni");
  $("#promitani_link").attr('href',"#promitani");
  $("#pro_kina_link").attr('href',"#pro_kina");
  $("#partneri_link").attr('href',"#partneri");

  $(".flash").fadeOut(3000);
});

$(window).load(function () {
  var width = document.body.offsetWidth;
  var shiftWidth = 0;

  if( width < 1200) shiftWidth = (1200 - width) / 2;

  window.scroll(shiftWidth,0);
});

var currentAnchor = null;

function checkAnchor(){
	//Check if it has changes
	if(currentAnchor != document.location.hash){
		currentAnchor = document.location.hash;
		//if there is not anchor, the loads the default section
		if(currentAnchor) {
		  query = currentAnchor.substring(1);

      $.ajax({
        url: '/' + query + '.html',
        success: function(data) {
          changePageTitle(query);
          $(this).parent().addClass('back');
          $('#content-text').fadeOut(500, function(){
            $('#content-background').fadeIn();
            $('#content-text').html(data);
            $('#content-text').fadeIn(500);
            $(".actorPhoto").hide();
            $(".slideshow").show();
          });
          recordOutboundLink(query,query);
        }
      });
    }
	}
}

function changePageTitle(page_name){
  switch(page_name){
    case 'o_filmu':
      document.title = "Bastardi - Informace o novém českém filmu";
      break;
    case 'herci':
      document.title = "Bastardi - Film, ve kterém hraje mnoho známých herců";
      break;
    case 'z_nataceni':
      document.title = "Bastardi - Fotografie z natáčení";
      break;
    case 'promitani':
      document.title = "Bastardi - Kina kde promítáme";
      break;
    case 'partneri':
      document.title = "Bastardi - Naši partneři";
      break;
    case 'eshop':
      document.title = "Bastardi - Předměty ke koupi";
      break;
    case 'facebook':
      document.title = "Bastardi - Přidejte se mezi fanoušky stránky na facebooku";
      break;
    case 'pro_kina':
      document.title = "Bastardi - Pro kina";
      break;
    default :
      document.title = "Bastardi - Nový český film z prostředí praktického školství";
  }
}

function removeContent(){
  $('#content-background').fadeOut(500);
  $('li.back').fadeOut(200);
  $(".actorPhoto").hide();
  $(".slideshow").show();
  //lavaLamp.removeCurr();
}
function playMusic(){
  $f().play();
}
function stopMusic(){
  $f().stop()
}
