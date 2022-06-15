const breedListEl = document.getElementById("breed-list");
const btnEl = document.getElementById("btn");
const subBreedsListEl = document.querySelector(".sub-breeds-list");
const imgEl = document.getElementById("image");

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
    imgEl.src = "";
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
    // imgEl.src = "";
    subBreedsListEl.innerHTML = "";
    let subList = obj.data.message;
    if (subList.length == 0) {
        subBreedsListEl.innerHTML = `<li>Không có sub breed</li>`;
        return;
    }
    // let html = "";
    // for (let i = 0; i < subList.length; i++) {
    //     const element = subList[i];
    //     html += `<li><a href="#">${subList[i]}</a></li>`;
    // }
    // subBreedsListEl.innerHTML = html;

    // async function showRandomImage() {
    //     let html1 = `https://dog.ceo/api/breed/${breedListEl}/${subList}/images/random`;
    //     let res1 = await axios.get(html);
    //     console.log(res1);
    //     imgEl.src = res1.data.message
    // }

    for (let i = 0; i < subList.length; i++) {
        let newBreed = document.createElement("li");
        newBreed.innerHTML = `<a href="#">${subList[i]}</a>`;
        subBreedsListEl.append(newBreed);

        newBreed.addEventListener("click", async () => {
            let html = `https://dog.ceo/api/breed/${breedListEl.value}/${subList[i]}/images/random`;
            let res = await axios.get(html);
            console.log(res);
            imgEl.src = res.data.message;
        });
    }
}


