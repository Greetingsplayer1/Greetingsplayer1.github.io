let gameActive = true; //this variable is required.
let haveGrapple = false;
let haveForce = false;
let haveBreakPoint = false;

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function mainPort() {
    clear();
    print("\nWow the break point worked you have telported to a main port");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationB" +
        "\n\tlocationC");
    
function processInput(input) {
        let choice = input.toLowerCase();

        if (choice === "locationb" || choice === "locationc") {
            if (haveBreakPoint === true) {
                if (choice === "locationb") locationB();
                if (choice === "locationc") locationC();
            } else {
                print("\nYou need the Break Point item to teleport!");
                waitThenCall(mainPort); 
            }
        } else {
            stayHere();
            waitThenCall(mainPort);
        }
    }
    
    // This tells the game to wait for the user to type before running the logic above
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tmainPort" +
        "\n\tlocationC");
    
    function processInput(input){
        if (input.toLowerCase() === "mainport" || "locationc") {
            mainPort();
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
        "\n\tmainPort");
    
    function processInput(input){
        if (input.toLowerCase() === "locationb" || "mainport") {
            locationB();
            mainPort();
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
    print("\nWhere do you want to go?" +
        "\n\tmainPort");
    
    function processInput(input){
        if (input.toLowerCase() === "mainport") {
            mainPort();
        } else {
            stayHere();
        }
    }
    haveBreakPoint = true;
    waitForInput(processInput);
}

function noFix() {
    clear();
    print("\nYou are are a faliur resart");
    
function processInput(input) {
        let choice = input.toLowerCase();

        if (choice === "mainport") {
            if (haveBreakPoint === true) {
                if (choice === "mainport") mainPort();
            } else {
                print("\nYou need the Break Point item to teleport!");
                waitThenCall(mainPort); 
            }
        } else {
            stayHere();
            waitThenCall(mainPort);
        }
    }
    haveBreakPoint = false;
    waitForInput(processInput);
}


function begin() {
    clear();
    print("\nstory");
    print("\n add story here");
        print("\n fix or nofix");
    
    function processInput(input){
        if (input.toLowerCase() === "fix" || "nofix") {
            fix();
            noFix();
        } else {
            stayHere();
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to echos of time");
    print("Type begin to begin");

    function processInput(input){
        if (input.toLowerCase() === "begin") {
            begin();
        } else {
            stayHere();
        }
}
    waitForInput(processInput);
}