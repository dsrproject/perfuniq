<div class="mainpage">
	<div class="container">
		<div class="row">	
			<center class="maintext">
				<div class="bankislider">
					<!--<div class="bankisliderinner">-->
						<img src="/img/slide1.png"><!--<img src="/img/slide2.png"><img src="/img/slide3.png">-->
					<!--</div>-->
				</div> 
				
				<div class="col-md-12 nextevent">
					<p class="orange">GET READY FOR THE NEXT EVENT</p>
					<?php echo do_shortcode( '[wpdevart_countdown text_for_day="Days" text_for_hour="Hr" text_for_minut="Min" text_for_second="Sec" start_time="1450788538" end_time="29,23,30" action_end_time="hide" content_position="center" top_ditance="10" bottom_distance="10" ][/wpdevart_countdown]' ); ?>
					</br>
					<a href="/events">
						<?php echo do_shortcode( '[eo_events numberposts="1" no_events="&nbsp;"]	%event_thumbnail{large}% [/eo_events]'); ?>
					</a>
				</div>
				<div class="col-md-12 mainvideo video1">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/9s9dUaoXfHc?rel=0" frameborder="0" allowfullscreen></iframe>
				</div>
				<div class="maintext col-md-12">
					<p class="orange">It's all about me. It's my personality. It's my masterpiece. </p>
					<p class="orange">ITS MY OWN STORY IN A PERFUME BOTTLE</p>
					<p class="black">Just</br>
					Tell Us</br>
					Who you are</br>
					What’s your desire</br>
					Describe your personality</br>
					What do you like to be</br></br>
					And..</br></br>
					We are about to put your own unique and personal story – in a bottle</p>
					<a href="/my-products"><button><p>My Own Products</p></button></a>
				</div> 

				<div class="col-md-4 we">
					<img src="/img/1icon.png">
					<p class="afticon1">We deliver</p>
					<p class="afticon2">20 days<br>worldwide</p>
				</div>
				<div class="col-md-4 we">
					<img src="/img/2icon.png">
					<p class="afticon1">We’re Here to serve</p>
					<p class="afticon2">+972-2-5366487<br>+972-52-3777280</p>
				</div>
				<div class="col-md-4 we">
					<img src="/img/3icon.png">
					<p class="afticon1">We give</p>
					<p class="afticon2">100% Guarantee</p>
				</div>		
				
				<div class="col-md-12 mainvideo video2">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/9s9dUaoXfHc?rel=0" frameborder="0" allowfullscreen></iframe>
				</div>
			
				<div class="col-md-4 col-md-offset-4">
					<div id="myCarousel" class="carousel slide" data-ride="carousel">
				
					  <!-- Wrapper for slides -->
					  <div class="carousel-inner" role="listbox">
						<?php 
							$eventsslider = file_get_contents('http://www.perfuniq.com/wp-content/themes/your-clean-template%20(RU)/eventsslider.html');
							echo $eventsslider;
						?>  
					   </div>
					  <!-- Left and right controls -->
					  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
						<span class="icon-prev cararrow" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					  </a>
					  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
						<span class="icon-next cararrow" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					  </a>
					</div>
					
				</div>
				
			</center>
		</div>
	</div>
	<div class="padenie">
		<div class="padleft">
			<img src="/img/icon2-left.png" class="lay1" id="padl1"> 
			<img src="/img/petal3-left.png" class="lay1" id="padl2">
			<img src="/img/icon1-left.png" class="lay1" id="padl3">
			<img src="/img/icon3-left.png" class="lay1" id="padl4">
			<img src="/img/petal1-left.png" class="lay1" id="padl5">
			<img src="/img/icon8-right.png" class="lay1" id="padr5">
			
		</div>
		<div class="padright">
			<img src="/img/icon4-right.png" class="lay1" id="padr1">
			<img src="/img/petal4-right.png" class="lay1" id="padr2">
			<img src="/img/icon7-right.png" class="lay1" id="padr3">
			<img src="/img/icon5-right.png" class="lay1" id="padr4">
			<img src="/img/petal2-right.png" class="lay1" id="padr6">
			<img src="/img/petal5-right.png" class="lay1" id="padr7">
			<img src="/img/icon6-right.png" class="lay1" id="padr8">
		</div>
	</div>
</div>
