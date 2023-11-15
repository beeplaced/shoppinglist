const d = document;
const main = d.getElementById('main');
const newItem = d.getElementById('newItem');
const addItemBtn = d.getElementById('addItemBtn');

const addItemList = (item) => {
	return `<div class="row" row_${item}><input type="checkbox" cb id="${item}" name="${item}">
               <label for="${item}">${item}</label>
			   <button class="remove" onclick="removeItem('${item}')">entfernen</button>
			   <br></div>`;
};

const myList = ['Zucker', 'Mehl', 'Eier'];

myList.map(item => {
	main.innerHTML += addItemList(item);
});

const changeCheckbox = (evt) => {
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
		el.addEventListener('change', changeCheckbox);
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
		elNew.addEventListener('change', changeCheckbox);
		newItem.value = '';
		newItem.focus();
};

const removeItem = (item) => {
	const elRem = d.querySelector(`[row_${item}]`);
	if (!elRem) return;
	elRem.remove();
}

addItemBtn.addEventListener('click', addItem);