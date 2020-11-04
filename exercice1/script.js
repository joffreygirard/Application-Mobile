let div_main = document.getElementById("main");

let container = document.createElement("div");
container.classList.add("container", "mt-5", "mb-3");

let row = document.createElement("div");
row.classList.add("row");

let images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.jpg",
    "images/image12.jpg",
    "images/image13.jpg",
    "images/image14.jpg",
    "images/image15.jpg",
    "images/image16.jpg",
];

images.forEach(function (image) {
    let div_image = document.createElement("div");
    div_image.classList.add("col-sm-6", "col-md-4", "col-lg-3", "p-2");

    let img = document.createElement("img");
    img.src = image;
    img.classList.add("w-100", "on_hover_clickable");

    div_image.appendChild(img);
    row.appendChild(div_image);
});

container.appendChild(row);
div_main.appendChild(container);
