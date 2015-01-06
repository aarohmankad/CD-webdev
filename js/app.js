document.getElementById('list-input').addEventListener('keypress', function (e) {
	if(e.which != 13)
		return

	var list_item = document.createElement('li');
	list_item.textContent = document.getElementById('list-input').value;

	document.getElementById('list').appendChild(list_item);

	document.getElementById('list-input').value = "";
})