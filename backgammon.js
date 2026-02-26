const game = document.querySelector('.game')
const Start = document.querySelector('.BtnStart')
const context = game.getContext('2d')
const dice = document.querySelector('.dice')
const dice2 = document.querySelector('.dice2')
const GameTip = document.querySelector('.Gametip')
console.log(context)
CreateBoard()
function CreateBoard(){
    function Board1(){
    context.fillStyle ='wheat'
    context.fillRect(20,20,935,1200)
    context.lineWidth = 30
    context.strokeStyle = 'orange'
    context.strokeRect(20,20,935,1200)
    } 
    Board1()
    function Board2(){
    context.fillStyle ='wheat'
    context.fillRect(1000,20,935,1200)
    context.lineWidth = 30
    context.strokeStyle = 'orange'
    context.strokeRect(1000,20,935,1200)
    
    }
    Board2()
     function TopBlackTriangle(){
      function BlackTriangle () {
        context.beginPath()
        context.moveTo(180,35)
        context.lineTo(260,450)
        context.lineTo(340,35)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      BlackTriangle()
      function Black2Triangle () {
        context.beginPath()
        context.moveTo(490,35)
        context.lineTo(550,450)
        context.lineTo(650,35)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      Black2Triangle()
      function Black3Triangle () {
        context.beginPath()
        context.moveTo(790,35)
        context.lineTo(850,450)
        context.lineTo(940,35)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      Black3Triangle()
      function Black4Triangle () {
        context.beginPath()
        context.moveTo(1160,35)
        context.lineTo(1230,450)
        context.lineTo(1310,35)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      Black4Triangle()
      function Black5Triangle () {
        context.beginPath()
        context.moveTo(1460,35)
        context.lineTo(1530,450)
        context.lineTo(1620,35)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      Black5Triangle()
      function Black6Triangle () {
        context.beginPath()
        context.moveTo(1770,35)
        context.lineTo(1835,450)
        context.lineTo(1920,35)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      Black6Triangle()
    }
    TopBlackTriangle()
    function TopWhiteTriangle(){
      function WhiteTriangle () {
        context.beginPath()
        context.moveTo(35,35)
        context.lineTo(100,450)
        context.lineTo(180,35)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      WhiteTriangle()
      function White2Triangle () {
        context.beginPath()
        context.moveTo(340,35)
        context.lineTo(390,450)
        context.lineTo(490,35)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      White2Triangle()
      function White3Triangle () {
        context.beginPath()
        context.moveTo(650,35)
        context.lineTo(700,450)
        context.lineTo(790,35)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      White3Triangle()
      function White4Triangle () {
        context.beginPath()
        context.moveTo(1015,35)
        context.lineTo(1080,450)
        context.lineTo(1160,35)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      White4Triangle()
       function White5Triangle () {
        context.beginPath()
        context.moveTo(1310,35)
        context.lineTo(1380,450)
        context.lineTo(1460,35)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      White5Triangle()
        function White6Triangle () {
        context.beginPath()
        context.moveTo(1620,35)
        context.lineTo(1690,450)
        context.lineTo(1770,35)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      White6Triangle()
    }
    TopWhiteTriangle()
    function BottomBlackTriangle(){
      function BlackTriangle () {
        context.beginPath()
        context.moveTo(35,1205)
        context.lineTo(100,750)
        context.lineTo(185,1205)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      BlackTriangle()
      function Black2Triangle () {
        context.beginPath()
        context.moveTo(335,1205)
        context.lineTo(400,750)
        context.lineTo(485,1205)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      Black2Triangle()
      function Black3Triangle () {
        context.beginPath()
        context.moveTo(635,1205)
        context.lineTo(700,750)
        context.lineTo(785,1205)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      Black3Triangle()
       function Black4Triangle () {
        context.beginPath()
        context.moveTo(1015,1205)
        context.lineTo(1080,750)
        context.lineTo(1165,1205)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      Black4Triangle()
      function Black5Triangle () {
        context.beginPath()
        context.moveTo(1315,1205)
        context.lineTo(1380,750)
        context.lineTo(1465,1205)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      Black5Triangle()
      function Black6Triangle () {
        context.beginPath()
        context.moveTo(1615,1205)
        context.lineTo(1680,750)
        context.lineTo(1765,1205)
        context.closePath()
        context.fillStyle ='#242424'
        context.fill()
      }
      Black6Triangle()
    }
    BottomBlackTriangle()
     function BottomWhiteTriangle(){
      function WhiteTriangle () {
        context.beginPath()
        context.moveTo(185,1205)
        context.lineTo(255,750)
        context.lineTo(335,1205)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      WhiteTriangle()
      function White2Triangle () {
        context.beginPath()
        context.moveTo(485,1205)
        context.lineTo(555,750)
        context.lineTo(635,1205)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      White2Triangle()
      function White3Triangle () {
        context.beginPath()
        context.moveTo(785,1205)
        context.lineTo(855,750)
        context.lineTo(935,1205)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      White3Triangle()
      function White4Triangle () {
        context.beginPath()
        context.moveTo(1165,1205)
        context.lineTo(1230,750)
        context.lineTo(1315,1205)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      White4Triangle()
      function White5Triangle () {
        context.beginPath()
        context.moveTo(1465,1205)
        context.lineTo(1530,750)
        context.lineTo(1615,1205)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      White5Triangle()
       function White6Triangle () {
        context.beginPath()
        context.moveTo(1765,1205)
        context.lineTo(1830,750)
        context.lineTo(1915,1205)
        context.closePath()
        context.fillStyle ='#f8f8f8'
        context.fill()
      }
      White6Triangle()
    }
    BottomWhiteTriangle()
}
let X = 1200
let Y = 560
let BlackCheckers = [
  {x:X+505,y:Y+75},
  {x:X+425,y:Y+75},
  {x:X+345,y:Y+75},
  {x:X+265,y:Y+75},
  {x:X+185,y:Y+75},
  {x:X+105,y:Y+75},
  {x:X+25,y:Y+75},
  {x:X+525,y:Y},
  {x:X+450,y:Y},
  {x:X+375,y:Y},
  {x:X+300,y:Y},
  {x:X+225,y:Y},
  {x:X+150,y:Y},
  {x:X+75, y:Y},
  {x:X,    y:Y}
]
let WhiteX = 200
let WhiteY = 560
let WhiteCheckers = [
  {x:WhiteX+505,y:WhiteY+75},
  {x:WhiteX+425,y:WhiteY+75},
  {x:WhiteX+345,y:WhiteY+75},
  {x:WhiteX+265,y:WhiteY+75},
  {x:WhiteX+185,y:WhiteY+75},
  {x:WhiteX+105,y:WhiteY+75},
  {x:WhiteX+25, y:WhiteY+75},
  {x:WhiteX+525,y:WhiteY},
  {x:WhiteX+450,y:WhiteY},
  {x:WhiteX+375,y:WhiteY},
  {x:WhiteX+300,y:WhiteY},
  {x:WhiteX+225,y:WhiteY},
  {x:WhiteX+150,y:WhiteY},
  {x:WhiteX+75, y:WhiteY},
  {x:WhiteX,    y:WhiteY}
]
Checkers()
function Checkers (x,y) {
  context.clearRect(0,0,2200,1400)
  CreateBoard()
BlackCheckers.forEach(BlackChecker =>{
context.beginPath()
if(x === BlackChecker.x && y === BlackChecker.y){
context.strokeStyle = 'gold'
}else{
context.strokeStyle = '#949494fa'
}

context.lineWidth = 5
context.fillStyle = '#272727'
context.arc(BlackChecker.x,BlackChecker.y,35,0,Math.PI *2,false)
context.fill()
context.stroke()
context.closePath()
})
WhiteCheckers.forEach(WhiteChecker =>{
context.beginPath()
if(x === WhiteChecker.x && y === WhiteChecker.y){
  context.strokeStyle = 'yellow'
}else{
  context.strokeStyle = '#777777'
}
context.lineWidth = 5
context.fillStyle = 'white'
context.arc(WhiteChecker.x,WhiteChecker.y,35,0,Math.PI *2,false)
context.fill()
context.stroke()
context.closePath()
})
}
let Rolled
Start.addEventListener('click',()=>{
  GameTip.textContent = ''
WhiteCheckers = [
  {x:1845,y:150},
  {x:1845,y:75},
  {x:1085,y:885},
  {x:1085,y:955},
  {x:1085,y:1025},
  {x:1085,y:1095},
  {x:1085,y:1165},
  {x:710,y:1025},
  {x:710,y:1095},
  {x:710,y:1165},
  {x:105,y:375},
  {x:105,y:300},
  {x:105,y:225},
  {x:105,y:150},
  {x:105, y:75}
] 
BlackCheckers = [
  {x:1845,y:1095},
  {x:1845,y:1165},
  {x:1085,y:375},
  {x:1085,y:300},
  {x:1085,y:225},
  {x:1085,y:150},
  {x:1085,y:75},
  {x:710,y:225},
  {x:710,y:150},
  {x:710,y:75},
  {x:105,y:885},
  {x:105,y:955},
  {x:105,y:1025},
  {x:105, y:1095},
  {x:105,y:1165}
]
Checkers()
dice.style.display = 'block'
dice2.style.display = 'block'
if(Start.textContent === 'Roll Dice'){
  Rolled = 'Rolled'
  const randNum1 = Math.ceil(Math.random()*6)
  const randNum2 = Math.ceil(Math.random()*6)
  dice.style.transform = ''
  dice.style.animation = 'rolling 4s'
  dice2.style.animation = 'rolling 4s'
  setTimeout(()=>{
  switch(randNum1){
    case 1:
      dice.style.transform = ''
      break
    case 6:
      dice.style.transform = 'rotateX(180deg)'
      break
    case 5:
      dice.style.transform = 'rotateX(90deg)'
      break
    case 2:
      dice.style.transform = 'rotateX(-90deg)'
      break
    case 3:
      dice.style.transform = 'rotateY(90deg)'
      break
    case 4:
      dice.style.transform = 'rotateY(-90deg)'
      break
  }
  switch(randNum2){
    case 1:
      dice2.style.transform = ''
      break
    case 6:
      dice2.style.transform = 'rotateX(180deg)'
      break
    case 5:
      dice2.style.transform = 'rotateX(90deg)'
      break
    case 2:
      dice2.style.transform = 'rotateX(-90deg)'
      break
    case 3:
      dice2.style.transform = 'rotateY(90deg)'
      break
    case 4:
      dice2.style.transform = 'rotateY(-90deg)'
      break
  }
  dice.style.animation = ''
  dice2.style.animation = ''
  },4050)
}
Start.textContent = 'Roll Dice'
})
game.addEventListener('click',(e)=>{
  if(Start.textContent === 'Roll Dice'){
    if(!Rolled){
     GameTip.textContent = 'Please roll the dice first!'
     GameTip.style.marginLeft = '-1000px'
     game.style.marginLeft = '-1090px'
   }
  }
  if(Start.textContent !== 'Roll Dice'){
    GameTip.textContent = 'Game is not running'
    GameTip.style.marginLeft = '-1200px'
    game.style.marginLeft = '-1350px'
  }
   
  if(Rolled){
    GameTip.textContent = ''
    let number = 0
    let number2 = 0
    let number3 = 0
    let number4 = 0
   WhiteCheckers.forEach(WhiteChecker =>{
    const distance = Math.sqrt(
     ((e.offsetX - WhiteChecker.x)*(e.offsetX - WhiteChecker.x))
     +
     ((e.offsetY - WhiteChecker.y)*(e.offsetY - WhiteChecker.y))
    )
    switch(WhiteChecker.x){
      case 105:
        number+=1
        break
      case 710:
        number2++
        break
      case 1085:
        number3++
        break
      case 1845:  
        number4++
        break
     }
    if(distance<35){
     setTimeout(()=>{
      switch(number2){
       case 1:
         number2 = 233
         break
       case 2:
         number2 = 219
         break
       case 3:
         number2 = 205
         break
       }
        switch(number3){
       case 1:
         number3 = 233
         break
       case 2:
         number3 = 219
         break
       case 3:
         number3 = 205
         break
        case 4:
         number3 = 191
         break
        case 5:
         number3 = 177
         break
       }
      switch(WhiteChecker.x){
      case 105:
        if(WhiteChecker.y === 75*number){
          Checkers(WhiteChecker.x,WhiteChecker.y)
        }
        break
      case 710:
        if(WhiteChecker.y === number2*5){
          Checkers(WhiteChecker.x,WhiteChecker.y)
        }
        break
      case 1085:
        if(WhiteChecker.y === number3*5){
          Checkers(WhiteChecker.x,WhiteChecker.y)
        }
        break
      case 1845:
        if(WhiteChecker.y === number4*75){
          Checkers(WhiteChecker.x,WhiteChecker.y)
        }
        break
     }
     },50)
     
    }
  })
  BlackCheckers.forEach(BlackChecker =>{
    const distance = Math.sqrt(
     ((e.offsetX - BlackChecker.x)*(e.offsetX - BlackChecker.x))
     +
     ((e.offsetY - BlackChecker.y)*(e.offsetY - BlackChecker.y))
    )
    if(distance<35){
     switch(BlackChecker.x){
      case 105:
        if(BlackChecker.y === 885){
          Checkers(BlackChecker.x,BlackChecker.y)
        }
        break
      case 710:
        if(BlackChecker.y === 225){
          Checkers(BlackChecker.x,BlackChecker.y)
        }
        break
      case 1085:
        if(BlackChecker.y === 375){
          Checkers(BlackChecker.x,BlackChecker.y)
        }
        break
      case 1845:
        if(BlackChecker.y === 1095){
          Checkers(BlackChecker.x,BlackChecker.y)
        }
        break
     }
    }
  })
}
})
