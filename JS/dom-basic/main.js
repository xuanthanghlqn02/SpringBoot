// Truy cập thông qua id
const heading = document.getElementById("heading");
console.log(heading);

// Truy cập thông qua tag name
const parasTagName = document.getElementsByTagName("p");
console.log(parasTagName);

// Duyệt HTMLCollection với for
for (let i = 0; i < parasTagName.length; i++) {
    console.log(parasTagName[i]);
}

// Duyệt HTMLCollection với map
Array.from(parasTagName).map(ele => console.log(ele));

// Truy cập thông qua class name
const parasClassName = document.getElementsByClassName("para");
console.log(parasClassName);

// Truy cập thông qua css selector
const para1 = document.querySelector("p");
console.log(para1);

const para2 = document.querySelector(".para");
console.log(para2);

const para3 = document.querySelector(".para:nth-child(3)");
console.log(para3);

heading.textContent = "123";
// heading.textContent = "<span>321</span>";

document.body.prepend("Đây là nội dung 1");

const link = document.createElement("a");
link.innerText = "Link GG";
link.href = "https://google.com";
console.log(link);

// document.insertBefore(ul)

const liText = document.createElement("li");
link.innerText = "Thẻ 2,5";
console.log(liText);
// document.body.insertBefore(.li,);

document.body.removeChild(para1);

