const item = JSON.parse(localStorage.getItem('item')) || [
    {
      name:"Sacred Crystal",
      rearlity:"Common",
      img: "./CSS/img/item/crystal.png",  
      ATK: 10,
      ReMove: 0,
      MBuff: 5, 
      HBuff:5,
      AGI: 5,
      color: 'gray',
      desc: "A Mysterious Crystal full with Sacred Energy."
    },
    {
      name:"Mana Potion",
      rearlity:"Rare",
      img: "./CSS/img/item/potion.png",
      ATK: 0,
      ReMove: 0,
      MBuff: 20,
      HBuff:0,
      AGI: 0,
      color: 'lightblue',
      desc: "A Mana Potion made by Someone."
    },
    {
      name:"Abandonned Tome",
      rearlity:"Epic",
      img: "./CSS/img/item/ruined_tome.png",
      ATK: 10,
      ReMove: 0,
      MBuff: 45,
      HBuff:0,
      AGI: 0,
      color: 'violet',
      desc: "Abandonned Tome that Returned after Disappear 100 years."
      
    },
    {
      name:"Ruined Rune",
      rearlity:"Epic",
      img: "./CSS/img/item/rune_box.png",
      ATK: 15,
      ReMove: 0,
      MBuff: 30,
      HBuff:0,
      AGI: 0,
      color: 'violet',
      desc: "Ruined Rune with Mysterious power founded by Princess in Sacrad Cave ."
      
    },
    {
      name:"Aura Potion",
      rearlity:"Rare",
      img: "./CSS/img/item/potion2.png",
      ATK: 30,
      ReMove: 0,
      MBuff: 0,
      HBuff:0,
      AGI: 5,
      color: 'lightblue',
      desc: "A Mysterious Potion sell by Blackmarket Merchant."
    },
    {
      name:"Sacred Feather",
      rearlity:"Rare",
      img: "./CSS/img/item/feather.png",
      ATK: 20,
      ReMove: 0,
      MBuff: 0,
      HBuff:0,
      AGI: 10,
      color: 'lightblue',
      desc: "A Pheonix Feather It fell for a long time, Thousands of Years ago however, It was full with Holy Power."
    },
    {
      name:"Fallen Feather",
      rearlity:"Epic",
      img: "./CSS/img/item/bl_feather.png",
      ATK: 0,
      ReMove: 0,
      MBuff: 50,
      HBuff:0,
      AGI: 15,
      color: 'violet',
      desc: "A Feather from Fallen Angel it was full with Dark Power."
      
    },
    {
      name:"Holy Tome",
      rearlity:"Rare",
      img: "./CSS/img/item/tome.png",
      ATK: 10,
      ReMove: 0,
      MBuff: 10,
      HBuff:0,
      AGI: 20,
      color: 'lightblue',
      desc: "A Holy Tome was Made by Holy Priestess."
      
    },
    {
      name:"Steak",
      rearlity:"Common",
      img: "./CSS/img/item/steak.png",
      ATK: 0,
      ReMove: 0,
      MBuff: 0,
      HBuff:20,
      AGI: 0,
      color: 'gray',
      desc: "A Steak was cooked by Poppular Chef."
      
    },
    {
      name:"Fried Chicken",
      rearlity:"Epic",
      img: "./CSS/img/item/fired_chicken.png",
      ATK: 0,
      ReMove: 0,
      MBuff: 0,
      HBuff:50,
      AGI: 0,
      color: 'violet',
      desc: "A Fired Chicken that looks delicious made by Holy Chicken Meat."
     
    },
    {
      name:"Void Scroll",
      rearlity:"Legendary",
      img: "./CSS/img/item/Scroll.png",
      ATK: 20,
      ReMove: 1,
      MBuff: 20,
      HBuff:10,
      AGI: 10,
      color: 'gold',
      desc: "A Void Scroll from another Dimensions."
     
    },
  ];
  
  function clearSave() {
    localStorage.removeItem('item');
    item.length = 0; // Clear the local array
    item.push(
      {
        name:"Sacred Crystal",
        rearlity:"Common",
        img: "./CSS/img/item/crystal.png",  
        ATK: 10,
        ReMove: 0,
        MBuff: 5, 
        HBuff:5,
        AGI: 5,
        color: 'gray',
        desc: "A Mysterious Crystal full with Sacred Energy."
      },
      {
        name:"Mana Potion",
        rearlity:"Rare",
        img: "./CSS/img/item/potion.png",
        ATK: 0,
        ReMove: 0,
        MBuff: 20,
        HBuff:0,
        AGI: 0,
        color: 'lightblue',
        desc: "A Mana Potion made by Someone."
      },
      {
        name:"Abandonned Tome",
        rearlity:"Epic",
        img: "./CSS/img/item/ruined_tome.png",
        ATK: 10,
        ReMove: 0,
        MBuff: 45,
        HBuff:0,
        AGI: 0,
        color: 'violet',
        desc: "Abandonned Tome that Returned after Disappear 100 years."
        
      },
      {
        name:"Ruined Rune",
        rearlity:"Epic",
        img: "./CSS/img/item/rune_box.png",
        ATK: 15,
        ReMove: 0,
        MBuff: 30,
        HBuff:0,
        AGI: 0,
        color: 'violet',
        desc: "Ruined Rune with Mysterious power founded by Princess in Sacrad Cave ."
        
      },
      {
        name:"Aura Potion",
        rearlity:"Rare",
        img: "./CSS/img/item/potion2.png",
        ATK: 30,
        ReMove: 0,
        MBuff: 0,
        HBuff:0,
        AGI: 5,
        color: 'lightblue',
        desc: "A Mysterious Potion sell by Blackmarket Merchant."
      },
      {
        name:"Sacred Feather",
        rearlity:"Rare",
        img: "./CSS/img/item/feather.png",
        ATK: 20,
        ReMove: 0,
        MBuff: 0,
        HBuff:0,
        AGI: 10,
        color: 'lightblue',
        desc: "A Pheonix Feather It fell for a long time, Thousands of Years ago however, It was full with Holy Power."
      },
      {
        name:"Fallen Feather",
        rearlity:"Epic",
        img: "./CSS/img/item/bl_feather.png",
        ATK: 0,
        ReMove: 0,
        MBuff: 50,
        HBuff:0,
        AGI: 15,
        color: 'violet',
        desc: "A Feather from Fallen Angel it was full with Dark Power."
        
      },
      {
        name:"Holy Tome",
        rearlity:"Rare",
        img: "./CSS/img/item/tome.png",
        ATK: 10,
        ReMove: 0,
        MBuff: 10,
        HBuff:0,
        AGI: 20,
        color: 'lightblue',
        desc: "A Holy Tome was Made by Holy Priestess."
        
      },
      {
        name:"Steak",
        rearlity:"Common",
        img: "./CSS/img/item/steak.png",
        ATK: 0,
        ReMove: 0,
        MBuff: 0,
        HBuff:20,
        AGI: 0,
        color: 'gray',
        desc: "A Steak was cooked by Poppular Chef."
        
      },
      {
        name:"Fried Chicken",
        rearlity:"Epic",
        img: "./CSS/img/item/fired_chicken.png",
        ATK: 0,
        ReMove: 0,
        MBuff: 0,
        HBuff:50,
        AGI: 0,
        color: 'violet',
        desc: "A Fired Chicken that looks delicious made by Holy Chicken Meat."
       
      },
      {
        name:"Void Scroll",
        rearlity:"Legendary",
        img: "./CSS/img/item/Scroll.png",
        ATK: 20,
        ReMove: 1,
        MBuff: 20,
        HBuff:10,
        AGI: 10,
        color: 'gold',
        desc: "A Void Scroll from another Dimensions."
       
      },
    );
    saveItemsToStorage(); 
}



let statuss = JSON.parse(localStorage.getItem('statuss')) || {
  ATK: 0,
  ReMove: 0,
  MBuff: 0,
  HBuff: 0,
  AGI: 0,
};

function clearSaveStetuss() {
  localStorage.removeItem('statuss'); // Remove statuss from localStorage
  statuss = {
      ATK: 0,
      ReMove: 0,
      MBuff: 0,
      HBuff:0,
      AGI: 0,
  };
  saveStatusToStorage(); 
}


function saveItemsToStorage() {
  localStorage.setItem('item', JSON.stringify(item));
}

function saveStatusToStorage() {
  localStorage.setItem('statuss', JSON.stringify(statuss));
}



document.addEventListener('keydown', function(event) {
  // Check if 'R' key is pressed
  if (event.key === 'r') {
    clearSaveStetuss();
    clearSave();
    location.reload();
  }   
});


