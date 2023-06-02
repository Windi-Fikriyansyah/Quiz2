// terdapat array employees
const cities = ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];

const bogor = cities.indexOf("bogor")

const citiesSliced = [...cities.slice(0, bogor), ...cities.slice(bogor + 1)]

function citiesSlice(arrays, cityBetween) {
    const indexStart = arrays.indexOf(cityBetween);
    if (indexStart === -1) {
        return arrays;
    }
    const indexEnd = arrays.lastIndexOf(cityBetween);
    if (indexEnd === -1 || indexEnd === indexStart) {
        return arrays;
    }

    return [...arrays.slice(0, indexStart), ...arrays.slice(indexEnd + 1)];

}

console.log(citiesSlice(cities, "jakarta"));
//['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung']