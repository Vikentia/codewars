// Help Suzuki rake his garden!

// The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.

function rakeGarden(garden) {
    return garden.split(' ').map(item => item !== 'gravel' && item !== 'rock' ? 'gravel' : item).join(' ')
}

console.log(rakeGarden('slug spider rock gravel gravel gravel gravel gravel gravel gravel'));
  //'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'