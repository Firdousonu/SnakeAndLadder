
    var player_pos = 0;
    var last_pos = 25;

    function player_value() {
        var random = Math.floor(Math.random() * 6) + 1;
        player_pos = player_pos + random;
        if (player_pos >= 25) {
            document.getElementById("player").innerHTML = "WON THE GAME";
        }
        else {
            document.getElementById("dice").innerHTML = random;
            switch (player_pos) {
                //Ladder
                case 5: player_pos = 23;
                    break;
                case 8: player_pos = 16;
                    break;
                case 9: player_pos = 18;
                    break;
                // Snake
                case 11: player_pos = 4;
                    break;
                case 20: player_pos = 7;
                    break;
                case 24: player_pos = 3;
                    break;
                default:
                    break;
            }

            document.getElementById("player").innerHTML =player_pos;
        }
    }
