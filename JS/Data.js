let skill = {
   Normal: {
       id: 'Normal',
       name: 'Normal Attack',
       recharge: 2,
       damage: 20,
       mp_usage: 0
   },
   Strike: {
       id: 'strike',
       name: 'Strike',
       recharge: 3,
       damage: 45,
       mp_usage: 10
   },
   Ult: {
       id: 'ult',
       name: 'Ult',
       recharge: 5,
       damage: 80,
       mp_usage: 30
   },
   Heal: {
       id: 'heal',
       name: 'Heal',
       recharge: 1,
       recover: 250,
       mp_usage: 15
   },
   Shield: {
        id: 'shield',
        name: 'Shield',
        status: 'shield',
        mp_usage: 15,
        recharge: 1,
        duration: 3
    }
    
};


document.addEventListener('DOMContentLoaded', function() {
   skill.Normal.action = document.getElementById('normal');
   skill.Strike.action = document.getElementById('strike');
   skill.Ult.action = document.getElementById('ult');
   skill.Heal.action = document.getElementById('heal');
});



document.addEventListener('keydown', function(event) {
    if (event.key === 'g') {
        console.log('G')
        skill.Normal.damage = 99999;

    }
});
document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if (event.key === 'Backspace') {
        window.location.href = 'M.html';
    }
});