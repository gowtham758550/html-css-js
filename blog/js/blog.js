const blog = document.getElementById("blog");
const blogTitle = document.getElementById("blog-title");
const blogDescription = document.getElementById("blog-description");
const blogImage = document.getElementById("blog-image");
const blogAuthor = document.getElementById("blog-author");
const postTime = document.getElementById("post-time");
const category = document.getElementById("category");
const tags = document.getElementById("tags");


window.onload = () => {
    const blogId = window.location.search.split("?id=")[1];
    $.get(`http://localhost:3000/blogs/${blogId}`, (data) => {
        // console.log(data);
        blogTitle.innerHTML = data.blogTitle;
        blogDescription.innerHTML = data.blogDescription;
        blogImage.src = data.blogImage;
        blogAuthor.innerHTML = data.blogAuthor;
        postTime.innerHTML = data.postTime;
        category.innerHTML = data.category;
        tags.innerHTML = data.tags.join();
        blog.innerHTML = data.blogContent;
    })

};