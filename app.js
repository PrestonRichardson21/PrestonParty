
document.getElementById('spinButton').addEventListener('click', function() {
    const result = spin();
    document.getElementById('resultTextbox').innerText = result;
});

const spin = () =>{
    let ran = Math.random()*10;

    return Math.ceil(ran);

}

// console.log(spin());
