let totalNotes = 0;
let quantity = 0;
let average;
let percentage;
let types = {
    "5": 0,
    '4': 0,
    '3': 0,
    '2': 0,
    '1': 0,
    '0': 0
}
function newAvaliation(){
    quantity++;
    console.log(`Quantidade de avaliações é: ${quantity}`);
}
function avaliate(note){
    newAvaliation();
    totalNotes += note;
    console.log(`total notas é: ${totalNotes}`);
    average = (((totalNotes/quantity)*100)/100);
    console.log(`Média é: ${average}`);
    percentage = Math.round((average/5)*100);
    console.log(`Porcentagem é: ${percentage}`);
    if(note ==5){
        types["5"]++;
    }
    else if(note ==4){
        types["4"]++;
    }
    else if(note ==3){
        types["3"]++;
    }
    else if(note ==2){
        types["2"]++;
    }
    else if(note ==1){
        types["1"]++;
    }
    else if(note ==0){
        types["0"]++;
    }
    console.log(`Quantidade de avaliações 5 estrelas: ${types["5"]}`);
    console.log(`Quantidade de avaliações 4 estrelas: ${types["4"]}`);
    console.log(`Quantidade de avaliações 3 estrelas: ${types["3"]}`);
    console.log(`Quantidade de avaliações 2 estrelas: ${types["2"]}`);
    console.log(`Quantidade de avaliações 1 estrela: ${types["1"]}`);
    console.log(`Quantidade de avaliações 0 estrela: ${types["0"]}`);
}