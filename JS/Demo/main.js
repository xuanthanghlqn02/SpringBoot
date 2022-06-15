const breedListEl = document.getElementById('breed-list');
const imgEl = document.querySelector('.result img');
const getSubBreedBtn = document.getElementById('btn');
const subBreedsListUl = document.querySelector('.sub-breeds-list ul')

const getBreedList = async () =>{
    try {
        //goi api lay danh sach giong loai chinh
        let res = await axios.get('https://dog.ceo/api/breeds/list/all');

        // hien thi
        renderBreedList(res.data.message);
    } catch (error) {
        console.log(error);
    }
}

const renderBreedList = obj =>{
  
    let keys = Object.keys(obj);

    let html ="";
    for (let key of keys) {
        html += `<option value ="${key}">${key}</option>`;
    }

    breedListEl.innerHTML = html;
}
getBreedList();

getSubBreedBtn.addEventListener('click', async() =>{
    try {
        let value = breedListEl.value;
        let html = `https://dog.ceo/api/breed/${value}/list`;
        let res = await axios.get(html);
        console.log(res);
        showSubBreedsList(res);

    } catch (error) {
        console.log(error);
    }
})


const showSubBreedsList = obj =>{
    subBreedsListUl.innerHTML='';
    let subList = obj.data.message;
    if (subList.length ==0) {
        subBreedsListUl.innerHTML= '<li>Không có sub Breed</li>';
        return;
    }
    console.log(subList);
    for (const subBreed of subList) {
        let newBreed = document.createElement('li');
        newBreed.innerHTML = `<a href="#">${subBreed}</a>`;
        subBreedsListUl.append(newBreed);
        newBreed.addEventListener('click',async()=>{

            let html = `https://dog.ceo/api/breed/${breedListEl.value}/${subBreed}/images/random`;
            let res = await axios.get(html);
            console.log(res);
            imgEl.src= res.data.message;
        })
    }
}