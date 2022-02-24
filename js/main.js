const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(data => showComments(data));
}

const showComments = comments => {
    const commentSection = document.getElementById('comments');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h2><b>Name: </b>${comment.name}</h2>
        <p><b>Comment: </b>${comment.body}</p>
        <p><b>Email: </b>${comment.email}</p>
        
        `;
        commentSection.appendChild(div);
        console.log(comment);
    }
}

document.getElementById('show-comment').addEventListener('click', loadComments);
// loadComments();