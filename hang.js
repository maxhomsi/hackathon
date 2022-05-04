let word = "hello"; //palavra passada
let newWord = word.split(""); //newword ta pegando o word se separando em uma array

let board = word.split("").fill("-");
//a board (onde o jogador joga) eh "" (sem nada) e ta usando o .fill para colocar os - (nesse caso ele transforma tudo q vc uer em -)
let wrongGuesses = []; //ta colocando a letra errada nela (usa na 17)

let checkGuess = function (letter) { //funcao checkguess que vai verificar  etra que ele colocou
  if (word.includes(letter)) { //SE a palavra (word) inclui a letra chamanda na funcao ele "ativa" (.includes())
    for (let i = 0; i < newWord.length; i++) { //loopando toas as letras da palavra (newWord/word) 
      if (newWord[i] === letter) { //SE a letra na posicao [i] se uma for igaul a letra escolhida na funcao, vai ativar o bagulho
        board[i] = letter; //esta substituindo o - (.fill) pela letra que foi encontrada na palavra no index
      } else {
      }
    }
  } else {
    console.log("wrong Letter"); // esse else eh para fazer as coisas quando o jogador erra. push enviado para o log
    wrongGuesses.push(letter);
    console.log(wrongGuesses);
  }
  checkForWin(board); //essa linha chama a funcao checkforwin passando o board

  console.log(board); //ver como esa no momento

 
};

let checkForWin = function (board) { //vai chegar se o usuario ganhou 
  if (board.join("") === word) { 
      //se tabuleiro for igual a apalavra do jogaro ele ganhou o .joit ta transformando a array para string
    console.log("YOU WON");
  } else { //se nao acertou loga qpara continuar jogando
    console.log("Choose another letter");
  }
};

checkGuess("l");

checkGuess("e");

checkGuess("h");

checkGuess("t");
checkGuess("x");
checkGuess("o");