function rolldice(){

    const numofdice = document.getElementById("numofdic").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimage");
    const values = [];
    const images = [];

    for(let i = 0;i < numofdice;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="image/${value}.dice.png" >`)
    }
    diceresult.textContent = `dice: ${values.join(',')}`;
    diceimages.innerHTML = images.join('');
}
