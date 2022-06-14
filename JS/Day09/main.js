const breedListEl = document.getElementById("breed-list");

const getBreedList = async () => {
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/list/all");
        console.log(res);
        renderBreedList(res.data.message);
    } catch (error) {
        console.log(error);
    }
}

const renderBreedList = obj => {
    console.log(obj);
    let keys = Object.keys(obj);
    let html = "";
    for (let i = 0; i < keys.length; i++) {
        const element = keys[i];
        html += `<option value="${keys[i]}">${keys[i]}</option>`;
    }
    breedListEl.innerHTML = html;
}

getBreedList();