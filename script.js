function loadfun() {
	const body = document.querySelector('body');
	const p = document.createElement('p');
	p.innerText="DOM load success";
	body.appendChild(p);
}