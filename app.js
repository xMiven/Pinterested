const addPicture = function () {
	let content = document.getElementById('content');
	let image = document.createElement('img');
	let url = document.getElementById('url').value;
	let alt = document.getElementById('alt').value;
	let file = document.getElementById('file').value;
	image.setAttribute('class', 'images');
	if (file !== '') {
		image.setAttribute('src', file);
	} else {
		image.setAttribute('src', url);
	}
	image.setAttribute('alt', alt);
	//content.appendChild(image);//
	content.insertBefore(image, content.children[0]);
	document.getElementById('url').value = '';
	document.getElementById('alt').value = '';
};
