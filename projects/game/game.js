let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function locationA() {
    clear();
    print("\nYou are in location A!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationB" +
        "\n\tlocationC");
    
    function processInput(input){
        if (input.toLowerCase() === "locationB"  || "locationC") {
            locationB();
            locationC();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationA" +
        "\n\tlocationC");
    
    function processInput(input){
        if (input.toLowerCase() === "locationA" || "locationC") {
            locationA();
            locationC();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

function locationC() {
    clear();
    print("\nYou are in location C!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationB" +
        "\n\tlocationA");
    
    function processInput(input){
        if (input.toLowerCase() === "locationB" || "locationC") {
            locationB();
            locationA();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

function fix() {
    clear();
    print("\nYou have fixed the Breach Point yipeeeeeeeeeee");
    print("\nWhere do you want to go? Say one of these choices:" +
        "\n\tlocationA");
    
    function processInput(input){
        if (input.toLowerCase() === "locationA") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

function begining() {
    clear();
    print("\nYou turn in circle the establishment your parents had worked so hard to build now burns in front of you");
    print("\n add story here");
    
    function processInput(input){
        if (input.toLowerCase() === "locationA") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to ecos of time enter ");

    function processInput(input){
            begining();
    }

    waitForInput(processInput);
}