$(document).ready(function () {
    // $("#loader").show();
    $("#posts").html("");
    $.get(`http://localhost:3000/blogs`, function (data) {
        console.log(data);
        // <div class="card w-50">
        //     <div class="d-flex flex-row-reverse">
        //         <img src="https://www.techmeet360.com/wp-content/uploads/2022/03/featuredImage-768x392.png" class="card-img-top" alt="...">
        //         <h4 class="w-auto position-absolute text-danger mt-4 mr-5 pr-5 bg-white">14 Oct 21</h4>
        //     </div>
        //     <div class="card-body">
        //         <h5 class="card-title">Card title</h5>
        //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        //             card's content.</p>
        //         <div class="d-flex justify-content-between">
        //             <div>
        //                 <a href="#" class="btn btn-outline-primary">Read More</a>
        //             </div>
        //             <div>
        //                 <p>By ABC</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        const blogs = document.getElementById("blogs");
        for (let blog = 0; blog < data.length; blog++) {
            console.log(data[blog]);
            const card = document.createElement("div");
            card.className = "card mb-5 mx-1";
            card.style.width = "20rem"
            const flex = document.createElement("div");
            flex.className = "d-flex flex-row-reverse";
            const blogImage = document.createElement("img");
            blogImage.src = data[blog].blogImage
            blogImage.className = "card-img-top";
            blogImage.style.minHeight = "10rem"
            const blogTimestamp = document.createElement("p");
            const date = new Date(data[blog].postTime)
            blogTimestamp.innerHTML = date.toLocaleString('default', {month: "short", year: "2-digit"});
            blogTimestamp.className = "w-auto position-absolute text-danger mt-4 mr-5 pr-5 bg-white px-1"
            flex.append(blogImage, blogTimestamp);
            const cardBody = document.createElement("div");
            cardBody.className = "card-body d-flex align-content-around flex-column";
            const blogTitle = document.createElement("h5");
            blogTitle.className = "card-title";
            blogTitle.innerHTML = data[blog].blogTitle;
            const blogDescription = document.createElement("p");
            blogDescription.className = "card-text";
            blogDescription.innerHTML = data[blog].blogDescription;
            const blogDetails = document.createElement("div");
            blogDetails.className = "d-flex justify-content-between mt-auto";
            const div1 = document.createElement("div");
            const anchor = document.createElement("a");
            anchor.className = "btn btn-outline-primary";
            anchor.href = `/pages/blog.html?id=${data[blog].id}`;
            anchor.innerHTML = "Read more";
            div1.appendChild(anchor);
            const div2 = document.createElement("div");
            const authorInfo = document.createElement("p");
            authorInfo.innerHTML = `By ${data[blog].blogAuthor}`;
            div2.appendChild(authorInfo);
            blogDetails.append(div1, div2);
            cardBody.append(blogTitle, blogDescription, blogDetails);
            card.append(flex, cardBody);
            blogs.append(card);
        }
     })
});