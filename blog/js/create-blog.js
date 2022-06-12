// console.log(Date.now());
// console.log(new Date(1654849407124));
let domElements = [];
let deletedElements = [];
const blogPostURL = "http://localhost:3000/blogs";
const blog = document.getElementById("blog");
const blogTitle = document.getElementById("blog-title");
const blogDescription = document.getElementById("blog-description");
const blogImage = document.getElementById("blog-image");
let blogImagebase64 = "";
const heading = document.getElementById("heading");
const paragraph = document.getElementById("p");
const blogContent = document.getElementById("blog-content");
const publishButton = document.getElementById("publish-button");
const image = document.getElementById("image");
const tags = document.getElementById("tags");
const category = document.getElementById("category");
const blogAuthor = document.getElementById("blog-author");
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const toastTitle = document.getElementById("toast-title");
const toastContent = document.getElementById("toast-content");
const undo = document.getElementById("undo");
const redo = document.getElementById("redo");

function updateDOM () {
    // console.log(domElements);
    blog.innerHTML = domElements.join("");
}

function moveToBlog() {
    blog.scrollIntoView();
}

heading.addEventListener("click", (e) => {
    // console.log(e.target.id);
    const heading = document.createElement(e.target.id);
    heading.innerHTML = blogContent.value;
    domElements.push(heading.outerHTML);
    // blog.appendChild(heading);
    updateDOM();
    // console.log(domElements[0].outerHTML);
    blogContent.value = "";
});

paragraph.addEventListener("click", (e) => {
    // console.log(e.target.id);
    const paragraph = document.createElement(e.target.id);
    paragraph.innerHTML = blogContent.value;
    domElements.push(paragraph.outerHTML);
    updateDOM();
    blogContent.value = "";
});

function toaster(title, content, className) {
    toastTitle.innerHTML = title;
    toastContent.innerHTML = content;
    toastLiveExample.classList.add("bg-danger");
    toastTrigger.click();
}

publishButton.addEventListener("click", async function postBlog(e) {
    if (blogTitle.value.length <= 5) {
        // toastTitle.innerHTML = "Required";
        // toastContent.innerHTML = "Blog title field is required"
        // toastLiveExample.classList.add("bg-danger");
        toaster("Required", "Blog title must contain 5 characters", "bg-danger");
        return;
    } else if (blogDescription.value.length <= 10) {
        toaster("Required", "Description must contain 10 characters", "bg-danger");
        return;
    } else if (category.value == "Select Category") {
        toaster("Required", "Select category", "bg-danger");
        return;
    } else if (tags.value == "") {
        toaster("Required", "Enter tags", "bg-danger");
        return;
    } else if (blogAuthor.value == "") {
        toaster("Required", "Enter author name", "bg-danger");
        return;
    } else if (blog.innerHTML == "") {
        toaster("Required", "Cannot publish empty blog", "bg-danger");
        return;
    }
    let data = {
        blogTitle: blogTitle.value,
        blogDescription: blogDescription.value,
        // blogImage: blogImage.value,
        postTime: Date.now(),
        blogContent: blog.innerHTML,
        tags: tags.value.split(","),
        category: category.value,
        blogAuthor: blogAuthor.value,
        blogImage: blogImagebase64
    };
    $.ajax({
        type: 'POST',
        url: blogPostURL,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        success: (res) => {console.log(res)},
        error: (err) => {console.log(err)}
    })
});

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

const uploadImage = async (event) => {
    const base64 = await convertBase64(event.target.files[0]);
    // console.log(base64);
    const image = document.createElement("img");
    image.className = "rounded col-6 col-lg-4 mx-auto d-block";
    image.src = base64;
    domElements.push(image.outerHTML);
    updateDOM();
};

image.addEventListener("change", (e) => {
    uploadImage(e);
});


blogImage.addEventListener("change", async (e) => {
    blogImagebase64 = await convertBase64(e.target.files[0]);
});

toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })

undo.addEventListener("click", () => {
    if (domElements.length > 0) {
        deletedElements.push(domElements.pop());
        updateDOM();
        moveToBlog();
    }
});

redo.addEventListener("click", () => {
    if (deletedElements.length > 0) {
        domElements.push(deletedElements.pop());
        updateDOM();
        moveToBlog();
    }
});