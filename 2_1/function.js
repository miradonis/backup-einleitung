export const SortByPopulation = (value) => {
    console.log(value.filter(element => element.population < 100000));
    console.log(value.filter(element => element.population > 100000));
}