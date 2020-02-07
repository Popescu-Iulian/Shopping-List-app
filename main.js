const ITEMS_LIST = document.querySelector('#items-list');
const ITEMS_INPUT = document.querySelector('#items-input');

const LIST = [];

function draw() {
	let liItem = '';

	for (let i = 0; i < LIST.length; i++) {
		if (LIST[i].checked === true) {
			liItem += `
	      <li onclick="checkedItem(${i})" class="checked">${LIST[i].item}<span class="delete" onclick="delItem(event, ${i})">X</span></li>
	  `;
		} else {
			liItem += `
	      <li onclick="checkedItem(${i})">${LIST[i].item}<span class="delete" onclick="delItem(event, ${i})">X</span></li>
	  `;
		}
	}

	ITEMS_LIST.innerHTML = liItem;
}

function addItem(event) {
	event.preventDefault();

	const NEW_ITEM = {
		item: ITEMS_INPUT.value
	};

	if (ITEMS_INPUT.value === '') {
		alert(`Please enter an item to buy!`);
	} else {
		LIST.push(NEW_ITEM);
	}

	ITEMS_INPUT.value = '';

	draw();
}

function delItem(event, idx) {
	event.stopPropagation();

	if (confirm(`You don't want to buy ${LIST[idx].item}?`)) {
		LIST.splice(idx, 1);

		draw();
	}
}

function checkedItem(idx) {
	LIST[idx].checked = true;

	draw();
}
