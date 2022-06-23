let users;
const tBody = document.getElementById("tbody");
const searchBtnEl = document.querySelector(".btn");
const searchEl = document.querySelector(".seach-form-input");

const getUsersInfo = async () => {
    try {
        let res = await axios.get("https://api.github.com/users");
        console.log(res);
        renderUsersInfo(res.data);
        users = res.data;
    } catch (error) {
        console.log(error);
    }
}

const renderUsersInfo = arr => {
    let html = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        html += `
        <tr>
                            <td>${element.id}</td>
                            <td>
                                <img src="${element.avatar_url}" alt="">
                            </td>
                            <td>${element.login}</td>
                            <td>${element.html_url}</td>
                            <td>${element.repos_url}</td>
                        </tr>`;
    }
    tBody.innerHTML = html;
}

searchEl.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        let term = e.target.value;
        if (term == "") {
            alert("Nội dung tìm kiếm không được để trống");
            return;
        }
    }
})

searchBtnEl.addEventListener("click", function () {
    let term = searchEl.value;
    if (term == "") {
        alert("Nội dung tìm kiếm không được để trống");
        return;
    }
})

const filterUserByName = term => {
    let userFiler = users.filter(c => c.login.toLowerCase().includes(term.toLowerCase()));
    renderUsersInfo(userFiler);
}

getUsersInfo();