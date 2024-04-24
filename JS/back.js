// Variable declaration
let playerState = new Queue();
let statusCount = new Queue();

let skill_flip = document.querySelector('.skill');
let wait_flip = document.querySelector('.wait');
let skillBox = document.querySelector('.skill');
let player_dot = document.querySelector('.player_dot');
let player_Count = document.querySelector('.player_Count');
let getMana = document.getElementById('mana')
let getHealth = document.getElementById("health")
let getBotHealth = document.getElementById('bot-health');
let getBotHealth2 = document.getElementById('bot-health2')
let bot1 =document.querySelector('.bot')
let bot2 = document.querySelector('.bot2')
let diabox = document.querySelector('#dialog_body')
let label1 = document.querySelector('.label1')
let label2 = document.querySelector('.label2')
const hpText = document.getElementById('hp-text');
const manaText = document.getElementById('mana-text');

function loadStatusFromCookie() {
    const cookieName = 'statuss=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            // Extract the value of the cookie and parse it back into the statuss object
            statuss = JSON.parse(cookie.substring(cookieName.length));
            return;
        }
    }
    
    // If the cookie doesn't exist, set statuss to its default value
    statuss = {
        ATK: 0,
        ReMove: 0,
        MBuff: 0,
        HBuff:0,
        AGI: 0,
    };
}

let statuss;

loadStatusFromCookie();

let atkBuff = statuss.ATK
let removeBuff = statuss.ReMove
let manaBuff = statuss.MBuff 
let healthBuff = statuss.HBuff 
let agiBuff = statuss.AGI 

console.log(statuss)
//update mana
getMana.setAttribute('max', (getMana.value + (getMana.value * (manaBuff/100))))
getMana.setAttribute('value', (getMana.value + (getMana.value * (manaBuff/100))))

//update health
getHealth.setAttribute('max', (getHealth.value + (getHealth.value * (healthBuff/100))))
getHealth.setAttribute('value', (getHealth.value + (getHealth.value * (healthBuff/100))))



const skillCooldown = {
    Normal: false,
    Strike: false,
    Heal: false,
    Ult: false,
    Shield: false
};

function initializeGame() {
    
    setUI();
}

function setUI() {
    skillLoader();
    updateState();
    updateTurnBar();
    checkHealth();
    updateManaText();
    updateHealthText();
}


function manabuff() {

}

function updateManaText() {
    manaText.textContent = `MP: ${getMana.value}/${getMana.max}`;
}


function updateHealthText() {
    hpText.textContent = `HP: ${getHealth.value}/${getHealth.max}`;
}

function updateState() {
    if(playerState.isEmpty()) {
        skill_flip.style.transform = "rotateY(0deg)"
        wait_flip.style.transform = "rotateY(-180deg)"
    
    } else if (!playerState.isEmpty()){
            skill_flip.style.transform = "rotateY(180deg)"
            wait_flip.style.transform = "rotateY(0deg)"
    }
}

function addDamageAnimationToDiv(className) {
    console.log(className)

    const element = document.querySelector(`.${className}`);
    element.classList.add('active');
}

function removeDamageAnimationToDiv(className) {
    console.log(className)
    const element = document.querySelector(`.${className}`);
    if (element && element.classList.contains('active')) {
        element.classList.remove('active');
    }

    return;
     
}

function updateTurnBar() {
    player_dot.style.transform = `translateX(${playerState.getSize() * 100 +20}%)`;
    player_Count.innerHTML = `${ Number( playerState.getSize())}`
}


function playerStateCount(skill) {
    playerState.enterQueue('player', (skill.recharge - removeBuff));
}

function addDialogs(text , color) {
    diabox.innerHTML = `<p class="diatext" style="color: ${color}">${text}</p>` 

}

function clearDialog() {
    diabox.innerHTML = '';
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function skillLoader() {
    

    skillBox.innerHTML = `
    
    <div class="skill-button" onclick="useSkill(skill.Normal)">
        <img src="CSS/img/Skill/${skill.Normal.name}.png" class="skill-image1">

        <span class="skill-tip">
        <div class="top">
            <div class="skill-info-left">
                <div class="pic">
                    <img src="CSS/img/Skill/${skill.Normal.name}.png"" alt="">
                </div>
                <div class="name">${skill.Normal.name}</div>
            </div>
            <div class="skill-info-right">
                <p>${skill.Normal.damage} damage</p>
                <p>${skill.Normal.recharge} actions</p>
                <p>${skill.Normal.mp_usage} MP</p>
            </div>
        </div>
        <div class="bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore 
            repellendus nulla reprehenderit. Quas deleniti minus nulla debitis expedita sequi cupiditate?
        </div>
    </span>

    </div>
    <div class="skill-button" onclick="useSkill(skill.Strike)">
        <img src="CSS/img/Skill/${skill.Strike.name}.png" class="skill-image2">
        
        <span class="skill-tip">
        <div class="top">
            <div class="skill-info-left">
                <div class="pic">
                    <img src="CSS/img/Skill/${skill.Strike.name}.png"" alt="">
                </div>
                <div class="name">${skill.Strike.name}</div>
            </div>
            <div class="skill-info-right">
                <p>${skill.Strike.damage} damage</p>
                <p>${skill.Strike.recharge} actions</p>
                <p>${skill.Strike.mp_usage} MP</p>
            </div>
        </div>
        <div class="bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore 
            repellendus nulla reprehenderit. Quas deleniti minus nulla debitis expedita sequi cupiditate?
        </div>
    </span>
    
    </div>
    <div class="skill-button" onclick="useSkill(skill.Heal)">
        <img src="CSS/img/Skill/${skill.Heal.name}.png" class="skill-image3">

        <span class="skill-tip">
        <div class="top">
            <div class="skill-info-left">
                <div class="pic">
                    <img src="CSS/img/Skill/${skill.Heal.name}.png"" alt="">
                </div>
                <div class="name">${skill.Heal.name}</div>
            </div>
            <div class="skill-info-right">
                <p>${skill.Heal.recover} heath</p>
                <p>${skill.Heal.recharge} actions</p>
                <p>${skill.Heal.mp_usage} MP</p>
            </div>
        </div>
        <div class="bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore 
            repellendus nulla reprehenderit. Quas deleniti minus nulla debitis expedita sequi cupiditate?
        </div>
    </span>
    
    </div>
    <div class="skill-button" onclick="useSkill(skill.Ult)">
        <img src="CSS/img/Skill/${skill.Ult.name}.png" class="skill-image4">
        
        <span class="skill-tip">
        <div class="top">
            <div class="skill-info-left">
                <div class="pic">
                    <img src="CSS/img/Skill/${skill.Ult.name}.png"" alt="">
                </div>
                <div class="name">${skill.Ult.name}</div>
            </div>
            <div class="skill-info-right">
                <p>${skill.Ult.damage} damage</p>
                <p>${skill.Ult.recharge} actions</p>
                <p>${skill.Ult.mp_usage} MP</p>
            </div>
        </div>
        <div class="bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore 
            repellendus nulla reprehenderit. Quas deleniti minus nulla debitis expedita sequi cupiditate?
        </div>
    </span>
    
    </div>
    <div class="skill-button" onclick="useSkill(skill.Shield)">
        <img src="CSS/img/Skill/${skill.Shield.name}.png" class="skill-image5">

        <span class="skill-tip">
        <div class="top">
            <div class="skill-info-left">
                <div class="pic">
                    <img src="CSS/img/Skill/${skill.Shield.name}.png"" alt="">
                </div>
                <div class="name">${skill.Shield.name}</div>
            </div>
            <div class="skill-info-right">
                <p>${skill.Shield.duration} turn</p>
                <p>${skill.Shield.recharge} actions</p>
                <p>${skill.Shield.mp_usage} MP</p>
            </div>
        </div>
        <div class="bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore 
            repellendus nulla reprehenderit. Quas deleniti minus nulla debitis expedita sequi cupiditate?
        </div>
    </span>
    
    </div>

    `;
}



function checkHealth() {
    
    const playerHealth = Number(getHealth.value);
    const bot1Health = Number(getBotHealth.value);
    const bot2Health = Number(getBotHealth2.value);

    if (isDeath(playerHealth,)) {
        addDialogs('YOU LOSE!!');
        window.location.href = 'flash2.html';
        return true;
    }

    if (isDeath(bot1Health)) {
        return true;
    }

    if (isDeath(bot2Health)) {
        addDialogs('YOU WIN!! All bots defeated!');
        return true;
    }

    return false;
}

function isDeath(health) {
    return health <= 0; 
}

function checkMana(skill){
    let mana = Number(getMana.value);
    return mana >= skill.mp_usage     
}


function waveChange() {
    bot1.style.display = 'none';
    getBotHealth.style.display = 'none';
    bot2.style.opacity = '1';
    getBotHealth2.style.transform = 'translate(60%, -50%)';
    getBotHealth2.value = 350;
    label1.style.display = 'none'
    label2.style.transform = 'translate(-80%, 30%)'
    getMana.value = 100
    getMana.setAttribute('max', (getMana.value + (getMana.value * (manaBuff/100))))
    getMana.setAttribute('value', (getMana.value + (getMana.value * (manaBuff/100))))
    addDialogs('New wave! Bot Dragons has appeared.');
    diabox.innerHTML += `<br> <p style="color:white;"> Yor mana is recovred </p>`  
    changeMusic()
    botAttack();
}


function shouldDodge() {
    const dodgeChance = agiBuff;
    console.log(dodgeChance)
    const randomNumber = getRandomInt(1, 100);
    return randomNumber <= dodgeChance;
}

function startSkillCooldown(skillName) {

    skillCooldown[skillName] = true;

    setTimeout(() => {
        skillCooldown[skillName] = false;
        enableSkillButton(skillName);
    }, 1000); 
}

function disableSkillButton(skillName) {

    let button = document.querySelector(`button[data-skill="${skillName}"]`);
    if (button) {
        button.disabled = true;
    }
}

function enableSkillButton(skillName) {

    let button = document.querySelector(`button[data-skill="${skillName}"]`);
    if (button) {
        button.disabled = false;
    }
}


let status = '';

function comfiStatus(text, duration) {
    if (text === 'shield') {
        console.log(duration)
        console.log('pass')
        status = 'shield';

        statusCount.enterQueue('shield' , duration)

        console.log(statusCount.getSize())

        return;
    } else {
        return;
    }
}

function createStaus (text) {
    const statusBox = document.querySelector('.status')
    if(statusCount.getSize() > 0) {
        statusBox.innerHTML += `<div><img src="CSS/img/skill/${skill.Shield.name}.png" alt=""><span id="countDown"> 0 </span></div>`
        alert--;
    } 
    return;
}

function countUpdate() {
    const count = document.querySelector('#countDown')
    count.innerHTML = statusCount.getSize(); 
}

alert = 1;

function checkStatus() {
    
    const statusBox = document.querySelector('.status')
    if(statusCount.getSize() === 0) {
        statusBox.innerHTML = ''
        status = ''
        if (alert < 1) {
            diabox.innerHTML += `<br><p style="color:white;">Shield buff is out of effect </p>`  
            alert++;
        }
    } else {
        return;
    }
}  


function redirectToNextPage() {
    console.log('Redirecting to JS.html page...');
    window.location.href = 'flash.html';
}


function countDown() {

    if(statusCount.getSize() > 0) {
        statusCount.deleteQueue();
        countUpdate()
    }
}

let i = 0;

function useSkill(skill) {

    if (skillCooldown[skill.name]) {
        addDialogs(`Too many actions please Wait`);
        return;
    }

    let playerHealth = Number(getHealth.value);
    let botHealth = Number(getBotHealth.value);
    let botHealth2 = Number(getBotHealth2.value);

    if (!checkMana(skill)) {
        addDialogs(`Not enough mana to use: ${skill.name}`);
        return;
    }


    disableSkillButton(skill.name);
    console.log(skill.name)
    if(skill.name === 'Normal Attack') {
        playerAttackNormal()
    }  else if (skill.name === 'Strike') {
        playerStrike()
    } else if (skill.name === 'Ult') {
        playerUlti()
    } else if (skill.name === 'Heal') {
        playerHeal()
    }  else if (skill.name === 'Shield') {
        playerShield()
    }

 
    if (skill.recover) {
        getHealth.value = playerHealth + skill.recover;
        addDialogs(`Player healed ${skill.recover} damage.` , 'lightgreen');
        playerStateCount(skill);
        getMana.value -= skill.mp_usage;
        setUI();
    } else if (skill.damage) {
        let targetBot = botHealth > 0 ? 'bot1' : 'bot2';
        let targetHealth = botHealth > 0 ? botHealth : botHealth2;

        if (targetHealth > 0) {
            if (targetBot === 'bot1') {
                getBotHealth.value = botHealth - (skill.damage + (skill.damage * (atkBuff/100)));
                console.log(skill.damage + (skill.damage * (atkBuff/100)))
                addDialogs(`Player dealt ${skill.damage} damage to Kinght.  (+${atkBuff}%)`, 'lightgreen');
                playerStateCount(skill);
                getMana.value -= skill.mp_usage;
                addDamageAnimationToDiv('bot-img')
                
            } else {
                getBotHealth2.value = botHealth2 - skill.damage;
                addDialogs(`Player dealt ${skill.damage} damage to Dragon.`, 'lightgreen');
                playerStateCount(skill);
                getMana.value -= skill.mp_usage;
            
            }
        }
    } else {
        getMana.value -= skill.mp_usage;
        playerStateCount(skill);
        comfiStatus(skill.status, skill.duration);
        createStaus(skill.status);
        countUpdate();
        checkStatus();
    }

    startSkillCooldown(skill.name);

    if (checkHealth() && i < 1) {
        waveChange();
        i = 1;
    } else {
        botAttack();
    }

    setUI();
}


function bot1Random() {
    const randomNumber = getRandomInt(1, 100); 

    if (randomNumber <= 70) {

        return { name: 'Normal Attack', damage: 20}; 
    } else {

        return { name: 'SP Attack', damage: 50};
    }
}

function bossRandom() {
    const randomNumber = getRandomInt(1, 100);
    if (randomNumber <= 40) {
        return { name: 'Tail strike', damage: 20};
    } else if (randomNumber <= 70) {
        
        return { name: 'Fire ball', damage: 50};
    } else if (randomNumber <= 95) {
        
        return { name: 'Wind storm', damage: 150};
    } else {
        
        return { name: 'HELL FIRE', damage: 500};
    }
}

function botAttack() {
    let delay = 2000;
    let intervalId;

    intervalId = setInterval(() => {
        console.log('Starting bot attack interval...');

        if (playerState.getSize() === 0) {
            console.log('No player actions remaining.');
            addDialogs('please choose your action!!');
            clearInterval(intervalId);
            setUI()
            return;
        } 

         if (getBotHealth.value > 0) {
                botAttack1();
                return;
            } else if (getBotHealth2.value > 0){
                botAttack2();
                return;
            }
    
            if (isDeath(getBotHealth.value) && isDeath(getBotHealth2.value)) {
                clearDialog();
                addDialogs('YOU WIN!! All bots defeated!');
                redirectToNextPage();
                playerState.clearQueue();
                clearInterval(intervalId);
            }

        setUI(); 
    }, delay);

    

    function botAttack1() {
        console.log('Bot 1 is attacking...');
        removeDamageAnimationToDiv('bot-img')
        let randomSkill = bot1Random();

            if (shouldDodge()) {
                addDialogs(`Player dodged Kinght\'s attack! (${agiBuff}%)` , 'lightgreen');
                playerState.deleteQueue();
                countDown()
                checkStatus()
                updateTurnBar(); 
            } else if (status === 'shield') {
                let playerHealth = Number(getHealth.value);
                let reduce = (randomSkill.damage - (randomSkill.damage * 20/100))
                getHealth.value = playerHealth - reduce;
                addDialogs(`Kinght uses ${randomSkill.name} and deals ${reduce} damage. reduce By shield` , 'red');
                playerState.deleteQueue();
                countDown()
                checkStatus()
                setUI();
            } else {
                let playerHealth = Number(getHealth.value);
                getHealth.value = playerHealth - randomSkill.damage;
                addDialogs(`Kinght uses ${randomSkill.name} and deals ${randomSkill.damage} damage.`, 'red');
                playerState.deleteQueue();
                countDown()
                checkStatus()
                setUI();
            }

            if (randomSkill.name === 'Normal Attack') {
                kikiAttack()
            }  else if (randomSkill.name === 'SP Attack') {
                kikiAttack()
                setTimeout(()=> {
                    kikiAttack()
                } , 500)
            }

    }
    
    function botAttack2() {
        console.log('Bot 2 is attacking...')
        let randomSkill = bossRandom();
            if (shouldDodge()) {
                addDialogs(`Player dodged Bot 2\'s attack! (${agiBuff}%)`, 'lightgreen');
                playerState.deleteQueue();
                countDown()
                checkStatus()
                updateTurnBar(); 
            } else if (status === 'shield') {
                let playerHealth = Number(getHealth.value);
                let reduce = (randomSkill.damage - (randomSkill.damage * 20/100))
                getHealth.value = playerHealth - reduce;
                addDialogs(`Dragon uses ${randomSkill.name} and deals ${reduce} damage. reduce By shield`, 'red');
                playerState.deleteQueue();
                countDown()
                checkStatus()
                setUI();
            } else {
                let playerHealth = Number(getHealth.value);
                getHealth.value = playerHealth - randomSkill.damage;
                addDialogs(`Dragon uses ${randomSkill.name} and deals ${randomSkill.damage} damage.`, 'red');
                playerState.deleteQueue();
                countDown()
                checkStatus()
                setUI();
            }

            if (randomSkill.name === 'Tail strike') {
                bossTail()
            } else if (randomSkill.name === 'Fire ball') {
                bossFireball()
            } else if (randomSkill.name === 'Wind storm') {
                bossWind()
            } else if (randomSkill.name === 'HELL FIRE') {
                hellFire()
            }

    }
}    

var audio = document.getElementById('backgroundAudio');

audio.volume = 0.5

function changeMusic() {
    var audio = document.getElementById('backgroundAudio');
    // Pause the current music
    audio.pause();
    
    // Change the source to the new music file
    audio.src = "mp3/battle-of-the-dragons-8037.mp3";
    
    // Load and play the new music
    audio.load();
    audio.play();
  }


initializeGame();


