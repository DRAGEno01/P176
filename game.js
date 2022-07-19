
let words = [
    {
        "inputs": 5,
        "category": "Board Game",
        "word": "Chess"
    },
    {
        "inputs": 6,
        "category": "European Country Name",
        "word": "France"
    },
    {
        "inputs": 7,
        "category": "YouTuber",
        "word": "MrBeast"
    },
    {
        "inputs": 5,
        "category": "YouTuber",
        "word": "Ninja"
    },
    {
        "inputs": 4,
        "category": "Game",
        "word": "CSGO"
    },
    {
        "inputs": 9,
        "category": "Game",
        "word": "Minecraft"
    },
    {
        "inputs": 6,
        "category": "Game",
        "word": "Roblox"
    },
    {
        "inputs": 8,
        "category": "Worst YouTuber",
        "word": "DAARRMAN"
    },
]

$(document).ready(function () {
    fillBlanks();
})

function fillBlanks() {
    //Select a random word
    const randomWord = words[Math.floor(Math.random() * words.length)];

    //Make sure blanks are empty to begin with
    $("#blanks").empty();

    //Show blanks uisng <span>
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }

    //Show Hint
    $("#hint").html(randomWord.category)

    var gameOver=false
    //Fill blanks only if the character match is found
    $(".clickable").click(function () {
        var correctGuess = false;      

        //Get the id of the button clicked
        let id = $(this).attr("id");

        //Get the life 
        var life = parseInt($("#life").text())

        //Loop through all the letters 
        for (var i = 0; i < randomWord.word.length; i++) {
            //Check if the character matches the id of the button
            if (randomWord.word.charAt(i).toLowerCase() == id) {
                //Check if the life is still left and blank is is empty/already filled
                if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                    //fill blanks
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    //Check if the word guess is complete
                    if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                        $("#result").text("You Win!!")
                        correctGuess = true;
                        gameOver=true
                    }
                }                
            }
            
        }
       
        if (life > 0 && correctGuess!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lost!!")
        }
    })
}

    