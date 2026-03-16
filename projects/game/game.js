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
let haveKey = false; 
let currentActiveListener = "";

//Declare your other global variables here


//If you need, add any "helper" functions here

//-------------
//Main Villages
//-------------

function mainPort() {
    stopWaitingForInput("mainPort"); 
    clear();
    print("\n--MAIN PORT--");
    print("\nYou take the brdge you built as a youth across to reach the main island this a port hub that houses quite a few ports to travel to other land. While some are broken some are not.");
    if (haveBreakPoint)  {
        print("\nThe ports nearby hum you now have acces to new paths");
        print("\n\ villageC")
    }
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\ villageb")
    
        
    
function processInput(input) {
    if (currentActiveListener !== "mainPort") return; 
    let choice = input.toLowerCase();

        if (choice === "map") {
        showMap();
        return; 
    }

    if (choice === "villageb") {
        // Location B is accessible to everyone
        villageB();
    } else if (choice === "villagec") {
            if (haveBreakPoint === true) {
            villageC();
        } else {
            print("\nYou need the Break Point item to teleport to this location!");
        }
    } else {
        // Handle staying here if input doesn't match or for other logic
        stayHere(mainPort);
    }
}
    // This tells the game to wait for the user to type before running the logic above
    waitForInput(processInput);
}


function villageB() {
    stopWaitingForInput("villageB"); 
    clear();
    print("\n--- VILLAGE B ---");
    print("\nThe shoreline of Village B is a graveyard of the Old World. Rusted gears the size of houses are half-buried in violet-stained sand. You remember stories that these were part of the Great Machine that kept the sky from falling. Now, they just whistle in the wind.");
    if (!haveGrapple) {
        print("\nYou see a high-tension **Grapple** hook buried under some metallic debris.");
        print("\nWhere to? mainPort, villageC, or **dig** through the scrap?");
    } else {
        print("\nWhere to? mainPort or villageC");
    }
    
    function processInput(input) {
    if (currentActiveListener !== "villageB") return;
    let choice = input.toLowerCase();

    if (choice === "mainport") {
        mainPort();
    } 
    else if (choice === "villagec") {
        if (!haveBreakPoint) {
            print("\nThe port nearby does not hum; you don't have a break point.");
        } else {
            print("\nThe port hums and you are pushed to Village C.");
            villageC();
        }
    } 
    else if (choice === "dig" && !haveGrapple) {
        haveGrapple = true; // Update state first
        print("\n[ITEM FOUND]: You dug out a functional Grapple! You can now reach high places.");
    } 
    else {
        stayHere(villageB);
    }
}
    waitForInput(processInput);
}



function villageC() {
    stopWaitingForInput("villageC"); 
  clear();
  print("\n--- VILLAGE C ---");
  print("\nThe air hums. You can walk to Village B or Village D.");
  print("\nThere is a port here leading to **Echo Canyon**.");
  print("\nWhere to? villageB, villageD, or use the **portal**?");

  function processInput(input){
    if (currentActiveListener !== "villageC") return;
    let choice = input.toLowerCase();
    if (choice === "villageb") { 
    villageB(); }
    else if (choice === "villaged") {
    villageD(); }
    else if (choice === "portal") {
      if (haveBreakPoint) {
        print("\n[TELEPORT]: You hold up the Break Point. The archway glows violet and pulls you into Echo Canyon!");
        echoCanyon();
      } else {
        print("\nThe portal is cold and dark. You need a **Break Point** to activate this teleportation arch.");
      }
    } else { 
        stayHere(villageC); 
}
  }
  waitForInput(processInput);
}


function villageD() {
    stopWaitingForInput("villageD"); 
  clear();
  print("\n--- VILLAGE D ---");
  print("\nPaths lead to Village C and Village E.");
  print("\nHigh above, you see the floating waterfalls of **Nectar Springs**.");
  print("\nWhere to? villageC, villageE, or **grapple** up to the Springs?, or ** focus ** your energy");

  function processInput(input){
    if (currentActiveListener !== "villageD") return;
    let choice = input.toLowerCase();
    if (choice === "villagec") {
       if (haveBreakPoint) {
       print("\nThe port hums at your presances and sends you to village C");
       villageC();
     } else {
       print("\nYou have no way to reach village C it is to far");
     }
   }
    else if (choice === "villagee") { 
        villageE(); }
    else if (choice === "grapple") {
      if (haveGrapple) {
        print("\nYou fire your hook into the floating island's underside and haul yourself up to the Springs.");
        nectarSprings();
      } else {
        print("\nThe Springs are floating too high. You'll need a **Grapple** to get up there.");
      }
    } else if (choice === "focus") {
       if (!haveForce) {
        print("\nYou focus your energy the violet air around you recceds you power grows with the calmness.");
        haveForce = true;
       }else {
         print("\nYou have already meditatesd find something else to do."); 
    }} else { stayHere(villageD); }
  }
  waitForInput(processInput);
}


function villageE() {
    stopWaitingForInput("villageE"); 
  clear();
  print("\n--- VILLAGE E ---");
  print("\n Village E, the mining hub. Here, the Iron Order strips the floating islands of their ore to build their fortresses. Life is 'calm' only because the Rulers have crushed any spark of magic. You see the obsidian rocks blocking the path to the Architect’s Tomb—they weren't put there by nature; they were placed there to hide the truth of your bloodline.");
  print("\n Where wouuld yo liek to go ** enter ** to go to the store, villageD, or villageF"); 

  function processInput(input){
    if (currentActiveListener !== "villageE") return;
    let choice = input.toLowerCase();
    if (choice === "villaged") {
         villageD(); } 
    else if (choice === "enter") {
      if (haveForce) {
        print("\nA large white marble dopr stands in your way from gewtting into the tomb. Use force to shove it aside using ** Force **");
        villageF();
      } else {
        print("\nMassive obsidian rocks block the narrow path. You can't move them by hand.");
      }
    } else if (choice === "villagef") {
      if (haveForce) {
        print("\nA cluster of obsidian boulders blocks the ledge. You use **Force** to push them into the void.");
        villageF();
      } else {
        print("\nMassive obsidian rocks block the narrow path. You can't move them by hand.");
      }
    } else { 
        stayHere(villageE); 
 }
  }
  waitForInput(processInput);
}


function villageF() {
    stopWaitingForInput("villageF"); 
  clear();
  print("\n--- VILLAGE F ---");
  print("\n A prosporuse village that has used their use of magic to far and to thrive");
  print("\nWhere to? villageE, huntersCamp, or forgottenShrine");
  
  function processInput(input){
    if (currentActiveListener !== "villageF") return;
    let choice = input.toLowerCase();
    if (choice === "villagee") { villageE(); } 
    else if (choice === "hunterscamp") {
      if (haveGrapple) {
        print("\nYou use your **Grapple** to swing across the broken bridge.");
        huntersCamp();
      } else {
        print("\nThe bridge to the camp is destroyed. It's too far to jump.");
      }
    } else if (choice === "forgottenshrine") {
       if (haveForce) {
         print("\nYou use **Force** to push the ancient shrine doors open.");
         forgottenShrine();
       } else {
         print("\nThe heavy shrine doors won't budge.");
       }
    } else { stayHere(villageF); }
  }
  waitForInput(processInput);
}

//---------------
// The lost lands
//---------------

function architectsTomb() {
    stopWaitingForInput("architectsTomb"); 
 clear();
 print("\n--- THE ARCHITECT'S TOMB ---");
 print("\nAn island that shouldn't exist. It is a perfect circle of white marble, and acient sybols untouched by the violet rot.");
 print("\nOn the inside there are hundrees of acient markings carved into the tomb, and casting acient magic to protect it");
 print("\nWhere to? villagee or ** Focus **");
 
 function processInput(input) {
if (currentActiveListener !== "architectsTomb") return;
  let choice = input.toLowerCase();
  if (choice === "villagee") {
   villageE();
  }
}
stayHere(architectsTomb);
 waitForInput(processInput);
}

function islandsOfScilence() {
    stopWaitingForInput("islandsOfScilence"); 
 clear();
 print("\n The islands of Scilence");
 print("\nA cluster of islands where neithor light nore sound reachers");
  print("\nLands plunged into etaeral ngiht with only the violent tint, and echoing scilence");
 print("\nWhere to? villageb");
 
 function processInput(input) {
    if (currentActiveListener !== "islandsOfScilence") return;
  let choice = input.toLowerCase();
  if (choice === "villageb") {
   villageB();
  } else {
   stayHere(islandsOfScilence);
  }
 }
 waitForInput(processInput);
}

//----------
//Wild lands
//----------


function nectarSprings() {
    stopWaitingForInput("nectarSprings"); 
  clear();
  print("\n--- NECTAR SPRINGS ---");
  print("\nSweet-smelling water bubbles up. High atop a floating crystal spire, you see a glint of iron.");
  
  if (!haveKey) {
    print("\nThe **Iron Order Key** is snagged on a ledge 30 feet above the water.");
    print("\nWhere to? villageD, shimmeringBasin, or **force** the crystal apart");
  } else {
    print("\nThe shattared crystal remians stand before you. You already have the key.");
    print("\nWhere to? villageD or shimmeringBasin");
  }

  function processInput(input){
    if (currentActiveListener !== "nectarSprings") return;
    let choice = input.toLowerCase();
    if (choice === "force" && !haveKey) {
      if (haveForce) {
        haveKey = true;
        print("\n[SUCCESS]: You shatter the crystal with a pulse of magic and take the Key!");
      } else {
        print("\nThe crystal is too strong for your bare hands. You need to use **Force**.");
      }
    } 
    else if (choice === "villaged") { 
        villageD(); }
    else if (choice === "shimmeringbasin") { 
        shimmeringBasin(); }
    else { 
        stayHere(nectarSprings); 
 }
  }
  waitForInput(processInput);
}

function huntersCamp() {
    stopWaitingForInput("hunertsCamp"); 
    clear();
    print("\nA small outpost for those brave enough to track the violent beasts.");
    print("\nWhere to? villageF");
    
    function processInput(input){
        if (currentActiveListener !== "huntersCamp") return;
        let choice = input.toLowerCase();
        if (choice === "villagef") {
             villageF(); }
    }
    waitForInput(processInput);
}



function forgottenShrine() {
    stopWaitingForInput("forgottenShrine"); 
    clear();
    print("\nAn ancient altar glowing with a soft, rhythmic light.");
    print("\nWhere to? villageF or crystalCave");
    
    function processInput(input){
        if (currentActiveListener !== "forgottenShrine") return;
        let choice = input.toLowerCase();
        if (choice === "villagef") { 
            villageF(); }
        else if (choice === "crystalcave") { 
            crystalCave(); }
        else { 
            stayHere(forgottenShrine);  }
    }
    waitForInput(processInput);
}

function crystalCave() {
    stopWaitingForInput("crystalCave"); 
    clear();
    print("\nThe walls are jagged quartz. Your voice echoes three times.");
    print("\nWhere to? forgottenShrine or obsidianPeak");
    
    function processInput(input){
        if (currentActiveListener !== "crystalCave") return;
        let choice = input.toLowerCase();
        if (choice === "forgottenshrine") { 
            forgottenShrine(); }
        else if (choice === "obsidianpeak") { 
            obsidianPeak(); }
        else { 
            stayHere(crystalCave); }
    }
    waitForInput(processInput);
}

function obsidianPeak() {
    stopWaitingForInput("obsidianPeak"); 
    clear();
    print("\nThis is a massive obsidian spire.");
    print("\nWhere to? crystalCave or cloudPeaks");
    
    function processInput(input){
        if (currentActiveListener !== "obsidianPeak") return;
        let choice = input.toLowerCase();
        if (choice === "crystalcave") { 
            crystalCave(); }
        else if (choice === "cliffpeaks") { 
            cliffPeaks(); }
        else { 
            stayHere(obsidianPeak); }
    }
    waitForInput(processInput);
}

function cliffPeaks() {
    stopWaitingForInput("cliffPeaks"); 
    clear();
    print("\nThe highest point of the island. You can see the Absolute Point from here.");
    print("\nYou cant go anywhere from here would you like to return to the obsidianPeak");
    
    function processInput(input){
        if (currentActiveListener !== "cliffPeaks") return;
        let choice = input.toLowerCase();
        if (choice === "obsidianpeak") { 
            obsidianPeak(); }
        else { 
            stayHere(cliffPeaks); }
    }
    waitForInput(processInput);
}

function shimmeringBasin() {
    stopWaitingForInput("shimmeringBasin"); 
    clear();
    if (!haveBreakPoint) {
        print("\nA shimmering barrier blocks the path. You need a **Break Point** to pass.");
        return;
    }
    if (haveBreakPoint) {
    print("\nA shallow lake reflecting a sky that isn't yours. Its blue the sun shines brightly with warm light.");
    print("\nWhere to? nectarSprings or orderOfAether");
}
    
    
    function processInput(input){
        if (currentActiveListener !== "shimmeringBasin") return;
        let choice = input.toLowerCase();
        if (choice === "nectarsprings") { 
            nectarSprings(); }
        else if (choice === "orderofaether") { 
            orderOfAether(); }
        else { 
            stayHere(shimmeringBasin);  }
    }
    waitForInput(processInput);
}

function theSingingGate() {
    stopWaitingForInput("theSingingGate"); 
    clear();
    print("\nA massive archway that vibrates when you speak.");
    print("\nWhere to? huntersCamp or echoCanyon");
    
    function processInput(input){
        if (currentActiveListener !== "theSingingGate") return;
        let choice = input.toLowerCase();
        if (choice === "hunterscamp") { 
            huntersCamp(); }
        else if (choice === "echocanyon") { 
            echoCanyon(); }
        else { 
            stayHere(theSingingGate); }
    }
    waitForInput(processInput);
}

function echoCanyon() {
    stopWaitingForInput("echoCanyon"); 
    clear();
    print("\nAs you land on the ridge on the echo canyon the port behind you smokes and dissintagrates you may not return as you take in your surroundings");
    print("\nThe air in Echo Canyon is thick and tastes like copper. The 'Split' is visible here over the huge iron walls of the order of iron. The Split a literal tear where you can see other timelines flickering like heat haze. Your own voice comes back to you, but it sounds older... or perhaps younger.");
    print("\nWhere to? theSingingGate");
    
    function processInput(input){
        if (currentActiveListener !== "echoCanyon") return;
        let choice = input.toLowerCase();
        if (choice === "thesinginggate") { 
            theSingingGate(); }
        else { 
            stayHere(echoCanyon); 
         }
    }
    waitForInput(processInput);
}

//------
//Orders
//------
function orderOfAether() {
    stopWaitingForInput("orderOfAether"); 
    clear();
    print("\n--- THE ORDER OF AETHER ---");
    print("\nThe white marble glows with an artificial light. The air is too clean, too perfect. It’s a castle built by those who tried to ignore the 'Split' by climbing above it.");
    print("\nWhere to? shimmeringBasin or orderOfShadow");
    
    function processInput(input){
        if (currentActiveListener !== "orderOfAether") return;
        let choice = input.toLowerCase();
        if (choice === "shimmeringbasin") { shimmeringBasin(); }
        else if (choice === "orderofshadow") { orderOfShadow(); }
        else { stayHere(orderOfAether); }
    }
    waitForInput(processInput);
}

function orderOfShadow() {
    stopWaitingForInput("orderOfShadow"); 
    clear();
    print("\n--- THE ORDER OF SHADOW ---");
  print("\nThis fortress is carved into a spire of 'Void-Glass'—obsidian that drinks the light.");
  print("\nYou feel a cold shiver; this is where the Rulers kept the secres on Ancient Magic. The halls are lined with sealed iron doors, each holding a secret they tried to bury.");
  
  // Highlighting the "Secrets" theme
  print("\nIn the center, a **Great Archive** of black stone hums with the acient magic made to contian to trap.");
  print("\nWhere to? **orderOfAether**, **orderOfIron**, or will you **whisper** to the Archive?");

    
    function processInput(input){
        if (currentActiveListener !== "orderOfShadow") return;
        let choice = input.toLowerCase();
        if (choice === "orderofaether") { orderOfAether(); }
        else if (choice === "orderofiron") { orderOfIron(); }
        else if (choice === "whisper") {
       // Logic to trigger the Secret 1 (True Name) from your stayHere function
       stayHere(orderOfShadow, orderOfShadow); 
    } else { stayHere(orderOfShadow); }
    }
    waitForInput(processInput);
}

function orderOfIron() {
    stopWaitingForInput("orderOfIron"); 
    clear();
    if (!haveKey) {
        print("\n--- THE ORDER OF IRON ---");
        print("\nThe gates are locked. You need the **Iron Order Key** from the Springs.");
        return;
    }
    print("\n--- THE ORDER OF IRON ---");
    print("\nThe heavy gates creak open with your key. The forge fires roar.");
    print("\nWhere to? orderOfShadow or theGreatBridge");
    
    function processInput(input){
        if (currentActiveListener !== "orderOfIron") return;
        let choice = input.toLowerCase();
        if (choice === "orderofshadow") { orderOfShadow(); }
        else if (choice === "thegreatbridge") { theGreatBridge(); }
        else { stayHere(orderOfIron);}
    }
    waitForInput(processInput);
}


function theGreatBridge() {
    stopWaitingForInput("theGreatBridge"); 
    clear();
    print("\nA massive stone span crossing the 'Void Gap.' The Absolute Point is just ahead.");
    print("\nWhere to? orderOfIron or absolutePoint");
    
    function processInput(input){
        if (currentActiveListener !== "theGreatBridge") return;
        let choice = input.toLowerCase();
        if (choice === "orderofiron") { orderOfIron(); }
        else if (choice === "absolutepoint") { absolutePoint(); }
        else { stayHere(theGreatBridge); }
    }
    waitForInput(processInput);
}

function fix() {
    stopWaitingForInput("fix"); 
    clear();
    haveBreakPoint = true; // Ensures the item is marked as found
    print("\n--- THE BREAK POINT RESTORED ---");
    print("\nYou close your eyes and channel the ancient magic innate to your bloodline. The violet energy in the room bends to your will, stitching the stone disk back together.");
    print("\n[SUCCESS]: You have fixed the Break Point! The device hums in your palm.");
    
     printAscii(`
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%####%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*%##%*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*%%+*#%+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%##**%%*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%##%*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%**%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*%%%#=+#%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*#%%*++++*%%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*#%%+=###%++%%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%*#%%==%%#*%%++%%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%*#%%==%%%##%%%=+%%##%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%+%%#==%%%%%#%%%%+=#%##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##%+@%#==%%%%%%%%%%%%+=#%%*%%#%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##%+@%#-=%%%%%%%%%%%%%%+=#%%+@%#%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%*%%#:=%%%%%%%%%%%%%%%%+-#%%+%#%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###%%%:-%%%%%%%%%%%%%%%%@%=:#%%*%#%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##*%%#.-%%%%%%%%%%%%%%%%%%%%=:#%%#%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%#*%%*:-%%%%%%%%%%%%%%%%%%%%%@=:*@%*%%#@%%%%%%%%%%%@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%+%%*:=%%%%%%%%%%%%%%%%%%%%%%%@+:+%%+%%*%%%%%%%%%%%@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%*%%*:+%%%%%%%%%%%%%%%%%%%%%%%@@%*.+%%=@%#%%%%%%@@@@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%#%@#:*%%@%%%%%%%%%%%%%%%%%%%%%%%%%*.*@%=%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%%%#@%%#:+@%%%%%%%%%%%%%%%%%%%%%%%%%%%%@+.#@@*%@%%@@@@@@@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%**++%#-+@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+:*@++**#%@@@@@@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%%###%*-+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@+:+%#%#%@@@@@@@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%###%*-*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@%%*:=%###%@%@@@@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%%%#%%+=#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@%%-+%%#%@@@@@@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%%#%%%*=%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@%-+%%#%@@@@@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%%#%#%*+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@%=+%%#%@%@@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%%#%#%*+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@#++%#%#@@@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%%#%#%**#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@%@%+*@#%#@@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%#%#%*+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@%++%#%%@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%#%#%++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@%++%##%@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%#%##++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@**%###@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%*%##++%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@%*+####@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%*%##+*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@%*+##%*@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%#%#%+*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*=##%+@@@@@@@@@@@@@@
%%%%%%%%%%%%##%#%=+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*=#%%*%@@@@@@@@@@@@
%%%%%%%%%##*#%%%=+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+-#%%##%%@@@@@@@@@
%%%%%%%%%#+*%%#-+#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+-*%%**#%@@@@@@@@
%%%%%%%%%+=+++==*******##**********+*+******#######%%%%%#%%%%%#%%%%@@%@@@@@@@@@@@@@@+:*@@**%@@@@@@@@
%%%%%%%%%%%%*=*%*%%%*%#@%###%%%+%#@%%+@#%%%#%%%%*%%@%@+@%@#%*@@%##%%@#%*%%@*%#%%%#%%%*:+@@@@@@@@@@@@
%%%%%%%%%%%*----=====++++++====---::...:::----===+++++===---:::...:::---====++++===---::+@@@@@@@@@@@
%%%%%%%*#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@%%%@@@%%%%%@@@@%@@@@@@@@@@@@@@@@@@@@@@@@##@@@@@@@
%%%%%%%#%@%%%%%%%%%%%%%%%@@@@%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%@@@@@@@
   `);

    print("\nWhere to now? You can return to the **mainPort** to begin your journey.");
    
    function processInput(input){
        if (currentActiveListener !== "fix") return;
        if (input.toLowerCase() === "mainport") {
            mainPort();
        } else {
            stayHere(fix);
        }
    }
    waitForInput(processInput);
}


function noFix() {
    stopWaitingForInput("noFix"); 
    clear();
    haveBreakPoint = false; // Ensures the item remains broken
    print("\n--- THE UNFINISHED PATH ---");
    print("\nYou pull your hands away. The energy within the cracked disk is too volatile, too dangerous. You decide to leave the relic as it is, choosing to rely on your wits rather than a broken tool.");
    print("\n[NOTICE]: You have not fixed the Break Point. Some paths through the violet tides will remain closed to you.");
    
    print("\nWhere to now? You can return to the **mainPort** and see what else the world holds.");
    
    function processInput(input){
        if (currentActiveListener !== "noFix") return;
        if (input.toLowerCase() === "mainport") {
            mainPort();
        } else {
            stayHere(noFix);
        }
    }
    haveBreakPoint = false;
    waitForInput(processInput);
}


function next() {
    stopWaitingForInput("next"); 
    clear();
    print("\n--- THE ANCIENT LIBRARIES ---");
    print("\nYou have spent years hidden in the World Between Worlds, a sanctuary protected from the 'Split.' Here, among thousands of glowing texts, you have begun to master your innate Ancient Magic.");
    print("\nYou learn how to controll and direct your acient magic learing how to channel it becoming more and more powerfull");
    print("\nWhile studying a forgotten shelf, you find a cracked stone disk—a **Broken Break Point**. It hums with a fractured, dangerous energy that vibrates against your palms.");
    print("\nWhat will you do? You can **read** a book on ancient magic, try to **fix** the break point, or leave it and **nofix** it?");

    function processInput(input) {
        if (currentActiveListener !== "next") return;
        let choice = input.toLowerCase();

        if (choice === "read") {
            // This provides lore without leaving the screen
            let books = [
                "\n[LORE]: You read that the Absolute Point is a wound in reality that only Ancient Magic can soothe.",
                "\n[LORE]: A text mentions your true name, Aethel-Voss, and your bloodline's link to the tides.",
                "\n[LORE]: You learn that a stable Break Point is the only way to reach Village C safely."
            ];
            print(books[Math.floor(Math.random() * books.length)]);
        } 
        else if (choice === "fix") {
            haveBreakPoint = true; 
            fix(); 
        } 
        else if (choice === "nofix") {
            haveBreakPoint = false;
            noFix();
        } 
        else {
            stayHere(next);
        }
    }
    waitForInput(processInput);
}



function showMap() {
    stopWaitingForInput("map"); 
    clear();
    print("<h1>--- WORLD MAP: THE SHATTERED REACHES ---</h1>");
    
    // Simple ASCII representation of the floating islands
    printAscii(`
                                                                                                                                                                                                        
                                                                                                                                                                                                      @ 
                                                                                                                                                                                                      @ 
                                                                                                                                                                @@@@@@@@@@@@@@                        @ 
                                                                                                                               @@=                          #@@@@@@@@@@@@@@@@@@@@@                    @ 
                                                                                                                            @@@@@@@@                      @@@@@                @@@@@                  @ 
                                                                         @@@@@@                                            @@@    #@@                   @@@@                      #@@@                @ 
                                                                       @@@@@@@@@@                                         @@        @@        :@@@@@@@:@@*                           @@               @ 
                                                                      *@        @*                                        @@        @@                @@                              @@*             @ 
                                                                      @@        @@                                         @@*     @@.        :@@@@@@@@+                               =@.            @ 
                                                                      -@:       @-                                          @@@@@@@@                @@                                  @@            @ 
                                                                       %@@@@@@@@@                                             =@@@                 @@                                    @@           @ 
                                      @@@@*                              @@@@@@                                                                    @@                                    #@           @ 
                                    @@@@@@@@*                                                                                                      @#                                     @           @ 
                                   @@      @@@                                                                                                     @+                                     @           @ 
                                   @        @@                                                                                                     @@                                    .@           @ 
                                   @        @@                                                                                                     @@                                    @@           @ 
                                   @@@*   @@@                @@@@@*                                                                                 @@                                   @            @ 
                                    =@@@@@@@               %@@@@@@@@:                                                                               .@                                  @@            @ 
                                                          %@-      @@.                                                                               @@+                               @@             @ 
                                                          @@        @@                     -@@@@@@                              @@@@@@*               +@@                            @@@              @ 
                                                          @@        @@                    @@@@@@@@@@                          *@@@@@@@@@                @@@                        @@@                @ 
                                                           @@@@@@@@@@                    @@        @.                         @.       @@                -@@@@                  @@@@#                 @ 
                                                            +@@@@@@=                     @@        @@                        =@        .@                   @@@@@@@        @@@@@@@*                   @ 
                                                              @ @                        @@       @@                          @@       @@                      @@@@@@@@@@@@@@@@-                      @ 
                                                             @@@@                         @@@@@@@@@                            @@@@@@@@@                             #@@#                             @ 
                                                             @ @                            @@@@@@                              @@@@@@                                                                @ 
                                                            @@@@                                             @@:                                                                                      @ 
                                                            @ @                                           @@@@@@@@                                                                                    @ 
                                                            @ @                                          @@@    #@@                                                                                   @ 
       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                   @@@@@@@=                                        @        @@@@                                                                                @ 
      .@                             @@                 @@@@@:*@@@                                       @        %@ @ @@@                                                                            @ 
      @@                             @@                @@        @=                                      @@      @@@@@ @ @ @@@          -@@@                                                          @ 
      %@                             @@                @         @*                                       @@@@@@@@.    @@@ @ @ @@.    @@@@@@@@*                                                       @ 
      @@                             @@                @@=      @@            @@:                           @@@@.          @@%@   @@@@@@     @@@                                                      @ 
      .@                             @@                 @@@@@@@@@          @@@@@@@@                                           @@@ @ @@        *@                                                      @ 
       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                    #@@@@           @@@    *@@                                              @@@@        #@                                                      @ 
                                                                          @        @+                                                @@@     @@@                                                      @ 
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                             @        @@@                                                %@@@@@@@=                                                       @ 
           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                            @@.     @@ @ @@@                                               @@#                                                          @ 
          :@                                @@                             @@@@@@@@@@@   + @@@  @@@@@@#                                                                                               @ 
          :@                                @@                              @@@@.      @@@     @@@@@@@@@                                                                                              @ 
          :@                                @@                             @  @@          %@@@@#       @@                                                                                             @ 
          :@                                @@@@                         -@  @                @        @@                                                                                             @ 
          :@                                @@   @@                     @@ @*                 @@       @@                                                                                             @ 
          :@                                @@@@   @@@        @@@#     @@ @@                   @@@@@@@@@                      =@@@                                                                    @ 
          :@                                @@  @@@   @@    @@@@@@@@  @  @@                     %@@@@@                      @@@@@@@@                                                                  @ 
          .@                                @@     @@    @@@@      @@@ +@                                                  @@:     @@.                                                                @ 
           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       -@@  @@        @@@*                                                  @@        @@                                                                @ 
             ++====================+#@@@@@@@@           @@@@        @@                                                    @@        @@                                                                @ 
 @@@@@@@@@@@@*+====================+-                      @@@    @@@                                                      @@@    %@@                                                                 @ 
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                     @@@@@@@@                                                        %@@@@@@@                                                                  @ 
 @                                   @@                        %@                                                              #@                                                                     @ 
 @                                   @@                                                                                                                                                               @ 
 @                                   @@                                                                                                                                                               @ 
 @                                   @@                                                                                                                                                               @ 
 @                                   @@                                                                                                                                                               @ 
 @                                   @@                                                                                                                                                               @ 
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                                                                               @ 
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                                                                                                                @ 
    `);

    print("\n* Requires **Break Point** to cross.");
    print("\n<i>Type any key to go back...</i>");
}

function begin() {
    stopWaitingForInput("begin"); 
    clear();
    print("\n Before the sky fractured, the oceans were blue and the horizon was a straight line. Then came the Split—a cataclysmic event at the world's center that tore the earth into floating islands and bled violet into the tides. None have reached the absolute point though it is said to be a point where neither chaos nor peace live. Peopel have tried reachign the point again and agin they calaim that they heard the voices of the ones they had lost. The absolute point is located on a large floating island in the middle of adense group of clouds. Hassimon is a thief who uses his vast knowledge of magic and the lands to navigate this torn world without getting caught. Hassimon uses ports, archways with figures inscribed upon them. These ports were built by the ancient societies who used ancient magic to build the port to which no one knows the true purpose behind them. Hassimon is one of the few people who were born with innate magic or ancient magic. While most people can only use magic learned by book and require a source to channel the magic like a staff or wand, people born with ancient or innate magic can directly channel their power through themselves. The rulers at the time did not understand this ancient magic so they regarded it as chaotic and wrong swearing to rid the world of this “chaotic magic”. Ancient magic according to the vast amount of books at the ancient library which is located in the world between worlds. These lands were mostly protected from the “Split” due to the vast amounts of ancient protection magic that surrounded the place to keep people without the ancient blood out. The world between worlds are a few but large islands that house hundreds of texts on ancient magic and is a safe place for those born with ancient blood to study and learn to control their abilities. It exists between both time and reality which make it a perfect spot for Hassimon to live, and practice the ancient magic that was imbued within him at birth. This is where our story begins ");
    print("\nType next to continue");

    function processInput(input){
    if (currentActiveListener !== "begin") return;
    let choice = input.toLowerCase();
    if (choice === "next") {
    next();
    } else {
    stayHere(showMap);
    }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    stopWaitingForInput("start"); 
    clear();
    print("<h1>Welcome To Echoes Of Time<h1>");
    print("Type begin to proceed on an adventure to heal the world and find your family");

    function processInput(input){
        if (currentActiveListener !== "start") return;
        if (input.toLowerCase() === "begin") {
            begin();
        } else {
            stayHere(start);
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

function stayHere(returnLocation, locationName) {
    let roll = Math.random();

    // 1. THE TRUTH (The "loreForAl" requirement)
    if (locationName == absolutePoint && roll < 0.001 && loreForAll === 0) { 
        print("\n[The Truth]: The point is not just an object and neither are you... embrace the ancient magic within yoursefl **AETHEL-VOSS**.");
        loreForAll = 1;
        return; 
    }

    // 2. SECRET 1: Sister/True Name
    if (locationName == orderOfShadow && roll < 0.06 && !foundSecret1) { 
        print("\n[SECRET]: A voice whispers your true name: Aethel-Voss. Was that your sister?");
        foundSecret1 = true;
        loreFound++;
        return; 
    }

    // 3. SECRET 2: Daughter's Ribbon
    if (locationName == villageB && roll < 0.06 && !foundSecret2) { 
        print("\n[ECHO]: You see a flash of your daughter's ribbon tangled in a gear...");
        foundSecret2 = true;
        loreFound++;
        return; 
    }

    // 4. SECRET 3: Blue Sea Vision
    if (locationName == mainPort && roll < 0.06 && !foundSecret3) { 
        print("\n[ULTRA RARE]: For a Split second, the sea turns blue again.");
        foundSecret3 = true;
        loreFound++;
        return; 
    }

    // 5. SECRET 4: Child's Laughter
    if (locationName == villageC && roll < 0.06 && !foundSecret4) { 
        print("\n[ULTRA RARE]: A child's laughter echoes from the point.");
        foundSecret4 = true;
        loreFound++;
        return; 
    }

    // 6. SECRET 5: The Luck/Break Point
    if (locationName == huntersCamp && roll < .08 && !foundSecret5 && !haveBreakPoint) {
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
    stopWaitingForInput("absolutePoint"); 
    clear();
    print("\nYou stand at the edge of existence. The **Absolute Point** is a jagged, screaming tear in reality.");
    print("\nThrough the shimmering violet light, you see your family. They are frozen in a single, silent second—neither inside nor outside of time.");
    print("\nYour Ancient Magic burns in your hands. This is the moment. What will you do, thief?");
    print("\nType **SHATTER** to break the rift and free them.");
    print("\nType **ABSORB** to take the Ancient Magic for yourself.");
        print("\nType **AWAY** to take the Ancient Magic for yourself.");
printAscii(`
.........................::::::::::::::::::::::::;;;;;;;;;;;;;;;;;;;;;;;;;;;++++++++++++xxxx+++++++++++++++++;;;;;
.........................:::::::::::::::::::::::::;;;;;;;;;;;;;;;;;;;;;;;;++++++++++++++xxxxxxxxxxx+++++++++++++;;
:::::::::.............::::::::::::::::::::::::::::::;;;;;;;;;;;;;;;;;;;++;++++++++xXXX$Xxxxxxxxxxxx++++;++++++;;;;
:::::::::::::.........::::::::::::::::::::::::::::::::::;;;:;;:;;:;;;;;++++++++++Xxxxxxxxxxxxxxxxxxxxxx++++;;++;;+
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;;;;;;;;;;;+++++++xxxxxxxxxxxxxxxxxxxxxxxx+xxxx++++
::::::::::::::::::::::::::::::::::::::;;;;;;;;;;;;;;;::;;::::;;;;;;;;;;;;++++++++xXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx+
::::::::::::::::::::::::::::::;;:;;;;+++xx+++;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+++++xXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
;;;;;::::::::::::::::::;;;;;;;;;;x$$$$$$$XxxxXXX$$x;;;;+;;;;;;;;;+;;;;;;;;;;;;;+++x++x$xxxxxxxxxxxxxxxxxxxxxxxxxxx
::::::::::::::;;;:::::;;;;;;;+xXX$$$$XXXXXXxx+;;;;+x$X+;;++;;;;;;;;;;;;;;;;;++;;;++++xXXXxXXXXXxxxxxxxxxxxxxxxxxxx
;;;;;;;;;;;;;;;;;;;;;;;;;;++X$$$&&&&$$$$XXXXxxxxx+++++xXX+;;;;;;;;;;;;;;;;;+++;++x+++++xXXXXXXXXXXXXXXXXXXXXXXXXXX
++;;;;;;;;;;;;;;;;;;;;;++xX$$$XxX$+++xX$$$$$$Xxx++++x$$x+xX++++x++++++++++++++++++++++++X$XXXXXXXXXXXXXXXXXXXXXXXX
+x;;;;;;;;;;;;;;;;;++++x$$$$Xx++X+::++;;;+XXXXXx+x+++;+X&X+xx++++++++++++++++++++++++++x$&XXXX$$$$$$$$$$$$$$$$$$$$
;;;++;;;;;;;;;;;;;++++X$$$$x+x+;+;;;x+xX$$$$$$$x+++++;;;+X&$xX++++x+++++++++++++++++xxxX&X$$$$$$$$$$$$$$$$$$$$$$$$
;;;;++++++;;;;;;;++++x$$$xx+++;++;x&$XxxX$$$$$$$$$XXXXx;;++X&$$++++x+++++++++++++++xX&XxxxXX$$$$$$$$$$$$$$$$$$$$XX
;;;++++++;;;;;;;;++++X$$$++x;x;++x+x+xxX$$XXXX$$$&$$$XXxxx++x$$$+++++++++++++++++x+xxXxxxxx$&$$$$$$$$$$$$$$$$$$$$$
;;;+++++;;;++;;;;+++x$$$$x+++;++;+;+;+++xXXXXX$$$&&&&$$$Xx;+;x$&X+++++xxx++++++++xxx+xxxxX$$$$$$$$$$$$$$$$$$$$$$$$
;;+++;;;;+++++++;;++x$$$$x+;;;;+;;;;;++;++xXX$$$$$&&&$$$XXx;+x$&&x+++++++X++++xxxXxxxxxxx$&&&$$&&&$$$$$$$$$$$$$$$$
;;;;;;;;;+;;;;;;;;++xXx$$Xx++;;+;;;+++xxxxxxX$$$$$&&&&$&$XX+++X&&X+++++++xX++xXXx$XxxxxxX&&$$$$$&&&&$$$$$$$$$$$$$$
;;;;;;;;;;;++;;++;++xXxx$$$Xx+;;;++++++xxxX$&&&&&$&&&$$$$XXXxX$&&Xx++++++xXxx+xxxXx++xxx$&&$$$$$$&&$$$$$$$$$$$$$$$
+;;;;;;;;;;+++++++++x$$$X$XXXXxXxx++xxXX$$&$$&&&&$&&&$xXX$$$$$&&&$xx+++++++xxx++xxxxxxxxxX$$$$$$$XX$$$$$$$$$$$$$$$
+;;;;;;;++++++++++++x$$XXXX$x$&&X$XX$$$$$&&&$$$XXXx$Xx+;x$&&$X$&&Xxx+++++++xXXXxxxxxxxxxxxxxxxxxxxxX$&&&&&&&&&&&&&
++++++++++++++++++++x$$$+++xXXX&X;;+++x;;;+++xxxxxX$xx;+x$&$$X&&&Xxxxxxx+x+++xxx+xxxxxxxxxxxxxxxxxxxX$$$$&&$$&&&&&
++++++++++++++++++++xXXXX+;;+X$$+:::;;;;+;;;;;;;++x+x+;;+X&XX$&&$xxx+++++++++xxx+++xxx+xxxxxxx+++xxxxxxXX$XxX$&&&&
+++++++++x+++++++x++xxx+++;:::;x$x;:.:;::;:;+++;+x++;;;++$x+X&&&xxxxxxx++++++++++++++++++++++++++++xxxxxxXxxxXX$&&
+++++++++++++++++++++++xx+;;;::::+xxx+;:;;:::.:;;:;:;+;;++x&&$$xxxxxxxxx+++++++++++++++++++++++++++xxxxxxxxxxxxxxx
++++++++++++++++++++++++X$x;;++::...;xX+++X$Xx+++++;;+;+$&$X$$xxxxxxxxx++++++++++++xxxxxxxxxxxxxxxxxxxxxXXXXXXXXXX
+++++++++++++++++++++++xxX$$Xx+x+;;;::;+X$$XXX$$$$XXx+x$XXX$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXXXXXXX
;;;::;;::++++xxxxxxxxxxxxxX$$$$xx++++;::;;++x$$$$$$$$$$$$$XxxxxxxxxxxxxxXXxXXxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXXXXXXXX
`);

//-------
//Endings
//-------

    function processInput(input) {
        if (currentActiveListener !== "absolutePoint") return;
        let choice = input.toLowerCase();

        if (choice === "shatter") {
            clear();
            // Check for Secret vs Normal Ending based on lore found
           if (loreFound >= 3) {
    // --- SECRET ENDING: GOOD and BAD THE SHATTERED PEACE ---
                print("<h1>[SECRET ENDING: THE SHATTERED PEACE]</h1>");
                print("\nBecause you listened to the echoes of the world, you realize the Point isn't just a rift—it's a memory out of place.");
                print("\nYou don't just break the magic; you *soothe* it. For a few miles around the rift, the violet tides retreat and the sea turns a brilliant, deep **BLUE**.");
                print("\nYour family steps out of the light, untouched by the years. You rejoice with happiness at the sight of them, but as you look around, you see the distant islands are still floating, and the horizon is still stained purple.");
                print("\nYou have saved your family and created a sanctuary of blue water, but the world is still broken. You are still a thief in the eyes of the law, but now you have something worth protecting.");
                print("\n<b>You have found your peace, even if the world hasn't found its own.</b>");
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
            // --- HIDDEN ENDING: GOOD and BAD THE ONE ABOVE ALL ---
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
                print("\nYou do not say 'Shatter.' You do not say 'Absorb.' You speak your words of the orgional tounge .");
                print("\nAt the command of the acint magic, the Absolute Point stops screaming. It begins to hum a harmony. The jagged tear in reality softens, turning from a wound into a doorway.");
                print("\nYour family doesn't just fall out; they walk out, fully awake and smiling. You don't take the power into your body—you move the power back into the world's core where it belongs.");
                print("\nThe islands gently descend, reconnecting into a single, vast continent. The sea turns a crystal, sparkling blue. No more Ports, no more rifts, no more hiding.");
                print("\nYou are no longer a thief. You are the man who put the world back together.");
                print("\n<b>The cycle is finally broken. You are home.</b>");
                print("\nand not just that you feel the full power of the acient magic coursing through you giving you more power than ever before");
                gameActive = false;
            } else {
                print("\nYou whisper the words, but the Ancient Magic doesn't recognize you yet. You haven't listened to enough of the world's echoes.");
            }
        }   else if (choice === "away") {
            clear();
            print("<h1>[BAD OR GOOD: THE DIFFICULT CHOICE]</h1>");
             print("\nYou have reached the absolute point it is time");
            print("\nYou think about the life you have been living the exiitment and the nerves");
            print("\nBut instead of using your magic to fix the world you take on last look at your family thinking you can always return then you turn and");
            print("\nyou walk out making sure to evade the guards of the iron order and returs to your life.");
            print("\nWAS it worth it");
        }  

         else {
            stayHere(absolutePoint);
        }
    }
    waitForInput(processInput);
}
