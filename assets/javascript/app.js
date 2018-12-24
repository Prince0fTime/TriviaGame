window.onload = function () {
    console.log("hi");

    var question1 = {
        question: "NES was Short for.?",
        answer: "Nintendo Entertainment System",
        fake1: "Not Ever Still",
        fake2: "New Enterprise System",
        fake3: "Never Ending Simulation"
    };
    var question2 = {
        question: "How many forms does The Final Boss of The Legend of Dragoon Have?",
        answer: "7",
        fake1: "2",
        fake2: "5",
        fake3: "10"
    };
    var question3 = {
        question: "What is Know as the Hardest Game of all Time?",
        answer: "Ghosts and Goblins",
        fake1: "Assassin's Creed",
        fake2: "Ninja Gaiden ",
        fake3: "Neverwinter Nights"
    };
    var question4 = {
        question: "Who is The Elven Sword-Wielding, Green Clothed Hero in the Legend of Zelda series?",
        answer: "Link",
        fake1: "Zelda",
        fake2: "Ganon",
        fake3: "Luigi"

    };
    var question5 = {
        question: "In what Game Series are Golden Rings used as Life-energy and Money",
        answer: "Sonic the Hedgehog",
        fake1: "Super Mario Bros",
        fake2: "Soul Reaver",
        fake3: "Harvest Moon"
    };
    var question6 = {
        question: "Who is the Most Famous Video Game Character of all Time?",
        answer: "Mario",
        fake1: "Sonic",
        fake2: "Link",
        fake3: "Solid Snake"
    };
    var question7 = {
        question: "What was The First Home Consle?",
        answer: "Oddessy",
        fake1: "NES",
        fake2: "Atari 2600",
        fake3: "sega master system"
    };
    var question8 = {
        question: "In what Series were Dracula and The Grim Reaper recurring Villians?",
        answer: "Castlevania",
        fake1: "Legend of Zelda",
        fake2: "Soul Reaver",
        fake3: "Half-Life"
    };
    var question9 = {
        question: "How Many Buttons were on the Original NES controller (includeing the D-pad)",
        answer: "8",
        fake1: "10",
        fake2: "5",
        fake3: "15"
    };
    var question10 = {
        question: "What Part of an Xbox 360 causes the Red Ring of Death?",
        answer: "Both the Graphics Card and the cpu Heat Sink",
        fake1: "the cpu Heat Sink",
        fake2: "The Lights",
        fake3: "None of The Above"
    };
    var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
    var number = 21;

    var CorrectAnswers = 0;
    var IncorrectAnswers = 0;
    var unAnswered = 0;
    var questionsCount = 0;

    var intervalId;

    // $("#stop").on("click", stop);

    // $("#resume").on("click", startUP);
    function emptyALL() {
        $(".answer1").empty();
        $(".answer2").empty();
        $(".answer3").empty();
        $(".answer4").empty();
        $(".question").empty();
        $(".answer1").addClass("btn-light");
        $(".answer1").removeClass("btn-success");
        $(".answer2").addClass("btn-light");
        $(".answer3").removeClass("btn-warning");

    }

    function startUP() {
        // clearTimeout(intervalId);
        number = 21;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

    }

    function questionStartUP() {
        var answerIDs = ['#As1', '#As2', '#As3', '#As4'];
        var answerClass = ["answer1", "answer2", "answer3", "answer4"];

        console.log(answerIDs);
        var arrayNum1 = 0;
        var arrayNum2 = 0;
        var arrayNum3 = 0;
        var randomNUM = Math.floor(Math.random() * Math.floor(3));
        if (randomNUM === 3) {
            arrayNum1 = 2;
            arrayNum2 = 1;
            arrayNum3 = 0;
        }
        if (randomNUM === 2) {
            arrayNum1 = 3;
            arrayNum2 = 1;
            arrayNum3 = 0;
        }
        if (randomNUM === 1) {
            arrayNum1 = 3;
            arrayNum2 = 2;
            arrayNum3 = 0;
        }
        if (randomNUM === 0) {
            arrayNum1 = 3;
            arrayNum2 = 2;
            arrayNum3 = 1;
        }

        $(answerIDs[0]).append('<h5 class="answer1">' + questions[questionsCount].answer + '</h5>');
        $(answerIDs[1]).append('<h5 class="answer2">' + questions[questionsCount].fake1 + '</h5>');
        $(answerIDs[2]).append('<h5 class="answer3">' + questions[questionsCount].fake2 + '</h5>');
        $(answerIDs[3]).append('<h5 class="answer4">' + questions[questionsCount].fake3 + '</h5>');

        $(".question").text(questions[questionsCount].question);
        questionsCount++;
        console.log(questionsCount);
        // $(".answer1").empty();
    }

    function decrement() {

        number--;
        // debugger;
        $("#show-number").html("<h2>" + "Time Left: " + number + "</h2>");

        if (number === 0) {

            stop();
            emptyALL();
            unAnswered++;
            $(".unA").text("unAnswered: " + unAnswered);
            alert("Time Up!");
            if (questionsCount <= 9) {
                startUP();
                questionStartUP();
            } else {
                $(".startButton").show();
                $(".CorrectA").hide();
                $(".IncorrectA").hide();
                $(".unA").hide();
            }
        }

    }

    function reset() {
        number = 21;
        CorrectAnswers = 0;
        IncorrectAnswers = 0;
        unAnswered = 0;
        questionsCount = 0;
        $(".score").hide();
        $(".CorrectA").text("Correct Answers: ");
        $(".IncorrectA").text("Incorrect Answers: ");
        $(".unA").text("unAnswered: ");




    }


    function stop() {

        clearInterval(intervalId);
    }
    // emptyALL();
    // startUP();
    // questionStartUP();
    $(".score").hide();
    $(".CorrectA").hide();
    $(".IncorrectA").hide();
    $(".unA").hide();

    $(".startButton").click(function () {
        reset();
        emptyALL();
        $(".startButton").hide();
        $(".CorrectA").show();
        $(".IncorrectA").show();
        $(".unA").show();
        startUP();
        questionStartUP();
    });

    //used for 
    $(".answer1").click(function () {
        //for color change of buttons
        $(".answer1").removeClass("btn-light");
        $(".answer1").addClass("btn-success");
        $(".answer2").removeClass("btn-light");
        $(".answer2").addClass("btn-warning");
        // debugger;


        if (questionsCount <= 9) {
            CorrectAnswers++;
            $(".CorrectA").text("Correct Answers: " + CorrectAnswers);
            // alert("Correct");
            //for color change of buttons
            setTimeout(function () {
                emptyALL();
                setTimeout(function () {
                    startUP();
                    questionStartUP();
                }, 200);
            }, 900);

        } else {
            emptyALL();
            $(".CorrectA").text("Correct Answers: " + (CorrectAnswers + 1));
            $(".score").show();
            if (CorrectAnswers != 0) {
                $(".score").text("your score was: " + ((CorrectAnswers + 1) * 10));
                $(".startButton").show();

            }

            stop();
        }
        console.log("message", (CorrectAnswers + 1));
    });


    $(".answer2").click(function () {

        //for color change of buttons
        $(".answer1").removeClass("btn-light");
        $(".answer1").addClass("btn-success");
        $(".answer2").removeClass("btn-light");
        $(".answer2").addClass("btn-warning");
        if (questionsCount <= 9) {
            IncorrectAnswers++;
            $(".IncorrectA").text("Incorrect Answers: " + IncorrectAnswers);
            //for color change of buttons
            setTimeout(function () {
                emptyALL();
                setTimeout(function () {
                    startUP();
                    questionStartUP();
                }, 200);
            }, 900);
        } else {
            emptyALL();
            $(".IncorrectA").text("Incorrect Answers: " + (IncorrectAnswers + 1));
            $(".score").show();
            if (CorrectAnswers != 0) {
                $(".score").text("your score was: " + ((CorrectAnswers + 1) * 10));
                $(".startButton").show();

            }
            stop();
        }
    });

};