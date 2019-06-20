angular.module('myApp', [])
    .controller("hangmanController", ["$scope", function hangmanController($scope) {
        
        // global variables
        const words = ["Awkward", "Bagpipes", "Banjo", "Bungler", "Croquet", "Crypt", "Dwarves", "Fervid", "Fishhook", "Gypsy", "Haphazard", "Hyphen", "Ivory", "Jazzy", "Jinx", "Jukebox", "Kayak", "Kiosk", "Klutz", "Memento", "Mystify", "Oxygen", "Pajama", "Pixel", "Polka", "Quad", "Rhythmic", "Rogue", "Sphinx", "Toady", "Twelfth", "Unzip", "Waxy", "Yacht", "Zealous", "Zigzag", "Zippy", "Zombie", "cat", "sun", "cup", "ghost", "flower", "pie", "cow", "banana", "snowflake", "bug", "book", "jar", "snake", "light", "tree", "lips", "apple", "slide", "socks", "smile", "swing", "coat", "shoe", "water", "heart", "hat", "ocean", "kite", "dog", "mouth", "milk", "duck", "eyes", "skateboard", "bird", "boy", "person", "girl", "mouse", "ball", "house", "star", "nose", "bed", "whale", "jacket", "shirt", "hippo", "beach", "egg", "face", "cookie", "cheese", "ice", "cream", "cone", "drum", "circle", "spoon", "worm", "spider", "web", "abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoo", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzyin", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjac", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jiujitsu", "jocky", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays", "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekabo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz", "quizzes", "quorum", "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixe", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy", "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippy", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie"];
        $scope.alphabet1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        $scope.alphabet2 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
        $scope.alphabet3 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
        $scope.alphabet4 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
        $scope.gameWord = [];
        let keys = [];
        let chances;
        const CHANCES = 6;
        $scope.score = undefined;
        let c;
        let ctx;

        // init hangman
        function hangman() {
            c = document.getElementById("myCanvas");
            ctx = c.getContext("2d");
            // Set canvas dimensions
            c.width = window.innerWidth;
            c.height = window.innerHeight;
            ctx.scale(0.4, 0.4);
            ctx.lineWidth = 5;
        }
        hangman();

        // new word settings
        function newWord() {
            console.log('now here');
            initHangman();
            let word = words[Math.floor(Math.random() * words.length)];
            chances = CHANCES;
            let wordArray = word.toUpperCase().replace(/\s/g, "  ").split("");
            $scope.gameWord = [];
            wordArray.forEach((letter) => {
                if (/\w/.test(letter)) {
                    $scope.gameWord.push({
                        lett: letter,
                        shown: false
                    })
                } else {
                    $scope.gameWord.push({
                        lett: letter,
                        shown: true
                    })
                }
            });
            keys.forEach((key) => {
                $('#' + key).removeClass('animated fade');
                $('#' + key).prop('disabled', false);
            })
            keys = [];
            $('.wordArea').fadeIn('slow');
            $scope.$apply();
        }

        //begin game here
        $scope.play = () => {
            $scope.inGame = true;
            $scope.score = 0;
            $scope.hints = 3;
            newWord();
        }

        // selecting a key
        $scope.select = (key) => {
            console.log(key, "selected");
            $('#' + key).prop('disabled', true);
            $('#' + key).addClass('animated fade');
            keys.push(key)
            let found = false;
            $scope.gameWord.forEach((letter) => {
                if (letter.lett === key) {
                    found = true;
                    letter.shown = true;
                }
            });
            if (!found) {
                chances--;
                DrawHangMan();
            }
            const won = checkForWin();
            if (won) {
                $('.wordArea').fadeOut('slow', newWord)
                $scope.score += 1;
            }
            $scope.$apply();
        }

        // Draw the hangman
        function DrawHangMan() {
            $scope.hangman = true;
            $scope.$apply();
            switch (chances) {
                case 5: {
                    ctx.beginPath();
                    ctx.arc(350, 180, 60, 0, 2 * Math.PI);
                    ctx.stroke();
                    break;
                }
                case 4: {
                    ctx.moveTo(350, 240);
                    ctx.lineTo(350, 480);
                    ctx.stroke();
                    break;
                }
                case 3: {
                    ctx.moveTo(350, 270);
                    ctx.lineTo(280, 350);
                    ctx.stroke();
                    break;
                }
                case 2: {
                    ctx.moveTo(350, 270);
                    ctx.lineTo(420, 350);
                    ctx.stroke();
                    break;
                }
                case 1: {
                    ctx.moveTo(350, 480);
                    ctx.lineTo(280, 560);
                    ctx.stroke();
                    break;
                }
                case 0: {
                    ctx.moveTo(350, 480);
                    ctx.lineTo(420, 560);
                    ctx.moveTo(330, 160);
                    ctx.arc(330, 160, 1, 2 * Math.PI, 0);
                    ctx.moveTo(370, 160);
                    ctx.arc(370, 160, 1, 2 * Math.PI, 0);
                    ctx.moveTo(340, 200);
                    ctx.arc(350, 200, 10, Math.PI, 0);
                    ctx.stroke();
                    break;
                }
            }

            setTimeout(() => {
                if (chances === 0) {
                    $scope.gameWord.forEach((letter) => {
                        letter.shown = true;
                    });
                    setTimeout(() => {
                        $scope.inGame = false;
                        $scope.score = undefined;
                        $scope.hints = undefined;
                        $scope.$apply();
                    }, 2000)
                }
                $scope.hangman = false;
                $scope.$apply();
            }, 2000)
        }

        //Draw initial hangman
        function initHangman() {
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.beginPath();
            ctx.moveTo(500, 650);
            ctx.lineTo(50, 650);
            ctx.stroke();
            ctx.moveTo(100, 650);
            ctx.lineTo(100, 50);
            ctx.stroke();
            ctx.lineTo(500, 50);
            ctx.stroke();
            ctx.moveTo(250, 50);
            ctx.lineTo(100, 200);
            ctx.stroke();
            ctx.moveTo(350, 50);
            ctx.lineTo(350, 120);
            ctx.stroke();
        }

        function checkForWin() {
            return $scope.gameWord.every(letter => letter.shown);
        }

        $scope.showHintOption = () =>{
            $scope.showHint = true;
            $scope.$apply();
        };
    }]);
    