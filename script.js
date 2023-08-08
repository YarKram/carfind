const items = document.querySelectorAll(".services__list li");

// Function to check if an element is in viewport
function isElementInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// Function to handle scroll event
function handleScroll() {
	items.forEach((item) => {
		if (isElementInViewport(item)) {
			item.classList.add("visible");
		} else {
			item.classList.remove("visible");
		}
	});
}

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);

// Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", () => {
	if (
		document.body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		mybutton.classList.add("visible");
	} else {
		mybutton.classList.remove("visible");
	}
});

// Smooth scroll to the top of the document
mybutton.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

// ul columns

function updateColumns() {
	column = 0;
	columnItems.each(function (idx, el) {
		if (column > columns.length) {
			column = 0;
		}
		$(columns.get(column)).append(el);
		column += 1;
	});
}

// burger menu

const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
const container = document.querySelector(".container");

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	navList.classList.toggle("active");
	// container.classList.toggle("expanded");
});
