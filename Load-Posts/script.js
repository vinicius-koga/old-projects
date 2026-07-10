const btn = document.querySelector('.btn');
const body = document.querySelector('.body');

btn.addEventListener('click', () => {
    loadPosts();
})

async function loadPosts() {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts');
    const reqObj = await req.json();

    for(const item of reqObj) {
        body.insertAdjacentHTML('beforeend', `
            <div class="post">
                <div class="post-title">${item.title}</div>
                <div class="post-body">${item.body}</div>
            </div>
        `);
    }
}