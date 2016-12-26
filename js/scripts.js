include("js/jquery.color.js");
include("js/jquery.backgroundpos.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include("js/jquery.fancybox-1.3.4.pack.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/bgStretch.js");
include("js/forms.js");
include("js/MathUtils.js");
include("js/jcarousellite_1.0.1.min.js");
include("js/jquery.cycle.all.min.js");

function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = false,
    content, mh, h;

function addAllListeners() {
    //accordion
    $('.list1>li').find('>p').slideUp(0).end()
    .children('a').hover(
        function (){
            if (!$(this).parent().hasClass('active'))
                $(this).parent().addClass('hover')
        },
        function (){
            if (!$(this).parent().hasClass('active'))
                $(this).parent().removeClass('hover')   
        }
    )
    .click(function (e){
        if (!$(this).parent().hasClass('active')){
            if ($(this).parent().parent().children('li').hasClass('active')){
                $(this).parent().parent().children('li.active').removeClass('active')
                    .children('p').stop().slideUp(400);
            }
            $(this).parent().addClass('active').end()
                   .siblings('p').stop().slideDown(400).end()
                   .children('span').stop().animate({'backgroundPosition':'center bottom'},400,'easeOutExpo').end()
                   .parent().parent().find('li.hover').not('.active').removeClass('hover')
                   .find('>a>span').stop().animate({'backgroundPosition':'center top'},400,'easeOutExpo');
                   
        }else{
            $(this).parent().removeClass('active').end()
                .siblings('p').stop().slideUp(400).end()
                .children('span').stop().animate({'backgroundPosition':'center top'},400,'easeOutExpo')
        }
        e.preventDefault();
    });
    //end accordion
    $('.prevBtn').hover(
        function(){
        	$(this).stop().animate({'backgroundPosition':'right center'},300,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'backgroundPosition':'left center'},500,'easeOutCubic'); 
        }
    );  
    $('.nextBtn').hover(
        function(){
        	$(this).stop().animate({'backgroundPosition':'left center'},300,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'backgroundPosition':'right center'},500,'easeOutCubic'); 
        }
    );
    $('.list2>li>a,.list3>li>a').hover(
        function(){
        	$(this).children('span').stop().animate({'backgroundPosition':'center bottom'},300,'easeOutExpo');  
        },
        function(){
            $(this).children('span').stop().animate({'backgroundPosition':'center top'},300,'easeOutExpo'); 
        }
    );  
    $('.list4>li>a')
    .find('strong').css('top','200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block',opacity:'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},350,'easeInOutExpo');
            } else { 
                $(this).children('.sitem_over').stop().show().end()
                .find('strong').stop().show().css({'top':'0'});
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},1000,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},1000,'easeOutQuad');  
            } else {
                $(this).children('.sitem_over').stop().hide().end()
                .find('strong').stop().hide();
            }            
        }
    );
    var val1 = $('.readMore').css('color')
    $('.readMore').hover(
        function(){
        	$(this).stop().animate({'color':'#444228'},350,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'color':val1},500,'easeOutCubic');  
        }
    );
    var val2 = $('.readMore2').css('color')
    $('.readMore2').hover(
        function(){
        	$(this).stop().animate({'color':'#c7c569'},350,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'color':val2},500,'easeOutCubic');  
        }
    );  
}

$(document).ready(ON_READY);
function ON_READY() {
    /*SUPERFISH MENU*/   
    $('.menu #menu').superfish({
	   delay: 800,
	   animation: {
	       height: 'show'
	   },
       speed: 'slow',
       autoArrows: false,
       dropShadows: false
    });
}

function showSplash(){
    $('.menu').css('overflow','hidden').stop(true,true).delay(500).animate({'marginTop':'611px'},500,'easeOutExpo');
}

function hideSplash(){
    $('.menu').css('overflow','visible').stop(true,true).animate({'marginTop':'118px'},500,'easeOutExpo');
}

function hideSplashQ(){
    $('.menu').css({'overflow':'visible','marginTop':'118px'});
}

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').fadeOut();
    
    if ($('.slogans').length) {
        $('.slogans').cycle({
            fx: 'curtainY',
            speed: 700,
    		timeout: 0,              
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    var ind = 0;
    var len = $('.pagin>li').length;
    $('.pagin>li>a').bind('click',function(){
        ind = $(this).parent().index();
        $('.pagin>li').each(function(index,elem){if (index!=ind){$(this).removeClass('active');}});
        $(this).parent().addClass('active');
        $('.slogans').cycle(ind);
    });
    
    $(".slider").jCarouselLite({
        btnNext: ".nextBtn",
        btnPrev: ".prevBtn",
        scroll:2,
        visible: 2,
        easing: 'easeOutExpo',
        speed: 700
    });
    
    $('.list4>li>a').attr('rel','appendix')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    $('.list4>li>a').fancybox({
        'centerOnScroll': true
    });
    
    //content switch
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'visibility':'hidden','width':'0'});
            hideSplashQ();
        },
        actFu:function(_){            
            if(_.curr){
                if (_.n == 0){
                    showSplash();
                } else {
                    hideSplash();
                }
                h = parseInt( _.curr.outerHeight(true));
                content.children('ul').css({'height':h});
                $(window).trigger('resize');
                
                _.curr
                    .css({'left':'-2000px','visibility':'visible','width':'100%'}).stop(true).delay(100).show().animate({'left':'0px'},{duration:800,easing:'easeInOutExpo'});
            }   
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'left':'2000px'},{duration:800,easing:'easeInOutExpo',complete:function(){
                            if (_.prev){
                                _.prev.css({'visibility':'hidden','width':'0'});
                            }
                        }
		              });
            }            
  		}
    });
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_splash',
        hoverIn:function(li){
            $('>a>span:first-child', li).stop().animate({'marginTop': '100px'},300,'easeOutBack');
            $('>a>span:first-child+span', li).stop().animate({'top': '0px'},300,'easeOutBack');
            $('>strong',li).stop().animate({'backgroundPosition':'center bottom'},400,'easeOutExpo');
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                $('>a>span:first-child', li).stop().animate({'marginTop': '0px'},500,'easeOutExpo');
                $('>a>span:first-child+span', li).stop().animate({'top': '-100px'},500,'easeOutExpo');
                $('>strong',li).stop().animate({'backgroundPosition':'center top'},500,'easeOutCubic');
            }
        }
    })
    .navs(function(n){	
   	    $('#content').tabs(n);
   	});
    
    
    setTimeout(function(){
        $('#bgStretch').bgStretch({
    	   align:'leftTop',
           autoplay: false,
           navs:$('.pagin').navs({})
        })
    },0);
    
    setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
    addAllListeners();
    
    $(window).trigger('resize');
    mh = parseInt($('body').css('minHeight'));
}

$(window).resize(function (){
    if (content) {
        $('body').css({'minHeight':mh*h/473})
        var currH = (h+294);
        content
            .stop().animate({'top':(windowH()-currH)*.5+20,'height':currH},500,'easeOutCubic')
            .css('overflow','visible')
    }
});

function listen(evnt, elem, func) {
    if (elem.addEventListener)  // W3C DOM
        elem.addEventListener(evnt,func,false);
    else if (elem.attachEvent) { // IE DOM
        var r = elem.attachEvent("on"+evnt, func);
    return r;
    }
}
listen("load", window, ON_LOAD);