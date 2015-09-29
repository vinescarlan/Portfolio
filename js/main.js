// Off canvas animation
(function () {
	// Get hamburger icon
	var menuIcon = document.getElementById('hamburger');
	var body = document.getElementsByTagName('body')[0];
	
	// Add a classname on body so that off-canvas will fade to left
	menuIcon.addEventListener('click', function () {
		if (body.className === undefined || body.className === "")
			body.className = "menu-visible";
		else body.className = "";
	});
})();

// Typing animation
(function () {
	var play = document.getElementById('play');
	var display = document.getElementById('display');

	function typingAnimation() {
		// Wait for 1sec so the animation will run after the display opacity = 1
		setTimeout(function () {
			var message = "Hi! Thank you for spending time visiting my site. Hopefully, I can be a part of your team soon. Bye!";
			var i = 0,
				blink = document.getElementById('blink');
			var node = display.childNodes[1].firstChild;

			// Blinking underscore
			setInterval(function () {
				if (blink.innerHTML == "_") {
					blink.innerHTML = " ";
				} else {
					blink.innerHTML = "_";
				}
			}, 500);

			// Add each character of 'message' to the display every 90ms
			var animate = setInterval(function () {
				node.innerHTML += message.charAt(i);
				i++;
				if (node.innerHTML == "$ " + message) {
					clearInterval(animate);
				}
			}, 90);
		}, 1000);
	}

	play.onclick = function () {
		play.style.visibility = "hidden"; // Hide the play button
		display.style.opacity = "1"; // Show the display
		typingAnimation(); // Run animation
	};
})();
