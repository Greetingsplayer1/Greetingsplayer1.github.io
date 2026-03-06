let gameActive = true; //this variable is required.
let haveGrapple = false;
let haveForce = false;
let haveBreakPoint = false;
let loreFound = 0;
let loreForAll = 0;
let foundSecret1 = false;
let foundSecret2 = false;
let foundSecret3 = false;
let foundSecret4 = false;
let foundSecret5 = false;



//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function mainPort() {
    clear();
    print("\nYou take the brdge you built as a youth across to the main island this is were many of the ports are bulit");
    if (haveBreakPoint)  {
        print("\nThe ports hum you now have acces to new paths");
        print("\n\ villageC")
    }
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationB")
    
        
    
function processInput(input) {
    let choice = input.toLowerCase();

    if (choice === "locationb") {
        // Location B is accessible to everyone
        locationB();
    } else if (choice === "villagec") {
        // Location C requires the Break Point item
        if (haveBreakPoint === true) {
            villageC();
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
        "\n\tvillageC");
    
    function processInput(input) {
        let choice = input.toLowerCase();

        if (choice === "mainport") {
            mainPort();
        } else if (choice === "villagec") {
            // Check for the Break Point item specifically for Location C
            if (haveBreakPoint === true) {
                villageCC();
            } else {
                print("\nYou need the Break Point item to teleport to village C!");
                waitThenCall(locationB);
            }
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

function villageC() {
    clear();
    print("\nYou are in village C—the closest island to the fracture.");
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
            waitThenCall(villageC);
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
    let roll = Math.random();

    // 1. THE TRUTH (The "loreForAll" requirement)
    if (roll < 0.1 && loreForAll === 0) { 
        print("\n[The Truth]: The point is not just an object and neither are you... embrace the ancient magic within.");
        loreForAll = 1;
        return; 
    }

    // 2. SECRET 1: Sister/True Name
    if (roll < 0.2 && !foundSecret1) { 
        print("\n[SECRET]: A voice whispers your true name: Aethel-Voss. Was that your sister?");
        foundSecret1 = true;
        loreFound++;
        return; 
    }

    // 3. SECRET 2: Daughter's Ribbon
    if (roll < 0.3 && !foundSecret2) { 
        print("\n[ECHO]: You see a flash of your daughter's ribbon tangled in a gear...");
        foundSecret2 = true;
        loreFound++;
        return; 
    }

    // 4. SECRET 3: Blue Sea Vision
    if (roll < 0.4 && !foundSecret3) { 
        print("\n[ULTRA RARE]: For a split second, the sea turns blue again.");
        foundSecret3 = true;
        loreFound++;
        return; 
    }

    // 5. SECRET 4: Child's Laughter
    if (roll < 0.5 && !foundSecret4) { 
        print("\n[ULTRA RARE]: A child's laughter echoes from the point.");
        foundSecret4 = true;
        loreFound++;
        return; 
    }

    // 6. SECRET 5: The Luck/Break Point
    if (roll < 0.6 && !foundSecret5 && !haveBreakPoint) {
        print("\n[LUCK]: A rift opens and a cracked Break Point falls at your feet.");
        foundSecret5 = true;
        loreFound++;
        haveBreakPoint = true;
        return;
    }

    // NORMAL RESPONSES
    let responses = [
        "\nThat makes no sense in this reality.",
        "\nYou trip over a loose Port-gear.",
        "\nThe Absolute Point mocks your life choices."
    ];

    if (loreForAll === 1) {
        responses.push("\nThe purple sea feels thinner... like a veil.");
    }

    let randomIndex = Math.floor(Math.random() * responses.length);
    print(responses[randomIndex]);
}


function absolutePoint() {
    clear();
    print("\nYou stand at the edge of existence. The **Absolute Point** is a jagged, screaming tear in reality.");
    print("\nThrough the shimmering violet light, you see your family. They are frozen in a single, silent second—neither inside nor outside of time.");
    print("\nYour Ancient Magic burns in your hands. This is the moment. What will you do, thief?");
    print("\nType **SHATTER** to break the rift and free them.");
    print("\nType **ABSORB** to take the Ancient Magic for yourself.");

    function processInput(input) {
        let choice = input.toLowerCase();

        if (choice === "shatter") {
            clear();
            // Check for Secret vs Normal Ending based on lore found
            if (loreFound >= 3) {
                // --- SECRET ENDING: THE TRUE BRIDGE ---
                print("<h1>[SECRET ENDING: THE TRUE BRIDGE]</h1>");
                print("\nBecause you listened to the echoes of the world, you realize the Point isn't just a rift—it's a memory out of place.");
                print("\nYou don't just break the magic; you *healed* it. The violet tides retreat, and for the first time in an age, the sea turns a brilliant, deep **BLUE**.");
                print("\nYour family steps out of the light, untouched by the years. You are no longer Hassimon the thief; you are Aethel-Voss, the Restorer.");
            } else {
                // --- NORMAL ENDING: THE SCARRED WORLD ---
                print("<h1>[NORMAL ENDING: THE SCARRED WORLD]</h1>");
                print("\nWith a roar of Ancient Magic, you shatter the Absolute Point. The explosion of energy throws you back as the rift collapses.");
                print("\nYour family falls into your arms, safe at last, but the horizon remains a bruised purple. The magic is gone, but the world stays broken into islands. You have your family, but the blue sea is lost to history.");
            }
            gameActive = false;

        } else if (choice === "absorb") {
            // --- BAD ENDING: THE HOLLOW KING ---
            clear();
            print("<h1>[BAD ENDING: THE HOLLOW KING]</h1>");
            print("\nGreed or desperation takes hold. Instead of breaking the rift, you try to pull its ancient power into your own soul.");
            print("\nThe magic is too much. You watch in horror as your family is pulled deeper into the violet void, their hands slipping from the glass as the rift collapses into a singularity.");
            print("\nYou are left alone on a barren rock, overflowing with power but with no world left to rule and no family to return to. The purple sea has claimed everything.");
            print("\n<h1>was it worth it</h1>");
            gameActive = false;

        }
        else if (choice === "both") {
            // --- HIDDEN ENDING: THE ONE ABOVE ALL ---
            clear();
            print("<h1>[HIDDEN ENDING: THE ONE ABOVE ALL]</h1>");
            print("\nGreed and love collide. Instead of breaking the rift, you attempt the impossible: you pull the power in while reaching for your family.");
            print("\nYou watch in horror as they slip away, but then you find a reservoir of strength inside you. You hear their voices calling out across the void.");
            print("\nWith a final, desperate surge of Ancient Magic, you bend time itself, pulling your family back into your grasp just as the Absolute Point enters your body.");
            print("\nThe world returns to normal—the sea turns blue—but the Point now lives inside you. You have your family, but you are the guardian of a power that could end the world at any second.");
            gameActive = false;
        }
                else if (choice === "aethel-voss") {
            // --- THE TRUE ASCENSION ENDING ---
            if (loreFound >= 5 && loreForAll == 1) { // Requires finding almost all secrets
            
                clear();
                print("<h1>[TRUE ENDING: THE ARCHITECT REBORN]</h1>");
                print("\nYou do not say 'Shatter.' You do not say 'Absorb.' You speak your True Name into the violet wind.");
                print("\nAt the sound of **AETHEL-VOSS**, the Absolute Point stops screaming. It begins to hum a harmony. The jagged tear in reality softens, turning from a wound into a doorway.");
                print("\nYour family doesn't just fall out; they walk out, fully awake and smiling. You don't take the power into your body—you move the power back into the world's core where it belongs.");
                print("\nThe islands gently descend, reconnecting into a single, vast continent. The sea turns a crystal, sparkling blue. No more Ports, no more rifts, no more hiding.");
                print("\nYou are no longer a thief. You are the man who put the world back together.");
                print("\n<b>The cycle is finally broken. You are home.</b>");
                print("\nand not just that you feel the full power of the acient magic coursing through you giving you mroe power than ever before");
                gameActive = false;
            } else {
                print("\nYou whisper the name, but the Ancient Magic doesn't recognize you yet. You haven't listened to enough of the world's echoes.");
                waitThenCall(absolutePoint);
            }
        }

         else {
            stayHere();
            waitThenCall(absolutePoint);
        }
    }
    waitForInput(processInput);
}
