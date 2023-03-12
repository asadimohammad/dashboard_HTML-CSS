const listView = document.querySelector(".list-view");
const gridView = document.querySelector(".grid-view");
const trHeader = document.querySelector("tr.header");
const trList = document.querySelectorAll("tr.list");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");

eventListeners();
function eventListeners() {
    listView.addEventListener('click' , listViewContent)
    gridView.addEventListener("click", gridViewContent);
}

function gridViewContent() {
    trList.forEach((list) => {
        list.classList.remove("list");
        list.classList.add("grid");
        let ul = `
            <ul class='listTitles'>
                <li>Item</li>
                <li>Category</li>
                <li>Status</li>
                <li>Sales</li>
                <li>Stock</li>
                <li>Price</li>
            </ul>
        `
        list.innerHTML += ul
    });
    thead.style.display = 'none'
    tbody.classList.add('grid')
}
function listViewContent() {
    trList.forEach((list) => {
        list.classList.add("list");
        list.classList.remove("grid");
        let listTitles = document.querySelector('.listTitles')
        if(listTitles) {
            listTitles.remove()
        }
    });
    thead.style.display = 'block'
    tbody.classList.remove('grid')
}