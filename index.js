

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(renderList)


function renderList(items) {
    document.body.appendChild(div(
        '.comment-section',
        ...items.map(item => div(".comment",
            div(".head").text(item.name),
            div(".body").text(item.body)
        ))
    ))
}
