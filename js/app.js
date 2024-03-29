// Get the start page and game page elements
const startPage = document.getElementById("startPage");
const gamePage = document.getElementById("gamePage");

// Get the start form element
const startForm = document.getElementById("startForm");

// Add event listener to the form submission
startForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the pet name entered by the user
    const petName = document.getElementById("nameInput").value;

    // Hide the start page and show the game page
    startPage.style.display = "none";
    gamePage.style.display = "block";


    const gameContent = document.createElement("h2");
    gameContent.textContent = petName;
    gameContent.classList.add("petName")
    gamePage.appendChild(gameContent);
    gamePage.insertBefore(gameContent, healthContainer);
    gamePage.insertBefore(gameContent, buttonContainer)

    let petHappiness = 100;
    let petHunger = 100;
    let petEnergy = 100;


    ///start game

    function feedPet() {
        petHunger += 5;
        if (petHunger < 0) {
            petHunger = 0;
        }
        else if (petHunger > 100) {

            petHunger = 100;
        }
        document.getElementById('hunger').textContent = petHunger;
        console.log("Your pet has been fed!");


    }

    function playWithPet() {
        petHappiness += 5;
        if (petHappiness < 0) {
            petHappiness = 0;
        }
        else if (petHappiness > 100) {
            petHappiness = 100;
        }
        document.getElementById("happiness").textContent = petHappiness;
        console.log("You're playing with your pet!");
    }
    function petRest() {
        petEnergy += 5;
        if (petEnergy < 0) {
            petEnergy = 0;
        }
        else if (petEnergy > 100) {
            petEnergy = 100;
        }
        document.getElementById('energy').textContent = petEnergy;
        console.log("Your pet has rested!");


    }
    var playButton = document.getElementById("playButton");
    playButton.addEventListener("click", function () {
        var image = document.getElementById("petImage");
        var initialPosition = 0;
        var distance = 50;
        var interval = 100;

        function bounceUp() {
            image.style.transform = "translateY(" + initialPosition + "px)";
            initialPosition -= distance;
            if (initialPosition >= -distance) {
                setTimeout(bounceUp, interval);
            } else {
                setTimeout(bounceDown, interval);
            }
        }

        function bounceDown() {
            image.style.transform = "translateY(" + initialPosition + "px)";
            initialPosition += distance;
            if (initialPosition <= distance) {
                setTimeout(bounceDown, interval);
            } else {
                image.style.transform = "translateY(0)";
            }
        }

        bounceUp();
    });
    var feedButton = document.getElementById("feedButton");
    var image = document.getElementById("petImage");

    feedButton.addEventListener("click", function () {
        image.style.transform = "scale(1.2)";

        setTimeout(function () {
            image.style.transform = "scale(1)";
        }, 500);
    });


    var restButton = document.getElementById("restButton");
    var image = document.getElementById("petImage");
    var originalImageSrc = image.src;

    restButton.addEventListener("click", function () {
        var newImageSrc = "https://i.imgur.com/p9w7KM5.png";
        image.src = newImageSrc;

        setTimeout(function () {
            image.src = originalImageSrc;
        }, 1500);
    });

    // Add event listeners for the buttons
    document.getElementById('feedButton').addEventListener('click', feedPet);
    document.getElementById('playButton').addEventListener('click', playWithPet);
    document.getElementById('restButton').addEventListener('click', petRest);
    const countdownInterval =
    setInterval(() => {
        petHappiness -= 15;
        if (petHappiness < 0) {
            petHappiness = 0;
        }
        document.getElementById("happiness").textContent = petHappiness;
        checkGameOver();
    }, 2000);
    const countdownInterval1 =
    setInterval(() => {
        petHunger -= 15;
        if (petHunger < 0) {
            petHunger = 0;
        }
        document.getElementById("hunger").textContent = petHunger;
        checkGameOver();
    }, 2000);
    const countdownInterval2 =
    setInterval(() => {
        petEnergy -= 15;
        if (petEnergy < 0) {
            petEnergy = 0;
        }
        document.getElementById("energy").textContent = petEnergy;
        checkGameOver();
    }, 2000);

    function checkGameOver() {
        if ((petHunger === 0 && petHappiness === 0) || (petHunger === 0 && petEnergy === 0) || (petHappiness === 0 && petEnergy === 0)) {
            document.getElementById("gameOver").textContent = "Game Over";
            clearInterval(countdownInterval)
            clearInterval(countdownInterval1)
            clearInterval(countdownInterval2)
            resetButton.style.display="block"
            // Display game over message on screen
            document.getElementById("gameOver").textContent = "Game Over! Your pet died, RIP.";

            // Disable the buttons
            document.getElementById("feedButton").disabled = true;
            document.getElementById("playButton").disabled = true;
            document.getElementById("restButton").disabled = true;

            // Change the image source to the image representing a passed away pet
            petImage.src = "https://i.imgur.com/QDtQ49I.png";
            petImage.style.width=' 250px'
            petImage.style.height='140px'

        }
    }

});
resetButton.style.display="none"
resetButton.addEventListener("click", function () {
   window.location.href =
   window.location.href ;
});
