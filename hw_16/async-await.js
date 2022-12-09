"use strict";

const requestURL = "https://jsonplaceholder.typicode.com/posts";

let postsIds = [15, 23, 7, 3];

async function getAllData(url) {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Enable to fetch data from ${url}: error status ${response.status}`)
    }

    return response.json();
}

async function getPost(idPost) {
    const postURL = requestURL + `/${idPost}`;
    return getAllData(postURL);
}

async function printPostsByIds(ids) {
    const result = await Promise.all(ids.map(id => getPost(id)));

     result.forEach((e) => {
        const postItem = document.createElement("div");
        postItem.innerHTML = e.body;
        document.body.appendChild(postItem);
    });

    return result;
}

printPostsByIds(postsIds);