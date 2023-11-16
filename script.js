// Shortcut for document
const d = document;

// References to HTML elements
const main = d.getElementById('main');
const newItem = d.getElementById('newItem');
const addItemBtn = d.getElementById('addItemBtn');

// Function to generate HTML for a new item in the list
const addItemList = (item) => {
	return `<div class="row" row_${item}><input type="checkbox" cb id="${item}" name="${item}">
               <label for="${item}">${item}</label>
			   <button class="remove" onclick="removeItem('${item}')">entfernen</button>
			   <br></div>`;
};

// Initial list of items
const myList = ['Zucker', 'Mehl', 'Eier'];

// Populate the main element with the initial list
myList.map(item => {
	main.innerHTML += addItemList(item);
});

// Function to update label text based on checkbox state
const changeCheckbox = (evt) => {
	const checked = evt.target.checked;
	const item = evt.target.id;
	const label = d.querySelector(`label[for="${item}"]`);
	let pre = '';
	let add = 'gekauft';

	if (checked === false) {
		pre = 'bitte ';
		add = 'kaufen';
	}

	label.innerHTML = `${pre}${item} ${add}`;
};

// Add event listeners to checkboxes
const addListeners = () => {
	d.querySelectorAll('[cb]').forEach(el => {
		el.addEventListener('change', changeCheckbox);
	});
};

// Initial setup of event listeners
addListeners();

// Function to add a new item to the list
const addItem = () => {
	const item = newItem.value;
	if (item.trim() === '') {
		alert('Item hinzufügen bitte!');
		return;
	}
	const el = addItemList(item);
	const newDiv = d.createElement('added');
	newDiv.innerHTML = el;
	main.appendChild(newDiv);
	const elNew = d.querySelector(`#${item}[cb]`);
	elNew.addEventListener('change', changeCheckbox);
	newItem.value = '';
	newItem.focus();
};

// Function to remove an item from the list
const removeItem = (item) => {
	const elRem = d.querySelector(`[row_${item}]`);
	if (!elRem) return;
	if (!elRem.parentElement.id) elRem.parentElement.remove();
	elRem.remove();
	newItem.focus();
}

// Event listener for the "Add Item" button
addItemBtn.addEventListener('click', addItem);
