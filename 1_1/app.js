import { SortArray } from "./function.js";
import { SortNumber } from "./function.js";
import { arrayNumbers, arrayCars } from "./data.js";

console.log(SortArray(arrayCars));
console.log(arrayNumbers.sort(SortNumber));