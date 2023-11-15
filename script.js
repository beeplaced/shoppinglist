const d = document;
const main = d.getElementById('main');
const newItem = d.getElementById('newItem');
const addItemBtn = d.getElementById('addItemBtn');

const addItemList = (item) => {
	return `<input type="checkbox" cb id="${item}" name="${item}">
               <label for="${item}">${item}</label><br>`;
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
	if (item !== '') {
		const el = addItemList(item);
		const newDiv = document.createElement('div');
		newDiv.innerHTML = el;
		main.appendChild(newDiv);
		addListeners();
		newItem.value = ''
	}
};

addItemBtn.addEventListener('click', addItem);







