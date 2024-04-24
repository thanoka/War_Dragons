function playerAttackNormal() {
    const gifElement = document.getElementById('gif1');
    const gifImages = [
    '   CSS/img/swing-sword/attack.gif',
    ];
    let currentIndex = 0;
    let gifInterval;
    let audio = new Audio('mp3/sword-swing.mp3');
    // ถ้ามีการกำหนด setInterval แล้วให้หยุดการเล่น GIF และเซ็ตเป็น null
    if (gifInterval) {
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
      return;
    }
  
    // เล่นเสียงเมื่อเริ่มเล่น GIF
    audio.play();
  
    // เริ่มต้นการเล่น GIF
    gifElement.src = gifImages[currentIndex];
    currentIndex = (currentIndex + 1) % gifImages.length;
  
    // ตั้งเวลาให้ GIF เล่นเป็นระยะเวลา 1 วินาที
    gifInterval = setInterval(function() {
      // เปลี่ยน src เป็นว่างเพื่อหยุดการเล่น GIF
      gifElement.src = '';
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
    }, 500);
  
    // แสดง GIF ที่ซ่อนอยู่
    gifElement.classList.remove('hidden');
  }

  function playerStrike() {
    const gifElement = document.getElementById('gif2');
    const gifImages = [
    '   CSS/img/swing-sword/strike.gif',
    ];
    let currentIndex = 0;
    let gifInterval;
    let audio = new Audio('mp3/stab.mp3');
    // ถ้ามีการกำหนด setInterval แล้วให้หยุดการเล่น GIF และเซ็ตเป็น null
    if (gifInterval) {
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
      return;
    }
  
    // เล่นเสียงเมื่อเริ่มเล่น GIF
    audio.play();
  
    // เริ่มต้นการเล่น GIF
    gifElement.src = gifImages[currentIndex];
    currentIndex = (currentIndex + 1) % gifImages.length;
  
    // ตั้งเวลาให้ GIF เล่นเป็นระยะเวลา 1 วินาที
    gifInterval = setInterval(function() {
      // เปลี่ยน src เป็นว่างเพื่อหยุดการเล่น GIF
      gifElement.src = '';
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
    }, 500);
  
    // แสดง GIF ที่ซ่อนอยู่
    gifElement.classList.remove('hidden');
  }

  function playerUlti() {
    const gifElement = document.getElementById('gif3');
    const gifImages = [
    '   CSS/img/swing-sword/ulti.gif',
    ];
    let currentIndex = 0;
    let gifInterval;
    let audio = new Audio('mp3/ulti.mp3');
    // ถ้ามีการกำหนด setInterval แล้วให้หยุดการเล่น GIF และเซ็ตเป็น null
    if (gifInterval) {
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
      return;
    }
  
    // เล่นเสียงเมื่อเริ่มเล่น GIF
    audio.play();
  
    // เริ่มต้นการเล่น GIF
    gifElement.src = gifImages[currentIndex];
    currentIndex = (currentIndex + 1) % gifImages.length;
  
    // ตั้งเวลาให้ GIF เล่นเป็นระยะเวลา 1 วินาที
    gifInterval = setInterval(function() {
      // เปลี่ยน src เป็นว่างเพื่อหยุดการเล่น GIF
      gifElement.src = '';
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
    }, 1038);
  
    // แสดง GIF ที่ซ่อนอยู่
    gifElement.classList.remove('hidden');
  }

  function bossTail() {
    const gifElement = document.getElementById('gif4');
    const gifImages = [
    '   CSS/img/boss-attack/tail.gif',
    ];
    let currentIndex = 0;
    let gifInterval;
    let audio = new Audio('mp3/tail-strike.mp3');
    // ถ้ามีการกำหนด setInterval แล้วให้หยุดการเล่น GIF และเซ็ตเป็น null
    if (gifInterval) {
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
      return;
    }
  
    // เล่นเสียงเมื่อเริ่มเล่น GIF
    audio.play();
  
    // เริ่มต้นการเล่น GIF
    gifElement.src = gifImages[currentIndex];
    currentIndex = (currentIndex + 1) % gifImages.length;
  
    // ตั้งเวลาให้ GIF เล่นเป็นระยะเวลา 1 วินาที
    gifInterval = setInterval(function() {
      // เปลี่ยน src เป็นว่างเพื่อหยุดการเล่น GIF
      gifElement.src = '';
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
    }, 500);
  
    // แสดง GIF ที่ซ่อนอยู่
    gifElement.classList.remove('hidden');
  }

  function bossFireball() {
    const gifElement = document.getElementById('gif5');
    const gifImages = [
    '   CSS/img/boss-attack/fireball.gif',
    ];
    let currentIndex = 0;
    let gifInterval;
    let audio = new Audio('mp3/fire.mp3');
    // ถ้ามีการกำหนด setInterval แล้วให้หยุดการเล่น GIF และเซ็ตเป็น null
    if (gifInterval) {
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
      return;
    }
  
    // เล่นเสียงเมื่อเริ่มเล่น GIF
    audio.play();
  
    // เริ่มต้นการเล่น GIF
    gifElement.src = gifImages[currentIndex];
    currentIndex = (currentIndex + 1) % gifImages.length;
  
    // ตั้งเวลาให้ GIF เล่นเป็นระยะเวลา 1 วินาที
    gifInterval = setInterval(function() {
      // เปลี่ยน src เป็นว่างเพื่อหยุดการเล่น GIF
      gifElement.src = '';
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
    }, 1000);
  
    // แสดง GIF ที่ซ่อนอยู่
    gifElement.classList.remove('hidden');
  }

  function bossWind() {
    const gifElement = document.getElementById('gif6');
    const gifImages = [
    '   CSS/img/boss-attack/wind.gif',
    ];
    let currentIndex = 0;
    let gifInterval;
    let audio = new Audio('mp3/wind-storm.mp3');
    // ถ้ามีการกำหนด setInterval แล้วให้หยุดการเล่น GIF และเซ็ตเป็น null
    if (gifInterval) {
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
      return;
    }
  
    // เล่นเสียงเมื่อเริ่มเล่น GIF
    audio.play();
  
    // เริ่มต้นการเล่น GIF
    gifElement.src = gifImages[currentIndex];
    currentIndex = (currentIndex + 1) % gifImages.length;
  
    // ตั้งเวลาให้ GIF เล่นเป็นระยะเวลา 1 วินาที
    gifInterval = setInterval(function() {
      // เปลี่ยน src เป็นว่างเพื่อหยุดการเล่น GIF
      gifElement.src = '';
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
    }, 2000);
  
    // แสดง GIF ที่ซ่อนอยู่
    gifElement.classList.remove('hidden');
  }

  function hellFire() {
    const gifElement = document.getElementById('gif7');
    const gifImages = [
    '   CSS/img/boss-attack/hellfire1.gif',
    ];
    let currentIndex = 0;
    let gifInterval;
    let audio = new Audio('mp3/hellfire.mp3');
    // ถ้ามีการกำหนด setInterval แล้วให้หยุดการเล่น GIF และเซ็ตเป็น null
    if (gifInterval) {
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
      return;
    }
  
    // เล่นเสียงเมื่อเริ่มเล่น GIF
    audio.play();
  
    // เริ่มต้นการเล่น GIF
    gifElement.src = gifImages[currentIndex];
    currentIndex = (currentIndex + 1) % gifImages.length;
  
    // ตั้งเวลาให้ GIF เล่นเป็นระยะเวลา 1 วินาที
    gifInterval = setInterval(function() {
      // เปลี่ยน src เป็นว่างเพื่อหยุดการเล่น GIF
      gifElement.src = '';
      clearInterval(gifInterval);
      gifInterval = null;
      gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
    }, 2000);
  
    // แสดง GIF ที่ซ่อนอยู่
    gifElement.classList.remove('hidden');
  }

function kikiAttack() {
  const gifElement = document.getElementById('gif8');
  const gifImages = [
  '   CSS/img/kiki-attack/kiki.gif',
  ];
  let currentIndex = 0;
  let gifInterval;
  let audio = new Audio('mp3/sword-swing.mp3');
  // ถ้ามีการกำหนด setInterval แล้วให้หยุดการเล่น GIF และเซ็ตเป็น null
  if (gifInterval) {
    clearInterval(gifInterval);
    gifInterval = null;
    gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
    return;
  }

  // เล่นเสียงเมื่อเริ่มเล่น GIF
  audio.play();

  // เริ่มต้นการเล่น GIF
  gifElement.src = gifImages[currentIndex];
  currentIndex = (currentIndex + 1) % gifImages.length;

  // ตั้งเวลาให้ GIF เล่นเป็นระยะเวลา 1 วินาที
  gifInterval = setInterval(function() {
    // เปลี่ยน src เป็นว่างเพื่อหยุดการเล่น GIF
    gifElement.src = '';
    clearInterval(gifInterval);
    gifInterval = null;
    gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
  }, 500);

  // แสดง GIF ที่ซ่อนอยู่
  gifElement.classList.remove('hidden');
}

// function playerHeal() {
//   const playerHeal1 = document.querySelector('.player-heal');
//   const playerHealSound = document.getElementById("playerHealSound");

//           playerHeal1.classList.remove('hidden');
//           playerHeal1.classList.add('animate1');

//           playerHealSound.play();

//           playerHeal1.addEventListener('animationend', () => {
//               playerHeal1.classList.remove('animate1');
//               playerHeal1.classList.add('hidden');

//               playerHealSound.pause(); 
//               playerHealSound.currentTime = 0;
//           });
// }

function playerHeal() {
  const gifElement = document.getElementById('gif9');
  const gifImages = [
  '   CSS/img/heal-effect/heal2.gif',
  ];
  let currentIndex = 0;
  let gifInterval;
  let audio = new Audio('mp3/heal-effect.mp3');
  // ถ้ามีการกำหนด setInterval แล้วให้หยุดการเล่น GIF และเซ็ตเป็น null
  if (gifInterval) {
    clearInterval(gifInterval);
    gifInterval = null;
    gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
    return;
  }

  // เล่นเสียงเมื่อเริ่มเล่น GIF
  audio.play();

  // เริ่มต้นการเล่น GIF
  gifElement.src = gifImages[currentIndex];
  currentIndex = (currentIndex + 1) % gifImages.length;

  // ตั้งเวลาให้ GIF เล่นเป็นระยะเวลา 1 วินาที
  gifInterval = setInterval(function() {
    // เปลี่ยน src เป็นว่างเพื่อหยุดการเล่น GIF
    gifElement.src = '';
    clearInterval(gifInterval);
    gifInterval = null;
    gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
  }, 1000);

  // แสดง GIF ที่ซ่อนอยู่
  gifElement.classList.remove('hidden');
}

function playerShield() {
  const gifElement = document.getElementById('gif10');
  const gifImages = [
  '   CSS/img/shield/shield.gif',
  ];
  let currentIndex = 0;
  let gifInterval;
  let audio = new Audio('mp3/shield-effect.mp3');
  // ถ้ามีการกำหนด setInterval แล้วให้หยุดการเล่น GIF และเซ็ตเป็น null
  if (gifInterval) {
    clearInterval(gifInterval);
    gifInterval = null;
    gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
    return;
  }

  // เล่นเสียงเมื่อเริ่มเล่น GIF
  audio.play();

  // เริ่มต้นการเล่น GIF
  gifElement.src = gifImages[currentIndex];
  currentIndex = (currentIndex + 1) % gifImages.length;

  // ตั้งเวลาให้ GIF เล่นเป็นระยะเวลา 1 วินาที
  gifInterval = setInterval(function() {
    // เปลี่ยน src เป็นว่างเพื่อหยุดการเล่น GIF
    gifElement.src = '';
    clearInterval(gifInterval);
    gifInterval = null;
    gifElement.classList.add('hidden'); // ซ่อน GIF หลังจากหยุดการเล่น
  }, 1500);

  // แสดง GIF ที่ซ่อนอยู่
  gifElement.classList.remove('hidden');
}



