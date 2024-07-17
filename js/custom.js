jQuery(document).ready(function(){

	jQuery('.slider').slick({
		dots: true,
		arrows: false,
		adaptiveHeight: false,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	
	jQuery('.faq_b_title').click(function() {
		jQuery(this).toggleClass('active');
		jQuery(this).parent().toggleClass('active');
		jQuery(this).next('.faq_b_text').slideToggle(200);
		return false;
	});
	
	jQuery('span.adapt_menu').click(function() {
		jQuery('.main_nav').slideToggle(200);
		jQuery(this).toggleClass('open');
		return false;
	});

	jQuery("a.scrollto").click(function() {
		var elementClick = jQuery(this).attr("href")
		var destination = jQuery(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
		  scrollTop: destination
		}, 800);
		return false;
	});
	
	jQuery('.go_slow').click(function () { 
		elementClick = this.hash;
		destination = jQuery(elementClick).offset().top;
		jQuery('body,html').animate( { scrollTop: destination }, 300 );
		return false;
	});


	jQuery.fn.getTitle = function() {
		var arr = jQuery('a.fancybox');
		jQuery.each(arr, function() {
			var title = jQuery(this).children('img').attr('title');
			jQuery(this).attr('title',title);
		})
	}
	var thumbnails = 'a:has(img)[href$=".bmp"],a:has(img)[href$=".gif"],a:has(img)[href$=".jpg"],a:has(img)[href$=".jpeg"],a:has(img)[href$=".png"],a:has(img)[href$=".BMP"],a:has(img)[href$=".GIF"],a:has(img)[href$=".JPG"],a:has(img)[href$=".JPEG"],a:has(img)[href$=".PNG"]';
	jQuery(thumbnails).each(function(){
		if(jQuery(this).has('img')) {
			if(jQuery(this).hasClass('fancybox')) {
				jQuery(this).getTitle();
			} else {
				jQuery(this).addClass('fancybox').attr('data-fancybox','image').getTitle();
			}
		}
	});  
	jQuery('a.fancybox').fancybox();



	jQuery('.entry iframe').each(function(){
		if(jQuery(this).attr('src').indexOf('youtube')!==-1){
			jQuery(this).wrap('<div class="video"></div>');
		}
	});
	jQuery('.entry table').each(function(){
		jQuery(this).wrap('<div class="entry_table"></div>');
	});

});