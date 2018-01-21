function projectsCategory(e) {
	var buttons = document.querySelectorAll(".last-projects-filters__filter");
	var projects = document.querySelectorAll(".last-projects-project");

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function(){
			sorting(this);
		})
	};

	function sorting(el) {
		var tag = el.getAttribute("data-category");

		switchButton(el);

		if (tag == "all") {
			showAll();
		}else {
			clear(tag);
		}
	};

	function switchButton(el) {
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove("last-projects-filters__filter_active");
		}
		el.classList.add("last-projects-filters__filter_active");
	};

	function showAll() {
		for (let i = 0; i < projects.length; i++) {
			projects[i].classList.remove("last-projects-filters__filter_fadeOut");
			projects[i].classList.add("last-projects-filters__filter_fadeIn");
		}
	};

	function clear(tag) {
		for (let i = 0; i < projects.length; i++) {
			projects[i].classList.add("last-projects-filters__filter_fadeOut");
			projects[i].classList.remove("last-projects-filters__filter_fadeIn");
			if (projects[i].getAttribute("data-category") == tag) {
				projects[i].classList.remove("last-projects-filters__filter_fadeOut");
				projects[i].classList.add("last-projects-filters__filter_fadeIn");
			}
		}
	};

}
projectsCategory();

function postsSlider(e) {
	var box = document.querySelectorAll(".recent-posts-item");
	var container = document.querySelector(".recent-posts-all");
	var arrowLeft = document.querySelector(".recent-posts-arrows__button_left");
	var arrowRight = document.querySelector(".recent-posts-arrows__button_right");

	arrowLeft.addEventListener("click", function(){
		nextSlide();
	});

	arrowRight.addEventListener("click", function(){
		prevSlide();
	});


	var current = 0;
	var boxWidth = box[0].offsetWidth + 18;

	function prevSlide() {
	    var boxs = document.querySelector(".recent-posts-boxs");
	    	if(current >= box.length/2){
	    		limitRight();
	      		return;
	      	}
	    	current++;
	    	boxs.style.marginLeft = current * -boxWidth + 'px';
	      console.log(current)
	}

	function nextSlide() {    
	    var boxs = document.querySelector(".recent-posts-boxs");
	    	if(current == 0){
	    		limitLeft();
	    	    return;
	    	} 
	    	current--;
	    	boxs.style.marginLeft = current * -boxWidth + 'px';
	      console.log(current)
	}

	function limitLeft() {
		var boxs = document.querySelector(".recent-posts-boxs");
		boxs.style.marginLeft = boxWidth + 'px';
		setTimeout(function(){
			boxs.style.marginLeft = 0 + 'px';
		}, 500)
	}

	function limitRight() {
		var boxs = document.querySelector(".recent-posts-boxs");
		boxs.style.marginLeft = parseInt(boxs.style.marginLeft) + -boxWidth + 'px';
		setTimeout(function(){
			boxs.style.marginLeft = parseInt(boxs.style.marginLeft) - -boxWidth + 'px';
		}, 500)
	}

	var containerChild = container.childNodes;

	for (var i = 0; i < containerChild.length; i++) {
		containerChild[i].remove();
	}

}
postsSlider();

function animationIphone() {
	var mobile = document.querySelector(".for-mobile");
	var iphone = document.querySelector(".iphone img");

	function checkMobile(){
		if (mobile.getClientRects()[0].top <= 400 ) {
			console.log('есть');
			window.removeEventListener("scroll", checkMobile);
			iphone.classList.add("iphone_animation");
		}
	}

	window.addEventListener("scroll", checkMobile);
}
animationIphone();
