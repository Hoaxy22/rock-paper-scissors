        let computerChoice = '';
        let paperButton = document.querySelector('#paper');
        let rockButton = document.querySelector('#rock');
        let scissorsButton = document.querySelector('#scissors');
        let resetButton = document.querySelector('#reset');
        let specialButton = document.querySelector('#special');
        function getComputerChoice (){
           let randomChoice = Math.floor(Math.random()*3) + 1;
           
           if (randomChoice === 1){
            computerChoice = 'Rock';
           }
           else if (randomChoice === 2){
            computerChoice = 'Paper';
           }
           else if (randomChoice === 3){
            computerChoice = 'Scissors';
           }
           return computerChoice;
        }

        function resetValues (){
            win = 1;
            loss = 1;
            games = 1;
            winCounter.textContent = '';
            lossCounter.textContent = '';
            gamesPlayed.textContent = '';
            resultText.textContent = '';
            document.getElementById('container').style.backgroundColor = 'beige';
        }
        
        
        function paperChoice () {
            getComputerChoice();
            if (computerChoice === 'Scissors'){
                resultText.textContent = 'You Lose Nerd: Scissors beats Paper';
                document.getElementById('container').style.backgroundColor = 'red';
                lossCounter.textContent = loss++;
                gamesPlayed.textContent = games++;
            }
            else if (computerChoice === 'Rock'){
                resultText.textContent = 'You Win! Paper beats Rock';
                document.getElementById('container').style.backgroundColor = 'green';
                winCounter.textContent = win++;
                gamesPlayed.textContent = games++;
            }
            else {
                resultText.textContent = 'Draw: Nobody wins this time';
                document.getElementById('container').style.backgroundColor = 'beige';
                gamesPlayed.textContent = games++;
            }
        }
        function rockChoice () {
            getComputerChoice();
            if (computerChoice === 'Paper'){
                resultText.textContent = 'You Lose Nerd: Paper beats Rock';
                document.getElementById('container').style.backgroundColor = 'red';
                lossCounter.textContent = loss++;
                gamesPlayed.textContent = games++;
            }
            else if (computerChoice === 'Scissors'){
                resultText.textContent = 'You Win! Rock beats Scissors';
                document.getElementById('container').style.backgroundColor = 'green';
                winCounter.textContent = win++;
                gamesPlayed.textContent = games++;
            }
            else {
                resultText.textContent = 'Draw: Nobody wins this time';
                document.getElementById('container').style.backgroundColor = 'beige';
                gamesPlayed.textContent = games++;
            }
        }
        function scissorsChoice () {
            getComputerChoice();
            if (computerChoice === 'Paper'){
                resultText.textContent = 'You Win! Scissors beats Paper';
                document.getElementById('container').style.backgroundColor = 'green';
                winCounter.textContent = win++;
                gamesPlayed.textContent = games++;
                
            }
            else if (computerChoice === 'Rock'){
                resultText.textContent = 'You Lose Nerd: Rock beats Scissors';
                document.getElementById('container').style.backgroundColor = 'red';
                lossCounter.textContent = loss++;
                gamesPlayed.textContent = games++;
            }
            else {
                resultText.textContent = 'Draw: Nobody wins this time';
                document.getElementById('container').style.backgroundColor = 'beige';
                gamesPlayed.textContent = games++;
            }
        }
        function checkWinner () {
            if (win === 6){
                alert('You Win!')
                resetValues();
            }
            else if (loss === 6){
                alert('You Lose!');
                resetValues(); 
            }
        }
        
        let resultText = document.querySelector("#result");
        let winCounter = document.querySelector("#winCounter");
        let win = 1;
        let lossCounter = document.querySelector("#lossCounter");
        let loss = 1;
        let gamesPlayed = document.querySelector("#gamesPlayed");
        let games = 1;
        
        paperButton.addEventListener('click', ()=> {
            paperChoice();
            setTimeout(checkWinner, 1);
        });
        scissorsButton.addEventListener('click', ()=> {
            scissorsChoice();
            setTimeout(checkWinner, 1);
        });
        rockButton.addEventListener('click', ()=> {
            rockChoice();
            setTimeout(checkWinner, 1);
        });
        resetButton.addEventListener('click', resetValues);