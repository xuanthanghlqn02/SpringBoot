// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

const para = document.getElementById("text");
// console.log(para);
para.style.color = '#777';
para.style.fontSize = '2rem';
para.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';


// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

const listLi = document.querySelectorAll('ul li');
Array.from(listLi).map(ele => ele.style.color = 'blue');

// Câu 3.Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// Sử dụng javascript để thực hiện những công việc sau

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)

// Remove thẻ <li> 4

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ

const ul = document.getElementById('list');
for (let i = 8; i <= 10; i++) {
    let li = document.createElement('li');
    li.innerText = `Item ${i}`;
    ul.insertAdjacentElement("beforeend", li);
}

const li1 = document.querySelector("#list > li");
li1.style.color = 'red';

const li3 = document.querySelector("#list > li:nth-child(3)");
li3.style.backgroundColor = 'green';

const li4 = document.querySelector("#list > li:nth-child(4)");
li4.remove();

let addLi = document.createElement('li');
addLi.innerText = 'Add Item';
li3.insertAdjacentElement("afterend", addLi);