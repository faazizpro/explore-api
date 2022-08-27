function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data => displayPosts(data))
}

/*
1. get the container element where you want to add the new elements
2. create child element
3. set inner text or inner html
4. append child

*/


function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h2>User- ${post.userId}</h2>
        <h3>Post : title ${post.title}</h3>
        <p>Post Description: ${post.body}</p>
        `
        postContainer.appendChild(postDiv);
    
    }
}

loadPost();