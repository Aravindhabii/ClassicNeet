# ClassicNeet


<!-- <div class="swiper-slide slide1">
					<img class="swiper1img" src="images/home/sliderimage1.jpg" alt="" />
				</div>
				<div class="swiper-slide slide2">
					<img class="swiper1img" src="images/home/sliderimage2.jpg" alt="" />
				</div>
				<div class="swiper-slide slide3">
					<img class="swiper1img" src="images/home/sliderimage4.jpg" alt="" />
	
				</div>
				<div class="swiper-slide slide4">
					<img class="swiper1img" src="images/home/sliderimage3.jpg" alt="" />
				</div> -->
				<!-- <% img.forEach(image => { %> -->
				 <!-- <div class="swiper-slide slide4">
					<img class="swiper1img slide1" src='<%=image.sliderimg%>'  alt="" />
				</div> -->
				<!-- <% }) %> -->










				<section class="section-1">
				
				<div class="slide">
					<!-- <div class="flexTop">
						<div  class="flexContent">Neet</div>
						<div class="flexContent">IIT & Medical<br>Foundation</div>
						<div class="flexContent">IIT-JEE</div>
					</div> -->
					<div class="left">
						
						<!-- <img class="building" src="images/build.png" alt=""> -->
						<img class="building2" src="images/build2.png" alt="">
						<img class="building3" src="images/build3.png" alt="">
						<div class="spilldiv">
							<img class="spill " src="images/home/spill.png" alt="">
						</div>
						<div class="spilldiv1">
							<img class="spill1" src="images/home/spill1.png" alt="">
						</div>
						<div class="spill2">
							<img class="spill2" src="images/home/spill2.png" alt="">
						</div>
					</div>
					
					
					<!-- <div class="swiper-slide slide1">
						<img class="swiper1img" src="images/home/sliderimage1.jpg" alt="" />
					</div>
					<div class="swiper-slide slide2">
						<img class="swiper1img" src="images/home/sliderimage2.jpg" alt="" />
					</div>
					<div class="swiper-slide slide3">
						<img class="swiper1img" src="images/home/sliderimage4.jpg" alt="" />
		
					</div>
					<div class="swiper-slide slide4">
						<img class="swiper1img" src="images/home/sliderimage3.jpg" alt="" />
					</div>  -->
				
				
				<div class="background">
					<img class="swiper1img" src="images/3.jpg" alt="" /> 
				</div>
				<!-- <section class="admission">
					<marquee class="marqueetext" vspace="30%" onmousedown="stop();"
					onmouseup="start();">
						<p> Admission Open ! <a href="./index.html">JOIN NOW </a> &nbsp; &ensp; Admission Open ! <a
								href="./index.html">JOIN NOW </a>&nbsp; &ensp; Admission Open ! <a href="./index.html">JOIN
								NOW</a></p>
					</marquee>
				</section> -->
			</section>






						<section class="topperCard">
					<% ourtoppers.forEach(topper => { %>
					<div class="topper1">
						<div class="topperImg">
							<img src="<%= topper.studentimg %> " alt="" />
						</div>
						<div class="topperContent">
							<h2 class="name"><%= topper.name %></h2>
							<p class="college"><%= topper.collegename %></p>
							<div class="markFlex">
								<h4 class="score">Neet score</h4>
								<p class="marks">644/720</p>
							</div>
						</div>
					</div>
					<% }) %>
				
				</section>




				//topper 
				<section class="bgTopper" >
				
        <section class="swiper swiper1 mySwiper1">
          <div class="swiper-wrapper">
			  <% ourtoppers.forEach(topper => { %>
				<div class="swiper-slide">
					<section class="topperCard">
					<div class="topperImg2">
						<img src="<%= topper.studentimg %>" alt="" />
					</div>
					<div class="topperContent">
						<h2 class="name"><%= topper.name %> </h2>
						<p class="college"><%= topper.collegename %> </p>
						
					</div>
				</section>   
				</div>
			  <% }) %>
          </div>

        </section>
			<div class="swiper-button-next arrownext1"></div>
          	<div class="swiper-button-prev arrowprev1"></div>
		
			</section>