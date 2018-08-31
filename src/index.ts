export const hasHover = !matchMedia('(hover: none)').matches;

let classAdded = false;

if (hasHover && !classAdded) {
	classAdded = true;
	document.body.classList.add('has-hover');
}
