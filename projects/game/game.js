let gameActive = true; //this variable is required.
let haveGrapple = false;
let haveForce = false;
let haveBreakPoint = false;
let loreFound = 0;


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
    
    function processInput(input) {
        let choice = input.toLowerCase();

        if (choice === "mainport") {
            mainPort();
        } else if (choice === "locationc") {
            // Check for the Break Point item specifically for Location C
            if (haveBreakPoint === true) {
                locationC();
            } else {
                print("\nYou need the Break Point item to teleport to Location C!");
                waitThenCall(locationB);
            }
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

function locationC() {
    clear();
    print("\nYou are in Location C—the closest island to the fracture.");
    print("\nThe air is thick with violet static. The **Absolute Point** looms ahead.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationB" +
        "\n\tmainPort" +
        "\n\tabsolutePoint"); // New choice added here
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "locationb") {
            locationB();
        } else if (choice === "mainport") {
            mainPort();
        } else if (choice === "absolutepoint") {
            absolutePoint(); // Jump to the finale
        } else {
            stayHere();
            waitThenCall(locationC);
        }
    }
    waitForInput(processInput);
}


function fix() {
    clear();
    print("\nYou have fixed the break Point yipeeeeeeeeeee");
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
    print("\nYou have not fixed the Break point");
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
    print("\n Before the sky fractured, the oceans were blue and the horizon was a straight line. Then came the Split—a cataclysmic event at the world's center that tore the earth into floating islands and bled violet into the tides. None have reached the absolute point though it is said to be a point where neither chaos nor peace live. Hassimon is a thief who uses his vast knowledge of magic and the lands to navigate this torn world without getting caught. Hassimon uses ports, archways with figures inscribed upon them. These ports were built by the ancient societies who used ancient magic to build the port to which no one knows the true purpose behind them. Hassimon is one of the few people who were born with innate magic or ancient magic. While most people can only use magic learned by book and require a source to channel the magic like a staff or wand, people born with ancient or innate magic can directly channel their power through themselves. The rulers at the time did not understand this ancient magic so they regarded it as chaotic and wrong swearing to rid the world of this “chaotic magic”. Ancient magic according to the vast amount of books at the ancient library which is located in the lands between. These lands were mostly protected from the “split” due to the vast amounts of ancient protection magic that surrounded the place to keep people without the ancient blood out. The lands between are a few but large islands that house hundreds of texts on ancient magic and is a safe place for those born with ancient blood to study and learn to control their abilities. It exists between both time and reality which make it a perfect spot for Hassimon to live, and practice the ancient magic that was imbued within him at birth. This is where our story begins ");
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

function stayHere() {
 if (Math.random() < 0.001) { 
        print("\n[SECRET]: The Absolute Point shakes and a voice emerges from within and whispers your true name. Aethel-Voss. You feel a chill... but then all turns back to normal. Was it just you or did that sound like your sister");
        loreFound++;
        return; // This stops the function so it doesn't print the normal message too
    }

        if (Math.random() < 0.001) { 
        print("\n[ECHO]: The violet tides ripple. You see a flash of your daughter's ribbon tangled in a gear... but it vanishes before you can grab it. Focus, thief!");
        loreFound++;
        return; 
    }

        if (Math.random() < 0.001) { 
        print("\n[ULTRA RARE]: The Absolute Point pulses. For a split second, the sea turns blue again. You see your family's faces in the reflection before the violet tides return. Was it a dream?");
        loreFound++;
        return; 
    }

    if (Math.random() < 0.001) { 
        print("\n[ULTRA RARE]: A child's laughter echoes from the absolute point between. It's not a memory and it's coming from the point. ");
        return; 
    }

    if (Math.random() < 0.001 && haveBreakPoint === false) {
    print("\n[LUCK]: A rift opens and a cracked Break Point falls at your feet. The universe is cheating for you today, thief.");
    haveBreakPoint = true;
    return;
}

    // 1. Create a list (array) of your funny messages
    let responses = [
        "\nSorry, that's too stupid for your character to understand.",
        "\nYour character stares blankly into the purple sea, confused.",
        "\nThat makes no sense in this reality. Try again.",
        "\nYou try to do that, but you trip over a loose Port-gear instead.",
        "\nThe Absolute Point mocks your life choices. Pick a real direction."
    ];

    // 2. Pick a random number based on the length of the list
    let randomIndex = Math.floor(Math.random() * responses.length);

    // 3. Print the random response
    print(responses[randomIndex]);
}

function absolutePoint() {
    clear();
    print("\nYou stand at the edge of existence. The Absolute Point hums before you, a jagged tear where your family is suspended in a frozen second.");
    print("\nThis is the moment. Use your Ancient Magic to SHATTER the rift?");

    function processInput(input) {
        let choice = input.toLowerCase();

        if (choice === "shatter") {
            // THE ENDING LOGIC GOES HERE
            if (loreFound >= 3) {
                print("\n[SECRET ENDING]: Because you listened to the echoes of the world, you realize the Point isn't just a rift—it's a memory...");
                // Add your victory text or credits here!
            } else {
                print("\n[NORMAL ENDING]: You shatter the Point. Your family is safe, but the world remains scarred...");
            }
            gameActive = false; // Ends the game
        } else {
            stayHere();
            waitThenCall(absolutePoint);
        }
    }
    waitForInput(processInput);
}