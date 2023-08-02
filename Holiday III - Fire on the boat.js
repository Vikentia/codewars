function fireFight(s) {
    return s.replaceAll('Fire', '~~')
}

console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"));
//"~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"