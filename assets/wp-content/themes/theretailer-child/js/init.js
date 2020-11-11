

jQuery(document).ready(function ($) {
	
	// Hide slider when empty
	$('.wp-block-gbt-slider').each(function() {

		var wrapper = $(this).find('.swiper-wrapper');

		if( wrapper.children('div.swiper-slide').length == 0 ) {

			$(this).remove();

		}
	});
});

  jQuery(document).ready(function ($) {

	$( "#wall-btn" ).click(function() {

		$('.gbtr_poduct_details').toggleClass("see-on-wall");
		$(this).toggleClass("back");
		$('#wall-btn.button').text("SEE ON WALL");
		$('.button.back').text("BACK TO ARTWORK");
		$('.button.back').css({"box-shadow":"2px 2px 3px rgba(0, 0, 0, 0.75);"});
		$(".artwork").toggleClass("on-wall");
		$(".gbtr_poduct_details_left_col").toggleClass("on-wall");
		$(".floor").toggleClass("furniture-outer-wrapper");
		$('#wall').removeAttr('class');
		$('#wall').attr('class', '');
		$('#wall')[0].className = '';
		$('.woocommerce-product-gallery__image:nth-child(n+2)').removeClass('flex-active-slide');
		$('.woocommerce-product-gallery__image:first-child').addClass('flex-active-slide');

	  });
	function handleSelectBackgroundColor(){
		$('#color label').click(function(){

			var $this = jQuery(this);
			var thisIndex = parseInt($this.index(), 10) + 1;
			var classname = 'wall-' + thisIndex;
			jQuery('#wall').attr('class', '').addClass(classname);
		});

		  
	}
	handleSelectBackgroundColor();
	
	function handleSelectImageFurniture(){
		$(".furniture li img").click(function(){ 
			$('#showPictureFurniture').empty();
			var url = $(this).attr('src');	
			$('.show-furniture').prepend('<img id="theImg"/>');
			$('#theImg').attr('src', url)
		});
	}
	handleSelectImageFurniture();



	var totalFurniture =  parseInt($('.furniture > li').size());
	var furnitureWidth = parseInt($('.furniture > li:last-child').outerWidth());
	var totalWidth = totalFurniture * furnitureWidth;
	jQuery('.furniture').width(totalWidth);
	
	if(totalFurniture >= 4){
		jQuery('#furNext').removeClass('inactive');	
	}
	var nextLastItemVisible = 4;
	var prevFirstItemVisible = nextLastItemVisible - 2;
	var thumbnailsSliding = false;
	
	jQuery('#furNext').click(function(){
		var $this = jQuery(this);
		
		if(thumbnailsSliding === false && !$this.hasClass('inactive')){
			thumbnailsSliding = true;
		
		var currLeftMargin = parseInt(jQuery('.furniture').css('margin-left'),10);
		currLeftMargin = currLeftMargin - furnitureWidth;
		$this.addClass('inactive');	
		if(nextLastItemVisible < totalFurniture){
		jQuery('.furniture').css('margin-left',currLeftMargin+'px');
		jQuery('.furniture').animate({marginLeft:currLeftMargin+'px'},300,function(){
			thumbnailsSliding = false;
		});
		$this.removeClass('inactive');
		jQuery('#furPrev').removeClass('inactive');
		nextLastItemVisible++;
		prevFirstItemVisible = nextLastItemVisible - 2;
			if(nextLastItemVisible == totalFurniture){
				$this.addClass('inactive');	
			}
		}else{
		$this.addClass('inactive');		
		}
		}
	});
	
	jQuery('#furPrev').click(function(){
		var $this = jQuery(this);
		
		if(thumbnailsSliding === false && !$this.hasClass('inactive')){
			thumbnailsSliding = true;
		
		var currLeftMargin = parseInt(jQuery('.furniture').css('margin-left'),10);
		currLeftMargin = currLeftMargin + furnitureWidth;
		$this.addClass('inactive');	
		if(prevFirstItemVisible > 1){
		jQuery('.furniture').css('margin-left',currLeftMargin+'px');
		jQuery('.furniture').animate({marginLeft:currLeftMargin+'px'},300,function(){
			thumbnailsSliding = false;
		});
		$this.removeClass('inactive');
		jQuery('#furNext').removeClass('inactive');
		prevFirstItemVisible--;
		nextLastItemVisible = prevFirstItemVisible + 2;
			if(prevFirstItemVisible == 2){
				$this.addClass('inactive');	
			}
		}else{
		$this.addClass('inactive');	
		}
		}
	});
		
	$('.offer').click(function(){
		$("#makeOffer").toggleClass("open");

	});
	$('#close').click(function(){
		$("#makeOffer").removeClass("open");
	});
	$('#add_message').click(function(){
		$('#message').css({'display':'block'});
	});

	$('.menu-toggle').click(function(){
		$(this).toggleClass("on");
		$('.menu-mobile').toggleClass("active");
		$('.menu-mobile_always-show .sub-menu').removeClass("active");
	});
	$('.store').click(function(){
		$('.menu-mobile_always-show .sub-menu').toggleClass("active");
		$('.menu-mobile').removeClass("active");
		$('.menu-toggle').removeClass("on");
	});

	$(window).scroll(function(){
		var sticky = $('.header-mobile'),
			scroll = $(window).scrollTop();
	  
		if (scroll >= 100){
			sticky.addClass('fixed');
			$('.menu-mobile').addClass('fixed');
		} 

		else {
			$('.menu-mobile').removeClass('fixed');
			sticky.removeClass('fixed');
		}
		
	  });

	

	// menu mobile
	$(function(){
  
		$('.menu-mobile li.menu-item-has-children > a').on('click',function(event){
		  event.preventDefault()

		  $(this).parent().find('ul').toggle(300);
		  $('.menu-mobile li ul li.menu-item-has-children ul').css({"display" : "none"});

		  $(this).parent().siblings().find('ul').hide(200);
		  
		  //Hide menu when clicked outside
		  $(this).parent().find('ul').mouseleave(function(){  
			var thisUI = $(this);
			$('html').click(function(){
			  thisUI.hide();
			  $('html').unbind('click');
			});
		  });
		});
	}); 
	$(function(){
  
		$('.menu-mobile li.menu-item-has-children ul li.menu-item-has-children > a').on('click',function(event){
		  event.preventDefault()

		  $(this).parent().find('ul').toggle(300);


		  $(this).parent().siblings().find('ul').hide(200);
		  
		  //Hide menu when clicked outside
		  $(this).parent().find('ul').mouseleave(function(){  
			var thisUI = $(this);
			$('html').click(function(){
			  thisUI.hide();
			  $('html').unbind('click');
			});
		  });
		});
	}); 


});

