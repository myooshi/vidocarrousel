var videoActual=1;
		init=function(){
			document.getElementById("video1").play();	
		};
		videoAnterior=function(){
			switch (videoActual){
				case 1:
					document.getElementById("video1").pause();
					videoActual=2,
					cambiarVideo(2);
					break;
				case 2:
					document.getElementById("video2").pause();
					videoActual=1,
					cambiarVideo(1);
					break;
			};	
		};
		videoSiguiente=function(){
				switch (videoActual){
				case 1:
					document.getElementById("video1").pause();
					videoActual=2,
					cambiarVideo(2);
					break;
				case 2:
					document.getElementById("video2").pause();
					videoActual=1,
					cambiarVideo(1);
					break;
			};	

		};
		cambiarVideo= function(num){
			var nuevoVideo;
			var anteriorVideo;

			switch(num){
				case 1:
					//alert("viene video2");
					 nuevoVideo=document.getElementById("video1");
					 anteriorVideo=document.getElementById("video2");
					break;
				case 2:
					//alert("viene video1");
					 nuevoVideo=document.getElementById("video2");
					 anteriorVideo=document.getElementById("video1");
					break;
				
			};
		
			TweenMax.to(nuevoVideo,1,{zIndex:1000, width:"420px", height:"315px", left:"0px", top:"0px"});
			TweenMax.to(anteriorVideo,1,{zIndex:500, width:"240px", height:"180px", left:"100px", top:"20px"});

		};

