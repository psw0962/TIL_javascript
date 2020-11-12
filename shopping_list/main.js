const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

// 추가하는 함수
function onAdd() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }

    const item = createItem(text);

    items.appendChild(item);

    item.scrollIntoView({ block: 'center' });

    input.value = '';
    input.focus();
}

// 추가되는 DOM
let id = 0;

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="item_divider"></div>`;
    id++;
    return itemRow;
}

// 클릭과 엔터 입력시 추가
addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
})

items.addEventListener('click', () => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`)
        toBeDeleted.remove();
    }
})