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



//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function mainPort() {
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
    let choice = input.toLowerCase();

        if (choice === "map") {
        showMap();
        waitThenCall(mainPort); // After showing the map, it brings them back here
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


function villageB() {
    clear();
    print("\n--- VILLAGE B ---");
    print("\nThe shoreline is littered with rusted gear and ancient scrap metal, washed up by the Tides.");
    if (!haveGrapple) {
        print("\nYou see a high-tension **Grapple** hook buried under some metallic debris.");
        print("\nWhere to? mainPort, villageC, or **dig** through the scrap?");
    } else {
        print("\nWhere to? mainPort or villageC");
    }
    
    function processInput(input) {
        let choice = input.toLowerCase();
        if (choice === "mainport") { 
            mainPort(); }
        else if (choice === "villagec") { 
            villageC(); }
        else if (choice === "dig" && !haveGrapple) {
            haveGrapple = true;
            print("\n[ITEM FOUND]: You dug out a functional Grapple! You can now reach high places.");
            waitThenCall(villageB);
        } else {
            stayHere();
            waitThenCall(villageB);
        }
    }
    waitForInput(processInput);
}



function villageC() {
  clear();
  print("\n--- VILLAGE C ---");
  print("\nThe Violet Tides are violent here, crashing against the cliffs with a strange, humming energy.");
  if (!haveForce) {
    print("\nThe path to the next island is blocked by a massive stone wall that has fallen over.");
    print("\nWhere to? villageB or **focus** on the humming energy?");
  } else {
    print("\nThe air feels calm now. The path to Village D is clear.");
    print("\nWhere to? villageB or villageD");
  }

  function processInput(input){
    let choice = input.toLowerCase();
    if (choice === "focus" && !haveForce) {
      print("\n[FORCE UNLOCKED]: You harmonize with the Tides. With a simple gesture, you blast the stone wall aside!");
      haveForce = true;
      waitThenCall(villageC);
    } 
    else if (choice === "villageb") { villageB(); }
    else if (choice === "villaged") {
      if (haveForce) { villageD(); }
      else { print("\nThe way is blocked. You need to find a way to move the heavy stones."); waitThenCall(villageC); }
    }
    else { stayHere(); waitThenCall(villageC); }
  }
  waitForInput(processInput);
}




function villageD() {
  clear();
  print("\n--You are in Village D--");
  print("\n");
  print("\nWhere to? villageC, nectarSprings, or use **grapple** to reach the cliffs of village E?");

  function processInput(input){
    let choice = input.toLowerCase();
    if (choice === "villagec") {
        if (haveBreakPoint) {
        print("\nYou channel you magic into the prot it hums at your presances and sends you to village C");
        villageE();
      } else {
        print("\nYou have no way to reach village C it is to far");
        waitThenCall(villageD);
      }
    }
    else if (choice === "nectarsprings") { 
        nectarSprings();}
    else if (choice === "grapple") {
      if (haveGrapple) {
        print("\nYou hook the cliff edge and zip upward!");
        villageE();
      } else {
        print("\nYou have nothing to reach the high ledges of Village E.");
        waitThenCall(villageD);
      }
    }
    else { stayHere(); waitThenCall(villageD); }
  }
  waitForInput(processInput);
}

function villageE() {
  clear();
  print("\n--- VILLAGE E ---");
  print("\n");
  print("\n"); 

  function processInput(input){
    let choice = input.toLowerCase();
    if (choice === "villaged") {
         villageD(); } 
    else if (choice === "villagef") {
      if (haveForce) {
        print("\nA cluster of obsidian boulders blocks the ledge. You use **Force** to push them into the void.");
        villageF();
      } else {
        print("\nMassive obsidian rocks block the narrow path. You can't move them by hand.");
        waitThenCall(villageE);
      }
    } else { 
        stayHere(); 
        waitThenCall(villageE); }
  }
  waitForInput(processInput);
}


function villageF() {
  clear();
  print("\n--- VILLAGE F ---");
  print("\n");
  print("\nWhere to? villageE, huntersCamp, or forgottenShrine");
  
  function processInput(input){
    let choice = input.toLowerCase();
    if (choice === "villagee") { villageE(); } 
    else if (choice === "hunterscamp") {
      if (haveGrapple) {
        print("\nYou use your **Grapple** to swing across the broken bridge.");
        huntersCamp();
      } else {
        print("\nThe bridge to the camp is destroyed. It's too far to jump.");
        waitThenCall(villageF);
      }
    } else if (choice === "forgottenshrine") {
       if (haveForce) {
         print("\nYou use **Force** to push the ancient shrine doors open.");
         forgottenShrine();
       } else {
         print("\nThe heavy shrine doors won't budge.");
         waitThenCall(villageF);
       }
    } else { stayHere(); waitThenCall(villageF); }
  }
  waitForInput(processInput);
}




function nectarSprings() {
  clear();
  print("\nThe water here tastes sweet, but the bubbles defy gravity.");
  if (!haveKey) {
    print("\nYou see a heavy Iron Key stuck deep inside a crystalline rock formation.");
    print("\nWhere to? villageD, shimmeringBasin, or use **Force** to break the crystal?");
  } else {
    print("\nThe crystal rock lies shattered. You have the key.");
    print("\nWhere to? villageD or shimmeringBasin");
  }

  function processInput(input){
    let choice = input.toLowerCase();
    if (choice === "force" && !haveKey) {
      haveKey = true;
      print("\n[STRENGTH]: You shatter the crystal with your magic. The **Iron Order Key** is yours!");
      waitThenCall(nectarSprings);
    } else if (choice === "villaged") { villageD(); }
    else if (choice === "shimmeringbasin") { shimmeringBasin(); }
    else { stayHere(); waitThenCall(nectarSprings); }
  }
  waitForInput(processInput);
}


function theGreatBridge() {
    clear();
    print("\nA massive stone span crossing the 'Void Gap.' The wind howls below.");
    print("\nWhere to? villageE or ironDocks");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "villagee") { villageE(); }
        else if (choice === "irondocks") { ironDocks(); }
        else { stayHere(); waitThenCall(theGreatBridge); }
    }
    waitForInput(processInput);
}

function huntersCamp() {
    clear();
    print("\nA small outpost for those brave enough to track the violet beasts.");
    print("\nWhere to? villageF or shadowWoods");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "villagef") { villageF(); }
        else if (choice === "shadowwoods") { shadowWoods(); }
        else { stayHere(); waitThenCall(huntersCamp); }
    }
    waitForInput(processInput);
}

function forgottenShrine() {
    clear();
    print("\nAn ancient altar glowing with a soft, rhythmic light.");
    print("\nWhere to? villageF or crystalCave");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "villagef") { villageF(); }
        else if (choice === "crystalcave") { crystalCave(); }
        else { stayHere(); waitThenCall(forgottenShrine); }
    }
    waitForInput(processInput);
}

function crystalCave() {
    clear();
    print("\nThe walls are jagged quartz. Your voice echoes three times.");
    print("\nWhere to? forgottenShrine or obsidianPeak");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "forgottenshrine") { forgottenShrine(); }
        else if (choice === "obsidianpeak") { obsidianPeak(); }
        else { stayHere(); waitThenCall(crystalCave); }
    }
    waitForInput(processInput);
}

function obsidianPeak() {
    clear();
    print("\nThe highest point of the island. You can see the Absolute Point from here.");
    print("\nWhere to? crystalCave or cloudPeaks");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "crystalcave") { crystalCave(); }
        else if (choice === "cloudpeaks") { cloudPeaks(); }
        else { stayHere(); waitThenCall(obsidianPeak); }
    }
    waitForInput(processInput);
}

function shimmeringBasin() {
    clear();
    if (!haveBreakPoint) {
        print("\nA shimmering barrier blocks the path. You need a **Break Point** to pass.");
        waitThenCall(nectarSprings);
        return;
    }
    print("\nA shallow lake reflecting a sky that isn't yours.");
    print("\nWhere to? nectarSprings or orderOfAether");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "nectarsprings") { nectarSprings(); }
        else if (choice === "orderofaether") { orderOfAether(); }
        else { stayHere(); waitThenCall(shimmeringBasin); }
    }
    waitForInput(processInput);
}
function echoCanyon() {
    clear();
    print("\nEvery footstep sounds like a thunderclap here.");
    print("\nWhere to? obsidianPeak or villageC");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "obsidianpeak") { obsidianPeak(); }
        else if (choice === "villagec") { villageC(); }
        else { stayHere(); waitThenCall(echoCanyon); }
    }
    waitForInput(processInput);
}

function theSingingGate() {
    clear();
    print("\nA massive archway that vibrates when you speak.");
    print("\nWhere to? huntersCamp or echoCanyon");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "hunterscamp") { huntersCamp(); }
        else if (choice === "echocanyon") { echoCanyon(); }
        else { stayHere(); waitThenCall(theSingingGate); }
    }
    waitForInput(processInput);
}

function orderOfAether() {
    clear();
    print("\n--- THE ORDER OF AETHER ---");
    print("\nA soaring castle of white marble floating higher than the rest.");
    print("\nWhere to? shimmeringBasin or orderOfShadow");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "shimmeringbasin") { shimmeringBasin(); }
        else if (choice === "orderofshadow") { orderOfShadow(); }
        else { stayHere(); waitThenCall(orderOfAether); }
    }
    waitForInput(processInput);
}

function orderOfShadow() {
    clear();
    print("\n--- THE ORDER OF SHADOW ---");
    print("\nA fortress carved into a jagged obsidian cliffside.");
    print("\nWhere to? orderOfAether or orderOfIron");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "orderofaether") { orderOfAether(); }
        else if (choice === "orderofiron") { orderOfIron(); }
        else { stayHere(); waitThenCall(orderOfShadow); }
    }
    waitForInput(processInput);
}

function orderOfIron() {
    clear();
    if (!haveKey) {
        print("\n--- THE ORDER OF IRON ---");
        print("\nThe gates are locked. You need the **Iron Order Key** from the Springs.");
        waitThenCall(orderOfShadow);
        return;
    }
    print("\n--- THE ORDER OF IRON ---");
    print("\nThe heavy gates creak open with your key. The forge fires roar.");
    print("\nWhere to? orderOfShadow or theGreatBridge");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "orderofshadow") { orderOfShadow(); }
        else if (choice === "thegreatbridge") { theGreatBridge(); }
        else { stayHere(); waitThenCall(orderOfIron); }
    }
    waitForInput(processInput);
}


function theGreatBridge() {
    clear();
    print("\nA massive stone span crossing the 'Void Gap.' The Absolute Point is just ahead.");
    print("\nWhere to? orderOfIron or absolutePoint");
    
    function processInput(input){
        let choice = input.toLowerCase();
        if (choice === "orderofiron") { orderOfIron(); }
        else if (choice === "absolutepoint") { absolutePoint(); }
        else { stayHere(); waitThenCall(theGreatBridge); }
    }
    waitForInput(processInput);
}

function fix() {
    clear();
    print("\nYou have fixed the break Point yipeeeeeeeeeee");
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

function next() {
    clear();
    print("\n current event goes here");
    print("\n fix or nofix");
    
    function processInput(input){

    let choice = input.toLowerCase();
    if (choice === "fix") {
    fix();
    } else if (choice === "nofix") {
    haveBreakPoint = false;
    noFix();
    }
     else {
    stayHere();
    }
    }
    waitForInput(processInput);
}


function showMap() {
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
    clear();
    print("\n Before the sky fractured, the oceans were blue and the horizon was a straight line. Then came the Split—a cataclysmic event at the world's center that tore the earth into floating islands and bled violet into the tides. None have reached the absolute point though it is said to be a point where neither chaos nor peace live. Peopel have tried reachign the point again and agin they calaim that they heard the voices of the ones they had lost. The absolute point is located on a large floating island in the middle of adense group of clouds. Hassimon is a thief who uses his vast knowledge of magic and the lands to navigate this torn world without getting caught. Hassimon uses ports, archways with figures inscribed upon them. These ports were built by the ancient societies who used ancient magic to build the port to which no one knows the true purpose behind them. Hassimon is one of the few people who were born with innate magic or ancient magic. While most people can only use magic learned by book and require a source to channel the magic like a staff or wand, people born with ancient or innate magic can directly channel their power through themselves. The rulers at the time did not understand this ancient magic so they regarded it as chaotic and wrong swearing to rid the world of this “chaotic magic”. Ancient magic according to the vast amount of books at the ancient library which is located in the world between worlds. These lands were mostly protected from the “split” due to the vast amounts of ancient protection magic that surrounded the place to keep people without the ancient blood out. The world between worlds are a few but large islands that house hundreds of texts on ancient magic and is a safe place for those born with ancient blood to study and learn to control their abilities. It exists between both time and reality which make it a perfect spot for Hassimon to live, and practice the ancient magic that was imbued within him at birth. This is where our story begins ");
    
    function processInput(input){
    let choice = input.toLowerCase();
    if (choice === "next") {
    next();
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

    // 1. THE TRUTH (The "loreForAl" requirement)
    if (roll < 0.001 && loreForAll === 0) { 
        print("\n[The Truth]: The point is not just an object and neither are you... embrace the ancient magic within yoursefl **AETHEL-VOSS**.");
        loreForAll = 1;
        return; 
    }

    // 2. SECRET 1: Sister/True Name
    if (roll < 0.06 && !foundSecret1) { 
        print("\n[SECRET]: A voice whispers your true name: Aethel-Voss. Was that your sister?");
        foundSecret1 = true;
        loreFound++;
        return; 
    }

    // 3. SECRET 2: Daughter's Ribbon
    if (roll < 0.06 && !foundSecret2) { 
        print("\n[ECHO]: You see a flash of your daughter's ribbon tangled in a gear...");
        foundSecret2 = true;
        loreFound++;
        return; 
    }

    // 4. SECRET 3: Blue Sea Vision
    if (roll < 0.06 && !foundSecret3) { 
        print("\n[ULTRA RARE]: For a split second, the sea turns blue again.");
        foundSecret3 = true;
        loreFound++;
        return; 
    }

    // 5. SECRET 4: Child's Laughter
    if (roll < 0.06 && !foundSecret4) { 
        print("\n[ULTRA RARE]: A child's laughter echoes from the point.");
        foundSecret4 = true;
        loreFound++;
        return; 
    }

    // 6. SECRET 5: The Luck/Break Point
    if (roll < .08 && !foundSecret5 && !haveBreakPoint) {
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
printAscii(`
.........................::::::::::::::::::::::::;;;;;;;;;;;;;;;;;;;;;;;;;;;++++++++++++xxxx+++++++++++++++++;;;;;;;;;;
.........................:::::::::::::::::::::::::;;;;;;;;;;;;;;;;;;;;;;;;++++++++++++++xxxxxxxxxxx+++++++++++++;;;++++
:::::::::.............::::::::::::::::::::::::::::::;;;;;;;;;;;;;;;;;;;++;++++++++xXXX$Xxxxxxxxxxxx++++;++++++;;;;;;;;;
:::::::::::::.........::::::::::::::::::::::::::::::::::;;;:;;:;;:;;;;;++++++++++Xxxxxxxxxxxxxxxxxxxxxx++++;;++;;+++;;+
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;;;;;;;;;;;+++++++xxxxxxxxxxxxxxxxxxxxxxxx+xxxx+++++++++
::::::::::::::::::::::::::::::::::::::;;;;;;;;;;;;;;;::;;::::;;;;;;;;;;;;++++++++xXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx+++++;
::::::::::::::::::::::::::::::;;:;;;;+++xx+++;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+++++xXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
;;;;;::::::::::::::::::;;;;;;;;;;x$$$$$$$XxxxXXX$$x;;;;+;;;;;;;;;+;;;;;;;;;;;;;+++x++x$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
::::::::::::::;;;:::::;;;;;;;+xXX$$$$XXXXXXxx+;;;;+x$X+;;++;;;;;;;;;;;;;;;;;++;;;++++xXXXxXXXXXxxxxxxxxxxxxxxxxxxxxxXXx
;;;;;;;;;;;;;;;;;;;;;;;;;;++X$$$&&&&$$$$XXXXxxxxx+++++xXX+;;;;;;;;;;;;;;;;;+++;++x+++++xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
++;;;;;;;;;;;;;;;;;;;;;++xX$$$XxX$+++xX$$$$$$Xxx++++x$$x+xX++++x++++++++++++++++++++++++X$XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
+x;;;;;;;;;;;;;;;;;++++x$$$$Xx++X+::++;;;+XXXXXx+x+++;+X&X+xx++++++++++++++++++++++++++x$&XXXX$$$$$$$$$$$$$$$$$$$$$$$$X
;;;++;;;;;;;;;;;;;++++X$$$$x+x+;+;;;x+xX$$$$$$$x+++++;;;+X&$xX++++x+++++++++++++++++xxxX&X$$$$$$$$$$$$$$$$$$$$$$$$XXXxx
;;;;++++++;;;;;;;++++x$$$xx+++;++;x&$XxxX$$$$$$$$$XXXXx;;++X&$$++++x+++++++++++++++xX&XxxxXX$$$$$$$$$$$$$$$$$$$$XXXxXXx
;;;++++++;;;;;;;;++++X$$$++x;x;++x+x+xxX$$XXXX$$$&$$$XXxxx++x$$$+++++++++++++++++x+xxXxxxxx$&$$$$$$$$$$$$$$$$$$$$$$$XXx
;;;+++++;;;++;;;;+++x$$$$x+++;++;+;+;+++xXXXXX$$$&&&&$$$Xx;+;x$&X+++++xxx++++++++xxx+xxxxX$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
;;+++;;;;+++++++;;++x$$$$x+;;;;+;;;;;++;++xXX$$$$$&&&$$$XXx;+x$&&x+++++++X++++xxxXxxxxxxx$&&&$$&&&$$$$$$$$$$$$$$$$$$$$$
;;;;;;;;;+;;;;;;;;++xXx$$Xx++;;+;;;+++xxxxxxX$$$$$&&&&$&$XX+++X&&X+++++++xX++xXXx$XxxxxxX&&$$$$$&&&&$$$$$$$$$$$$$$$$$$$
;;;;;;;;;;;++;;++;++xXxx$$$Xx+;;;++++++xxxX$&&&&&$&&&$$$$XXXxX$&&Xx++++++xXxx+xxxXx++xxx$&&$$$$$$&&$$$$$$$$$$$$$$$$$$$$
+;;;;;;;;;;+++++++++x$$$X$XXXXxXxx++xxXX$$&$$&&&&$&&&$xXX$$$$$&&&$xx+++++++xxx++xxxxxxxxxX$$$$$$$XX$$$$$$$$$$$$$$$$$$$$
+;;;;;;;++++++++++++x$$XXXX$x$&&X$XX$$$$$&&&$$$XXXx$Xx+;x$&&$X$&&Xxx+++++++xXXXxxxxxxxxxxxxxxxxxxxxX$&&&&&&&&&&&&&&&&&&
++++++++++++++++++++x$$$+++xXXX&X;;+++x;;;+++xxxxxX$xx;+x$&$$X&&&Xxxxxxx+x+++xxx+xxxxxxxxxxxxxxxxxxxX$$$$&&$$&&&&&&&&&&
++++++++++++++++++++xXXXX+;;+X$$+:::;;;;+;;;;;;;++x+x+;;+X&XX$&&$xxx+++++++++xxx+++xxx+xxxxxxx+++xxxxxxXX$XxX$&&&&&&&&&
+++++++++x+++++++x++xxx+++;:::;x$x;:.:;::;:;+++;+x++;;;++$x+X&&&xxxxxxx++++++++++++++++++++++++++++xxxxxxXxxxXX$&&&&&&&
+++++++++++++++++++++++xx+;;;::::+xxx+;:;;:::.:;;:;:;+;;++x&&$$xxxxxxxxx+++++++++++++++++++++++++++xxxxxxxxxxxxxxxXXXXX
++++++++++++++++++++++++X$x;;++::...;xX+++X$Xx+++++;;+;+$&$X$$xxxxxxxxx++++++++++++xxxxxxxxxxxxxxxxxxxxxXXXXXXXXXX$$$$$
+++++++++++++++++++++++xxX$$Xx+x+;;;::;+X$$XXX$$$$XXx+x$XXX$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXXXXXXXX$$$$
;;;::;;::++++xxxxxxxxxxxxxX$$$$xx++++;::;;++x$$$$$$$$$$$$$XxxxxxxxxxxxxxXXxXXxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXXXXXXXX$$$$$
`);

    function processInput(input) {
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
                print("\nand not just that you feel the full power of the acient magic coursing through you giving you mroe power than ever before");
                gameActive = false;
            } else {
                print("\nYou whisper the words, but the Ancient Magic doesn't recognize you yet. You haven't listened to enough of the world's echoes.");
            }
        }

         else {
            stayHere();
        }
    }
    waitForInput(processInput);
}
