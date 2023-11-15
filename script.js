const d = document;
const main = d.getElementById('main');
const newItem = d.getElementById('newItem');
const addItemBtn = d.getElementById('addItemBtn');

const addItemList = (item) => {
	return `<div row_${item}><input type="checkbox" cb id="${item}" name="${item}">
               <label for="${item}">${item}</label>
			   <button class="remove" onclick="removeItem('${item}')">entfernen</button>
			   <br></div>`;
};

const myList = ['Zucker', 'Mehl', 'Eier']

myList.map(item => {
	main.innerHTML += addItemList(item);
});

const changeRdo = (evt) => {
	const checked = evt.target.checked;
	const item = evt.target.id;
	const label = d.querySelector(`label[for="${item}"]`);
	let pre = '';
	let add = 'gekauft';

	switch (checked) {
		case false:
			pre = 'bitte ';
			add = 'kaufen';
			break;
	}

	label.innerHTML = `${pre}${item} ${add}`;
};

const addListeners = () => {
	d.querySelectorAll('[cb]').forEach(el => {
		el.addEventListener('change', changeRdo);
	});
};

addListeners();

const addItem = () => {
	const item = newItem.value;
		if (item.trim() === '') {
			alert('Item hinzufügen bitte!');
			return;
		}
		const el = addItemList(item);
		const newDiv = d.createElement('div');
		newDiv.innerHTML = el;
		main.appendChild(newDiv);
		console.log(newDiv)
		const elNew = d.querySelector(`#${item}[cb]`);
		elNew.addEventListener('change', changeRdo);
		newItem.value = '';
};

const removeItem = (item) => {
	// Implement your removal logic here
	// For example, you might have an array of items and remove the selected item from the array
	// Then, you can recreate the list of items without the removed one

	// Update your UI accordingly

	const elRem = d.querySelector(`[row_${item}]`);
	console.log(elRem);
	if (!elRem) return;
	elRem.remove();

}

addItemBtn.addEventListener('click', addItem);







