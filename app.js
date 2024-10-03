
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
    
    
};

let score =(id)=>{
    document.getElementById(id).innerHTML++
}

function goToPage(directory) {
    window.location.href = `${directory}`;
}
function showRules() {
    alert(`
         1. Whoever went on a date most recently serves as the first host. The host spins first. 
         2. In their head the host picks the new number they would give that partner based on how much they value/hate the trait in question.
         3. Once the host is ready, they count down from three. Using their fingers, everyone must then say what number they would give the potnetial partner.
         4. Everyone who matches the host gets a point.
         5. Whoever gets ten points first wins!`);
}
export { spin, score, goToPage, showRules };
