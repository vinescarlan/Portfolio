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
if (location.pathname == "/contact.html") {
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
}

// Project items loader
if (location.pathname == "/" || location.pathname == "/index.html") {
	(function () {
		function addProjectItem(project, num) {
			// Prevent code repetition
			function createElem(elem, className) {
				var e = document.createElement(elem);
				if (className !== undefined) e.className = className;
				return e;
			}

			/**** DOM TREE of project items looks like this
			 *  
			 *  div#PROJECTS
			 *  |
			 *  |-- article.Project Item
			 *      |           |
			 *      |    section.mac-window -----------------------
			 *      |           |                                 |
			 *      |           div.top-part ----------    img.project-image
			 *      |                 |               |
			 *      |            div.lights      a.live-link
			 *      |                 |
			 *      |        span -- span -- span
			 *      |
			 *      |-- div.project-dfn ------------------
			 *                 |             |           |
			 *           h3.project-title    p   a.button-secondary
			 *
			 ***/

			// Mac window
			var projectItem = createElem("article", "project-item small-12 medium-6 columns");
			var macWindow = createElem("section", "mac-window");
			var topPart = createElem("div", "top-part");
			var lights = createElem("div", "lights");
			var website = createElem("a", "live-link");
			website.href = "http://" + project[num].liveLink;
			website.innerHTML = "view now &rarr;";
			var projectImg = createElem("img", "project-image");
			projectImg.src = project[num].img;

			for (var i = 0, len = 3; i < len; i++) {
				var bull = createElem("span");
				bull.innerHTML = "&bull;";
				bull.style.padding = "0 2px";
				lights.appendChild(bull);
			}
			topPart.appendChild(lights);
			topPart.appendChild(website);
			macWindow.appendChild(topPart);
			macWindow.appendChild(projectImg);
			projectItem.appendChild(macWindow);

			// Project definition
			var projectDfn = createElem("div", "project-dfn");
			var projectTitle = createElem("h3", "project-title");
			projectTitle.innerHTML = project[num].title;
			var p = createElem("p");
			p.innerHTML = project[num].description + "<br/> Technologies Used: <span>" +
				project[num].technologies.join(", ") + "</span>";
			var source = createElem("a", "button-secondary");
			source.href = "https://" + project[num].source;
			source.innerHTML = "view source code";
			projectDfn.appendChild(projectTitle);

			projectDfn.appendChild(p);
			projectDfn.appendChild(source);
			projectItem.appendChild(projectDfn);

			document.getElementById("projects").appendChild(projectItem);
		}

		// Request project_items.JSON file
		var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				var project = JSON.parse(xhttp.responseText);
				for (var i = 0, len = project.length; i < len; i++)
					addProjectItem(project, i);
			}
		};

		xhttp.open("GET", "js/project_items.json", true);
		xhttp.send(null);
	})();
}
