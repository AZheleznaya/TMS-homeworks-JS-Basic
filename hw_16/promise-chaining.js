"use strict";

const requestUrl = "https://jsonplaceholder.typicode.com/posts";

let postsIds = [15, 23, 7, 3];

let posts = postsIds.map(postId => fetch((requestUrl + `/${postId}`)));

Promise.all(posts)
    .then(responses => Promise.all(responses.map(r => {
        if (r.status !== 200) {
            throw new Error(`Error code: ${r.status}`);
        }
        return r.json();
    })))
    .then(posts => posts.forEach(post => {
        const postItem = document.createElement("div");
        postItem.innerHTML = post.body;
        document.body.appendChild(postItem);
    }))
    .catch(e => console.log(e.message));
