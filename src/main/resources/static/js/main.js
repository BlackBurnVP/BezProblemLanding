"use strict";

document.addEventListener(
	"DOMContentLoaded",
	function () {
		// Close all popups function
		function CloseAll() {
			document.addEventListener("click", function (e) {
				let its_button = document.querySelectorAll(".global-btn");
				let its_menu = document.querySelectorAll(".global-div");

				if (
					!e.target.classList.contains("global-btn") &&
					!e.target.classList.contains("global-div")
				) {
					for (let i of its_menu) {
						i.classList.remove("is-active");
					}
					for (let i of its_button) {
						i.classList.remove("is-active");
					}
				}
			});
		}

		CloseAll();

		// Overlay
		let overlay = document.querySelector(".overlay");
		overlay.addEventListener("click", (e) => {
			e.target.classList.remove("is-active");
		});

		// Animated logo
		if (document.querySelector(".logo")) {
			let letters = document.querySelectorAll(".animated-letter");

			for (let i of letters) {
				i.classList.add("is-active");
			}
		}

		// Burger & mobile menu
		if (document.querySelector(".burger")) {
			let burgerWrap = document.querySelector(".burger");
			let burgerToggle = document.querySelector(".burger__toggle");
			let mobileMenu = document.querySelector(".navigation");
			let mobileLink = document.querySelectorAll(".navigation__list-item a");

			burgerWrap.onclick = function () {
				burgerToggle.classList.toggle("is-active");
				overlay.classList.toggle("is-active");
				mobileMenu.classList.toggle("is-active");
			};

			overlay.onclick = function () {
				burgerToggle.classList.remove("is-active");
				mobileMenu.classList.remove("is-active");
			};

			for (let i of mobileLink) {
				i.onclick = function () {
					burgerToggle.classList.remove("is-active");
					mobileMenu.classList.remove("is-active");
					overlay.classList.remove("is-active");
				};
			}
		}

		// Search input
		if (document.querySelector(".search-input")) {
			let search = document.querySelector(".search-input input");
			let searchReset = document.querySelector(".search-input__reset");

			search.addEventListener("input", function () {
				if (this.value != 0) {
					searchReset.classList.remove("is-hidden");
				} else {
					searchReset.classList.add("is-hidden");
				}
			});

			searchReset.addEventListener("click", function () {
				search.value = "";
				this.classList.add("is-hidden");
			});
		}

		// Show password button
		if (document.querySelector(".password-input")) {
			let passInput = document.querySelectorAll(".password-input");
			let passShowButtons = document.querySelectorAll(
				".password-input__show-btn",
			);

			passInput.forEach((i) => {
				i.addEventListener("input", function () {
					if (this.value != 0) {
						this.nextElementSibling.classList.remove("is-hidden");
					} else {
						this.nextElementSibling.classList.add("is-hidden");
						this.nextElementSibling.classList.remove("is-active");
						this.setAttribute("type", "password");
					}
				});
			});

			for (let i of passShowButtons) {
				i.addEventListener("click", function () {
					let closestInput = this.previousElementSibling;

					i.classList.toggle("is-active");

					if (closestInput.getAttribute("type") == "password") {
						closestInput.setAttribute("type", "text");
					} else if (closestInput.getAttribute("type") == "text") {
						closestInput.setAttribute("type", "password");
					}
				});
			}
		}

		// Scroll to top button
		if (document.querySelector(".scroll-top")) {
			let mybutton = document.querySelector(".scroll-top");

			window.onscroll = function () {
				scrollFunction();
			};

			function scrollFunction() {
				if (
					document.body.scrollTop > 20 ||
					document.documentElement.scrollTop > 20
				) {
					mybutton.classList.add("is-show");
				} else {
					mybutton.classList.remove("is-show");
				}
			}

			// New Click Function
			mybutton.addEventListener("click", function () {
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			});
		}

		// Message box
		if (document.querySelector(".messengers")) {
			let messageBox = document.querySelector(".messengers__btn");
			let messageList = document.querySelector(".messengers__list");

			messageBox.addEventListener("click", () => {
				messageList.classList.toggle("is-active");
			});

			// Telegram chats
			let teltgramBtn = document.querySelector(".messengers__telegram");
			let teltgramList = document.querySelector(".messengers__telegram-list");

			teltgramBtn.addEventListener("click", (e) => {
				e.preventDefault();
				teltgramList.classList.toggle("is-active");
			});
		}

		// Slider Intro section
		if (document.querySelector(".splide1")) {
			new Splide(".splide1", {
				autoplay: true,
				rewind: true,
				type: "fade",
				arrows: false,
				// pagination: false,
				speed: 3000,
			}).mount();
		}

		// Slider Options section
		if (document.querySelector(".splide2")) {
			new Splide(".splide2", {
				pagination: false,
				rewind: true,
				perPage: 3,
				gap: 20,
				speed: 1000,
				type: "loop",
				breakpoints: {
					1024: {
						gap: 10,
						perPage: 2.5,
					},
					768: {
						perPage: 2,
					},
					600: {
						perPage: 1.5,
					},
					500: {
						perPage: 1,
						pagination: true,
						arrows: false,
					},
				},
			}).mount();
		}

		// Slider Partners section
		if (document.querySelector(".splide3")) {
			new Splide(".splide3", {
				type: "loop",
				gap: 50,
				pagination: false,
				arrows: false,
				perPage: 7,
				rewind: true,
				autoScroll: {
					speed: 1,
					pauseOnFocus: false,
					pauseOnHover: false,
				},
				breakpoints: {
					1300: {
						autoScroll: {
							speed: 0.6,
						},
						perPage: 6.5,
					},
					768: {
						perPage: 6,
						gap: 30,
					},
					600: {
						perPage: 5,
					},
					400: {
						perPage: 4,
					},
				},
			}).mount(window.splide.Extensions);
		}

		// Slider Intro counter block
		if (document.querySelector(".splide4")) {
			new Splide(".splide4", {
				type: "loop",
				gap: 10,
				pagination: false,
				arrows: false,
				perPage: 5,
				rewind: true,
				autoScroll: {
					speed: 0.5,
					pauseOnFocus: false,
					pauseOnHover: false,
				},
				breakpoints: {
					1300: {
						perPage: 5,
					},
					768: {
						perPage: 3.5,
						gap: 30,
					},
					600: {
						perPage: 2.5,
					},
					400: {
						perPage: 2,
					},
				},
			}).mount(window.splide.Extensions);
		}

		// Contacts items
		if (document.querySelector(".messengers")) {
			let contactBtn = document.querySelectorAll(".contact__item .g-title");
			let contactList = document.querySelectorAll(".contact__item-list");

			for (let i of contactBtn)
				i.addEventListener("click", function () {
					if (i.classList.contains("is-active")) {
						i.classList.remove("is-active");
						i.nextElementSibling.classList.remove("is-active");
					} else {
						for (let t of contactBtn) {
							t.classList.remove("is-active");
						}
						for (let c of contactList) {
							c.classList.remove("is-active");
						}
						i.classList.add("is-active");
						i.nextElementSibling.classList.add("is-active");
					}
				});
		}

		// Smooth scroll anchors
		if (document.querySelector(".scroll-to")) {
			document.querySelectorAll(".scroll-to").forEach((anchor) => {
				anchor.addEventListener("click", function (e) {
					e.preventDefault();
					document.querySelector(this.getAttribute("href")).scrollIntoView({
						block: "center",
						behavior: "smooth",
					});
					window.location.hash = "";
				});
			});
		}

		// Intro counter
		if (document.querySelector(".counter")) {
			const counters = document.querySelectorAll(".counter");
			counters.forEach((counter) => {
				counter.innerText = "0";
				const updateCounter = () => {
					const target = +counter.getAttribute("data-target");
					const c = +counter.innerText;
					const increment = target / 500;
					if (c < target) {
						counter.innerText = `${Math.ceil(c + increment)}`;
						setTimeout(updateCounter, 2);
					} else {
						counter.innerText = target;
					}
				};
				updateCounter();
			});
		}

		// Callback popup
		if (document.querySelector(".callback")) {
			let callbackBtn = document.querySelectorAll(".g-button");
			let callback = document.querySelector(".callback");
			let close = document.querySelector(".callback__close");

			for (let i of callbackBtn) {
				i.addEventListener("click", (e) => {
					e.preventDefault();
					callback.classList.add("is-active");
					overlay.classList.add("is-active");
				});
			}

			close.addEventListener("click", () => {
				overlay.classList.remove("is-active");
				callback.classList.remove("is-active");
			});

			overlay.addEventListener("click", () => {
				callback.classList.remove("is-active");
			});
		}

		// Video
		if (document.querySelector(".video")) {
			let videoBtn = document.querySelectorAll(".video-btn");
			let videoPlayer = document.querySelector(".video__player");
			let videoContent = document.querySelector(".video__player video");

			for (let i of videoBtn) {
				i.addEventListener("click", () => {
					videoPlayer.classList.add("is-active");
					overlay.classList.add("is-active");
					videoContent.setAttribute("src", "/static/video/1.mov");
				});

				overlay.addEventListener("click", () => {
					videoPlayer.classList.remove("is-active");
					// overlay.classList.remove("is-active");
					videoContent.setAttribute("src", "");
				});
			}
		}

		//Lang Select
		if (document.querySelector('.custom-select')) {

			let x, i, j, l, ll, selElmnt, a, b, c;
			x = document.getElementsByClassName("custom-select");
			l = x.length;

			for (i = 0; i < l; i++) {
				selElmnt = x[i].getElementsByClassName("site-language")[0];
				ll = selElmnt.length;
				a = document.createElement("DIV");
				a.setAttribute("class", "select-selected");
				a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
				x[i].appendChild(a);
				b = document.createElement("DIV");
				b.setAttribute("class", "select-items select-hide");

				for (j = 0; j < ll; j++) {
					c = document.createElement("DIV");
					c.innerHTML = selElmnt.options[j].innerHTML;
					c.setAttribute("class", "select-item");
					c.addEventListener("click", function (e) {
						let y, i, k, s, h, sl, yl;
						s = this.parentNode.parentNode.getElementsByTagName("select")[0];
						sl = s.length;
						h = this.parentNode.previousSibling;
						for (i = 0; i < sl; i++) {
							if (s.options[i].innerHTML == this.innerHTML) {
								s.selectedIndex = i;
								h.innerHTML = this.innerHTML;
								y = this.parentNode.getElementsByClassName("same-as-selected");
								yl = y.length;
								for (k = 0; k < yl; k++) {
									y[k].classList.remove("same-as-selected");
								}
								this.classList.add("same-as-selected");
								break;
							}
						}
						h.click();
						let selectedOption = h.textContent;
						if (selectedOption != ''){
							window.location.replace('?lang=' + selectedOption);
						}
						$('#locales').change();
						$('#locales').val(selectedOption)

						let langIcon = document.querySelector('.lang-icon img');
						let chosenLang = this.innerHTML.toLowerCase();
						langIcon.src = `./img/icons/flags/flag-${chosenLang}.svg`;
					});
					b.appendChild(c);
				}

				x[i].appendChild(b);
				a.addEventListener("click", function (e) {
					e.stopPropagation();
					closeAllSelect(this);
					this.nextSibling.classList.toggle("select-hide");
					this.classList.toggle("select-arrow-active");
					// console.log(a)
				});
			}

			// Close all selects function
			function closeAllSelect(e) {
				let x, y, i, xl, yl, arrNo = [];
				x = document.getElementsByClassName("select-items");
				y = document.getElementsByClassName("select-selected");
				xl = x.length;
				yl = y.length;
				for (i = 0; i < yl; i++) {
					if (e == y[i]) {
						arrNo.push(i)
					} else {
						y[i].classList.remove("select-arrow-active");
					}
				}
				for (i = 0; i < xl; i++) {
					if (arrNo.indexOf(i)) {
						x[i].classList.add("select-hide");
					}
				}
			}
			let langItem = document.querySelectorAll(".select-item");

			for (let i of langItem) {
				let chosenLang = i.innerHTML.toLowerCase();
				i.style.backgroundImage = `url('./img/icons/flags/flag-${chosenLang
				}.svg')`;

				document.addEventListener("click", closeAllSelect);
			}
		}
	},
	false,
); // <--------------------> //
