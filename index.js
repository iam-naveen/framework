

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(renderList)


function renderList(items) {
    console.log(items);
}


let dom = div(".list",
    div(".item").text("Item 1"),
    div(".item").text("Item 2"),
    div(".item").text("Item 3"),
    div(".item").text("Item 4"),
    div(".item").text("Item 5"),
    div(".item").text("Item 6"),
    div(".item").text("Item 7"),
    div(".item").text("Item 8"),
    div(".item").text("Item 9"),
    div(".item").text("Item 10"),
)

const app = document.getElementById('app');
app.appendChild(dom)
