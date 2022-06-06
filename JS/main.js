const para = document.querySelector("p");

// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)




// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p

para.insertAdjacentHTML("afterend",`<a href="https://facebook.com">Facebook</a>`);
// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ

let content = para.innerText;
let words = content.split(" ");
document.body.insertAdjacentHTML("afterbegin",`<div>Số từ ${words.length}</div>`)
// Thay thế ký hiệu ? => 🤔, ! => 😲

para.innerHTML = para.innerHTML.replaceAll("?","🤔");