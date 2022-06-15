const breedListEl = document.getElementById("breed-list");
const btnEl = document.getElementById("btn");
const subBreedsListEl = document.querySelector(".sub-breeds-list");

const getBreedList = async () => {
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/list/all");
        // console.log(res);
        renderBreedList(res.data.message);
    } catch (error) {
        console.log(error);
    }
}

const renderBreedList = obj => {
    // console.log(obj);
    let keys = Object.keys(obj);
    let html = "";
    for (let i = 0; i < keys.length; i++) {
        const element = keys[i];
        html += `<option value="${keys[i]}">${keys[i]}</option>`;
    }
    breedListEl.innerHTML = html;
}

getBreedList();


btnEl.addEventListener("click", async () => {
    try {
        let value = breedListEl.value;
        let res = await axios.get(`https://dog.ceo/api/breed/${value}/list`);
        console.log(res);
        showSubBreedsList(res);
    } catch (error) {
        console.log(error);
    }
})

const showSubBreedsList = obj => {
    subBreedsListEl.innerHTML = "";
    let subList = obj.data.message;
    if (subList.length == 0) {
        subBreedsListEl.innerHTML = `<li>Không có sub breed</li>`;
        return;
    }

    // let keys = Object.keys(obj);
    let html = "";
    for (let i = 0; i < subList.length; i++) {
        const element = subList[i];
        html += `<li><a href="#">${subList[i]}</a></li>`;
    }
    subBreedsListEl.innerHTML = html;
}