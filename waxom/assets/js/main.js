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

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.recent-posts-arrows__button_right',
    prevEl: '.recent-posts-arrows__button_left',
  },
});