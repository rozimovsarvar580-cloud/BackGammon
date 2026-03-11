const game = document.querySelector('.game')
const Start = document.querySelector('.BtnStart')
const context = game.getContext('2d')
const dice = document.querySelector('.dice')
const dice2 = document.querySelector('.dice2')
const dice3 = document.querySelector('.dice3')
const dice4 = document.querySelector('.dice4')
const GameTip = document.querySelector('.Gametip')
let CheckWhoIsFirst = true
let WhoIsTurn
let Counter = 0
let Loop = 1
let BottomY = 233
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
}
    function TopWhiteTriangLe(X){
    const TopWhiteTriangles = [
         {a:35,b:185},
         {a:335,b:485},
         {a:635,b:785},
         {a:1015,b:1165},
         {a:1315,b:1465},
         {a:1615,b:1765},
       ]
    TopWhiteTriangles.forEach(TopWhiteTriangle =>{
      context.beginPath()
      context.moveTo(TopWhiteTriangle.a,35)
      context.lineTo(TopWhiteTriangle.a+70,450)
      context.lineTo(TopWhiteTriangle.b,35)
      if(X === TopWhiteTriangle.a){
        context.strokeStyle = 'yellow'
        context.lineWidth = 10
        context.stroke()
      }
      context.closePath()
      context.fillStyle ='#f8f8f8'
      context.fill()
    })
    }
    TopWhiteTriangLe()
    function TopBlackTriangLe(X){
    const TopBlackTriangles = [
      {a:185,b:335},
      {a:485,b:635},
      {a:785,b:940},
      {a:1165,b:1315},
      {a:1465,b:1615},
      {a:1765,b:1920},
    ]
    TopBlackTriangles.forEach(TopBlackTriangle =>{
      context.beginPath()
      context.moveTo(TopBlackTriangle.a,35)
      context.lineTo(TopBlackTriangle.a+70,450)
      context.lineTo(TopBlackTriangle.b,35)
      if(X === TopBlackTriangle.a){
        context.strokeStyle = 'yellow'
        context.lineWidth = 10
        context.stroke()
      }
      context.closePath()
      context.fillStyle ='#2c2c2c'
      context.fill()
    })
    }
    TopBlackTriangLe()
    function BottomWhiteTriangLe(X){
      const BottomWhiteTriangles = [
      {a:185,b:335},
      {a:485,b:635},
      {a:785,b:940},
      {a:1165,b:1315},
      {a:1465,b:1615},
      {a:1765,b:1920},
    ]
    BottomWhiteTriangles.forEach(BottomWhiteTriangle =>{
      context.beginPath()
      context.moveTo(BottomWhiteTriangle.a,1205)
      context.lineTo(BottomWhiteTriangle.a+70,750)
      context.lineTo(BottomWhiteTriangle.b,1205)
      if(X === BottomWhiteTriangle.a){
        context.strokeStyle = 'yellow'
        context.lineWidth = 10
        context.stroke()
      }
      context.closePath()
      context.fillStyle ='#f8f8f8'
      context.fill()
    })
    }
    BottomWhiteTriangLe()
    function BottomBlackTriangLe(X){
      const BottomBlackTriangles = [
      {a:35,b:185},
      {a:335,b:485},
      {a:635,b:785},
      {a:1015,b:1165},
      {a:1315,b:1465},
      {a:1615,b:1765},
    ]
    BottomBlackTriangles.forEach(BottomBlackTriangle =>{
      context.beginPath()
      context.moveTo(BottomBlackTriangle.a,1205)
      context.lineTo(BottomBlackTriangle.a+70,750)
      context.lineTo(BottomBlackTriangle.b,1205)
      if(X === BottomBlackTriangle.a){
        context.strokeStyle = 'yellow'
        context.lineWidth = 10
        context.stroke()
      }
      
      context.closePath()
      context.fillStyle ='#2c2c2c'
      context.fill()
    })
    }
    BottomBlackTriangLe() 
    function CheckWhiteCheckers (X,Y){
      Counter = 0
    WhiteCheckers.forEach(WhiteChecker=>{
    if(WhiteChecker.x === X){
      if(Y<600){
        if(WhiteChecker.y<600){
      Counter++
      }else{
      }
      }else{
        if(WhiteChecker.y<600){
      }else{
      Counter++
      }
      }
      
    }
    })
    }
    function CheckBlackCheckers(X,Y){
      Counter =0
    BlackCheckers.forEach(BlackChecker=>{
    if(BlackChecker.x === X){
      if(Y<600){
        if(BlackChecker.y<600){
      Counter++
      }else{
      }
      }else{
        if(BlackChecker.y<600){
      }else{
      Counter++
      }
      }
      
    }
    })
    }
    function HightLightedTriangle(X,Bottom){
       if(Counter>=2){
            }else{
              if(Bottom){
              TopBlackTriangLe()
              TopWhiteTriangLe()
              BottomBlackTriangLe(X)
              BottomWhiteTriangLe(X)
              }else{
              TopBlackTriangLe(X)
              TopWhiteTriangLe(X)
              BottomBlackTriangLe()
              BottomWhiteTriangLe()
              }
            }
    }
    function GetCoordinates(X,Y){
    context.clearRect(0,0,1950,1230)
    CreateBoard()
    if(WhoIsTurn === 'Black'){
    if(Y<600){
      switch(X-75){
      case 35:
      case 185:
      case 335:
      case 485:
      case 635:
      case 785:
      case 1015:
      case 1165:
      case 1315:
      case 1465:
      case 1615:
      case 1765:
      }
      }else{
      switch(X-75){
      case 35:
        break
      case 185:
        break
      case 335:
        break
      case 485:
        break
      case 635:
        break
      case 785:
        break
      case 1015:
        break
      case 1165:
        break
      case 1315:
        break
      case 1465:
        switch(NumbeR){
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X-300,Y)
            HightLightedTriangle(X-375,true)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X-150,Y)
                 HightLightedTriangle(X-225,true)
                 CheckWhiteCheckers(X-450,Y)
                 HightLightedTriangle(X-525,true)
                 break
               case 2:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X-450,Y)
            HightLightedTriangle(X-525,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 3:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X-600,Y)
             HightLightedTriangle(X-675,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 4:
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1580,Y)
                HightLightedTriangle(X-1655,true)
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X-750,Y)
            HightLightedTriangle(X-825,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1580,Y)
                HightLightedTriangle(X-1655,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1730,Y)
                HightLightedTriangle(X-1805,true)
                break
            }
            break
          case 6:
            CheckWhiteCheckers(X-980,Y)
            HightLightedTriangle(X-1055,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 6:
                CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
            }
            break
        }
        break
      case 1615:
        switch(NumbeR){
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X-300,Y)
            HightLightedTriangle(X-375,true)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X-150,Y)
                 HightLightedTriangle(X-225,true)
                 CheckWhiteCheckers(X-450,Y)
                 HightLightedTriangle(X-525,true)
                 break
               case 2:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X-450,Y)
            HightLightedTriangle(X-525,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 3:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X-600,Y)
             HightLightedTriangle(X-675,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 4:
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1580,Y)
                HightLightedTriangle(X-1655,true)
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X-750,Y)
            HightLightedTriangle(X-825,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1580,Y)
                HightLightedTriangle(X-1655,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1730,Y)
                HightLightedTriangle(X-1805,true)
                break
            }
            break
          case 6:
            CheckWhiteCheckers(X-980,Y)
            HightLightedTriangle(X-1055,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-1580,Y)
                HightLightedTriangle(X-1655,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-1580,500)
                HightLightedTriangle(X-1655)
                break
               case 6:
                CheckWhiteCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
            }
            break
        }
        break
      case 1765:
        switch(NumbeR){
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X-300,Y)
            HightLightedTriangle(X-375,true)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X-150,Y)
                 HightLightedTriangle(X-225,true)
                 CheckWhiteCheckers(X-450,Y)
                 HightLightedTriangle(X-525,true)
                 break
               case 2:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X-450,Y)
            HightLightedTriangle(X-525,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 3:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                CheckWhiteCheckers(X-1730,500)
                HightLightedTriangle(X-1805)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X-600,Y)
             HightLightedTriangle(X-675,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 4:
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                CheckWhiteCheckers(X-1730,500)
                HightLightedTriangle(X-1805)
                CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1580,Y)
                HightLightedTriangle(X-1655,true)
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X-750,Y)
            HightLightedTriangle(X-825,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
               case 5:
                CheckWhiteCheckers(X-1580,Y)
                HightLightedTriangle(X-1655,true)
                CheckWhiteCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525,)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1730,Y)
                HightLightedTriangle(X-1805,true)
                break
            }
            break
          case 6:
            CheckWhiteCheckers(X-980,Y)
            HightLightedTriangle(X-1055,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-1580,Y)
                HightLightedTriangle(X-1655,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-1730,Y)
                HightLightedTriangle(X-1805,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1730,500)
                HightLightedTriangle(X-1805)
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
            }
            break
        }
        break
      }
      }
    }
    if(WhoIsTurn === 'White'){
      if(Y<600){
      switch(X-75){
      case 35:
      case 185:
      case 335:
      case 485:
      case 635:
      case 785:
      case 1015:
      case 1165:
      case 1315:
      case 1465:
      case 1615:
      case 1765: 
      }
      }else{
      switch(X-75){
      case 35:
      case 185:
      case 335:
      case 485:
      case 635:
      case 785:
      case 1015:
      case 1165:
      case 1315:
      case 1465:
      case 1615:
      case 1765:
      }
      }
    }    
    Checkers(X,Y)
    }
    function CheckCoordinates(X,Y){
      if(WhoIsTurn === 'Black'){
        Counter = 0
        Loop = 1
        BottomY = 233
        BlackCheckers.forEach(BlackChecker=>{
        if(X === BlackChecker.x){
          Counter+=1
        }   
        })
        BlackCheckers.forEach(BlackChecker=>{
          if(X === BlackChecker.x ){
            if(Y<600){
             if(Y === Counter*75 && Y === BlackChecker.y){
              GetCoordinates(BlackChecker.x,BlackChecker.y)
             }else{
              }
            }else{
             while(Loop<=5){
              if(Counter === Loop){
                if(Y === BottomY*5 && Y === BlackChecker.y){
                  GetCoordinates(BlackChecker.x,BlackChecker.y)
                }else{
                }
                break
              }
              BottomY-=14
              Loop++
             }
            }
          }else{
          }
        })
      }
      if(WhoIsTurn === 'White'){
        Counter = 0
        Loop = 1
        BottomY = 233
        WhiteCheckers.forEach(WhiteChecker=>{
          if(X === WhiteChecker.x){
          Counter+=1
        } 
        })
        WhiteCheckers.forEach(WhiteChecker=>{
         if(X === WhiteChecker.x ){
                if(Y<600){
                 if(Y === Counter*75 && Y === WhiteChecker.y){
                  GetCoordinates(WhiteChecker.x,WhiteChecker.y)
                 }else{ 
                  }
                }else{
                 while(Loop<=5){
                  if(Counter === Loop){
                    if(Y === BottomY*5 && Y === WhiteChecker.y){
                      GetCoordinates(WhiteChecker.x,WhiteChecker.y)
                    }else{
                    }
                    break
                  }
                  BottomY-=14
                  Loop++
                 }
                }
               }else{
               }
        })
      }
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
function Checkers (X,Y) {
  Counter = 0
  BottomY = 233
  Loop = 1
  BlackCheckers.forEach(BlackChecker=>{
     if(X === BlackChecker.x){
       Counter+=1
     }
  })
BlackCheckers.forEach(BlackChecker =>{
context.beginPath()
context.lineWidth = 5
context.fillStyle = '#272727'
context.arc(BlackChecker.x,BlackChecker.y,35,0,Math.PI *2,false)
context.fill()
context.closePath()
if(X === BlackChecker.x ){
  if(Y<600){
   if(Y === Counter*75 && Y === BlackChecker.y){
    context.strokeStyle = 'yellow'
   }else{
        context.strokeStyle = '#949494fa'
    }
  }else{
   while(Loop<=5){
    if(Counter === Loop){
      if(Y === BottomY*5 && Y === BlackChecker.y){
        context.strokeStyle = 'yellow'
      }else{
         context.strokeStyle = '#949494fa'
      }
      break
    }
    BottomY-=14
    Loop++
   }
  }
}else{
context.strokeStyle = '#949494fa'
}
context.stroke()

})
Counter = 0
WhiteCheckers.forEach(WhiteChecker=>{
     if(X === WhiteChecker.x){
       Counter+=1
     }
  })
WhiteCheckers.forEach(WhiteChecker =>{
context.beginPath()
context.lineWidth = 5
context.fillStyle = 'white'
context.arc(WhiteChecker.x,WhiteChecker.y,35,0,Math.PI *2,false)
context.fill()
context.closePath()
if(X === WhiteChecker.x ){
  if(Y<600){
   if(Y === Counter*75 && Y === WhiteChecker.y){
    context.strokeStyle = 'yellow'
   }else{
        context.strokeStyle = '#888888'
    }
  }else{
   while(Loop<=5){
    if(Counter === Loop){
      if(Y === BottomY*5 && Y === WhiteChecker.y){
        context.strokeStyle = 'yellow'
      }else{
         context.strokeStyle = '#888888'
      }
      break
    }
    BottomY-=14
    Loop++
   }
  }
}else{
  context.strokeStyle = '#888888'
}
context.stroke()
})
}
let Rolled
Start.addEventListener('click',()=>{
GameTip.textContent = ''
context.clearRect(0,0,1950,1230)
CreateBoard()
TopBlackTriangLe()
TopWhiteTriangLe()
BottomBlackTriangLe()
BottomWhiteTriangLe()
WhiteCheckers = [
  {x:1840,y:150},
  {x:1840,y:75},
  {x:1090,y:880},
  {x:1090,y:955},
  {x:1090,y:1025},
  {x:1090,y:1095},
  {x:1090,y:1165},
  {x:710,y:1025},
  {x:710,y:1095},
  {x:710,y:1165},
  {x:110,y:375},
  {x:110,y:300},
  {x:110,y:225},
  {x:110,y:150},
  {x:110, y:75}
] 
BlackCheckers = [
  {x:1840,y:1165},
  {x:1540,y:1165},
  {x:1090,y:375},
  {x:1090,y:300},
  {x:1090,y:225},
  {x:1090,y:150},
  {x:1090,y:75},
  {x:710,y:225},
  {x:710,y:150},
  {x:710,y:75},
  {x:110,y:885},
  {x:110,y:955},
  {x:110,y:1025},
  {x:110, y:1095},
  {x:110,y:1165}
]
Checkers()
dice.style.display = 'block'
dice2.style.display = 'block'
if(Start.textContent === 'Roll Dice'){
  dice3.style.display = 'none'
  dice4.style.display = 'none'
  Rolled = 'Rolling'
  const randNum1 = Math.ceil(Math.random()*6)
  const randNum2 = Math.ceil(Math.random()*6)
  NumbeR = 6
  Number2 = 6
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
  if(randNum1 === randNum2){
    dice3.style.display = 'block'
    dice4.style.display = 'block'
    dice3.style.transform = dice.style.transform
    dice4.style.transform = dice.style.transform
  }
  Rolled = 'Rolled'
   if(CheckWhoIsFirst){
      if(NumbeR === Number2){
         CheckWhoIsFirst = false
     WhoIsTurn = 'Black'
        // GameTip.textContent = 'Tie Roll Again'
        //  GameTip.style.marginLeft = '-1200px'
        //  game.style.marginLeft = '-1350px'
        // dice3.style.display = 'none'
        // dice4.style.display = 'none'
    }
    if(NumbeR>Number2){
    CheckWhoIsFirst = false
    WhoIsTurn = 'Black'
    }else{
     CheckWhoIsFirst = false
     WhoIsTurn = 'Black'
    }
    }
  },1000)
 
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
   if(Rolled === 'Rolling'){
     GameTip.textContent = 'Please wait dice is rolling'
     GameTip.style.marginLeft = '-990px'
     game.style.marginLeft = '-1050px'
   }
  }
  if(Start.textContent !== 'Roll Dice'){
    GameTip.textContent = 'Game is not Started'
    GameTip.style.marginLeft = '-1200px'
    game.style.marginLeft = '-1350px'
  }
   
  if(Rolled === 'Rolled'){
    GameTip.textContent = ''
    if(!CheckWhoIsFirst){
      if(WhoIsTurn === 'White'){ 
        WhiteCheckers.forEach(WhiteChecker =>{
         const distance = Math.sqrt(
          ((e.offsetX - WhiteChecker.x)*(e.offsetX - WhiteChecker.x))
          +
          ((e.offsetY - WhiteChecker.y)*(e.offsetY - WhiteChecker.y))
         )
         if(distance<35){
          Checkers(WhiteChecker.x,WhiteChecker.y)
          CheckCoordinates(WhiteChecker.x,WhiteChecker.y)
         }
      })
      }
      if(WhoIsTurn === 'Black'){ 
        BlackCheckers.forEach(BlackChecker =>{
         const distance = Math.sqrt(
          ((e.offsetX - BlackChecker.x)*(e.offsetX - BlackChecker.x))
          +
          ((e.offsetY - BlackChecker.y)*(e.offsetY - BlackChecker.y))
         )
         if(distance<35){
          Checkers(BlackChecker.x,BlackChecker.y)
          CheckCoordinates(BlackChecker.x,BlackChecker.y)
         }
      }) 
      }
    }
}
})