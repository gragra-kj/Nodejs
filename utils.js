function generateRandomNumber(){
    return Math.floor(Math.random()*100)+1;
}
function celciulsToFahraneit(celcius){
    return(celcius *9)/5+32;
}
module.exports={
    generateRandomNumber,
    celciulsToFahraneit,
}
