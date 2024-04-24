const inventory = document.querySelector('.invent-box-sub-front');
const weaponContainer = document.querySelector('.weabox');
const armorContainer = document.querySelector('.armorbox');


let btn = document.querySelector('.no');
// let btn2 = document.querySelector('.yes');
let audioArr = document.getElementsByTagName('audio');

btn.addEventListener('mouseenter', ()=> {
    audioArr[0].play()
});

// btn2.addEventListener('mouseenter', ()=> {
//     audioArr[0].play()
// });


let count = localStorage.getItem('count') || 0; 

localStorage.setItem('count', count); 

initializeGame();


function initializeGame() {
    loadItem();
    loadStatus();
    updateCount();
    
}

// HERE!! 
function loadItem() {
    inventory.innerHTML = '';
    
    const itemHTML = item.map((item, index) => {
        return `
            <div onclick="useItems(${index})" class="boxxxxx ${index + 1}" style="border-color:${item.color}"><img src="${item.img}" alt=""></div>
        `;
    }).join('');
    
    inventory.innerHTML = `
        <div class="imgboxc">
            ${itemHTML}
        </div>
    `;
}

//เปิดดูรูป
let itemsindex = 0
function useItems(index){
    itemsindex = index
    console.log(itemsindex)
    $(".YrN").addClass("active")
    $(".YrN-transalent").addClass("active")
    $(".item-img").attr("src",item[index].img)
    $(".item-name").text(item[index].name)
    $(".item-story").text(item[index].desc)
    document.querySelector('.img-box-sup').style.borderColor = `${item[index].color}`
    if(item[index].rearlity === 'Common') {
        $('.item-rearlity').text(item[index].rearlity).css('color', 'gray')    
    } else if(item[index].rearlity === 'Rare') {
        $('.item-rearlity').text(item[index].rearlity).css('color', 'lightblue')  
    } else if (item[index].rearlity === 'Epic') {
        $('.item-rearlity').text(item[index].rearlity).css('color', 'violet')
    } else if (item[index].rearlity === 'Legendary') {
        $('.item-rearlity').text(item[index].rearlity).css('color', 'gold')
    }
    
    $(".item-status").html(
        `
        <p class="ATK">ATK%  : ${item[index].ATK}%</p>
        <p class="RM">Re.M. : ${item[index].ReMove}</p>
        <p class="MB">M.Buff : ${item[index].MBuff}%</p>
        <p class="HB">H.Buff : ${item[index].HBuff}%</p>
        <p class="AGI">AGI   : ${item[index].AGI}%</p>
        `
    )

    if(item[index].ATK != 0) {
        document.querySelector('.ATK').style.color = `gold`
    }
    if(item[index].ReMove != 0) {
        document.querySelector('.RM').style.color = `gold`
    }
    if(item[index].MBuff != 0) {
        document.querySelector('.MB').style.color = `gold`
    }
    if(item[index].HBuff != 0) {
        document.querySelector('.HB').style.color = `gold`
    }
    if(item[index].AGI != 0) {
        document.querySelector('.AGI').style.color = `gold`
    }

    $('.btn').html(`
    <div class="yes" onclick="confirmedItem(${index})">
        <span class="transition"></span>
        <span class="gradient"></span>
        <span class="label">UES</span>
    </div> 
    <div class="no" onclick="closeDesc()">
        <span class="transition"></span>
        <span class="gradient"></span>
        <span class="label">CLOSE</span>
    </div>`)

}




function confirmedItem(index){
    console.log(count)
    if(count >= 5) {
        alert('your use quota is full')
        closeDesc()
        return;
    } else {
        calulateStatus(item[index])
        item.splice(index,1)
        console.log(item)
        saveItemsToStorage()
        $(".YrN").removeClass("active")
        $(".YrN-transalent").removeClass("active")
        initializeGame()
        count++;
        localStorage.setItem('count', count); 
        updateCount()
        return item;
    }

}

function updateCount() {
    document.querySelector('.count').innerHTML = `${count} / 5`
}

function closeDesc(){
    $(".YrN").removeClass("active")
    $(".YrN-transalent").removeClass("active")
}

function calulateStatus(item) {
    statuss.ATK += item.ATK;
    statuss.ReMove += item.ReMove;
    statuss.MBuff += item.MBuff;
    statuss.HBuff += item.HBuff;
    statuss.AGI += item.AGI;
    saveStatusToStorage();
    return statuss;
}

function loadStatus() {
    document.querySelector('.playerinfo-sub').innerHTML =
        `<div class="basicskill">
          <h4>Base Status</h4>
          <p>HP : 100</p>
          <p>MP : 100</p>
          <p>ATK : 100</p>
          <p>Def. : 100</p>
        </div>
        <div class="advanceskill">
          <h4>ItemStatus</h4>
          <p>ATK  : ${statuss.ATK}%</p>
          <p>Re.M. : ${statuss.ReMove}%</p>
          <p>M.Buff : ${statuss.MBuff}%</p>
          <p>H.Buff   : ${statuss.HBuff}%</avp>
          <p>AGI   : ${statuss.AGI}%</avp>
        </div>`

    var atkParagraph = document.querySelector('.advanceskill p:nth-of-type(1)');
    var removeParagraph = document.querySelector('.advanceskill p:nth-of-type(2)');
    var mbuffParagraph = document.querySelector('.advanceskill p:nth-of-type(3)');
    var hbuffParagraph = document.querySelector('.advanceskill p:nth-of-type(4)');
    var agiParagraph = document.querySelector('.advanceskill p:nth-of-type(5)');

    atkParagraph.style.color = ' rgb(59, 215, 59)';
    removeParagraph.style.color = 'rgb(248, 51, 51)';
    mbuffParagraph.style.color = 'rgb(0, 215, 215)';
    hbuffParagraph.style.color = 'white';
    agiParagraph.style.color = 'rgb(247, 223, 41)';
}

function saveItemsToStorage() {
    localStorage.setItem('item', JSON.stringify(item));
}

function saveStatusToStorage() {
    localStorage.setItem('statuss', JSON.stringify(statuss));
}

function saveStatusToCookie() {
    document.cookie = `statuss=${JSON.stringify(statuss)}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  }
  
  function clearCount() {
    localStorage.removeItem('count'); 
    let count = 0; 
    localStorage.setItem('count', count); 
}

document.addEventListener('keydown', function(event) {
    // Check if 'R' key is pressed
    if (event.key === 'r') {
        clearCount()
    }   
});



function confirm() {
    saveStatusToCookie();
    window.history.back();
}

saveStatusToCookie();
saveItemsToStorage()
saveStatusToStorage();
