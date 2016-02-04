//слайдеры
setTimeout(slider, 2000, 1);
setTimeout(slider2, 3000, 1);

//падение
jQuery(window).scroll(function(){ 
	paral();
});

jQuery(window).load(function(){ 
	if (jQuery('body').hasClass('page-id-22')) {
		margins();
	}
	if (jQuery('body').hasClass('single-product')) {
		mlvariations();
	}
	if (jQuery('body').hasClass('page-id-5')) {
		jQuery('.carousel-inner .item').unwrap().unwrap();
		jQuery('.carousel-inner .item:first-child').addClass('active');
		noevents();
	}
}); 

function slider(k) {
	if (k == 7) {
		jQuery('.myslider img').eq(k-1).css('opacity','0');
		jQuery('.myslider img').eq(0).css('opacity','1');
		k=1;
	}
	else {
		jQuery('.myslider img').eq(k-1).css('opacity','0');
		jQuery('.myslider img').eq(k).css('opacity','1');
		k++;
	}
	setTimeout(slider, 8000, k);
}

function slider2(k) {
	if (k == 7) {
		jQuery('.footsliderinner img').eq(k-1).css('opacity','0');
		jQuery('.footsliderinner img').eq(0).css('opacity','1');
		k=1;
	}
	else {
		jQuery('.footsliderinner img').eq(k-1).css('opacity','0');
		jQuery('.footsliderinner img').eq(k).css('opacity','1');
		k++;
	}
	setTimeout(slider2, 6000, k); 
} 

function paral() {
	prokrut = jQuery(this).scrollTop()/*- prokrut*/;
	var iznpadl1 = 20;
	var iznpadl2 = 150;
	var iznpadl3 = 200;
	var iznpadl4 = 354; 
	var iznpadl5 = 390; 
	var iznpadr1 = 20;
	var iznpadr2 = 25;
	var iznpadr3 = 180;
	var iznpadr4 = 220;
	var iznpadr5 = 550;
	var iznpadr6 = 320; 
	var iznpadr7 = 347; 
	var iznpadr8 = 430; 
	if (prokrut <= 0) {
		jQuery('.padleft').css('position','absolute');
		jQuery('.padright').css('position','absolute');
		jQuery('#padl1').css('top', iznpadl1 + 'px');
		jQuery('#padl2').css('top', iznpadl2 + 'px');
		jQuery('#padl3').css('top', iznpadl3 + 'px');
		jQuery('#padl4').css('top', iznpadl4 + 'px');
		jQuery('#padl5').css('top', iznpadl5 + 'px');
		jQuery('#padr1').css('top', iznpadr1 + 'px');
		jQuery('#padr2').css('top', iznpadr2 + 'px');
		jQuery('#padr3').css('top', iznpadr3 + 'px');
		jQuery('#padr4').css('top', iznpadr4 + 'px');
		jQuery('#padr5').css('top', iznpadr5 + 'px');
		jQuery('#padr6').css('top', iznpadr6 + 'px');
		jQuery('#padr7').css('top', iznpadr7 + 'px');
		jQuery('#padr8').css('top', iznpadr8 + 'px');
	}
	if (prokrut > 0) {
		jQuery('.padleft').css('position','fixed');
		jQuery('.padright').css('position','fixed');
		var play1 = -0.4*prokrut;   
		var play2 = -0.75*prokrut;
		var play3 = -0.5*prokrut;
		var npadl1 = play1 + iznpadl1;
		var npadl2 = play1 + iznpadl2;
		var npadl3 = play1 + iznpadl3;
		var npadl4 = play1 + iznpadl4;
		var npadl5 = play1 + iznpadl5;
		var npadr1 = play1 + iznpadr1;
		var npadr2 = play1 + iznpadr2;
		var npadr3 = play1 + iznpadr3;
		var npadr4 = play1 + iznpadr4;
		var npadr5 = play1 + iznpadr5;
		var npadr6 = play1 + iznpadr6;
		var npadr7 = play1 + iznpadr7;
		var npadr8 = play1 + iznpadr8;
	
		jQuery('#padl1').css('top', npadl1 + 'px');
		jQuery('#padl2').css('top', npadl2 + 'px');
		jQuery('#padl3').css('top', npadl3 + 'px');
		jQuery('#padl4').css('top', npadl4 + 'px');
		jQuery('#padl5').css('top', npadl5 + 'px');
		jQuery('#padr1').css('top', npadr1 + 'px');
		jQuery('#padr2').css('top', npadr2 + 'px');
		jQuery('#padr3').css('top', npadr3 + 'px');
		jQuery('#padr4').css('top', npadr4 + 'px');
		jQuery('#padr5').css('top', npadr5 + 'px');
		jQuery('#padr6').css('top', npadr6 + 'px');
		jQuery('#padr7').css('top', npadr7 + 'px');
		jQuery('#padr8').css('top', npadr8 + 'px');
		
		var povl1 = prokrut/300*(-20);
		var povl2 = prokrut/300*15;
		var povl3 = prokrut/300*(-10);
		var povl4 = prokrut/300*15;
		var povl5 = prokrut/300*15;
		var povr1 = prokrut/300*(-10);
		var povr2 = prokrut/300*20;
		var povr3 = prokrut/300*(-10);
		var povr4 = prokrut/300*(-15);
		var povr5 = prokrut/300*(-15);
		var povr6 = prokrut/300*(-15);
		var povr7 = prokrut/300*15;
		var povr8 = prokrut/300*(-15);
		jQuery('#padl1').css('transform','rotate(' + povl1 + 'deg)');
		jQuery('#padl2').css('transform','rotate(' + povl2 + 'deg)');
		jQuery('#padl3').css('transform','rotate(' + povl3 + 'deg)');
		jQuery('#padl4').css('transform','rotate(' + povl4 + 'deg)');
		jQuery('#padl5').css('transform','rotate(' + povl5 + 'deg)');
		jQuery('#padr1').css('transform','rotate(' + povr1 + 'deg)');
		jQuery('#padr2').css('transform','rotate(' + povr2 + 'deg)');
		jQuery('#padr3').css('transform','rotate(' + povr3 + 'deg)');
		jQuery('#padr4').css('transform','rotate(' + povr4 + 'deg)');
		jQuery('#padr5').css('transform','rotate(' + povr5 + 'deg)');
		jQuery('#padr6').css('transform','rotate(' + povr6 + 'deg)');
		jQuery('#padr7').css('transform','rotate(' + povr7 + 'deg)');
		jQuery('#padr8').css('transform','rotate(' + povr8 + 'deg)');
	}
}

function noevents() {
	if(jQuery('.eo-events-shortcode li').hasClass('eo-no-events')) {
		jQuery('.mainpage').addClass('mynoevents'); 
		jQuery('.eo-events-shortcode').remove();
		jQuery('.nextevent').remove();
		jQuery('#myCarousel').remove();
	}
}

function margins() {
	var s = jQuery('.categoryicon').css('width'); 
	s = s.replace('px',''); 
	for(i = 1; i <= 7; i++) {
		var imgw = jQuery('.categoryicons a:nth-child(' + i + ') img').css('width');
		imgw = imgw.replace('px','');
		var imgh = jQuery('.categoryicons a:nth-child(' + i + ') img').css('height');
		imgh = imgh.replace('px','');
		osl = (s - imgw)/2;
		osv = (100 - imgh)/2;
		jQuery('.categoryicons a:nth-child(' + i + ') img').css('left',osl + 'px');
		jQuery('.categoryicons a:nth-child(' + i + ') img').css('top',osv + 'px');
	}
}

function mlvariations() {
	jQuery('#pa_liter-capacity').attr('size','4'); 
	jQuery('#pa_liter-capacity option:first-child').remove(); 
	jQuery('#pa_liter-capacity').wrap('<div class="mlwrapper"></div>')
	jQuery('.variations .label').remove(); 
	jQuery('#pa_liter-capacity option[value="30ml"]').appendTo('#pa_liter-capacity'); 
	jQuery('#pa_liter-capacity option[value="50ml"]').appendTo('#pa_liter-capacity'); 
	jQuery('#pa_liter-capacity option[value="100ml"]').appendTo('#pa_liter-capacity'); 
	jQuery('#pa_liter-capacity option[value="200ml"]').appendTo('#pa_liter-capacity'); 
}

//Clicks
jQuery('.product-box').click(function() {
	var k = jQuery(this).children().attr('class');
	if (k == 'mydesigned') {
		location.href = '/my-designed';
	}
	else if (k == 'myambient') {
		location.href = '/product-category/my-own-atmosphere';
	}
	else if (k == 'myaccessory') {
		location.href = '/my-own-accessories';
	}
	else {
		location.href = '/my-own';
	}
});

var addons ="";
jQuery(".stage4 .checkbox-inline input").change(function(){
    if(this.checked){
		addons = addons + ' , ' + jQuery(this).val();
    }
	else {
	   addons = addons.replace(' , ' + jQuery(this).val(), '');
    }
});

var gender = '';
var maxstage = 1;

jQuery(".selectimgs img").click(function() {
	var ds = jQuery( this ).attr('data-stage'); 
	var index = jQuery(ds + " .selectimgs img" ).index( this );
	index = index + 2;
	jQuery(ds + " select :nth-child(" + index + ")").attr("selected", "selected");
	index--;
	jQuery(ds + " .selectspans span").css("text-decoration", "none");
    jQuery(ds + " .selectspans span:nth-child(" + index + ")").css("text-decoration", "underline");
	if( jQuery(ds + ' select').val() !='' ) {
		jQuery('.next').removeClass('disabled');
	}
	else {
		jQuery('.next').addClass('disabled');
	}
});

jQuery(".iphonespan").click(function() {
	var ds = jQuery( this ).attr('data-stage'); 
	var index = jQuery(ds + " .iphonespan" ).index( this );
	index = index + 2;
	jQuery(ds + " select :nth-child(" + index + ")").attr("selected", "selected");
	index--;
	jQuery(ds + " .selectspans span").css("text-decoration", "none");
    jQuery(ds + " .selectspans span:nth-child(" + index + ")").css("text-decoration", "underline");
	if( jQuery(ds + ' select').val() !='' ) {
		jQuery('.next').removeClass('disabled');
	}
	else {
		jQuery('.next').addClass('disabled');
	}
});

jQuery('.iphone .iphonenext').addClass('next');
jQuery('.next').click(function() {
	var stagenumber = jQuery('.stagetitle').html().replace('Stage #',''); 
	jQuery('.stage' + stagenumber).css('display','none');
	var prpr = (stagenumber)*20 + '%';
	jQuery('.progress-bar').css('width' , prpr);
	if (stagenumber == 1) {
		gender = jQuery(this).attr('id');
		jQuery('#hiddengender').attr('value' , gender);
		jQuery('.stage2.' + gender + ' select').attr('name' , 'desire');
		jQuery('.stage3.' + gender + ' select').attr('name' , 'myself');
		jQuery('.bbuttons').css('display','inline-block');
		jQuery('.progress').css('display','block');
		jQuery('.summary').css('display','block');
	}
	if (stagenumber == 6) {
		jQuery('.ownparfumeform').addClass('can-submit');
		jQuery('.ownparfumeform').submit();
	}
	else {
		if (stagenumber == 5) {
			jQuery('.next').html('Submit >>>');
		}
		stagenumber++;
		jQuery('.stagetitle').html('Stage #' + stagenumber);
		jQuery('.stage' + stagenumber + '.' + gender).css('display','block');
		if ((stagenumber >= 2) && (stagenumber <= 4) && (gender == 'man')) {
			jQuery('#post-20').css('background-image','url("/img/s' + stagenumber + 'm.jpg")'); 
		}
		else {
			jQuery('#post-20').css('background-image','url("/img/s' + stagenumber + '.jpg")'); 
		}
	}
	if((stagenumber > maxstage) && (stagenumber != 4)) {
		jQuery('.next').addClass('disabled');
	}
	if(stagenumber == 4) {
		jQuery('.iphone .nextstage.next').css('display','block');
	}
	maxstage = stagenumber;
	if (stagenumber == 2) { 
		jQuery('.summary').append('<p>1. Gender: ' + gender + '</p>');
	}
	if (stagenumber == 3) { 
		jQuery('.summary').append('<p>2. Character: ' + jQuery('.stage2.' + gender + ' select').val() + '</p>');
	}
	if (stagenumber == 4) { 
		jQuery('.summary').append('<p>3. My self: ' + jQuery('.stage3.' + gender + ' select').val() + '</p>');
	}
	if (stagenumber == 5) { 
		jQuery('.summary').append('<p>4. Addons: ' + addons.substring(2) + '</p>');
	}
	if (stagenumber == 6) { 
		jQuery('.summary').append('<p>5. Bottle: ' + jQuery('input[name=bottle]:checked').val() + '</p>');
	}
});

jQuery('.previous').click(function() {
	var stagenumber = jQuery('.stagetitle').html().replace('Stage #',''); 
	jQuery('.stage' + stagenumber).css('display','none');
	var prpr = (stagenumber - 2)*20 + '%';
	jQuery('.progress-bar').css('width' , prpr);
	if (stagenumber == 2) {
		jQuery('#hiddengender').attr('value' , '');
		jQuery('.stage2 select').attr('name' , '');
		jQuery('.stage3 select').attr('name' , '');
		jQuery('.bbuttons').css('display','none');
		jQuery('.summary').css('display','none');
	}
	if (stagenumber == 6) {
		jQuery('.next').html('Next Stage >>>');
	}
	stagenumber--;
	jQuery('.stagetitle').html('Stage #' + stagenumber);
	if ((stagenumber == 1) || (stagenumber == 5)){
		jQuery('.stage' + stagenumber + '.' + gender).css('display','inline-block');
	}
	else {
		jQuery('.stage' + stagenumber + '.' + gender).css('display','block');
	}
	if ((stagenumber >= 2) && (stagenumber <= 4) && (gender == 'man')) {
		jQuery('#post-20').css('background-image','url("/img/s' + stagenumber + 'm.jpg")'); 
	}
	else {
		jQuery('#post-20').css('background-image','url("/img/s' + stagenumber + '.jpg")'); 
	}
	jQuery('.next').removeClass('disabled');
	jQuery('.summary p:last-child').remove(); 
});

jQuery('.story img').click(function() {
 jQuery('body').prepend('<div class="plenka3" onclick="closepopup()"></div>'); 
 var imgsrc = jQuery(this).attr('src');
 jQuery('.plenka3').after('<img class="popupimg" src="' + imgsrc + '">');  
});

function closepopup() {
 jQuery('.plenka3').remove();  
 jQuery('.popupimg').remove();  
}

jQuery('.ownparfumeform').on('submit', function(e){
    if ($(this).hasClass('can-submit')) { return true; }
    else { return false; }
});

jQuery(".stage select").change(function() {
	if( jQuery(this).val() !='' ) {
		jQuery('.next').removeClass('disabled');
	}
	else {
		jQuery('.next').addClass('disabled');
	}
});

var ttop = 0;
var bot = 0;
jQuery('.stage5 .bottletops label').click(function() {
	var imgsrc = jQuery(this).children('img').attr('src'); 
	jQuery('.bottletop img').attr('src', imgsrc); 
	ttop = 1;
	if(ttop*bot == 1) {
		jQuery('.next').removeClass('disabled');
	}
});

jQuery('.stage5 .bottlebottoms label').click(function() {
	var imgsrc = jQuery(this).children('img').attr('src'); 
	jQuery('.stage5 .bottlebottoms label span').css('text-decoration','none');
	jQuery(this).children('span').css('text-decoration','underline');
	jQuery('.bottlebottom .bottlebottomimg').attr('src', imgsrc); 
	bot = 1;
	if(ttop*bot == 1) {
		jQuery('.next').removeClass('disabled');
	} 
});

jQuery('.stage6 #gift').click(function() {
	jQuery('.stage6 .gift').toggleClass('dn');
});

jQuery(".stage6 .req").keyup(function(){ 
	if((jQuery(".stage6 .req1").val().replace(' ','') != '') && (jQuery(".stage6 .req2").val().replace(' ','') != '') && (jQuery(".stage6 .req3").val().replace(' ','') != '')) {
		jQuery('.next').removeClass('disabled');
	}
	else {
		jQuery('.next').addClass('disabled');
	} 
});

var fl = '';
jQuery(".stage6 input[name='firstline']").keyup(function(){ 
	fl = jQuery(".stage6 input[name='firstline']").val();
	jQuery(".lineonbottle1").html(fl);
});

jQuery(".stage6 input[name='secondline']").keyup(function(){ 
	fl = jQuery(".stage6 input[name='secondline']").val();
	jQuery(".lineonbottle2").html(fl);
});














