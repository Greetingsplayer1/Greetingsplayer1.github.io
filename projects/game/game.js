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

    if (choice === "locationb") {
        // Location B is accessible to everyone
        locationB();
    } else if (choice === "locationc") {
        // Location C requires the Break Point item
        if (haveBreakPoint === true) {
            locationC();
        } else {
            print("\nYou need the Break Point item to teleport to this location!");
            waitThenCall(mainPort);
        }
    } else {
        // Handle staying here if input doesn't match or for other logic
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
    haveBreakPoint = false;
    waitForInput(processInput);
}


function begin() {
    clear();
    print("\nstory");
    print("\n fix or nofix");
    
    function processInput(input){
    let choice = input.toLowerCase();
    if (choice === "fix") {
    fix();
    } else if (choice === "nofix") {
    noFix();    
    }
     else {
    stayHere();
    }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("<h1>Welcome To Echoes Of Time<h1>");
    print("Type begin to proceed on an advventure to heal the world and find your family");

    function processInput(input){
        if (input.toLowerCase() === "begin") {
            begin();
        } else {
            stayHere();
        }
}
    printAscii(`
=:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-:------------
=:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::----------
=:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::--------------
=:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::------------------
=::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-----------------======
=:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-:------------------------
-:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-----------------------===
-::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::------------------------==-
-::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-:---------------------------
-::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::---------------------=-========
-:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-:------------------------============
-:::::::::::::::::::::::::::::::::::::::::::::::::::::------------------------====================
-:::::::::::::::::::::::::::::::::::::::::::::::::----------------------==========================
-:::::::::::::::::::::::::::::::::::::::::::::-------------------=--============================-=
-:::::::::::::::::::::::::::::::::----:---------------------====================================-=
-:::::::::::::::::::::----------------=#%%+---------------------------=-====================-==-=-
=--:::::::::::::-----------------:-:-*@@@@@@+:-----------------------------=-=====-=-=-=======----
=----::------------------------------%@@@@@@%:------------------------------------=------------===
=--------------------------------:--:*@@@@@@@-----------------------------------------============
=-------------------------------:::-*@@@@@@@=------------------------------------=================
========--=-----------------:---:=@@@@@@@@@@*::::::------------------------=======================
========-=--==-------------------*@@@@@@@@@@@%--------:-------------------=-======================
=======-----=------------::-::::*@@@@@@@@@@@@@#::--:-----------------=-====-=-====-===============
======-=-------::::::::::::::::=@@@@@@@@@@@@@@@*::::--------------------------=-==---=-===========
=--------::::::::::---:::::::::#@@@@@@@@@@@@@@@%-:::::::::---------------=--======================
=-::----:::::::----::-::::--::-%@@@@@@@@@@@@@@@%-::::::::----------------=========================
=-------:::--:-----------::-::-@@@@@@@@@@@@@@@@%-::-------------==================================
=-------:::::::::::---::::--::-%@@@@@@@@@@@@@@@%------=========================================+++
---------------------------::-:-#@@@@@@@@@@@@@@+:-------==============================++=+++++****
=--------------------------------=*@@@@@@@@@@@%--=-=============================++++++***+********
=----------------------------------*@@@@@@@@@@@%=======================++++++++++++++============+
=--------------------------========#@@@@@@@@@@@@#==========================+++++++++++++++++======
===------=-========================*@@@@@@@@@@@@@+===========================================++==+
====================================@@@@@@@@@@@@@#++==++++++===============================+++====
+==================+================*@@@@@=%@@@@@@++++**++++++++++++++++++++++++++++++++++++++++++
+=+++++++++++++++++=================+@@@@@*+*@@@@@%******************+===========+++++***********#
++++++++++++++++++++++==============+@@@@@+++*@@@@@**********************++=========+++++********#
+=================++++++++++++++++++*@@@@@**++%@@@@*+++******************##***********++++++++****
+==============++++++++*************#@@@@@*****@@@@@******+*********##*####%%##%#%%%%####*********
+=====++++**+++++++++++*************#@@@@@*****@@@@@********************#########%%%%%%%%%%%%%%###
********************************+****@@@@@*****@@@@@*#*################%%%%%%%%%%%%%%%%%%%%%%%%%%%
******#####**************************@@@@@*****%@@@@%#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
**************************#####%%%#%%@@@@@%####%@@@@@#####%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
**#######%%%%%#%%%%%%%@@@@@@@@@@%%%%%%@@@@@@@@@@@@@@@@%%%####%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#####%%%%##%%%%%@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%@%%%%%%%%%%%%%%%%%%%%%%@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`);
    waitForInput(processInput);
}