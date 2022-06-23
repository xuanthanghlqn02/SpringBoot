const province = document.getElementById("province");
const district = document.getElementById("district");
const commune = document.getElementById("commune");

const getProvince = async () => {
    try {
        let res = await axios.get("https://provinces.open-api.vn/api/p/");
        console.log(res);
        renderProvice(res.data);

    } catch (error) {
        console.log(error);
    }
}

const renderProvice = arr => {

    let html = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        html += `<option value="${element.code}">${element.name}</option>`;
    }
    province.innerHTML = html;
}

province.addEventListener("change", async () => {
    try {
        let provinceCode = province.value;
        console.log(provinceCode);
        let res = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
        console.log(res);
        renderDistrict(res.data.districts);
    } catch (error) {
        console.log(error);
    }
})

const renderDistrict = arr => {
    let html = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        html += `<option value="${element.code}">${element.name}</option>`;
    }
    district.innerHTML = html;
}

district.addEventListener("change", async () => {
    try {
        let districtCode = district.value;
        console.log(districtCode);
        let res = await axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
        console.log(res);
        renderCommune(res.data.wards);
    } catch (error) {
        console.log(error);
    }
})

const renderCommune = arr => {
    let html = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        html += `<option>${element.name}</option>`;
    }
    commune.innerHTML = html;
}

getProvince();