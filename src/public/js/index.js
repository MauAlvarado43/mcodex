// AOS

AOS.init({
	duration: 800,
});

// Particles

particlesJS("particles-js", {
	particles: {
		number: { value: 150, density: { enable: true, value_area: 800 } },
		color: { value: "#2ca4f4" },
		shape: {
			type: "circle",
			stroke: { width: 0, color: "#000000" },
			polygon: { nb_sides: 5 },
			image: { src: "img/github.svg", width: 100, height: 100 }
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
		},
		size: {
			value: 3,
			random: true,
			anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: "#479ef4",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 6,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 }
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: false, mode: "repulse" },
			onclick: { enable: false, mode: "push" },
			resize: true
		},
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
});

// Menu

$(".menu-container").fadeOut(0);

$(window).scroll(() => {

	if (document.documentElement.scrollTop > 30) {

		$(".menu-container").fadeIn(150);


	} else {

		$(".menu-container").fadeOut(150);

	}

})

// Scroll controller

$(() => {

	$(document).scroll(() => {

		if(-50 < $(window).scrollTop() - $("#presentation").offset().top && $(window).scrollTop() - $("#presentation").offset().top < 50) {
			
			$("#index-link").removeClass("active")
			$("#presentation-link").removeClass("active")
			$("#projects-link").removeClass("active")

			$("#presentation-link").addClass("active")
		}
		else if(-50 < $(window).scrollTop() - $("#projects").offset().top && $(window).scrollTop() - $("#projects").offset().top < 50) {
			
			$("#index-link").removeClass("active")
			$("#presentation-link").removeClass("active")
			$("#projects-link").removeClass("active")

			$("#projects-link").addClass("active")
		}

	})

})