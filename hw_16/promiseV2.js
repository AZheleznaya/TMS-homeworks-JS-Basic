"use strict";

const requestURL = "https://jsonplaceholder.typicode.com/posts";

let postsIds = [15, 23, 7, 3];

const posts = postsIds.map(postId => fetch((requestURL + `/${postId}`)).then(response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}).catch(e => console.log(e)));

Promise.all(posts)
    .then(results => {
        results.forEach((post) => {
            const postItem = document.createElement("div");
            postItem.innerHTML = post ? post.body : "NOT FOUND";
            document.body.appendChild(postItem);
        });
    });

