let secretNumber;

function addTagContent(tag, text){
    let elementSelect = document.querySelector(tag);
    elementSelect.innerHTML = text;
    responsiveVoice.speak(text, 'Russian Female', {rate:1.2});
}

function createRandomNumber(){
    return parseInt(Math.random() * 100 + 1);
}


function predictVerify(){
    let predictUser = document.querySelector('input').value;
    if(predictUser == secretNumber){
        addTagContent('h1', 'Acertou');
        document.getElementById("reiniciar").disabled = false;
    }else{
        if(secretNumber > predictUser){
            addTagContent('h1' ,`O numero secreto é maior que ${predictUser}`);
        }else{
            addTagContent('h1' ,`O numero secreto é menor que ${predictUser}`);
        }
        document.querySelector('input').value = '';
    }

}

function newGame(){
    secretNumber = createRandomNumber();
    addTagContent('h1', 'O jogo do número secreto');
    addTagContent('p', 'Escolha um numero entre 1 e 100');  
    document.querySelector('input').value = '';
}

newGame();





