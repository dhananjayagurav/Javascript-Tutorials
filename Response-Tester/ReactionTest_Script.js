			function getRandomShape() {
				var shapes = ["circle","square","rectangle","oval"];
				return shapes[Math.floor(Math.random() * 4)];
			}
			
			function getRandomColor() {
				var letters = '0123456789ABCDEF'.split('');
				var color = '#';
				for (var i = 0; i < 6; i++ ) {
					color += letters[Math.floor(Math.random() * 16)];
				}
				return color;
			}

			function getRandomTimeDelay() {
				var randTime = Math.round(Math.random() * 5000);
				return randTime;
			}	
			
			//alert (getRandomTimeDelay());
			
			function getRandomTopMargin() {
				var topM = Math.random() * 400;
				//alert(topM);
				return topM;
			}
			
			function getRandomLeftMargin() {
				var leftM = Math.random() * 400;
				//alert(leftM);
				return leftM;
			}
			
			var startT = new Date().getTime() / 1000;
			var myShape = getRandomShape();
			var myDiv = document.createElement("div");
			var body = document.querySelector('body');
			
			function createRandomShape () {
				myShape = getRandomShape();
				//alert(myShape);
				//myDiv = document.createElement("div");
				myDiv.id = myShape;
				//body = document.querySelector('body');
				body.appendChild(myDiv);
				
				document.getElementById(myShape).style.display = "block";
				document.getElementById(myShape).style.backgroundColor = getRandomColor();
				document.getElementById(myShape).style.left  = getRandomLeftMargin() + "px";
				document.getElementById(myShape).style.top  = getRandomTopMargin() + "px";
			}
			
			function appearAfterDelay() {
				startT = new Date().getTime() / 1000;
				setTimeout (createRandomShape (),getRandomTimeDelay()); 
			}		
			
			appearAfterDelay();
				
			//alert(getRandomColor());
							
			document.getElementById(myShape).onclick = 
				function() {
					document.getElementById(myShape).style.display = "none";
					body.removeChild(myDiv);
					//document.getElementById(myShape).style.backgroundColor = getRandomColor();
					var endT = new Date().getTime() / 1000;
					var clickT = endT - startT;
					document.getElementById("uTime").innerHTML = clickT + "s";
					appearAfterDelay();
			}
