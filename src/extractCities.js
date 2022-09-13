import completeData from './completeData.json';

function extractCityName() {
    let cities = [];
    for(let i = 0; i < completeData.length; i++) {
        cities.push(completeData[i].name + "," + completeData[i].country)
    }
    // const cities = Cities.cities;
    cities.sort();
    console.log(cities);
}

export default extractCityName