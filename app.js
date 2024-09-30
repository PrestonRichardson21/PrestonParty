
import { badCardLibrary, nuetralCardLibrary, goodCardLibrary } from './tatbCardLibrary.js';

     
let spin = () =>{
    let result = Math.floor(Math.random()*10 + 1);
    console.log(result);
    document.getElementById("spinResult").innerHTML = "They are a " + result + " but...";
    let pick = Math.floor(Math.random() * 3);

    if (result >= 1 && result <= 3) {
        document.getElementById("cardResult").innerHTML = goodCardLibrary[pick];
    } else if (result >= 4 && result <= 7) {
        document.getElementById("cardResult").innerHTML = nuetralCardLibrary[pick];
    } else {
        document.getElementById("cardResult").innerHTML = badCardLibrary[pick];
    }
    // count++
};

let score =(id)=>{
    document.getElementById(id).innerHTML++
}

function goToPage() {
    window.location.href = "./tatb.html";
}
export { spin, score, goToPage };
