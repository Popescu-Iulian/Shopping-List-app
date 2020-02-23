const ITEMS_LIST = document.querySelector('.items-list');
const ITEMS_INPUT = document.querySelector('.items-input');
const SORTING_BTNS = document.querySelector('.sorting-btns');

const LIST = [];

function draw() {
	let liItem = '';

	for (let i = 0; i < LIST.length; i++) {
		if (LIST[i].checked) {
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
		alert(`Please enter the item you want to buy!`);
	} else {
		LIST.push(NEW_ITEM);
	}

	ITEMS_INPUT.value = '';

	if (LIST.length >= 2) SORTING_BTNS.classList.remove('hidden');

	draw();
}

function delItem(event, idx) {
	event.stopPropagation();

	if (confirm(`Don't want to buy ${LIST[idx].item} anymore?`)) {
		LIST.splice(idx, 1);

		draw();
	}

	if (LIST.length < 2) SORTING_BTNS.classList.add('hidden');
}

function checkedItem(idx) {
	LIST[idx].checked = true;

	draw();
}

function sortAsc() {
	LIST.sort(function (a, b) {
		return a.item.toLowerCase() < b.item.toLowerCase() ? -1 : 1;
	})

	draw();
}

function sortDesc() {
	LIST.sort(function (a, b) {
		return a.item.toLowerCase() > b.item.toLowerCase() ? -1 : 1;
	})

	draw();
}