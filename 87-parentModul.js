import { fetchData } from "./88-childModule.js";
const data= await fetchData();
console.log("01. Data:", data);
console.log("02. Waiting 3s..This is synchronous code but will execute after data is fetched");