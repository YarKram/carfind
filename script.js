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
