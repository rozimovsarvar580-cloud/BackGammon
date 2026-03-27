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
let array = []
let x
let y
let Number3
let Number4
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
   function Board3(color){
    context.fillStyle ='wheat'
    context.fillRect(1950,20,235,600)
    context.lineWidth = 30
     if(color){
    context.strokeStyle = 'yellow'
    context.strokeRect(1975,40,185,540)
    }
    context.strokeStyle = 'orange'
    context.strokeRect(1950,20,235,600)
    }
    Board3()
    function Board4(color){
    context.fillStyle ='wheat'
    context.fillRect(1950,600,235,620)
    context.lineWidth = 30
    if(color){
    context.strokeStyle = 'yellow'
    context.strokeRect(1975,620,185,580)
    }
    context.strokeStyle = 'orange'
    context.strokeRect(1950,600,235,620)
    }
    Board4()
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
      context.lineTo(TopWhiteTriangle.a+70,490)
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
      context.lineTo(TopBlackTriangle.a+70,490)
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
      Counter = 0
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
           TopBlackTriangLe()
           TopWhiteTriangLe()
           BottomBlackTriangLe()
           BottomWhiteTriangLe()
           return false
            }else{
              if(Bottom){
              TopBlackTriangLe()
              TopWhiteTriangLe()
              BottomBlackTriangLe(X)
              BottomWhiteTriangLe(X)
              array.push({x:X,y:750})
              }else{
              array.push({x:X,y:490})
              TopBlackTriangLe(X)
              TopWhiteTriangLe(X)
              BottomBlackTriangLe()
              BottomWhiteTriangLe()
              }
              return true
            }
    }
    function GetCoordinates(X,Y){
    context.clearRect(0,0,1950,1230)
    CreateBoard()
    if(WhoIsTurn === 'Black'){
    if(Y<600){
      switch(X-75){
      case 35:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X+150,500)
            HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                }
                if(HightLightedTriangle(X+225)){
                  if(Number3){
                    CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                  }
                
                }
                if(HightLightedTriangle(X+375)){
                  if(Number4){
                    CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)  
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675) 
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905) 
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)  
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X+300,500)
            HightLightedTriangle(X+225)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X+150,500)
                 HightLightedTriangle(X+75)
                 CheckWhiteCheckers(X+300,500)
                 HightLightedTriangle(X+225)
                 break
               case 2:
                if(HightLightedTriangle(X+225)){
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                }
                if(HightLightedTriangle(X+375)){
                  if(Number3){
                    CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                  }
                
                }
                if(HightLightedTriangle(X+905)){
                  if(Number4){
                   CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205) 
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X+450,500)
            HightLightedTriangle(X+375)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 3:
                if(HightLightedTriangle(X+375)){
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                }
                if(HightLightedTriangle(X+905)){
                  if(Number3){
                    CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X+600,500)
             HightLightedTriangle(X+525)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 4:
                if(HightLightedTriangle(X+525)){
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                }
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                CheckWhiteCheckers(X+1580,500)
                HightLightedTriangle(X+1505)
                break
            }
            break
          case 5:
           CheckWhiteCheckers(X+750,500)
           HightLightedTriangle(X+675)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
               case 5:
                if(HightLightedTriangle(X+675)){
                CheckWhiteCheckers(X+1580,500)
                HightLightedTriangle(X+1505)
                }
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                CheckWhiteCheckers(X+1730,500)
                HightLightedTriangle(X+1655)
                break
            }
            break
          case 6:
           CheckWhiteCheckers(X+980,500)
           HightLightedTriangle(X+905)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+1580,500)
                HightLightedTriangle(X+1505)
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckWhiteCheckers(X+1730,500)
                HightLightedTriangle(X+1655)
                break
               case 6:
                break
            }
            break
        }
        break
      case 185:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X+150,500)
            HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                }
                if(HightLightedTriangle(X+225)){
                  if(Number3){
                    CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                  }
                
                }
                if(HightLightedTriangle(X+375)){
                  if(Number4){
CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755) 
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755) 
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905) 
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)  
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X+300,500)
            HightLightedTriangle(X+225)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X+150,500)
                 HightLightedTriangle(X+75)
                 CheckWhiteCheckers(X+300,500)
                 HightLightedTriangle(X+225)
                 break
               case 2:
                if(HightLightedTriangle(X+225)){
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                }
                if(HightLightedTriangle(X+375)){
                  if(Number3){
                    CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                  }
                
                }
                if(HightLightedTriangle(X+905)){
                  if(Number4){

                 CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205) }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X+450,500)
            HightLightedTriangle(X+375)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 3:
                if(HightLightedTriangle(X+375)){
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                }
                if(HightLightedTriangle(X+905)){
                  if(Number3){
                    CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                  }
                }
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X+600,500)
             HightLightedTriangle(X+525)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 4:
                if(HightLightedTriangle(X+525)){
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                }
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                CheckWhiteCheckers(X+1580,500)
                HightLightedTriangle(X+1505)
                break
            }
            break
          case 5:
           CheckWhiteCheckers(X+830,500)
           HightLightedTriangle(X+755)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
               case 5:
                if(HightLightedTriangle(X+755)){
                CheckWhiteCheckers(X+1580,500)
                HightLightedTriangle(X+1505)
                }
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 6:
           CheckWhiteCheckers(X+980,500)
           HightLightedTriangle(X+905)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+1580,500)
                HightLightedTriangle(X+1505)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                break
            }
            break
        }
        break
      case 335:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X+150,500)
            HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                }
                if(HightLightedTriangle(X+225)){
                  if(Number3){
                    CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                  }
                
                }
                if(HightLightedTriangle(X+375)){
                  if(Number4){
                    CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755) 
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755) 
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905) 
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)  
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X+300,500)
            HightLightedTriangle(X+225)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X+150,500)
                 HightLightedTriangle(X+75)
                 CheckWhiteCheckers(X+450,500)
                 HightLightedTriangle(X+375)
                 break
               case 2:
                if(HightLightedTriangle(X+225)){
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                }
                if(HightLightedTriangle(X+605)){
                  if(Number3){
                    CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                  }
                
                }
                if(HightLightedTriangle(X+905)){
                  if(Number4){
CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X+450,500)
            HightLightedTriangle(X+375)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 3:
                if(HightLightedTriangle(X+375)){
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                }
                if(HightLightedTriangle(X+905)){
                  if(Number3){
                    CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X+680,500)
             HightLightedTriangle(X+605)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 4:
                if(HightLightedTriangle(X+605)){
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                }
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 5:
           CheckWhiteCheckers(X+830,500)
           HightLightedTriangle(X+755)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
               case 5:
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 6:
           CheckWhiteCheckers(X+980,500)
           HightLightedTriangle(X+905)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                break
            }
            break
        }
        break
      case 485:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X+150,500)
            HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                }
                if(HightLightedTriangle(X+225)){
                  if(Number3){
                    CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                  }
                
                }
                if(HightLightedTriangle(X+455)){
                  if(Number4){
                    CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755) 
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755) 
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905) 
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)  
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X+300,500)
            HightLightedTriangle(X+225)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X+150,500)
                 HightLightedTriangle(X+75)
                 CheckWhiteCheckers(X+530,500)
                 HightLightedTriangle(X+455)
                 break
               case 2:
                if(HightLightedTriangle(X+225)){
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                }
                if(HightLightedTriangle(X+605)){
                  if(Number3){
                    CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                  }
                
                }
                if(HightLightedTriangle(X+905)){
                  if(Number4){
                    CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X+530,500)
            HightLightedTriangle(X+455)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 3:
                if(HightLightedTriangle(X+455)){
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                }
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X+680,500)
             HightLightedTriangle(X+605)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 4:
                if(HightLightedTriangle(X+605)){
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                }
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 5:
           CheckWhiteCheckers(X+830,500)
           HightLightedTriangle(X+755)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 6:
           CheckWhiteCheckers(X+980,500)
           HightLightedTriangle(X+905)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                break
            }
            break
        }
        break
      case 635:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X+150,500)
            HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305) 
                }
                if(HightLightedTriangle(X+305)){
                  if(Number3){
                    CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                  }
                
                }
                if(HightLightedTriangle(X+455)){
                  if(Number4){
                    CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                  }
                }
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305) 
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755) 
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755) 
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905) 
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)  
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X+380,500)
            HightLightedTriangle(X+305)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X+150,500)
                 HightLightedTriangle(X+75)
                 CheckWhiteCheckers(X+530,500)
                 HightLightedTriangle(X+455)
                 break
               case 2:
                if(HightLightedTriangle(X+305)){
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                }
                if(HightLightedTriangle(X+605)){
                  if(Number3){
                    CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                  }
                
                }
                if(HightLightedTriangle(X+905)){
                  if(Number4){
                    CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X+530,500)
            HightLightedTriangle(X+455)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 3:
                if(HightLightedTriangle(X+455)){
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                }
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X+680,500)
             HightLightedTriangle(X+605)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 4:
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 5:
           CheckWhiteCheckers(X+830,500)
           HightLightedTriangle(X+755)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 6:
           CheckWhiteCheckers(X+980,500)
           HightLightedTriangle(X+905)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                break
            }
            break
        }
        break
      case 785:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+230,500)
                HightLightedTriangle(X+155)
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X+230,500)
            HightLightedTriangle(X+155)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+155)){
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305) 
                }
                if(HightLightedTriangle(X+305)){
                  if(Number3){
                    CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                  }
                
                }
                if(HightLightedTriangle(X+455)){
                  if(Number4){
                    CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305) 
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755) 
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755) 
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905) 
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X+380,500)
            HightLightedTriangle(X+305)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X+230,500)
                 HightLightedTriangle(X+155)
                 CheckWhiteCheckers(X+530,500)
                 HightLightedTriangle(X+455)
                 break
               case 2:
                if(HightLightedTriangle(X+305)){
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                }
                if(HightLightedTriangle(X+605)){
                  if(Number3){
                    CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X+530,500)
            HightLightedTriangle(X+455)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+230,500)
                HightLightedTriangle(X+155)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 3:
                if(HightLightedTriangle(X+455)){
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                }
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X+680,500)
             HightLightedTriangle(X+605)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+230,500)
                HightLightedTriangle(X+155)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 4:
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 5:
           CheckWhiteCheckers(X+830,500)
           HightLightedTriangle(X+755)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+230,500)
                HightLightedTriangle(X+155)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                break
               case 6:
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 6:
           CheckWhiteCheckers(X+980,500)
           HightLightedTriangle(X+905)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+230,500)
                HightLightedTriangle(X+155)
                break
               case 2:
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305)
                break
               case 3:
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 4:
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                break
            }
            break
        }
        break
      case 1015:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X+150,500)
            HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                }
                if(HightLightedTriangle(X+225)){
                  if(Number3){
                    CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                  }
                
                }
                if(HightLightedTriangle(X+375)){
                  if(Number4){
                    CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X+300,500)
            HightLightedTriangle(X+225)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X+150,500)
                 HightLightedTriangle(X+75)
                 CheckWhiteCheckers(X+450,500)
                 HightLightedTriangle(X+375)
                 break
               case 2:
                if(HightLightedTriangle(X+225)){
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                }
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                 HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X+450,500)
            HightLightedTriangle(X+375)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X+600,500)
             HightLightedTriangle(X+525)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
           CheckWhiteCheckers(X+750,500)
           HightLightedTriangle(X+675)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 6:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 1165:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X+150,500)
            HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                }
                if(HightLightedTriangle(X+225)){
                  if(Number3){
                    CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                  }
                
                }
                if(HightLightedTriangle(X+375)){
                  if(Number4){
                    CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X+300,500)
            HightLightedTriangle(X+225)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X+150,500)
                 HightLightedTriangle(X+75)
                 CheckWhiteCheckers(X+450,500)
                 HightLightedTriangle(X+375)
                 break
               case 2:
                if(HightLightedTriangle(X+225)){
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                 HightLightedTriangle(X+375)
                 CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X+450,500)
            HightLightedTriangle(X+375)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X+600,500)
             HightLightedTriangle(X+525)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 6:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 1315:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X+150,500)
            HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                }
                if(HightLightedTriangle(X+225)){
                  if(Number3){
                    CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                  }
                }
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X+300,500)
            HightLightedTriangle(X+225)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X+150,500)
                 HightLightedTriangle(X+75)
                 CheckWhiteCheckers(X+450,500)
                 HightLightedTriangle(X+375)
                 break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                 HightLightedTriangle(X+375)
                 CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X+450,500)
            HightLightedTriangle(X+375)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 6:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 1465:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X+150,500)
            HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                }
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X+300,500)
            HightLightedTriangle(X+225)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X+150,500)
                 HightLightedTriangle(X+75)
                 CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                 break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 6:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 1615:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X+150,500)
            HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X+150,500)
                 HightLightedTriangle(X+75)
                 CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                 break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 6:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 1765:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                 break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 6:
            CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckBlackCheckersHomeBoard()
                if(Counter === 15){
                  Board4()
                  Board3(true)
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 900:
        GameTip.textContent = ''
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+865,610)
                 HightLightedTriangle(X+790,true)
                break
               case 2:
                 CheckBlackCheckers(X+715,610)
                 HightLightedTriangle(X+640,true)
                break
               case 3:
                 CheckBlackCheckers(X+565,610)
                HightLightedTriangle(X+490,true)
                break
               case 4:
                 CheckBlackCheckers(X+415,610)
                HightLightedTriangle(X+340,true)
                break
               case 5:
                 CheckBlackCheckers(X+265,610)
                HightLightedTriangle(X+190,true) 
                break
               case 6:
                 CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+865,610)
            HightLightedTriangle(X+790,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+790,true)){
                 CheckBlackCheckers(X+715,610)
                 HightLightedTriangle(X+640,true)
                }
                if(HightLightedTriangle(X+640,true)){
                  if(Number3){
                   CheckBlackCheckers(X+565,610)
                HightLightedTriangle(X+490,true) 
                  }
                 
                }
                if(HightLightedTriangle(X+490,true)){
                  if(Number4){
                    CheckBlackCheckers(X+415,610)
                HightLightedTriangle(X+340,true)
                  }
                 
                }
                break
               case 2:
                 CheckBlackCheckers(X+715,610)
                 HightLightedTriangle(X+640,true)
                 CheckBlackCheckers(X+565,610)
                HightLightedTriangle(X+490,true)
                break
               case 3:
                 CheckBlackCheckers(X+565,610)
                HightLightedTriangle(X+490,true)
                 CheckBlackCheckers(X+415,610)
                HightLightedTriangle(X+340,true)
                break
               case 4:
                 CheckBlackCheckers(X+415,610)
                HightLightedTriangle(X+340,true)
                 CheckBlackCheckers(X+265,610)
                HightLightedTriangle(X+190,true)
                break
               case 5:
                 CheckBlackCheckers(X+265,610)
                HightLightedTriangle(X+190,true) 
                 CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)
                break
               case 6:
                 CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)
                 CheckBlackCheckers(X-115,610)
                HightLightedTriangle(X-190,true)
                break
            }
            break
          case 2:
            CheckBlackCheckers(X+715,610)
            HightLightedTriangle(X+640,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+865,610)
                HightLightedTriangle(X+790,true)
                 CheckBlackCheckers(X+565,610)
                 HightLightedTriangle(X+490,true)
                 break
               case 2:
                if(HightLightedTriangle(X+640,true)){
                CheckBlackCheckers(X+415,610)
                HightLightedTriangle(X+340,true)
                }
                if(HightLightedTriangle(X+340,true)){
                  if(Number3){
                  CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)  
                  }
                
                }
                if(HightLightedTriangle(X+40,true)){
                  if(Number4){
                    CheckBlackCheckers(X-265,610)
                HightLightedTriangle(X-340,true)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X+565,610)
                HightLightedTriangle(X+490,true)
                CheckBlackCheckers(X+265,610)
                HightLightedTriangle(X+190,true)
                break
               case 4:
                CheckBlackCheckers(X+415,610)
                HightLightedTriangle(X+340,true)
                CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)
                break
               case 5:
                CheckBlackCheckers(X+265,610)
                HightLightedTriangle(X+190,true)
                CheckBlackCheckers(X-115,610)
                HightLightedTriangle(X-190,true)
                break
               case 6:
                CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)
                CheckBlackCheckers(X-265,610)
                HightLightedTriangle(X-340,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X+565,610)
            HightLightedTriangle(X+490,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+865,610)
                HightLightedTriangle(X+790,true)
                CheckBlackCheckers(X+415,610)
                HightLightedTriangle(X+340,true)
                break
               case 2:
                CheckBlackCheckers(X+715,610)
                HightLightedTriangle(X+640,true)
                CheckBlackCheckers(X+265,610)
                HightLightedTriangle(X+190,true)
                break
               case 3:
                if(HightLightedTriangle(X+490,true)){
                   CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)
                }
                if(HightLightedTriangle(X+40,true)){
                  if(Number3){
                   CheckBlackCheckers(X-415,610)
                HightLightedTriangle(X-490,true) 
                  }
                
                }
                if(HightLightedTriangle(X-490,true)){
                  if(Number4){
                    CheckBlackCheckers(X-865,610)
                HightLightedTriangle(X-940,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X+415,610)
                HightLightedTriangle(X+340,true)
                CheckBlackCheckers(X-115,610)
                HightLightedTriangle(X-190,true)
                break
               case 5:
                CheckBlackCheckers(X+265,610)
                HightLightedTriangle(X+190,true)
                CheckBlackCheckers(X-265,610)
                HightLightedTriangle(X-340,true)
                break
               case 6:
                CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)
                CheckBlackCheckers(X-415,610)
                HightLightedTriangle(X-490,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+415,610)
             HightLightedTriangle(X+340,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+865,610)
                HightLightedTriangle(X+790,true)
                CheckBlackCheckers(X+265,610)
                HightLightedTriangle(X+190,true)
                break
               case 2:
                CheckBlackCheckers(X+715,610)
                HightLightedTriangle(X+640,true)
                CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)
                break
               case 3:
                CheckBlackCheckers(X+565,610)
                HightLightedTriangle(X+490,true)
                CheckBlackCheckers(X-115,610)
                HightLightedTriangle(X-190,true)
                break
               case 4:
                if(HightLightedTriangle(X+340,true)){
                CheckBlackCheckers(X-265,610)
                HightLightedTriangle(X-340,true)
                }
                if(HightLightedTriangle(X-340,true)){
                  if(Number3){
                   CheckBlackCheckers(X-865,610)
                HightLightedTriangle(X-940,true) 
                  }
                }
                break
               case 5:
                CheckBlackCheckers(X+265,610)
                HightLightedTriangle(X+190,true)
                CheckBlackCheckers(X-415,610)
                HightLightedTriangle(X-490,true)
                break
               case 6:
                CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)
                CheckBlackCheckers(X-565,610)
                HightLightedTriangle(X-640,true)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X+265,610)
            HightLightedTriangle(X+190,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+865,610)
                HightLightedTriangle(X+790,true)
                CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)
                break
               case 2:
                CheckBlackCheckers(X+715,610)
                HightLightedTriangle(X+640,true)
                CheckBlackCheckers(X-115,610)
                HightLightedTriangle(X-190,true)
                break
               case 3:
                CheckBlackCheckers(X+565,610)
                HightLightedTriangle(X+490,true)
                CheckBlackCheckers(X-265,610)
                HightLightedTriangle(X-340,true)
                break
               case 4:
                CheckBlackCheckers(X+415,610)
                HightLightedTriangle(X+340,true)
                CheckBlackCheckers(X-415,610)
                HightLightedTriangle(X-490,true)
                break
               case 5:
                if(HightLightedTriangle(X+190,true)){
                CheckBlackCheckers(X-565,610)
                HightLightedTriangle(X-640,true)
                }
                break
               case 6:
                CheckBlackCheckers(X+115,610)
                HightLightedTriangle(X+40,true)
                CheckBlackCheckers(X-715,610)
                HightLightedTriangle(X-790,true)
                break
            }
            break
          case 6:
           CheckBlackCheckers(X+115,610)
           HightLightedTriangle(X+40,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+865,610)
                HightLightedTriangle(X+790,true)
                CheckBlackCheckers(X-115,610)
                HightLightedTriangle(X-190,true)
                break
               case 2:
                CheckBlackCheckers(X+715,610)
                HightLightedTriangle(X+640,true)
                CheckBlackCheckers(X-265,610)
                HightLightedTriangle(X-340,true)
                break
               case 3:
                CheckBlackCheckers(X+565,610)
                HightLightedTriangle(X+490,true)
                CheckBlackCheckers(X-415,610)
                HightLightedTriangle(X-490,true)
                break
               case 4:
                CheckBlackCheckers(X+415,610)
                HightLightedTriangle(X+340,true)
                CheckBlackCheckers(X-565,610)
                HightLightedTriangle(X-640,true)
                break
               case 5:
                 CheckBlackCheckers(X+265,610)
                 HightLightedTriangle(X+190,true)
                CheckBlackCheckers(X-715,610)
                HightLightedTriangle(X-790,true)
                break
               case 6:
                if(HightLightedTriangle(X+40,true)){
                CheckBlackCheckers(X-865,610)
                HightLightedTriangle(X-940,true)
                }
                break
            }
            break
        }
        break
      }
      }else{
      switch(X-75){
      case 35:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75,)
                break
               case 2:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 3:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 4:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 5:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 6:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X,500)
            HightLightedTriangle(X-75,)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-75)){
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                }
                if(HightLightedTriangle(X+75)){
                  if(Number3){
                    CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                  }
                
                }
                if(HightLightedTriangle(X+225)){
                  if(Number4){
                   CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375) 
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                break
               case 3:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 4:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525) 
                break
               case 5:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)  
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 6:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)  
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X+150,500)
            HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X,500)
                 HightLightedTriangle(X-75)
                 CheckWhiteCheckers(X+300,500)
                 HightLightedTriangle(X+225)
                 break
               case 2:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                }
                if(HightLightedTriangle(X+375)){
                  if(Number3){
                    CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                  }
                
                }
                if(HightLightedTriangle(X+675)){
                  if(Number4){
                    CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 4:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 5:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 6:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X+300,500)
            HightLightedTriangle(X+225)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 2:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 3:
                if(HightLightedTriangle(X+225)){
                  CheckWhiteCheckers(X+750,500)
                  HightLightedTriangle(X+675)
                }
                if(HightLightedTriangle(X+375)){
                  if(Number3){
                   CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205) 
                  }
                
                }
                if(HightLightedTriangle(X+1205)){
                  if(Number4){
                   CheckWhiteCheckers(X+1730,500)
                HightLightedTriangle(X+1655) 
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 5:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 6:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X+450,500)
             HightLightedTriangle(X+375)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 2:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 3:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 4:
                if(HightLightedTriangle(X+375)){
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                }
                if(HightLightedTriangle(X+1055)){
                  if(Number3){
                    CheckWhiteCheckers(X+1730,500)
                HightLightedTriangle(X+1655)
                  }
                }
                break
               case 5:
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 6:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X+600,500)
            HightLightedTriangle(X+525)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                break
               case 2:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 3:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 4:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 5:
                if(HightLightedTriangle(X+525)){
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                }
                break
               case 6:
                CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                CheckWhiteCheckers(X+1580,500)
                HightLightedTriangle(X+1505)
                break
            }
            break
          case 6:
           CheckWhiteCheckers(X+750,500)
           HightLightedTriangle(X+675)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 2:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 3:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 4:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                break
               case 5:
                 CheckWhiteCheckers(X+600,500)
                 HightLightedTriangle(X+525)
                CheckWhiteCheckers(X+1580,500)
                HightLightedTriangle(X+1505)
                break
               case 6:
                if(HightLightedTriangle(X+675)){
                CheckWhiteCheckers(X+1730,500)
                HightLightedTriangle(X+1655)
                }
                break
            }
            break
        }
        break
      case 185:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-255,true)
                break
               case 2:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-255)
                break
               case 3:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 4:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 5:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 6:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225,true)){
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                }
                if(HightLightedTriangle(X-225)){
                  if(Number3){
                    CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                  }
                 
                }
                if(HightLightedTriangle(X-75)){
                  if(Number4){
                   CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75) 
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 3:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 4:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                break
               case 5:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 6:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)  
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X-150,Y)
                 HightLightedTriangle(X-225,true)
                 CheckWhiteCheckers(X,500)
                 HightLightedTriangle(X-75)
                 break
               case 2:
                if(HightLightedTriangle(X-225)){
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                }
                if(HightLightedTriangle(X+75)){
                  if(Number3){
                    CheckWhiteCheckers(X+450,500)
                    HightLightedTriangle(X+375)
                  }
                
                }
                if(HightLightedTriangle(X+375)){
                  if(Number4){
                   CheckWhiteCheckers(X+980,500)
                   HightLightedTriangle(X+905)
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 4:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 5:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 6:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X,500)
            HightLightedTriangle(X-75)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 3:
                if(HightLightedTriangle(X-75)){
                  CheckWhiteCheckers(X+450,500)
                  HightLightedTriangle(X+375)
                }
                if(HightLightedTriangle(X+375)){
                  if(Number3){
                    CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                  }
                
                }
                if(HightLightedTriangle(X+905)){
                  if(Number4){
                    CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 5:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 6:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X+150,500)
             HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 2:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 3:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 4:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                }
                if(HightLightedTriangle(X+755)){
                  if(Number3){
                    CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                  }
                
                }
                break
               case 5:
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 6:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X+300,500)
            HightLightedTriangle(X+225)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 2:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 3:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 4:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 5:
                if(HightLightedTriangle(X+225)){
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                }
                break
               case 6:
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
            }
            break
          case 6:
           CheckWhiteCheckers(X+450,500)
           HightLightedTriangle(X+375)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X+600,500)
                HightLightedTriangle(X+525)
                break
               case 2:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 3:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 4:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                break
               case 5:
                 CheckWhiteCheckers(X+300,500)
                 HightLightedTriangle(X+225)
                CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                break
               case 6:
                if(HightLightedTriangle(X+375)){
                CheckWhiteCheckers(X+1430,500)
                HightLightedTriangle(X+1355)
                }
                break
            }
            break
        }
        break
      case 335:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-255,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                break
               case 3:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 4:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-255)
                break
               case 5:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 6:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225,true)){
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)  
                }
                if(HightLightedTriangle(X-375,true)){
                  if(Number3){
                   CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375) 
                  }
                 
                }
                if(HightLightedTriangle(X-375)){
                  if(Number4){
                    CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)  
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 3:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375) 
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 4:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75) 
                break
               case 5:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75) 
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 6:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)  
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
                 CheckWhiteCheckers(X-300,500)
                 HightLightedTriangle(X-375)
                 break
               case 2:
                if(HightLightedTriangle(X-375,true)){
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                }
                if(HightLightedTriangle(X-225)){
                  if(Number3){
                    CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                  }
                
                }
                if(HightLightedTriangle(X+75)){
                  if(Number4){
                    CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 4:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 5:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 6:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X-300,500)
            HightLightedTriangle(X-375)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 3:
                if(HightLightedTriangle(X-375)){
                  CheckWhiteCheckers(X+150,500)
                  HightLightedTriangle(X+75)
                }
                if(HightLightedTriangle(X+75)){
                  if(Number3){
                    CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                  }
                
                }
                if(HightLightedTriangle(X+605)){
                  if(Number4){
                    CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+375)
                break
               case 5:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 6:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X-150,500)
             HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 3:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 4:
                if(HightLightedTriangle(X-225)){
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                }
                if(HightLightedTriangle(X+375)){
                  if(Number3){
                    CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                  }
                
                }
                break
               case 5:
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 6:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X,500)
            HightLightedTriangle(X-75)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 3:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 4:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 5:
                if(HightLightedTriangle(X-75)){
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                }
                break
               case 6:
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
            }
            break
          case 6:
           CheckWhiteCheckers(X+150,500)
           HightLightedTriangle(X+75)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 3:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 4:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                break
               case 5:
                 CheckWhiteCheckers(X,500)
                 HightLightedTriangle(X-75)
                CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                break
               case 6:
                if(HightLightedTriangle(X+75)){
                CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                }
                break
            }
            break
        }
        break
      case 485:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-255,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                break
               case 4:
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 5:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 6:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-255)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225,true)){
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)  
                }
                if(HightLightedTriangle(X-375,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                  }
                
                }
                if(HightLightedTriangle(X-525,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                  }
                
                }
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
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 4:
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375) 
                break
               case 5:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375) 
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 6:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)  
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
                if(HightLightedTriangle(X-375,true)){
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                }
                if(HightLightedTriangle(X-525)){
                  if(Number3){
                    CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                  }
                
                }
                if(HightLightedTriangle(X-225)){
                  if(Number4){
                    CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 4:
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 5:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 6:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
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
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 3:
                if(HightLightedTriangle(X-525,true)){
                  CheckWhiteCheckers(X-150,500)
                  HightLightedTriangle(X-225)
                }
                if(HightLightedTriangle(X-225)){
                  if(Number3){
                    CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225) 
                  }
               
                }
                if(HightLightedTriangle(X+225)){
                  if(Number4){
                    CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 5:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 6:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X-450,500)
             HightLightedTriangle(X-525)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 4:
                if(HightLightedTriangle(X-525,true)){
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                }
                if(HightLightedTriangle(X+75)){
                  if(Number3){
                    CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                  }
                
                }
                if(HightLightedTriangle(X+455)){
                  if(Number4){
                    CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)
                  }
                
                }
                break
               case 5:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 6:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X-300,500)
            HightLightedTriangle(X-375)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 4:
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 5:
                if(HightLightedTriangle(X-375)){
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                }
                if(HightLightedTriangle(X+455)){
                  if(Number3){
                    CheckWhiteCheckers(X+1280,500)
                HightLightedTriangle(X+1205)
                  }
                }
                break
               case 6:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
            }
            break
          case 6:
            CheckWhiteCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                break
               case 4:
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 5:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                break
               case 6:
                if(HightLightedTriangle(X-225)){
                CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+755)
                }
                break
            }
            break
        }
        break
      case 635:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-255,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 5:
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 6:
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225,true)){
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)  
                }
                if(HightLightedTriangle(X-375,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                  }
                
                }
                if(HightLightedTriangle(X-525,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                  }
                
                }
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
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 5:
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 6:
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)  
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
                if(HightLightedTriangle(X-375,true)){
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true) 
                }
                if(HightLightedTriangle(X-675,true)){
                  if(Number3){
                   CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525) 
                  }
                
                }
                if(HightLightedTriangle(X-525)){
                  if(Number4){
                    CheckWhiteCheckers(X-150,500)
                 HightLightedTriangle(X-225)
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675) 
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true) 
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 5:
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675) 
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 6:
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
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
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 3:
                if(HightLightedTriangle(X-525,true)){
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                }
                if(HightLightedTriangle(X-525)){
                  if(Number3){
                    CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                  }
                }
                if(HightLightedTriangle(X-75)){
                  if(Number4){
                   CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455) 
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 5:
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-825)
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 6:
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
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
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 4:
                if(HightLightedTriangle(X-675,true)){
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                }
                if(HightLightedTriangle(X-225)){
                  if(Number3){
                    CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                  }
                
                }
                if(HightLightedTriangle(X+455)){
                  if(Number4){
                  CheckWhiteCheckers(X+1130,500)
                HightLightedTriangle(X+1055)  
                  }
                
                }
                break
               case 5:
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 6:
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X-600,500)
            HightLightedTriangle(X-675)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 5:
                if(HightLightedTriangle(X-675)){
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                }
                if(HightLightedTriangle(X+225)){
                  if(Number3){
                    CheckWhiteCheckers(X+980,500)
                HightLightedTriangle(X+905)
                  }
                }
                break
               case 6:
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckWhiteCheckers(X+380,500)
                HightLightedTriangle(X+305)
                break
            }
            break
          case 6:
            CheckWhiteCheckers(X-450,500)
            HightLightedTriangle(X-525)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75)
                break
               case 5:
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckWhiteCheckers(X+530,500)
                HightLightedTriangle(X+455)
                break
               case 6:
                if(HightLightedTriangle(X-525)){
                CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+605)
                }
                break
            }
            break
        }
        break
      case 785:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-255,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 6:
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225,true)){
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)  
                }
                if(HightLightedTriangle(X-375,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                  }
                }
                if(HightLightedTriangle(X-525,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                  }
                }
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
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 6:
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
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
                if(HightLightedTriangle(X-375,true)){
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true) 
                }
                if(HightLightedTriangle(X-675,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                  }
                }
                if(HightLightedTriangle(X-825)){
                  if(Number4){
                    CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                  }
                }
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
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 6:
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
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
                if(HightLightedTriangle(X-525,true)){
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                }
                if(HightLightedTriangle(X-825)){
                  if(Number3){
                    CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                  }
                
                }
                if(HightLightedTriangle(X-375)){
                  if(Number4){
                    CheckWhiteCheckers(X+230,500)
                HightLightedTriangle(X+305)
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 6:
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
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
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 4:
                if(HightLightedTriangle(X-675,true)){
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                }
                if(HightLightedTriangle(X-525)){
                  if(Number3){
                    CheckWhiteCheckers(X+230,500)
                HightLightedTriangle(X+305)
                  }
                
                }
                if(HightLightedTriangle(X+305)){
                  if(Number4){
                    CheckWhiteCheckers(X+830,500)
                HightLightedTriangle(X+905)
                  }
                
                }
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 6:
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
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
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 5:
                if(HightLightedTriangle(X-825,true)){
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                }
                if(HightLightedTriangle(X-225)){
                  if(Number3){
                    CheckWhiteCheckers(X+680,500)
                HightLightedTriangle(X+755)
                  }
                
                }
                break
               case 6:
                CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
            }
            break
          case 6:
            CheckWhiteCheckers(X-750,500)
            HightLightedTriangle(X-825)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                break
               case 6:
                if(HightLightedTriangle(X-825)){
                CheckWhiteCheckers(X+230,500)
                HightLightedTriangle(X+305)
                }
                break
            }
            break
        }
        break
      case 1015:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-230,Y)
                HightLightedTriangle(X-305,true)
                break
               case 2:
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-230,Y)
            HightLightedTriangle(X-305,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-305,true)){
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)  
                }
                if(HightLightedTriangle(X-455,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                  }
                
                }
                if(HightLightedTriangle(X-605,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
            }
            break
          case 2:
            CheckWhiteCheckers(X-380,Y)
            HightLightedTriangle(X-455,true)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X-230,Y)
                 HightLightedTriangle(X-305,true)
                 CheckWhiteCheckers(X-530,Y)
                 HightLightedTriangle(X-605,true)
                 break
               case 2:
                if(HightLightedTriangle(X-455,true)){
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true) 
                }
                if(HightLightedTriangle(X-755,true)){
                  if(Number3){
                   CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true) 
                  }
                
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905,true)
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X-530,Y)
            HightLightedTriangle(X-605,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-230,Y)
                HightLightedTriangle(X-305,true)
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 2:
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 3:
                if(HightLightedTriangle(X-605,true)){
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true) 
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-680,500)
                HightLightedTriangle(X-755)
                  }
                
                }
                if(HightLightedTriangle(X-755)){
                  if(Number4){
                    CheckWhiteCheckers(X-230,500)
                HightLightedTriangle(X-305)
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X-680,Y)
             HightLightedTriangle(X-755,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-230,Y)
                HightLightedTriangle(X-305,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 2:
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 4:
                if(HightLightedTriangle(X-755,true)){
                CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905)
                }
                if(HightLightedTriangle(X-905)){
                  if(Number3){
                    CheckWhiteCheckers(X-230,500)
                HightLightedTriangle(X-305)
                  }
                
                }
                if(HightLightedTriangle(X-305)){
                  if(Number4){
                    CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                  }
                
                }
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-530,500)
                HightLightedTriangle(X-605)
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X-830,Y)
            HightLightedTriangle(X-905,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-230,Y)
                HightLightedTriangle(X-305,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 2:
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 5:
                if(HightLightedTriangle(X-905,true)){
                CheckWhiteCheckers(X-530,500)
                HightLightedTriangle(X-605)
                }
                if(HightLightedTriangle(X-605)){
                  if(Number3){
                    CheckWhiteCheckers(X+300,500)
                HightLightedTriangle(X+225)
                  }
                
                }
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-380,500)
                HightLightedTriangle(X-455)
                break
            }
            break
          case 6:
            CheckWhiteCheckers(X-980,Y)
            HightLightedTriangle(X-1055,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-230,Y)
                HightLightedTriangle(X-305,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 2:
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)
                CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-530,500)
                HightLightedTriangle(X-605)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-380,500)
                HightLightedTriangle(X-455)
                break
               case 6:
                if(HightLightedTriangle(X-1055,true)){
                CheckWhiteCheckers(X-230,500)
                HightLightedTriangle(X-305)
                }
                if(HightLightedTriangle(X-305)){
                  if(Number3){
                    CheckWhiteCheckers(X+750,500)
                HightLightedTriangle(X+675)
                  }
                
                }
                break
            }
            break
        }
        break
      case 1165:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                break
               case 2:
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225,true)){
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)  
                }
                if(HightLightedTriangle(X-455,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                  }
                }
                if(HightLightedTriangle(X-605,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                  }
                }
                break
               case 2:
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
            CheckWhiteCheckers(X-380,Y)
            HightLightedTriangle(X-455,true)
            switch(Number2){
               case 1:
                 CheckWhiteCheckers(X-150,Y)
                 HightLightedTriangle(X-225,true)
                 CheckWhiteCheckers(X-530,Y)
                 HightLightedTriangle(X-605,true)
                 break
               case 2:
                if(HightLightedTriangle(X-455,true)){
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true) 
                }
                if(HightLightedTriangle(X-755,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                  }
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number4){
                   CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205) 
                  }
                }
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
            }
            break
          case 3:
            CheckWhiteCheckers(X-530,Y)
            HightLightedTriangle(X-605,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 2:
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 3:
                if(HightLightedTriangle(X-605,true)){
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true) 
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                  }
                
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number4){
                    CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X-680,Y)
             HightLightedTriangle(X-755,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 2:
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 4:
                if(HightLightedTriangle(X-755,true)){
                CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                }
                if(HightLightedTriangle(X-1205)){
                  if(Number3){
                    CheckWhiteCheckers(X-530,500)
                HightLightedTriangle(X-605)
                  }
                
                }
                if(HightLightedTriangle(X-605)){
                  if(Number4){
                   CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75) 
                  }
                }
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X-830,Y)
            HightLightedTriangle(X-905,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 2:
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 5:
                if(HightLightedTriangle(X-905,true)){
                CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905)
                }
                if(HightLightedTriangle(X-905)){
                  if(Number3){
                    CheckWhiteCheckers(X,500)
                HightLightedTriangle(X-75)
                  }
                
                }
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-680,500)
                HightLightedTriangle(X-755)
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
                CheckWhiteCheckers(X-380,Y)
                HightLightedTriangle(X-455,true)
                CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 6:
                if(HightLightedTriangle(X-1055,true)){
                CheckWhiteCheckers(X-530,500)
                HightLightedTriangle(X-605)
                }
                if(HightLightedTriangle(X-605)){
                  if(Number3){
                    CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                  }
                }
                break
            }
            break
        }
        break
      case 1315:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225,true)){
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)  
                }
                if(HightLightedTriangle(X-375,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                  }
                
                }
                if(HightLightedTriangle(X-605,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                  }
                
                }
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
                 CheckWhiteCheckers(X-530,Y)
                 HightLightedTriangle(X-605,true)
                 break
               case 2:
                if(HightLightedTriangle(X-375,true)){
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true) 
                }
                if(HightLightedTriangle(X-755,true)){
                  if(Number3){
                   CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true) 
                  }
                
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true) 
                  }
                 
                }
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
            CheckWhiteCheckers(X-530,Y)
            HightLightedTriangle(X-605,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 3:
                if(HightLightedTriangle(X-605,true)){
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true) 
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                  }
                
                }
                if(HightLightedTriangle(X-1355)){
                  if(Number4){
                   CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905) 
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
            }
            break
          case 4:
             CheckWhiteCheckers(X-680,Y)
             HightLightedTriangle(X-755,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 3:
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 4:
                if(HightLightedTriangle(X-755,true)){
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true) 
                }
                if(HightLightedTriangle(X-1355,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905)
                  }
                
                }
                if(HightLightedTriangle(X-905)){
                  if(Number4){
                   CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225) 
                  }
                
                }
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205) 
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X-830,Y)
            HightLightedTriangle(X-905,true)
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
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 5:
                if(HightLightedTriangle(X-905,true)){
                CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                }
                if(HightLightedTriangle(X-1205)){
                  if(Number3){
                    CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                  }
                
                }
                if(HightLightedTriangle(X-375)){
                  if(Number4){
                    CheckWhiteCheckers(X+450,500)
                HightLightedTriangle(X+375)
                  }
                
                }
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
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
                CheckWhiteCheckers(X-530,Y)
                HightLightedTriangle(X-605,true)
                CheckWhiteCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 6:
                if(HightLightedTriangle(X-1055,true)){
                CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905)
                }
                if(HightLightedTriangle(X-905)){
                  if(Number3){
                   CheckWhiteCheckers(X+150,500)
                HightLightedTriangle(X+75) 
                  }
                
                }
                break
            }
            break
        }
        break
      case 1465:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225,true)){
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)  
                }
                if(HightLightedTriangle(X-375,true)){
                  if(Number3){
                   CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true) 
                  }
                }
                if(HightLightedTriangle(X-525,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                  }
                }
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
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
                if(HightLightedTriangle(X-375,true)){
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true) 
                }
                if(HightLightedTriangle(X-755,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                  }
                
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true) 
                  }
                 
                }
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 3:
                if(HightLightedTriangle(X-525,true)){
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true) 
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                  }
                
                }
                if(HightLightedTriangle(X-1505,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
             CheckWhiteCheckers(X-680,Y)
             HightLightedTriangle(X-755,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
                if(HightLightedTriangle(X-755,true)){
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true) 
                }
                if(HightLightedTriangle(X-1355,true)){
                  if(Number3){
                   CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205) 
                  }
                }
                if(HightLightedTriangle(X-1205)){
                  if(Number4){
                    CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                  }
                
                }
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
            }
            break
          case 5:
            CheckWhiteCheckers(X-830,Y)
            HightLightedTriangle(X-905,true)
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
                CheckWhiteCheckers(X-680,Y)
                HightLightedTriangle(X-755,true)
                CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                break
               case 5:
                if(HightLightedTriangle(X-905,true)){
                CheckWhiteCheckers(X-1430,500)
                HightLightedTriangle(X-1505) 
                }
                if(HightLightedTriangle(X-1655,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-680,500)
                HightLightedTriangle(X-755)
                  }
                }
                if(HightLightedTriangle(X-755)){
                  if(Number4){
                   CheckWhiteCheckers(X+150,500)
                   HightLightedTriangle(X+75) 
                  }
                }
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
                if(HightLightedTriangle(X-1055,true)){
                CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205)  
                }
                if(HightLightedTriangle(X-1205)){
                  if(Number3){
                    CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225)
                  }
                }
                break
            }
            break
        }
        break
      case 1615:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225,true)){
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true) 
                }
                if(HightLightedTriangle(X-375,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                  }
                
                }
                if(HightLightedTriangle(X-525,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                  }
                
                }
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
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
                if(HightLightedTriangle(X-375,true)){
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true) 
                }
                if(HightLightedTriangle(X-675,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                  }
                
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                  }
                
                }
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                break
               case 3:
                if(HightLightedTriangle(X-525,true)){
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true) 
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-1430,Y)
                    HightLightedTriangle(X-1505,true)
                  }
                
                }
                if(HightLightedTriangle(X-1505,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                  }
                
                }
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                CheckWhiteCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true)
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
                if(HightLightedTriangle(X-675,true)){
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true) 
                }
                if(HightLightedTriangle(X-1355,true)){
                  if(Number3){
                   CheckWhiteCheckers(X-1430,500)
                HightLightedTriangle(X-1505) 
                  }
                
                }
                if(HightLightedTriangle(X-1505)){
                  if(Number4){
                   CheckWhiteCheckers(X-830,500)
                HightLightedTriangle(X-905) 
                  }
                
                }
                break
               case 5:
                CheckWhiteCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
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
            CheckWhiteCheckers(X-830,Y)
            HightLightedTriangle(X-905,true)
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
                if(HightLightedTriangle(X-825,true)){
                CheckWhiteCheckers(X-1580,Y)
                HightLightedTriangle(X-1655,true)
                }
                if(HightLightedTriangle(X-1655,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                  }
                
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number4){
                   CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-225) 
                  }
                
                }
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                CheckWhiteCheckers(X-1730,500)
                HightLightedTriangle(X-1805)
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
                if(HightLightedTriangle(X-1055,true)){
                CheckWhiteCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                }
                if(HightLightedTriangle(X-1505)){
                  if(Number3){
                   CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525) 
                  }
                
                }
                break
            }
            break
        }
        break
      case 1765:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,Y)
                HightLightedTriangle(X-225,true)
                break
               case 2:
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                break
               case 3:
                CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)
                break
               case 4:
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                break
               case 5:
                CheckWhiteCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                break
               case 6:
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-150,Y)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225,true)){
                CheckWhiteCheckers(X-300,Y)
                HightLightedTriangle(X-375,true)
                }
                if(HightLightedTriangle(X-375,true)){
                  if(Number3){
                   CheckWhiteCheckers(X-450,Y)
                HightLightedTriangle(X-525,true)  
                  }
                
                }
                if(HightLightedTriangle(X-525,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true) 
                  }
                
                }
                
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
                if(HightLightedTriangle(X-375,true)){
                CheckWhiteCheckers(X-600,Y)
                HightLightedTriangle(X-675,true)
                }
                if(HightLightedTriangle(X-675,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                  }
                
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                  }
                
                }
                
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
                if(HightLightedTriangle(X-525,true)){
                CheckWhiteCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true) 
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number3){
                   CheckWhiteCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)  
                  }
                
                }
                if(HightLightedTriangle(X-1505,true)){
                  if(Number4){
                    CheckWhiteCheckers(X-1730,500)
                HightLightedTriangle(X-1805) 
                  }
                
                }
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
                if(HightLightedTriangle(X-675,true)){
                CheckWhiteCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                }
                if(HightLightedTriangle(X-1355,true)){
                  if(Number3){
                    CheckWhiteCheckers(X-1730,500)
                HightLightedTriangle(X-1805) 
                  }
                                  
                }
                if(HightLightedTriangle(X-1805)){
                  if(Number4){
                    CheckWhiteCheckers(X-1130,500)
                HightLightedTriangle(X-1205) 
                  }
                
                }
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
                if(HightLightedTriangle(X-825,true)){
                CheckWhiteCheckers(X-1580,Y)
                HightLightedTriangle(X-1655,true)
                }
                if(HightLightedTriangle(X-1655,true)){
                  if(Number3){
                   CheckWhiteCheckers(X-1280,500)
                HightLightedTriangle(X-1355) 
                  }
                
                }
                if(HightLightedTriangle(X-1355)){
                  if(Number4){
                    CheckWhiteCheckers(X-450,500)
                HightLightedTriangle(X-525)
                  }
                
                }
                
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
                if(HightLightedTriangle(X-1055,true)){
                CheckWhiteCheckers(X-1730,500)
                HightLightedTriangle(X-1805)
                }
                if(HightLightedTriangle(X-1805)){
                  if(Number3){
                    CheckWhiteCheckers(X-750,500)
                HightLightedTriangle(X-825)
                  }
                
                }
                break
            }
            break
        }
        break
      }
      }
      Checkers(X,Y)
    }
    if(WhoIsTurn === 'White'){
      if(Y<600){
      switch(X-75){
      case 35:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 2:
                 CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
               case 3:
                 CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 4:
                 CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
               case 5:
                 CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)
                break
               case 6:
                 CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X,610)
            HightLightedTriangle(X-75,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-75,true)){
                 CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                }
                if(HightLightedTriangle(X+75,true)){
                  if(Number3){
                   CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)  
                  }
                 
                }
                if(HightLightedTriangle(X+225,true)){
                  if(Number4){
                    CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                  }
                 
                }
                break
               case 2:
                 CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                 CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true) 
                break
               case 3:
                 CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true) 
                 CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
               case 4:
                 CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                 CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true) 
                break
               case 5:
                 CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)  
                 CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                break
               case 6:
                 CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                 CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)  
                break
            }
            break
          case 2:
            CheckBlackCheckers(X+150,610)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                  CheckBlackCheckers(X,610)
                 HightLightedTriangle(X-75,true)
                 CheckBlackCheckers(X+300,610)
                 HightLightedTriangle(X+225,true)
                 break
               case 2:
                if(HightLightedTriangle(X+75,true)){
                 CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                }
                if(HightLightedTriangle(X+375,true)){
                  if(Number3){
                    CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                  }
                 
                }
                if(HightLightedTriangle(X+675,true)){
                  if(Number4){
                    CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                  }
                 
                }
                break
               case 3:
                 CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                 CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)
                break
               case 4:
                 CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                 CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                break
               case 5:
                 CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)
                 CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                break
               case 6:
                 CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                 CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                break
            }
            break
          case 3:
             CheckBlackCheckers(X+300,610)
            HightLightedTriangle(X+225,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X,500,610)
                HightLightedTriangle(X-75,true)
                 CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
               case 2:
                 CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                if(HightLightedTriangle(X+225,true)){
                   CheckBlackCheckers(X+750,610)
                  HightLightedTriangle(X+675,true)
                }
                if(HightLightedTriangle(X+375,true)){
                  if(Number3){
                    CheckBlackCheckers(X+1280,610)
                HightLightedTriangle(X+1205,true)
                  }
                
                }
                if(HightLightedTriangle(X+1205,true)){
                  if(Number4){
                    CheckBlackCheckers(X+1730,610)
                HightLightedTriangle(X+1655,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                break
               case 5:
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                break
               case 6:
                CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                CheckBlackCheckers(X+1280,610)
                HightLightedTriangle(X+1205,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+450,610)
             HightLightedTriangle(X+375,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)
                break
               case 2:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                break
               case 3:
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                break
               case 4:
                if(HightLightedTriangle(X+375,true)){
                CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                }
                if(HightLightedTriangle(X+1055,true)){
                  if(Number3){
                    CheckBlackCheckers(X+1730,610)
                HightLightedTriangle(X+1655,true)
                  }
                
                }
                break
               case 5:
                CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+1280,610)
                HightLightedTriangle(X+1205,true)
                break
               case 6:
                CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                CheckBlackCheckers(X+1430,610)
                HightLightedTriangle(X+1355,true)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X+600,610)
            HightLightedTriangle(X+525,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                break
               case 2:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                break
               case 3:
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                break
               case 4:
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1280,610)
                HightLightedTriangle(X+1205,true)
                break
               case 5:
                if(HightLightedTriangle(X+525,true)){
                CheckBlackCheckers(X+1430,610)
                HightLightedTriangle(X+1355,true)
                }
                break
               case 6:
                CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                CheckBlackCheckers(X+1580,610)
                HightLightedTriangle(X+1505,true)
                break
            }
            break
          case 6:
           CheckBlackCheckers(X+750,610)
           HightLightedTriangle(X+675,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X,500,610)
                HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                break
               case 2:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                break
               case 3:
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1280,610)
                HightLightedTriangle(X+1205,true)
                break
               case 4:
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1430,610)
                HightLightedTriangle(X+1355,true)
                break
               case 5:
                 CheckBlackCheckers(X+600,610)
                 HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+1580,610)
                HightLightedTriangle(X+1505,true)
                break
               case 6:
                if(HightLightedTriangle(X+675)){
                CheckBlackCheckers(X+1730,610)
                HightLightedTriangle(X+1655,true)
                }
                break
            }
            break
        }
        break
      case 185:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-255)
                break
               case 2:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-255,true)
                break
               case 3:
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 4:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
               case 5:
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 6:
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
            }
            break
          case 1:
            CheckWhiteCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225)){
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                }
                if(HightLightedTriangle(X-225,true)){
                  if(Number3){
                    CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true) 
                  }
                
                }
                if(HightLightedTriangle(X-75,true)){
                  if(Number4){
                    CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 3:
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
               case 4:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true) 
                break
               case 5:
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true) 
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
               case 6:
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)  
                break
            }
            break
          case 2:
            CheckBlackCheckers(X-150,610)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X-150,500)
                 HightLightedTriangle(X-225)
                 CheckBlackCheckers(X,610)
                 HightLightedTriangle(X-75,true)
                 break
               case 2:
                if(HightLightedTriangle(X-225,true)){
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                }
                if(HightLightedTriangle(X+75,true)){
                  if(Number3){
CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                  }
                
                }
                if(HightLightedTriangle(X+375,true)){
                  if(Number4){
                    CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 4:
               CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
               case 5:
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)
                break
               case 6:
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
               CheckBlackCheckers(X+830,610)
                HightLightedTriangle(X+755,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X,610)
            HightLightedTriangle(X-75,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
               case 3:
                if(HightLightedTriangle(X-75,true)){
                  CheckBlackCheckers(X+450,610)
                  HightLightedTriangle(X+375,true)
                }
                if(HightLightedTriangle(X+375,true)){
                  if(Number3){
                    CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                  }
                
                }
                if(HightLightedTriangle(X+905,true)){
                  if(Number4){
                    CheckBlackCheckers(X+1430,610)
                HightLightedTriangle(X+1355,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)
                break
               case 5:
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+830,610)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+150,610)
             HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 2:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+450,500)
                HightLightedTriangle(X+375)
                break
               case 3:
                CheckBlackCheckers(X,500,610)
                HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)
                break
               case 4:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+830,610)
                HightLightedTriangle(X+755,true)
                }
                if(HightLightedTriangle(X+755,true)){
                  if(Number3){
                    CheckBlackCheckers(X+1430,610)
                HightLightedTriangle(X+1355,true)
                  }
                }
                break
               case 5:
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                break
               case 6:
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X+300,610)
            HightLightedTriangle(X+225,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
               case 2:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)
                break
               case 3:
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+830,610)
                HightLightedTriangle(X+755,true)
                break
               case 4:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                break
               case 5:
                if(HightLightedTriangle(X+225,true)){
                CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                }
                break
               case 6:
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1280,610)
                HightLightedTriangle(X+1205,true)
                break
            }
            break
          case 6:
           CheckBlackCheckers(X+450,610)
           HightLightedTriangle(X+375,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X+600,610)
                HightLightedTriangle(X+525,true)
                break
               case 2:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+830,610)
                HightLightedTriangle(X+755,true)
                break
               case 3:
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                break
               case 4:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                break
               case 5:
                 CheckBlackCheckers(X+300,610)
                 HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1280,610)
                HightLightedTriangle(X+1205,true)
                break
               case 6:
                if(HightLightedTriangle(X+375,true)){
                CheckBlackCheckers(X+1430,610)
                HightLightedTriangle(X+1355,true)
                }
                break
            }
            break
        }
        break
      case 335:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckers(X-150,500)
                HightLightedTriangle(X-255)
                break
               case 2:
                CheckWhiteCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 3:
                CheckWhiteCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 4:
                CheckWhiteCheckers(X-150,610)
                HightLightedTriangle(X-255,true)
                break
               case 5:
                CheckWhiteCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 6:
                CheckWhiteCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225)){
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)  
                }
                if(HightLightedTriangle(X-375)){
                  if(Number3){
                    CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                  }
                 
                }
                if(HightLightedTriangle(X-375,true)){
                  if(Number4){
                    CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)  
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 3:
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true) 
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
               case 4:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true) 
                break
               case 5:
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true) 
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
               case 6:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)  
                break
            }
            break
          case 2:
            CheckBlackCheckers(X-300,500)
            HightLightedTriangle(X-375)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X-150,500)
                 HightLightedTriangle(X-225)
                 CheckBlackCheckers(X-300,610)
                 HightLightedTriangle(X-375,true)
                 break
               case 2:
                if(HightLightedTriangle(X-375)){
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                }
                if(HightLightedTriangle(X-225,true)){
                  if(Number3){
                    CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                  }
                
                }
                if(HightLightedTriangle(X+75,true)){
                  if(Number4){
                    CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75)
                break
               case 4:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 5:
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
               case 6:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+680,610)
                HightLightedTriangle(X+605,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X-300,610)
            HightLightedTriangle(X-375,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X,500,610)
                HightLightedTriangle(X-75,true)
                break
               case 3:
                if(HightLightedTriangle(X-375,true)){
                  CheckBlackCheckers(X+150,610)
                  HightLightedTriangle(X+75,true)
                }
                if(HightLightedTriangle(X+75,true)){
                  if(Number3){
                    CheckBlackCheckers(X+680,610)
                HightLightedTriangle(X+605,true)
                  }
                
                }
                if(HightLightedTriangle(X+605,true)){
                  if(Number4){
                    CheckBlackCheckers(X+1280,610)
                HightLightedTriangle(X+1205,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+375,true)
                break
               case 5:
                CheckBlackCheckers(X,500,610)
                HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
               case 6:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+680,610)
                HightLightedTriangle(X+605,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X-150,610)
             HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X,500,610)
                HightLightedTriangle(X-75,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
               case 3:
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 4:
                if(HightLightedTriangle(X-225,true)){
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                }
                if(HightLightedTriangle(X+375,true)){
                  if(Number3){
                   CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true) 
                  }
                
                }
                break
               case 5:
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+680,610)
                HightLightedTriangle(X+605,true)
                break
               case 6:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+830,610)
                HightLightedTriangle(X+755,true)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X,610)
            HightLightedTriangle(X-75,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
               case 4:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+680,610)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                if(HightLightedTriangle(X-75,true)){
                CheckBlackCheckers(X+830,610)
                HightLightedTriangle(X+755,true)
                }
                break
               case 6:
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 6:
           CheckBlackCheckers(X+150,610)
           HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                break
               case 3:
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                CheckBlackCheckers(X+680,610)
                HightLightedTriangle(X+605,true)
                break
               case 4:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+830,610)
                HightLightedTriangle(X+755,true)
                break
               case 5:
                 CheckBlackCheckers(X,610)
                 HightLightedTriangle(X-75,true)
                CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                break
               case 6:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                }
                break
            }
            break
        }
        break
      case 485:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-255)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 4:
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
               case 5:
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 6:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-255,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225)){
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)  
                }
                if(HightLightedTriangle(X-375)){
                  if(Number3){
                    CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                  }
                
                }
                if(HightLightedTriangle(X-525)){
                  if(Number4){
                    CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)  
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
               case 4:
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true) 
                break
               case 5:
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true) 
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
               case 6:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)  
                break
            }
            break
          case 2:
            CheckBlackCheckers(X-300,500)
            HightLightedTriangle(X-375)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X-150,500)
                 HightLightedTriangle(X-225)
                 CheckBlackCheckers(X-450,500)
                 HightLightedTriangle(X-525)
                 break
               case 2:
                if(HightLightedTriangle(X-375)){
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                }
                if(HightLightedTriangle(X-525,true)){
                  if(Number3){
                    CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                  }
                
                }
                if(HightLightedTriangle(X-225,true)){
                  if(Number4){
                   CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true) 
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 4:
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
               case 5:
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 6:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X-450,500)
            HightLightedTriangle(X-525)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 3:
                if(HightLightedTriangle(X-525)){
                  CheckBlackCheckers(X-150,610)
                  HightLightedTriangle(X-225,true)
                }
                if(HightLightedTriangle(X-225,true)){
                  if(Number3){
                    CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                  }
                
                }
                if(HightLightedTriangle(X+225,true)){
                  if(Number4){
                    CheckBlackCheckers(X+830,610)
                HightLightedTriangle(X+755,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 5:
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
               case 6:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X-450,610)
             HightLightedTriangle(X-525,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 4:
                if(HightLightedTriangle(X-525,true)){
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                }
                if(HightLightedTriangle(X+75,true)){
                  if(Number3){
                   CheckBlackCheckers(X+530,610)
                HightLightedTriangle(X+455,true) 
                  }
                
                }
                if(HightLightedTriangle(X+455,true)){
                  if(Number4){
                    CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                  }
                
                }
                break
               case 5:
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 6:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+530,610)
                HightLightedTriangle(X+455,true)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X-300,610)
            HightLightedTriangle(X-375,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
               case 4:
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 5:
                if(HightLightedTriangle(X-375,true)){
                CheckBlackCheckers(X+530,610)
                HightLightedTriangle(X+455,true)
                }
                if(HightLightedTriangle(X+455,true)){
                  if(Number4){
                   CheckBlackCheckers(X+1280,610)
                HightLightedTriangle(X+1205,true) 
                  }
                
                }
                break
               case 6:
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                CheckBlackCheckers(X+680,610)
                HightLightedTriangle(X+605,true)
                break
            }
            break
          case 6:
            CheckBlackCheckers(X-150,610)
            HightLightedTriangle(X-225,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X,500,610)
                HightLightedTriangle(X-75,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                break
               case 4:
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                CheckBlackCheckers(X+530,610)
                HightLightedTriangle(X+455,true)
                break
               case 5:
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                CheckBlackCheckers(X+680,610)
                HightLightedTriangle(X+605,true)
                break
               case 6:
                if(HightLightedTriangle(X-225,true)){
                CheckBlackCheckers(X+830,610)
                HightLightedTriangle(X+755,true)
                }
                break
            }
            break
        }
        break
      case 635:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-255)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 5:
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                break
               case 6:
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225)){
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)  
                }
                if(HightLightedTriangle(X-375)){
                  if(Number3){
                    CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                  }
                
                }
                if(HightLightedTriangle(X-525)){
                  if(Number4){
                    CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)  
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                break
               case 5:
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
               case 6:
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)  
                break
            }
            break
          case 2:
            CheckBlackCheckers(X-300,500)
            HightLightedTriangle(X-375)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X-150,500)
                 HightLightedTriangle(X-225)
                 CheckBlackCheckers(X-450,500)
                 HightLightedTriangle(X-525)
                 break
               case 2:
                if(HightLightedTriangle(X-375)){
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675) 
                }
                if(HightLightedTriangle(X-675)){
                  if(Number3){
                   CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true) 
                  }
                
                }
                if(HightLightedTriangle(X-525,true)){
                  if(Number4){
                    CheckBlackCheckers(X-150,610)
                 HightLightedTriangle(X-225,true)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true) 
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675) 
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
               case 5:
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true) 
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 6:
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X-450,500)
            HightLightedTriangle(X-525)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                break
               case 3:
                if(HightLightedTriangle(X-525)){
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                }
                if(HightLightedTriangle(X-525,true)){
                  if(Number3){
                    CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                  }
                
                }
                if(HightLightedTriangle(X-75,true)){
                  if(Number4){
                   CheckBlackCheckers(X+530,610)
                HightLightedTriangle(X+455,true) 
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 5:
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
               case 6:
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X-600,500)
             HightLightedTriangle(X-675)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 4:
                if(HightLightedTriangle(X-675)){
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                }
                if(HightLightedTriangle(X-225,true)){
                  if(Number3){
                    CheckBlackCheckers(X+530,610)
                HightLightedTriangle(X+455,true)
                  }
                
                }
                if(HightLightedTriangle(X+455,true)){
                  if(Number4){
                    CheckBlackCheckers(X+1130,610)
                HightLightedTriangle(X+1055,true)
                  }
                
                }
                break
               case 5:
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 6:
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X-600,610)
            HightLightedTriangle(X-675,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 5:
                if(HightLightedTriangle(X-675,true)){
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                }
                if(HightLightedTriangle(X+225,true)){
                  if(Number3){
                    CheckBlackCheckers(X+980,610)
                HightLightedTriangle(X+905,true)
                  }
                
                }
                break
               case 6:
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                CheckBlackCheckers(X+380,610)
                HightLightedTriangle(X+305,true)
                break
            }
            break
          case 6:
            CheckBlackCheckers(X-450,610)
            HightLightedTriangle(X-525,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                break
               case 5:
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                CheckBlackCheckers(X+530,610)
                HightLightedTriangle(X+455,true)
                break
               case 6:
                if(HightLightedTriangle(X-525,true)){
                CheckBlackCheckers(X+680,610)
                HightLightedTriangle(X+605,true)
                }
                break
            }
            break
        }
        break
      case 785:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-255)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 3:
               CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 6:
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225)){
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)  
                }
                if(HightLightedTriangle(X-375)){
                  if(Number3){
                    CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                  }
                
                }
                if(HightLightedTriangle(X-525)){
                  if(Number4){
                    CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)  
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
               CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                break
               case 6:
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                break
            }
            break
          case 2:
            CheckBlackCheckers(X-300,500)
            HightLightedTriangle(X-375)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X-150,500)
                 HightLightedTriangle(X-225)
                 CheckBlackCheckers(X-450,500)
                 HightLightedTriangle(X-525)
                 break
               case 2:
                if(HightLightedTriangle(X-375)){
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675) 
                }
                if(HightLightedTriangle(X-675)){
                  if(Number3){
                    CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                  }
                
                }
                if(HightLightedTriangle(X-825,true)){
                  if(Number4){
                    CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675) 
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                break
               case 6:
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X-450,500)
            HightLightedTriangle(X-525)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 3:
                if(HightLightedTriangle(X-525)){
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                }
                if(HightLightedTriangle(X-825,true)){
                  if(Number3){
                    CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                  }
                
                }
                if(HightLightedTriangle(X-375,true)){
                  if(Number4){
                    CheckBlackCheckers(X+230,610)
                HightLightedTriangle(X+305,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
               case 6:
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X-600,500)
             HightLightedTriangle(X-675)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                break
               case 4:
                if(HightLightedTriangle(X-675)){
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                }
                if(HightLightedTriangle(X-525,true)){
                  if(Number3){
                   CheckBlackCheckers(X+230,610)
                HightLightedTriangle(X+305,true) 
                  }
                
                }
                if(HightLightedTriangle(X+305,true)){
                  if(Number4){
                    CheckBlackCheckers(X+830,610)
                HightLightedTriangle(X+905,true)
                  }
                
                }
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 6:
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X-750,500)
            HightLightedTriangle(X-825)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 5:
                if(HightLightedTriangle(X-825)){
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                }
                if(HightLightedTriangle(X-225,true)){
                  if(Number3){
                   CheckBlackCheckers(X+680,610)
                HightLightedTriangle(X+755,true) 
                  }
                }
                break
               case 6:
                CheckBlackCheckers(X-750,610)
                HightLightedTriangle(X-825,true)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
            }
            break
          case 6:
            CheckBlackCheckers(X-750,610)
            HightLightedTriangle(X-825,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-600,610)
                HightLightedTriangle(X-675,true)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                break
               case 6:
                if(HightLightedTriangle(X-825,true)){
                CheckBlackCheckers(X+230,610)
                HightLightedTriangle(X+305,true)
                }
                break
            }
            break
        }
        break
      case 1015:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-230,500)
                HightLightedTriangle(X-305)
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X-230,500)
            HightLightedTriangle(X-305)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-305)){
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)  
                }
                if(HightLightedTriangle(X-455)){
                  if(Number3){
                    CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                  }
                
                }
                if(HightLightedTriangle(X-605)){
                  if(Number4){
                    CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
            }
            break
          case 2:
            CheckBlackCheckers(X-380,500)
            HightLightedTriangle(X-455)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X-230,500)
                 HightLightedTriangle(X-305)
                 CheckBlackCheckers(X-530,500)
                 HightLightedTriangle(X-605)
                 break
               case 2:
                if(HightLightedTriangle(X-455)){
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755) 
                }
                if(HightLightedTriangle(X-755)){
                     if(Number3){
                      CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                     }
                
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number4){
                    CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X-530,500)
            HightLightedTriangle(X-605)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-230,500)
                HightLightedTriangle(X-305)
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 3:
                if(HightLightedTriangle(X-605)){
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055) 
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number3){
                   CheckBlackCheckers(X-680,610)
                HightLightedTriangle(X-755,true) 
                  }
                
                }
                if(HightLightedTriangle(X-755,true)){
                  if(Number4){
                    CheckBlackCheckers(X-230,610)
                HightLightedTriangle(X-305,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-680,610)
                HightLightedTriangle(X-755,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X-680,500)
             HightLightedTriangle(X-755)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-230,500)
                HightLightedTriangle(X-305)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
               case 4:
                if(HightLightedTriangle(X-755)){
                CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true)
                }
                if(HightLightedTriangle(X-905,true)){
                  if(Number3){
                    CheckBlackCheckers(X-230,610)
                HightLightedTriangle(X-305,true)
                  }
                
                }
                if(HightLightedTriangle(X-305,true)){
                  if(Number4){
                    CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                  }
                
                }
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-680,610)
                HightLightedTriangle(X-755,true)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-530,610)
                HightLightedTriangle(X-605,true)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X-830,500)
            HightLightedTriangle(X-905)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-230,500)
                HightLightedTriangle(X-305)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-680,610)
                HightLightedTriangle(X-755,true)
                break
               case 5:
                if(HightLightedTriangle(X-905)){
                CheckBlackCheckers(X-530,610)
                HightLightedTriangle(X-605,true)
                }
                if(HightLightedTriangle(X-605,true)){
                  if(Number3){
                    CheckBlackCheckers(X+300,610)
                HightLightedTriangle(X+225,true)
                  }
                
                }
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-380,610)
                HightLightedTriangle(X-455,true)
                break
            }
            break
          case 6:
            CheckBlackCheckers(X-980,500)
            HightLightedTriangle(X-1055)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-230,500)
                HightLightedTriangle(X-305)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)
                CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-680,610)
                HightLightedTriangle(X-755,true)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-530,610)
                HightLightedTriangle(X-605,true)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-380,610)
                HightLightedTriangle(X-455,true)
                break
               case 6:
                if(HightLightedTriangle(X-1055)){
                CheckBlackCheckers(X-230,610)
                HightLightedTriangle(X-305,true)
                }
                if(HightLightedTriangle(X-305,true))
                  if(Number3){
                    CheckBlackCheckers(X+750,610)
                HightLightedTriangle(X+675,true)
                  }
                break
            }
            break
        }
        break
      case 1165:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225)){
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)  
                }
                if(HightLightedTriangle(X-455)){
                  if(Number3){
                    CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                  }
                
                }
                if(HightLightedTriangle(X-605)){
                  if(Number4){
                   CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755) 
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
               CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
            }
            break
          case 2:
            CheckBlackCheckers(X-380,500)
            HightLightedTriangle(X-455)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X-150,500)
                 HightLightedTriangle(X-225)
                 CheckBlackCheckers(X-530,500)
                 HightLightedTriangle(X-605)
                 break
               case 2:
                if(HightLightedTriangle(X-455)){
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755) 
                }
                if(HightLightedTriangle(X-755)){
                  if(Number3){
                   CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055) 
                  }
                
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number4){
                   CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true) 
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X-530,500)
            HightLightedTriangle(X-605)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 3:
                if(HightLightedTriangle(X-605)){
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055) 
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number3){
                   CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true) 
                  }
                
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number4){
                    CheckBlackCheckers(X-530,610)
                HightLightedTriangle(X-605,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X-680,500)
             HightLightedTriangle(X-755)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 4:
                if(HightLightedTriangle(X-755)){
                CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true)
                }
                if(HightLightedTriangle(X-1205,true)){
                  if(Number3){
                    CheckBlackCheckers(X-530,610)
                HightLightedTriangle(X-605,true)
                  }
                
                }
                if(HightLightedTriangle(X-605,true)){
                  if(Number4){
                   CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true) 
                  }
                
                }
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X-830,500)
            HightLightedTriangle(X-905)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
               case 5:
                if(HightLightedTriangle(X-905)){
                CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true)
                }
                if(HightLightedTriangle(X-905,true)){
                  if(Number3){
                  CheckBlackCheckers(X,610)
                HightLightedTriangle(X-75,true)
                  }
                
                }
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-680,610)
                HightLightedTriangle(X-755,true)
                break
            }
            break
          case 6:
            CheckBlackCheckers(X-980,500)
            HightLightedTriangle(X-1055)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 2:
                CheckBlackCheckers(X-380,500)
                HightLightedTriangle(X-455)
                CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-680,610)
                HightLightedTriangle(X-755,true)
                break
               case 6:
                if(HightLightedTriangle(X-1055)){
                CheckBlackCheckers(X-530,610)
                HightLightedTriangle(X-605,true)
                }
                if(HightLightedTriangle(X-605,true)){
                  if(Number3){
                  CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)  
                  }
                
                }
                break
            }
            break
        }
        break
      case 1315:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225)){
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)  
                }
                if(HightLightedTriangle(X-375)){
                  if(Number3){
                    CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                  }
                
                }
                if(HightLightedTriangle(X-605)){
                  if(Number4){
                     CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                  }
               
                }
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
            }
            break
          case 2:
            CheckBlackCheckers(X-300,500)
            HightLightedTriangle(X-375)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X-150,500)
                 HightLightedTriangle(X-225)
                 CheckBlackCheckers(X-530,500)
                 HightLightedTriangle(X-605)
                 break
               case 2:
                if(HightLightedTriangle(X-375)){
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755) 
                }
                if(HightLightedTriangle(X-755)){
                  if(Number3){
                   CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055) 
                  }
                
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number4){
                    CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                  }
                  
                }
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X-530,500)
            HightLightedTriangle(X-605)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 3:
                if(HightLightedTriangle(X-605)){
                CheckBlackCheckers(X-980)
                HightLightedTriangle(X-1055) 
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number3){
                   CheckBlackCheckers(X-1280,610)
                HightLightedTriangle(X-1355,true) 
                  }
                
                }
                if(HightLightedTriangle(X-1355,true)){
                  if(Number4){
                   CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true) 
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1280,610)
                HightLightedTriangle(X-1355,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X-680,500)
             HightLightedTriangle(X-755)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 4:
                if(HightLightedTriangle(X-755)){
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355) 
                }
                if(HightLightedTriangle(X-1355)){
                  if(Number3){
                   CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true) 
                  }
                
                }
                if(HightLightedTriangle(X-905,true)){
                  if(Number4){
                  CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)  
                  }
                
                }
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1280,610)
                HightLightedTriangle(X-1355,true)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true) 
                break
            }
            break
          case 5:
            CheckBlackCheckers(X-830,500)
            HightLightedTriangle(X-905)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-1280,610)
                HightLightedTriangle(X-1355,true)
                break
               case 5:
                if(HightLightedTriangle(X-905)){
                CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true)
                }
                if(HightLightedTriangle(X-1205,true)){
                  if(Number3){
                   CheckBlackCheckers(X-300,610)
                HightLightedTriangle(X-375,true) 
                  }
                
                }
                if(HightLightedTriangle(X-375,true)){
                  if(Number4){
                    CheckBlackCheckers(X+450,610)
                HightLightedTriangle(X+375,true)
                  }
                
                }
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
            }
            break
          case 6:
            CheckBlackCheckers(X-980,500)
            HightLightedTriangle(X-1055)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 3:
                CheckBlackCheckers(X-530,500)
                HightLightedTriangle(X-605)
                CheckBlackCheckers(X-1280,610)
                HightLightedTriangle(X-1355,true)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-980,610)
                HightLightedTriangle(X-1055,true)
                break
               case 6:
                if(HightLightedTriangle(X-1055)){
                CheckBlackCheckers(X-830,610)
                HightLightedTriangle(X-905,true)
                }
                if(HightLightedTriangle(X-905,true)){
                  if(Number3){
                    CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true)
                  }
                
                }
                break
            }
            break
        }
        break
      case 1465:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225)){
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)  
                }
                if(HightLightedTriangle(X-375)){
                  if(Number3){
                    CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                  }
                
                }
                if(HightLightedTriangle(X-525)){
                  if(Number4){
                    CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
            }
            break
          case 2:
            CheckBlackCheckers(X-300,500)
            HightLightedTriangle(X-375)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X-150,500)
                 HightLightedTriangle(X-225)
                 CheckBlackCheckers(X-450,500)
                 HightLightedTriangle(X-525)
                 break
               case 2:
                if(HightLightedTriangle(X-375)){
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755) 
                }
                if(HightLightedTriangle(X-755)){
                  if(Number3){
                    CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                  }
                
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number4){
                    CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                  }
                  
                }
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X-450,500)
            HightLightedTriangle(X-525)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 3:
                if(HightLightedTriangle(X-525)){
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055) 
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number3){
                    CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                  }
                
                }
                if(HightLightedTriangle(X-1505)){
                  if(Number4){
                    CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X-680,500)
             HightLightedTriangle(X-755)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 4:
                if(HightLightedTriangle(X-755)){
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355) 
                }
                if(HightLightedTriangle(X-1355)){
                  if(Number3){
                    CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true) 
                  }
                
                }
                if(HightLightedTriangle(X-1205,true)){
                  if(Number4){
                    CheckBlackCheckers(X-450,610)
                HightLightedTriangle(X-525,true)
                  }
                
                }
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1430,610)
                HightLightedTriangle(X-1505,true)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X-830,500)
            HightLightedTriangle(X-905)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
               case 5:
                if(HightLightedTriangle(X-905)){
                CheckBlackCheckers(X-1430,610)
                HightLightedTriangle(X-1505,true) 
                }
                if(HightLightedTriangle(X-1505,true)){
                  if(Number3){
                    CheckBlackCheckers(X-680,610)
                HightLightedTriangle(X-755,true)
                  }
                
                }
                if(HightLightedTriangle(X-755,true)){
                  if(Number4){
                   CheckBlackCheckers(X+150,610)
                HightLightedTriangle(X+75,true) 
                  }
                }
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1730,610)
                HightLightedTriangle(X-1805,true)
                break
            }
            break
          case 6:
            CheckBlackCheckers(X-980,500)
            HightLightedTriangle(X-1055)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
               case 4:
                CheckBlackCheckers(X-680,500)
                HightLightedTriangle(X-755)
                CheckBlackCheckers(X-1430,610)
                HightLightedTriangle(X-1505,true)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1280,610)
                HightLightedTriangle(X-1355,true)
                break
               case 6:
                if(HightLightedTriangle(X-1055)){
                CheckBlackCheckers(X-1130,610)
                HightLightedTriangle(X-1205,true)  
                }
                if(HightLightedTriangle(X-1205,true)){
                  if(Number3){
                    CheckBlackCheckers(X-150,610)
                HightLightedTriangle(X-225,true)
                  }
                }
                break
            }
            break
        }
        break
      case 1615:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225)){
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375) 
                }
                if(HightLightedTriangle(X-375)){
                  if(Number3){
                   CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525) 
                  }
                
                }
                if(HightLightedTriangle(X-525)){
                  if(Number4){
                    CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
            }
            break
          case 2:
            CheckBlackCheckers(X-300,500)
            HightLightedTriangle(X-375)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X-150,500)
                 HightLightedTriangle(X-225)
                 CheckBlackCheckers(X-450,500)
                 HightLightedTriangle(X-525)
                 break
               case 2:
                if(HightLightedTriangle(X-375)){
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675) 
                }
                if(HightLightedTriangle(X-675)){
                  if(Number3){
                       CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                  }
             
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number4){
                    CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X-450,500)
            HightLightedTriangle(X-525)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 3:
                if(HightLightedTriangle(X-525)){
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055) 
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number3){
                    CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                  }
                
                }
                if(HightLightedTriangle(X-1505)){
                  if(Number4){
                    CheckBlackCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X-600,500)
             HightLightedTriangle(X-675)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 4:
                if(HightLightedTriangle(X-675)){
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355) 
                }
                if(HightLightedTriangle(X-1355)){
                  if(Number3){
                    CheckBlackCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                  }
                
                }
                if(HightLightedTriangle(X-1505,true)){
                  if(Number4){
                    CheckBlackCheckers(X-830,Y)
                HightLightedTriangle(X-905,true)
                  }
                
                }
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1580,500)
                HightLightedTriangle(X-1655)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X-830,500)
            HightLightedTriangle(X-905)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
               case 5:
                if(HightLightedTriangle(X-825)){
                CheckBlackCheckers(X-1580,500)
                HightLightedTriangle(X-1655)
                }
                if(HightLightedTriangle(X-1655)){
                  if(Number3){
                    CheckBlackCheckers(X-980,Y)
                HightLightedTriangle(X-1055,true)
                  }
                
                }
                if(HightLightedTriangle(X-1055,true)){
                  if(Number4){
                   CheckBlackCheckers(X-150,Y)
                HightLightedTriangle(X-225,true) 
                  }
                
                }
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1730,Y)
                HightLightedTriangle(X-1805,true)
                break
            }
            break
          case 6:
            CheckBlackCheckers(X-980,500)
            HightLightedTriangle(X-1055)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-1580,500)
                HightLightedTriangle(X-1655)
                break
               case 5:
                CheckBlackCheckers(X-830,500)
                HightLightedTriangle(X-905)
                CheckBlackCheckers(X-1580,Y)
                HightLightedTriangle(X-1655,true)
                break
               case 6:
                if(HightLightedTriangle(X-1055)){
                CheckBlackCheckers(X-1430,Y)
                HightLightedTriangle(X-1505,true)
                }
                if(HightLightedTriangle(X-1505,true)){
                  if(Number3){
                   CheckBlackCheckers(X-450,Y)
                HightLightedTriangle(X-525,true) 
                  }
                
                }
                break
            }
            break
        }
        break
      case 1765:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X-150,500)
            HightLightedTriangle(X-225)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X-225)){
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                }
                if(HightLightedTriangle(X-375)){
                  if(Number3){
                   CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)  
                  }
                
                }
                if(HightLightedTriangle(X-525)){
                  if(Number4){
                   CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)  
                  }
                
                }
                
                break
               case 2:
               CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
            }
            break
          case 2:
            CheckBlackCheckers(X-300,500)
            HightLightedTriangle(X-375)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X-150,500)
                 HightLightedTriangle(X-225)
                 CheckBlackCheckers(X-450,500)
                 HightLightedTriangle(X-525)
                 break
               case 2:
                if(HightLightedTriangle(X-375)){
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                }
                if(HightLightedTriangle(X-675)){
                  if(Number3){
                    CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                  }
                
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number4){
                    CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                  }
                
                }
                
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X-450,500)
            HightLightedTriangle(X-525)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 3:
                if(HightLightedTriangle(X-525)){
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055) 
                }
                if(HightLightedTriangle(X-1055)){
                  if(Number3){
                    CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505) 
                  }
               
                }
                if(HightLightedTriangle(X-1505)){
                  if(Number4){
                    CheckBlackCheckers(X-1730,Y)
                HightLightedTriangle(X-1805,true) 
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X-600,500)
             HightLightedTriangle(X-675)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 4:
                if(HightLightedTriangle(X-675)){
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                }
                if(HightLightedTriangle(X-1355)){
                  if(Number3){
                    CheckBlackCheckers(X-1730,Y)
                HightLightedTriangle(X-1805,true) 
                  }
                                  
                }
                if(HightLightedTriangle(X-1805,true)){
                  if(Number4){
                     CheckBlackCheckers(X-1130,Y)
                HightLightedTriangle(X-1205,true) 
                  }
               
                }
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1580,500)
                HightLightedTriangle(X-1655)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X-750,500)
            HightLightedTriangle(X-825)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
               case 5:
                if(HightLightedTriangle(X-825)){
                CheckBlackCheckers(X-1580,500)
                HightLightedTriangle(X-1655)
                }
                if(HightLightedTriangle(X-1655)){
                  if(Number3){
                    CheckBlackCheckers(X-1280,Y)
                HightLightedTriangle(X-1355,true)
                  }
                
                }
                if(HightLightedTriangle(X-1355,true)){
                  if(Number4){
                   CheckBlackCheckers(X-450,Y)
                HightLightedTriangle(X-525,true) 
                  }
                
                }
                
                break
               case 6:
                CheckBlackCheckers(X-980,500)
                HightLightedTriangle(X-1055)
                CheckBlackCheckers(X-1730,500)
                HightLightedTriangle(X-1805)
                break
            }
            break
          case 6:
            CheckBlackCheckers(X-980,500)
            HightLightedTriangle(X-1055)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X-150,500)
                HightLightedTriangle(X-225)
                CheckBlackCheckers(X-1130,500)
                HightLightedTriangle(X-1205)
                break
               case 2:
                CheckBlackCheckers(X-300,500)
                HightLightedTriangle(X-375)
                CheckBlackCheckers(X-1280,500)
                HightLightedTriangle(X-1355)
                break
               case 3:
                CheckBlackCheckers(X-450,500)
                HightLightedTriangle(X-525)
                CheckBlackCheckers(X-1430,500)
                HightLightedTriangle(X-1505)
                break
               case 4:
                CheckBlackCheckers(X-600,500)
                HightLightedTriangle(X-675)
                CheckBlackCheckers(X-1580,500)
                HightLightedTriangle(X-1655)
                break
               case 5:
                CheckBlackCheckers(X-750,500)
                HightLightedTriangle(X-825)
                CheckBlackCheckers(X-1730,500)
                HightLightedTriangle(X-1805)
                break
               case 6:
                if(HightLightedTriangle(X-1055)){
                CheckBlackCheckers(X-1730,Y)
                HightLightedTriangle(X-1805,true)
                }
                if(HightLightedTriangle(X-1805,true)){
                  if(Number3){
                    CheckBlackCheckers(X-750,Y)
                HightLightedTriangle(X-825,true)
                  }
                
                }
                break
            }
            break
        }
        break 
      }
      }else{
      switch(X-75){
      case 35:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 5:
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+150,Y)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true) 
                }
                if(HightLightedTriangle(X+225,true)){
                  if(Number3){
                    CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                  }
                
                }
                if(HightLightedTriangle(X+375,true)){
                  if(Number4){
                    CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true) 
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 4:
               CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)  
                break
               case 5:
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true) 
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true) 
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)  
                break
            }
            break
          case 2:
            CheckBlackCheckers(X+300,Y)
            HightLightedTriangle(X+225,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckBlackCheckers(X+300,Y)
                 HightLightedTriangle(X+225,true)
                 break
               case 2:
                if(HightLightedTriangle(X+225,true)){
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                }
                if(HightLightedTriangle(X+525,true)){
                  if(Number3){
                    CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                  }
                
                }
                if(HightLightedTriangle(X+905,true)){
                  if(Number4){
                    CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 5:
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X+450,Y)
            HightLightedTriangle(X+375,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                break
               case 3:
                if(HightLightedTriangle(X+375,true)){
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                }
                if(HightLightedTriangle(X+905,true)){
                  if(Number3){
                    CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 5:
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+600,Y)
             HightLightedTriangle(X+525,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 4:
                if(HightLightedTriangle(X+525,true)){
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                }
                break
               case 5:
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1580,Y)
                HightLightedTriangle(X+1505,true)
                break
            }
            break
          case 5:
           CheckBlackCheckers(X+750,Y)
           HightLightedTriangle(X+675,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 3:
               CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
               case 5:
                if(HightLightedTriangle(X+675,true)){
                CheckBlackCheckers(X+1580,Y)
                HightLightedTriangle(X+1505,true)
                }
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1730,Y)
                HightLightedTriangle(X+1655,true)
                break
            }
            break
          case 6:
           CheckBlackCheckers(X+980,Y)
           HightLightedTriangle(X+905,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+1580,Y)
                HightLightedTriangle(X+1505,true)
                break
               case 5:
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                CheckBlackCheckers(X+1730,Y)
                HightLightedTriangle(X+1655,true)
                break
               case 6:
                break
            }
            break
        }
        break
      case 185:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+150,Y)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true) 
                }
                if(HightLightedTriangle(X+225,true)){
                  if(Number3){
                    CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                  }
                
                }
                if(HightLightedTriangle(X+375,true)){
                  if(Number4){
                    CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true) 
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true) 
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true) 
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true) 
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)  
                break
            }
            break
          case 2:
            CheckBlackCheckers(X+300,Y)
            HightLightedTriangle(X+225,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckBlackCheckers(X+300,Y)
                 HightLightedTriangle(X+225,true)
                 break
               case 2:
                if(HightLightedTriangle(X+225,true)){
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                }
                if(HightLightedTriangle(X+525,true)){
                  if(Number3){
                    CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                  }
                
                }
                if(HightLightedTriangle(X+905,true)){
                  if(Number4){
                    CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X+450,Y)
            HightLightedTriangle(X+375,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 3:
                if(HightLightedTriangle(X+375,true)){
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                }
                if(HightLightedTriangle(X+905,true)){
                  if(Number3){
                    CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+600,Y)
             HightLightedTriangle(X+525,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 4:
                if(HightLightedTriangle(X+525,true)){
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                }
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1580,Y)
                HightLightedTriangle(X+1505,true)
                break
            }
            break
          case 5:
           CheckBlackCheckers(X+830,Y)
           HightLightedTriangle(X+755,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
               case 5:
                if(HightLightedTriangle(X+755,true)){
                CheckBlackCheckers(X+1580,Y)
                HightLightedTriangle(X+1505,true)
                }
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 6:
           CheckBlackCheckers(X+980,Y)
           HightLightedTriangle(X+905,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+1580,Y)
                HightLightedTriangle(X+1505,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                break
            }
            break
        }
        break
      case 335:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+150,Y)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true) 
                }
                if(HightLightedTriangle(X+225,true)){
                  if(Number3){
                   CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true) 
                  }
                
                }
                if(HightLightedTriangle(X+375,true)){
                  if(Number4){
                    CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true) 
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true) 
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true) 
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true) 
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)  
                break
            }
            break
          case 2:
           CheckBlackCheckers(X+300,Y)
            HightLightedTriangle(X+225,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckBlackCheckers(X+450,Y)
                 HightLightedTriangle(X+375,true)
                 break
               case 2:
                if(HightLightedTriangle(X+225,true)){
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                }
                if(HightLightedTriangle(X+605,true)){
                  if(Number3){
                   CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true) 
                  }
                
                }
                if(HightLightedTriangle(X+905,true)){
                  if(Number4){
                   CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true) 
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X+450,Y)
            HightLightedTriangle(X+375,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 3:
                if(HightLightedTriangle(X+375,true)){
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                }
                if(HightLightedTriangle(X+905,true)){
                  if(Number3){
                    CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+680,Y)
             HightLightedTriangle(X+605,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 4:
                if(HightLightedTriangle(X+605,true)){
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                }
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 5:
           CheckBlackCheckers(X+830,Y)
           HightLightedTriangle(X+755,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 2:
               CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
               case 5:
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 6:
           CheckBlackCheckers(X+980,Y)
           HightLightedTriangle(X+905,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+1430,Y)
                HightLightedTriangle(X+1355,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                break
            }
            break
        }
        break
      case 485:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
               CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+150,Y)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true) 
                }
                if(HightLightedTriangle(X+225,true)){
                  if(Number3){
                    CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                  }
                
                }
                if(HightLightedTriangle(X+455,true)){
                  if(Number4){
                   CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true) 
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true) 
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true) 
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true) 
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true) 
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)  
                break
            }
            break
          case 2:
            CheckBlackCheckers(X+300,Y)
            HightLightedTriangle(X+225,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckBlackCheckers(X+530,Y)
                 HightLightedTriangle(X+455,true)
                 break
               case 2:
                if(HightLightedTriangle(X+225,true)){
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                }
                if(HightLightedTriangle(X+605,true)){
                  if(Number3){
                    CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                  }
                
                }
                if(HightLightedTriangle(X+905,true)){
                  if(Number4){
                    CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X+530,Y)
            HightLightedTriangle(X+455,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 3:
                if(HightLightedTriangle(X+455,true)){
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                }
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+680,Y)
             HightLightedTriangle(X+605,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 4:
                if(HightLightedTriangle(X+605,true)){
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                }
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 5:
           CheckBlackCheckers(X+830,Y)
           HightLightedTriangle(X+755,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 6:
           CheckBlackCheckers(X+980,Y)
           HightLightedTriangle(X+905,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                break
            }
            break
        }
        break
      case 635:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+150,Y)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true) 
                }
                if(HightLightedTriangle(X+305,true)){
                  if(Number3){
                   CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true) 
                  }
                
                }
                if(HightLightedTriangle(X+455,true)){
                  if(Number4){
                    CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true) 
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true) 
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true) 
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true) 
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)  
                break
            }
            break
          case 2:
            CheckBlackCheckers(X+380,Y)
            HightLightedTriangle(X+305,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckBlackCheckers(X+530,Y)
                 HightLightedTriangle(X+455,true)
                 break
               case 2:
                if(HightLightedTriangle(X+305,true)){
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                }
                if(HightLightedTriangle(X+605,true)){
                  if(Number3){
                    CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                  }
                
                }
                if(HightLightedTriangle(X+905,true)){
                  if(Number4){
                    CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
            }
            break
          case 3:
           CheckBlackCheckers(X+530,Y)
            HightLightedTriangle(X+455,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 3:
                if(HightLightedTriangle(X+455,true)){
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                }
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+680,Y)
             HightLightedTriangle(X+605,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 4:
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 5:
           CheckBlackCheckers(X+830,Y)
           HightLightedTriangle(X+755,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 6:
           CheckBlackCheckers(X+980,Y)
           HightLightedTriangle(X+905,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                break
            }
            break
        }
        break
      case 785:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+150,Y)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true) 
                }
                if(HightLightedTriangle(X+305,true)){
                  if(Number3){
                    CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                  }
                
                }
                if(HightLightedTriangle(X+455,true)){
                  if(Number4){
                    CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                  }
                
                }
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true) 
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true) 
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true) 
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true) 
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)  
                break
            }
            break
          case 2:
            CheckBlackCheckers(X+380,Y)
            HightLightedTriangle(X+305,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckBlackCheckers(X+530,Y)
                 HightLightedTriangle(X+455,true)
                 break
               case 2:
                if(HightLightedTriangle(X+305,true)){
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                }
                if(HightLightedTriangle(X+605,true)){
                  if(Number3){
                  CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)  
                  }
                
                }
                if(HightLightedTriangle(X+905,true)){
                  if(Number4){
                   CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true) 
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                CheckBlackCheckers(X+1280,Y)
                HightLightedTriangle(X+1205,true)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X+530,Y)
            HightLightedTriangle(X+455,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 3:
                if(HightLightedTriangle(X+455,true)){
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                }
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+680,Y)
             HightLightedTriangle(X+605,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 4:
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 5:
           CheckBlackCheckers(X+830,Y)
           HightLightedTriangle(X+755,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                break
               case 6:
                CheckBlackCheckers(X+980,Y)
                HightLightedTriangle(X+905,true)
                break
            }
            break
          case 6:
           CheckBlackCheckers(X+980,Y)
           HightLightedTriangle(X+905,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+1130,Y)
                HightLightedTriangle(X+1055,true)
                break
               case 2:
                CheckBlackCheckers(X+380,Y)
                HightLightedTriangle(X+305,true)
                break
               case 3:
                CheckBlackCheckers(X+530,Y)
                HightLightedTriangle(X+455,true)
                break
               case 4:
                CheckBlackCheckers(X+680,Y)
                HightLightedTriangle(X+605,true)
                break
               case 5:
                CheckBlackCheckers(X+830,Y)
                HightLightedTriangle(X+755,true)
                break
               case 6:
                break
            }
            break
        }
        break
      case 1015:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 5:
               CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+150,Y)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                }
                if(HightLightedTriangle(X+225,true)){
                  if(Number3){
                    CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                  }
                
                }
                if(HightLightedTriangle(X+375,true)){
                  if(Number4){
                  CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)  
                  }
                
                }
                break
               case 2:
               CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                break
               case 5:
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
           CheckBlackCheckers(X+300,Y)
           HightLightedTriangle(X+225,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                 break
               case 2:
                if(HightLightedTriangle(X+225,true)){
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                }
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckBlackCheckers(X+450,Y)
            HightLightedTriangle(X+375,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+600,Y)
             HightLightedTriangle(X+525,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
           CheckBlackCheckers(X+750,Y)
           HightLightedTriangle(X+675,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 6:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckBlackCheckers(X+750,Y)
                HightLightedTriangle(X+675,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 1165:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+150,Y)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                }
                if(HightLightedTriangle(X+225,true)){
                  if(Number3){
                    CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                  }
                
                }
                if(HightLightedTriangle(X+375,true)){
                  if(Number4){
                    CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                  }
                
                }
                break
               case 2:
               CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
           CheckBlackCheckers(X+300,Y)
           HightLightedTriangle(X+225,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                 break
               case 2:
                if(HightLightedTriangle(X+225,true)){
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                }
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckBlackCheckers(X+450,Y)
            HightLightedTriangle(X+375,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+600,Y)
             HightLightedTriangle(X+525,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                break
               case 6:
                break
            }
            break
          case 6:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckBlackCheckers(X+600,Y)
                HightLightedTriangle(X+525,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 1315:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+150,Y)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                }
                if(HightLightedTriangle(X+225,true)){
                  if(Number3){
                    CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                  }
                
                }
                if(HightLightedTriangle(X+375,true)){
                  CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
           CheckBlackCheckers(X+300,Y)
           HightLightedTriangle(X+225,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                 break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckBlackCheckers(X+450,Y)
            HightLightedTriangle(X+375,true)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 6:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckBlackCheckers(X+450,Y)
                HightLightedTriangle(X+375,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 1465:
         switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+150,Y)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+75,true)){
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                }
                if(HightLightedTriangle(X+225,true)){
                  CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                }
                break
               case 2:
               CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
           CheckBlackCheckers(X+300,Y)
           HightLightedTriangle(X+225,true)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 6:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckBlackCheckers(X+300,Y)
                HightLightedTriangle(X+225,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 1615:
         switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+150,Y)
            HightLightedTriangle(X+75,true)
            switch(Number2){
               case 1:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                 break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                 HightLightedTriangle(X+75,true)
                 CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 6:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+150,Y)
                HightLightedTriangle(X+75,true)
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 1765:
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 1:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 2:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                 break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 3:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 4:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 5:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
          case 6:
            CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
            switch(Number2){
               case 1:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 2:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 3:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 4:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 5:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
               case 6:
                CheckWhiteCheckersHomeBoard()
                if(Counter === 15){
                  Board4(true)
                  Board3()
                }else{
                Board4()
                Board3()
                }
                break
            }
            break
        }
        break
      case 900:
        GameTip.textContent = ''
        switch(NumbeR){
          case 0:
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+865,500)
                 HightLightedTriangle(X+790)
                break
               case 2:
                 CheckBlackCheckers(X+715,500)
                 HightLightedTriangle(X+640)
                break
               case 3:
                 CheckBlackCheckers(X+565,500)
                HightLightedTriangle(X+490)
                break
               case 4:
                 CheckBlackCheckers(X+415,500)
                HightLightedTriangle(X+340)
                break
               case 5:
                 CheckBlackCheckers(X+265,500)
                HightLightedTriangle(X+190) 
                break
               case 6:
                 CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40)
                break
            }
            break
          case 1:
            CheckBlackCheckers(X+865,500)
            HightLightedTriangle(X+790)
            switch(Number2){
               case 1:
                if(HightLightedTriangle(X+790)){
                 CheckBlackCheckers(X+715,500)
                 HightLightedTriangle(X+640)
                }
                if(HightLightedTriangle(X+640)){
                  if(Number3){
                CheckBlackCheckers(X+565,500)
                HightLightedTriangle(X+490) 
                  }
                }
                if(HightLightedTriangle(X+490)){
                  if(Number4){
                CheckBlackCheckers(X+415,500)
                HightLightedTriangle(X+340)
                  }
                 
                }
                break
               case 2:
                 CheckBlackCheckers(X+715,500)
                 HightLightedTriangle(X+640)
                 CheckBlackCheckers(X+565,500)
                HightLightedTriangle(X+490)
                break
               case 3:
                 CheckBlackCheckers(X+565,500)
                HightLightedTriangle(X+490)
                 CheckBlackCheckers(X+415,500)
                HightLightedTriangle(X+340)
                break
               case 4:
                 CheckBlackCheckers(X+415,500)
                HightLightedTriangle(X+340)
                 CheckBlackCheckers(X+265,500)
                HightLightedTriangle(X+190)
                break
               case 5:
                 CheckBlackCheckers(X+265,500)
                HightLightedTriangle(X+190) 
                 CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40)
                break
               case 6:
                 CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40)
                 CheckBlackCheckers(X-115,500)
                HightLightedTriangle(X-190)
                break
            }
            break
          case 2:
            CheckBlackCheckers(X+715,500)
            HightLightedTriangle(X+640)
            switch(Number2){
               case 1:
                 CheckBlackCheckers(X+865,500)
                HightLightedTriangle(X+790)
                 CheckBlackCheckers(X+565,500)
                 HightLightedTriangle(X+490)
                 break
               case 2:
                if(HightLightedTriangle(X+640)){
                CheckBlackCheckers(X+415,500)
                HightLightedTriangle(X+340)
                }
                if(HightLightedTriangle(X+340)){
                  if(Number3){
                   CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40) 
                  }
                
                }
                if(HightLightedTriangle(X+40)){
                  if(Number4){
                    CheckBlackCheckers(X-265,500)
                HightLightedTriangle(X-340)
                  }
                
                }
                break
               case 3:
                CheckBlackCheckers(X+565,500)
                HightLightedTriangle(X+490)
                CheckBlackCheckers(X+265,500)
                HightLightedTriangle(X+190)
                break
               case 4:
                CheckBlackCheckers(X+415,500)
                HightLightedTriangle(X+340)
                CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40)
                break
               case 5:
                CheckBlackCheckers(X+265,500)
                HightLightedTriangle(X+190)
                CheckBlackCheckers(X-115,500)
                HightLightedTriangle(X-190)
                break
               case 6:
                CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40)
                CheckBlackCheckers(X-265,500)
                HightLightedTriangle(X-340)
                break
            }
            break
          case 3:
            CheckBlackCheckers(X+565,500)
            HightLightedTriangle(X+490)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+865,500)
                HightLightedTriangle(X+790)
                CheckBlackCheckers(X+415,500)
                HightLightedTriangle(X+340)
                break
               case 2:
                CheckBlackCheckers(X+715,500)
                HightLightedTriangle(X+640)
                CheckBlackCheckers(X+265,500)
                HightLightedTriangle(X+190)
                break
               case 3:
                if(HightLightedTriangle(X+490)){
                   CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40)
                }
                if(HightLightedTriangle(X+40)){
                  if(Number3){
                CheckBlackCheckers(X-415,500)
                HightLightedTriangle(X-490)
                  }
                
                }
                if(HightLightedTriangle(X-490)){
                  if(Number4){
                    CheckBlackCheckers(X-865,500)
                HightLightedTriangle(X-940)
                  }
                
                }
                break
               case 4:
                CheckBlackCheckers(X+415,500)
                HightLightedTriangle(X+340)
                CheckBlackCheckers(X-115,500)
                HightLightedTriangle(X-190)
                break
               case 5:
                CheckBlackCheckers(X+265,500)
                HightLightedTriangle(X+190)
                CheckBlackCheckers(X-265,500)
                HightLightedTriangle(X-340)
                break
               case 6:
                CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40)
                CheckBlackCheckers(X-415,500)
                HightLightedTriangle(X-490)
                break
            }
            break
          case 4:
             CheckBlackCheckers(X+415,500)
             HightLightedTriangle(X+340)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+865,500)
                HightLightedTriangle(X+790)
                CheckBlackCheckers(X+265,500)
                HightLightedTriangle(X+190)
                break
               case 2:
                CheckBlackCheckers(X+715,500)
                HightLightedTriangle(X+640)
                CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40)
                break
               case 3:
                CheckBlackCheckers(X+565,500)
                HightLightedTriangle(X+490)
                CheckBlackCheckers(X-115,500)
                HightLightedTriangle(X-190)
                break
               case 4:
                if(HightLightedTriangle(X+340)){
                CheckBlackCheckers(X-265,500)
                HightLightedTriangle(X-340)
                }
                if(HightLightedTriangle(X-340)){
                  if(Number3){
                    CheckBlackCheckers(X-865,500)
                HightLightedTriangle(X-940)
                  }
                
                }
                break
               case 5:
                CheckBlackCheckers(X+265,500)
                HightLightedTriangle(X+190)
                CheckBlackCheckers(X-415,500)
                HightLightedTriangle(X-490)
                break
               case 6:
                CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40)
                CheckBlackCheckers(X-565,500)
                HightLightedTriangle(X-640)
                break
            }
            break
          case 5:
            CheckBlackCheckers(X+265,500)
            HightLightedTriangle(X+190)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+865,500)
                HightLightedTriangle(X+790)
                CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40)
                break
               case 2:
                CheckBlackCheckers(X+715,500)
                HightLightedTriangle(X+640)
                CheckBlackCheckers(X-115,500)
                HightLightedTriangle(X-190)
                break
               case 3:
                CheckBlackCheckers(X+565,500)
                HightLightedTriangle(X+490)
                CheckBlackCheckers(X-265,500)
                HightLightedTriangle(X-340)
                break
               case 4:
                CheckBlackCheckers(X+415,500)
                HightLightedTriangle(X+340)
                CheckBlackCheckers(X-415,500)
                HightLightedTriangle(X-490)
                break
               case 5:
                if(HightLightedTriangle(X+190)){
                CheckBlackCheckers(X-565,500)
                HightLightedTriangle(X-640)
                }
                break
               case 6:
                CheckBlackCheckers(X+115,500)
                HightLightedTriangle(X+40)
                CheckBlackCheckers(X-715,500)
                HightLightedTriangle(X-790)
                break
            }
            break
          case 6:
           CheckBlackCheckers(X+115,500)
           HightLightedTriangle(X+40)
            switch(Number2){
               case 1:
                CheckBlackCheckers(X+865,500)
                HightLightedTriangle(X+790)
                CheckBlackCheckers(X-115,500)
                HightLightedTriangle(X-190)
                break
               case 2:
                CheckBlackCheckers(X+715,500)
                HightLightedTriangle(X+640)
                CheckBlackCheckers(X-265,500)
                HightLightedTriangle(X-340)
                break
               case 3:
                CheckBlackCheckers(X+565,500)
                HightLightedTriangle(X+490)
                CheckBlackCheckers(X-415,500)
                HightLightedTriangle(X-490)
                break
               case 4:
                CheckBlackCheckers(X+415,500)
                HightLightedTriangle(X+340)
                CheckBlackCheckers(X-565,500)
                HightLightedTriangle(X-640)
                break
               case 5:
                 CheckBlackCheckers(X+265,500)
                 HightLightedTriangle(X+190)
                CheckBlackCheckers(X-715,500)
                HightLightedTriangle(X-790)
                break
               case 6:
                if(HightLightedTriangle(X+40)){
                CheckBlackCheckers(X-865,500)
                HightLightedTriangle(X-940)
                }
                break
            }
            break
        }
        break
      }
      }
      Checkers(X,Y)
    }    
    }
    function CheckCoordinates(X,Y){
      if(WhoIsTurn === 'Black'){
        Counter = 0
        Loop = 1
        BottomY = 233
        BlackCheckers.forEach(BlackChecker=>{
        if(X === BlackChecker.x){
          if(Y<600){
            if(BlackChecker.y<600){
              Counter+=1
            }
          }else{
            if(BlackChecker.y>600){
              Counter+=1
            }
          }
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
          if(Y<600){
            if(WhiteChecker.y<600){
              Counter+=1
            }
          }else{
            if(WhiteChecker.y>600){
              Counter+=1
            }
          }
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
    function BlackCheckerToCenter(X,Y){
      if(Counter === 1){
      BlackCheckers.forEach(BlackChecker=>{
      if(BlackChecker.x === X){
          Counter = 0
          BlackCheckers.forEach(BlackChecker=>{
            if(BlackChecker.x === 975){
              Counter++
            }
          })
          if(Counter === 0){
            BlackChecker.y = 75
          }else{
           BlackChecker.y = Counter*75
          }
          BlackChecker.x = 975
      }
      })
      Checkers()
      }
    }
    function WhiteCheckerToCenter(X,Y){
      if(Counter === 1){
      WhiteCheckers.forEach(WhiteChecker=>{
      if(WhiteChecker.x === X){
          BottomY = 233
          WhiteCheckers.forEach(WhiteChecker=>{
            if(WhiteChecker.x === 975){
              BottomY-=14
            }
          })
           WhiteChecker.y = BottomY*5
           WhiteChecker.x = 975
      }
      })
      Checkers()
      }
    }
   function CheckBlackCheckersHomeBoard(){
    Counter = 0
    BlackCheckers.forEach(BlackChecker=>{
      if(BlackChecker.x>=1090){
        Counter++
      }
    })
   }
   function CheckWhiteCheckersHomeBoard(){
    Counter = 0
    WhiteCheckers.forEach(WhiteChecker=>{
      if(WhiteChecker.x>=1090){
        Counter++
      }
    })
   }
   function CheckBlackCheckersInCenter(){
    Counter = 0
    BlackCheckers.forEach(BlackChecker=>{
      if(BlackChecker.x === 975){
        Counter++
      }
    })
   }
   function CheckWhiteCheckersInCenter(){
    Counter = 0
    WhiteCheckers.forEach(WhiteChecker=>{
      if(WhiteChecker.x === 975){
        Counter++
      }
    })
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
          if(Y<600){
            if(BlackChecker.y<600){
              Counter+=1
            }
          }else{
            if(BlackChecker.y>600){
              Counter+=1
            }
          }
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
BottomY = 233
  Loop = 1
Counter = 0
WhiteCheckers.forEach(WhiteChecker=>{
     if(X === WhiteChecker.x){
          if(Y<600){
            if(WhiteChecker.y<600){
              Counter+=1
            }
          }else{
            if(WhiteChecker.y>600){
              Counter+=1
            }
          }
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
if(Start.textContent === 'Start The Game'){
 GameTip.textContent = ''
context.clearRect(0,0,1950,1230)
CreateBoard()
Board3()
Board4()
TopBlackTriangLe()
TopWhiteTriangLe()
BottomBlackTriangLe()
BottomWhiteTriangLe()
WhiteCheckers = [
  {x:1840,y:150},
  {x:1840,y:75},
  {x:975,y:1165},
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
  {x:1840,y:1095},
  {x:1840,y:1165},
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
Start.textContent = 'Roll Dice!'
}
if(Start.textContent === 'Roll Dice'){
  GameTip.textContent = 'finish your moves first'
  GameTip.style.marginLeft = '-1000px'
  game.style.marginLeft = '-1090px'
}
if(Start.textContent === 'Roll Dice!'){
  dice3.style.display = 'none'
  dice4.style.display = 'none'
  Rolled = 'Rolling'
  const randNum1 = Math.ceil(Math.random()*6)
  const randNum2 = Math.ceil(Math.random()*6)
  NumbeR = randNum1
  Number2 = randNum2
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
  if(!CheckWhoIsFirst){
    if(randNum1 === randNum2){
    dice3.style.display = 'block'
    dice4.style.display = 'block'
    dice3.style.transform = dice.style.transform
    dice4.style.transform = dice.style.transform
    Number3 = NumbeR
    Number4 = NumbeR
  }
  }
  Rolled = 'Rolled'
   if(CheckWhoIsFirst){
      if(NumbeR === Number2){
        GameTip.textContent = 'Tie Roll Again'
        GameTip.style.marginLeft = '-1200px'
        game.style.marginLeft = '-1350px'
        dice3.style.display = 'none'
        dice4.style.display = 'none'
    }
    if(NumbeR>Number2){
      if(GameTip.textContent === 'Tie Roll Again'){
        GameTip.textContent = ''
      }
    CheckWhoIsFirst = false
     WhoIsTurn = 'White'
     GameTip.textContent = "White's Turn"
     GameTip.style.marginLeft = '-900px'
    game.style.marginLeft = '-1050px'
    }
    if(NumbeR<Number2){
      if(GameTip.textContent === 'Tie Roll Again'){
        GameTip.textContent = ''
      }
     CheckWhoIsFirst = false
     WhoIsTurn = 'Black'
     GameTip.textContent = "Black's Turn"
     GameTip.style.marginLeft = '-900px'
    game.style.marginLeft = '-1050px'
    }
    }
  },1000)
}
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
  if(Start.textContent === 'Start The Game'){
    GameTip.textContent = 'Game is not Started'
    GameTip.style.marginLeft = '-1200px'
    game.style.marginLeft = '-1350px'
  }
  if(Rolled === 'Rolled'){
    if(!CheckWhoIsFirst){
      if(WhoIsTurn === 'White'){ 
        WhiteCheckers.forEach(WhiteChecker =>{
         const distance = Math.sqrt(
          ((e.offsetX - WhiteChecker.x)*(e.offsetX - WhiteChecker.x))
          +
          ((e.offsetY - WhiteChecker.y)*(e.offsetY - WhiteChecker.y))
         )
         if(distance<35){
          array = []
          CheckWhiteCheckersInCenter()
          if(Counter === 1){
           GameTip.textContent = 'Move pieces in center'
           GameTip.style.marginLeft = '-990px'
           game.style.marginLeft = '-1050px'
           if(WhiteChecker.x === 975){
            Checkers(WhiteChecker.x,WhiteChecker.y)
          CheckCoordinates(WhiteChecker.x,WhiteChecker.y)
          x = WhiteChecker.x
          y = WhiteChecker.y 
           }
          }else{
          Checkers(WhiteChecker.x,WhiteChecker.y)
          CheckCoordinates(WhiteChecker.x,WhiteChecker.y)
          x = WhiteChecker.x
          y = WhiteChecker.y 
          }
          
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
          array = []
          CheckBlackCheckersInCenter()
          if(Counter === 1){
           GameTip.textContent = 'Move pieces in center'
           GameTip.style.marginLeft = '-990px'
           game.style.marginLeft = '-1050px'
           if(BlackChecker.x === 975){
            Checkers(BlackChecker.x,BlackChecker.y)
            CheckCoordinates(BlackChecker.x,BlackChecker.y)
           x = BlackChecker.x
           y= BlackChecker.y 
           }
          }else{
           Checkers(BlackChecker.x,BlackChecker.y)
          CheckCoordinates(BlackChecker.x,BlackChecker.y)
          x = BlackChecker.x
          y= BlackChecker.y 
          }
          
         }
      }) 
      }
    }
    array.forEach(argument =>{
      if(argument.x<e.offsetX && argument.x+150>e.offsetX){
        if(argument.y === 490){
         if(argument.y>e.offsetY){
          if(WhoIsTurn === 'White'){
            Counter = 0
            Loop = 1
            BottomY =233
           WhiteCheckers.forEach(WhiteChecker=>{
              if(x === WhiteChecker.x){
                if(y === WhiteChecker.y){
                  console.log(NumbeR*150,Number2*150,((argument.x+75-WhiteChecker.x)-115)-600)
                  if(NumbeR === Number2){
                    if((NumbeR*150)*4 === (WhiteChecker.x-argument.x+75)-230){
                      NumbeR = 0
                      Number2 = 0
                    }else{
                      if((NumbeR*150)*4 === (WhiteChecker.x-argument.x+75)-150){
                      NumbeR = 0
                      Number2 = 0
                    }
                    }
                    if(NumbeR*150 === (WhiteChecker.x-argument.x+75)-150){
                      if(Number4){
                        Number4 =  undefined
                      }else{
                        Number3 = undefined
                      }
                      if(Number3 === undefined){
                        NumbeR = 0
                      }
                    }else{
                      if(NumbeR*150 === (WhiteChecker.x-argument.x+75)-230){
                      if(Number4){
                        Number4 =  undefined
                      }else{
                        Number3 = undefined
                      }
                      if(Number3 === undefined){
                        NumbeR = 0
                      }
                    }
                    }
                    if(NumbeR === 0){
                      if(Number2*150 === (WhiteChecker.x-argument.x+75)-150){
                        Number2 = 0
                      }else{
                         if(Number2*150 === (WhiteChecker.x-argument.x+75)-230){
                        Number2 = 0
                      }
                      }

                    }
                    if((NumbeR*150)*3 === (WhiteChecker.x-argument.x+75)-150){
                       NumbeR = 0
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*3 === (WhiteChecker.x-argument.x+75)-230){
                       NumbeR = 0
                       Number3 = undefined
                       Number4 = undefined
                    }
                    }
                    if((NumbeR*150)*2 === (WhiteChecker.x-argument.x+75)-150){
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*2 === (WhiteChecker.x-argument.x+75)-230){
                       Number3 = undefined
                       Number4 = undefined
                    }
                    }
                  }
                if(NumbeR*150 === (WhiteChecker.x-argument.x+75)-150){
                  NumbeR = 0
                }else{
                  if(NumbeR*150 === (WhiteChecker.x-argument.x+75)-230){
                  NumbeR = 0
                  }
                }
                if(Number2*150 === (WhiteChecker.x-argument.x+75)-150){
                  Number2 = NumbeR
                  NumbeR = 0
                }else{
                  if(Number2*150 === (WhiteChecker.x-argument.x+75)-230){
                    NumbeR = 0
                    Number2 = NumbeR
                  }
                }
                if((Number2+NumbeR)*150 === (WhiteChecker.x-argument.x+75)-150){
                  Number2 = 0
                  NumbeR = 0
                }else{
                  if((Number2+NumbeR)*150 === (WhiteChecker.x-argument.x+75)-230){
                    Number2 = 0
                    NumbeR = 0
                  }
                }
                 WhiteChecker.x = argument.x+75
                 Counter = 0
                 WhiteCheckers.forEach(WhiteChecker=>{
                  if(argument.x+75 === WhiteChecker.x){
                    Counter+=1
                  } 
                 })
                Start.textContent = 'Roll Dice'
                 if(NumbeR === 0 && Number2 === 0){
                  WhoIsTurn = 'Black'
                  GameTip.textContent = "Black's Turn roll dice"
                  Start.textContent = 'Roll Dice!'
                 }
                 WhiteChecker.y = Counter*75
                 context.clearRect(0,0,1950,1230)
                 CreateBoard()
                 TopBlackTriangLe()
                 TopWhiteTriangLe()
                 BottomBlackTriangLe()
                 BottomWhiteTriangLe()
                 CheckBlackCheckers(WhiteChecker.x,WhiteChecker.y)
                 BlackCheckerToCenter(WhiteChecker.x,WhiteChecker.y)
                 Checkers()
                }
             } 
           })
          }
          if(WhoIsTurn === 'Black'){
            Counter = 0
            Loop = 1
            BottomY =233
            BlackCheckers.forEach(BlackChecker=>{
              if(x === BlackChecker.x){
                if(y === BlackChecker.y){
                  if(NumbeR === Number2){
                   if((NumbeR*150)*4 === (argument.x+75-BlackChecker.x)-150){
                      NumbeR = 0
                      Number2 = 0
                    }else{
                      if((NumbeR*150)*4 === (argument.x+75-BlackChecker.x)+150){
                      NumbeR = 0
                      Number2 = 0
                     }else{
                      if((NumbeR*150)*4 === (argument.x+75-BlackChecker.x)+70){
                      NumbeR = 0
                      Number2 = 0
                     }
                     }
                    }
                    if(NumbeR*150 === (argument.x+75-BlackChecker.x)-150){
                      if(Number4){
                        Number4 =  undefined
                      }else{
                        Number3 = undefined
                      }
                      if(Number3 === undefined){
                        NumbeR = 0
                      }
                    }else{
                      if(NumbeR*150 === (argument.x+75-BlackChecker.x)+150){
                      if(Number4){
                        Number4 =  undefined
                      }else{
                        Number3 = undefined
                      }
                      if(Number3 === undefined){
                        NumbeR = 0
                      }
                    }else{
                      if(NumbeR*150 === (argument.x+75-BlackChecker.x)+70){
                      if(Number4){
                        Number4 =  undefined
                      }else{
                        Number3 = undefined
                      }
                      if(Number3 === undefined){
                        NumbeR = 0
                      }
                    }
                    }
                    }
                    if(NumbeR === 0){
                      if(Number2*150 === (argument.x+75-BlackChecker.x)-150){
                        Number2 = 0
                      }else{
                         if(Number2*150 === (argument.x+75-BlackChecker.x)+150){
                        Number2 = 0
                      }else{
                        if(Number2*150 === (argument.x+75-BlackChecker.x)+70){
                        Number2 = 0
                      }
                      }
                      }

                    }
                    if((NumbeR*150)*3 === (argument.x+75-BlackChecker.x)-150){
                       NumbeR = 0
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*3 === (argument.x+75-BlackChecker.x)+150){
                       NumbeR = 0
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*3 === (argument.x+75-BlackChecker.x)+70){
                       NumbeR = 0
                       Number3 = undefined
                       Number4 = undefined
                    }
                    }
                    }
                    if((NumbeR*150)*2 === (argument.x+75-BlackChecker.x)-150){
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*2 === (argument.x+75-BlackChecker.x)+150){
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*2 === (argument.x+75-BlackChecker.x)+70){
                       Number3 = undefined
                       Number4 = undefined
                    }
                    }
                    }
                  }
                  if((Number2+NumbeR)*150 === (argument.x+75-BlackChecker.x)-150){
                  Number2 = 0
                  NumbeR = 0
                 }else{
                  if((Number2+NumbeR)*150 === (argument.x+75-BlackChecker.x)+150){
                  Number2 = 0
                  NumbeR = 0
                  }else{
                    if((Number2+NumbeR)*150 === (argument.x+75-BlackChecker.x)+70){
                  Number2 = 0
                  NumbeR = 0
                  }
                  }
                 }
                  if(NumbeR*150 === (argument.x+75-BlackChecker.x)-150){
                  NumbeR = 0
                 }else{
                  if(NumbeR*150 === (argument.x+75-BlackChecker.x)+150){
                    NumbeR = 0
                  }else{
                    if(NumbeR*150 === (argument.x+75-BlackChecker.x)+70){
                    NumbeR = 0
                  }
                  }
                 }
                 if(Number2*150 === (argument.x+75-BlackChecker.x)-150){
                  Number2 = NumbeR
                  NumbeR =0
                 }else{
                  if(Number2*150 === (argument.x+75-BlackChecker.x)+150){
                    Number2 = NumbeR
                    NumbeR =0
                  }else{
                    if(Number2*150 === (argument.x+75-BlackChecker.x)+70){
                      Number2 = NumbeR
                      NumbeR = 0
                     }
                  }
                 }
                  BlackChecker.x = argument.x+75
                  Counter =0
                  BlackCheckers.forEach(BlackChecker=>{
                    if(argument.x+75 === BlackChecker.x){
                      Counter+=1
                    } 
                  })
                  Start.textContent = 'Roll Dice'
                  if(NumbeR === 0 && Number2 === 0){
                  WhoIsTurn = 'White'
                  GameTip.textContent = "White's Turn roll dice"
                  Start.textContent = 'Roll Dice!'
                 }
                  BlackChecker.y = Counter*75
                  context.clearRect(0,0,1950,1230)
                 CreateBoard()
                 TopBlackTriangLe()
                 TopWhiteTriangLe()
                 BottomBlackTriangLe()
                 BottomWhiteTriangLe()
                 CheckWhiteCheckers(BlackChecker.x,BlackChecker.y)
                 WhiteCheckerToCenter(BlackChecker.x,BlackChecker.y)            
                 Checkers()
                }
              }
            })
          }
         }else{
         }
        }
        if(argument.y === 750){
          if(argument.y<e.offsetY){
          if(WhoIsTurn === 'Black'){
            Counter = 0
            Loop = 1
            BottomY =247
            BlackCheckers.forEach(BlackChecker=>{
              if(x === BlackChecker.x){
                if(y === BlackChecker.y){
                  if(NumbeR === Number2){
                     if((NumbeR*150)*4 === (BlackChecker.x-argument.x+75)-230){
                      NumbeR = 0
                      Number2 = 0
                    }else{
                      if((NumbeR*150)*4 === (BlackChecker.x-argument.x+75)-150){
                      NumbeR = 0
                      Number2 = 0
                    }
                    }
                    if(NumbeR*150 === (BlackChecker.x-argument.x+75)-150){
                      if(Number4){
                        Number4 =  undefined
                      }else{
                        Number3 = undefined
                      }
                      if(Number3 === undefined){
                        NumbeR = 0
                      }
                    }else{
                      if(NumbeR*150 === (BlackChecker.x-argument.x+75)-230){
                      if(Number4){
                        Number4 =  undefined
                      }else{
                        Number3 = undefined
                      }
                      if(Number3 === undefined){
                        NumbeR = 0
                      }
                    }
                    }
                    if(NumbeR === 0){
                      if(Number2*150 === (BlackChecker.x-argument.x+75)-150){
                        Number2 = 0
                      }else{
                         if(Number2*150 === (BlackChecker.x-argument.x+75)-230){
                        Number2 = 0
                      }
                      }

                    }
                    if((NumbeR*150)*3 === (blackChecker.x-argument.x+75)-150){
                       NumbeR = 0
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*3 === (BlackChecker.x-argument.x+75)-230){
                       NumbeR = 0
                       Number3 = undefined
                       Number4 = undefined
                    }
                    }
                    if((NumbeR*150)*2 === (BlackChecker.x-argument.x+75)-150){
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*2 === (BlackChecker.x-argument.x+75)-230){
                       Number3 = undefined
                       Number4 = undefined
                    }
                    }
                    
                  }
                 if(NumbeR*150 === (BlackChecker.x-argument.x+75)-150){
                  NumbeR = 0
                 }else{
                  if(NumbeR*150 === (BlackChecker.x-argument.x+75)-230){
                  NumbeR = 0
                  }
                 }
                 if(Number2*150 === (BlackChecker.x-argument.x+75)-150){
                  Number2 = NumbeR
                  NumbeR = 0
                 }else{
                  if(Number2*150 === (BlackChecker.x-argument.x+75)-230){
                    Number2 = NumbeR
                    NumbeR = 0
                  }
                 }
                 if((Number2+NumbeR)*150 === (BlackChecker.x-argument.x+75)-150){
                  Number2 = 0
                  NumbeR = 0
                 }else{
                  if((Number2+NumbeR)*150 === (BlackChecker.x-argument.x+75)-230){
                  Number2 = 0
                  NumbeR = 0
                  }
                 }
                  BlackChecker.x = argument.x+75
                  BlackCheckers.forEach(BlackChecker=>{
                    if(argument.x+75 === BlackChecker.x){
                      BottomY-=14
                    } 
                  })
                  Start.textContent = 'Roll Dice'
                  if(NumbeR === 0 && Number2 === 0){
                  WhoIsTurn = 'White'
                  GameTip.textContent = "White's Turn roll dice"
                  Start.textContent = 'Roll Dice!'
                 }
                  BlackChecker.y = BottomY*5
                  context.clearRect(0,0,1950,1230)
                 CreateBoard()
                 TopBlackTriangLe()
                 TopWhiteTriangLe()
                 BottomBlackTriangLe()
                 BottomWhiteTriangLe()
                 CheckWhiteCheckers(BlackChecker.x,BlackChecker.y)
                 WhiteCheckerToCenter(BlackChecker.x,BlackChecker.y)
                 Checkers()
                }
              }
            })
          }
          if(WhoIsTurn === 'White'){
            Counter = 0
            Loop = 1
            BottomY =247
           WhiteCheckers.forEach(WhiteChecker=>{
              if(x === WhiteChecker.x){
                if(y === WhiteChecker.y){
                if(NumbeR === Number2){
                   if((NumbeR*150)*4 === (argument.x+75-WhiteChecker.x)-150){
                      NumbeR = 0
                      Number2 = 0
                    }else{
                      if((NumbeR*150)*4 === (argument.x+75-WhiteChecker.x)+150){
                      NumbeR = 0
                      Number2 = 0
                     }else{
                      if((NumbeR*150)*4 === (argument.x+75-WhiteChecker.x)+70){
                      NumbeR = 0
                      Number2 = 0
                     }
                     }
                    }
                    if(NumbeR*150 === (argument.x+75-WhiteChecker.x)-150){
                      if(Number4){
                        Number4 =  undefined
                      }else{
                        Number3 = undefined
                      }
                      if(Number3 === undefined){
                        NumbeR = 0
                      }
                    }else{
                      if(NumbeR*150 === (argument.x+75-WhiteChecker.x)+150){
                      if(Number4){
                        Number4 =  undefined
                      }else{
                        Number3 = undefined
                      }
                      if(Number3 === undefined){
                        NumbeR = 0
                      }
                    }else{
                      if(NumbeR*150 === (argument.x+75-WhiteChecker.x)+70){
                      if(Number4){
                        Number4 =  undefined
                      }else{
                        Number3 = undefined
                      }
                      if(Number3 === undefined){
                        NumbeR = 0
                      }
                    }
                    }
                    }
                    if(NumbeR === 0){
                      if(Number2*150 === (argument.x+75-WhiteChecker.x)-150){
                        Number2 = 0
                      }else{
                         if(Number2*150 === (argument.x+75-WhiteChecker.x)+150){
                        Number2 = 0
                      }else{
                        if(Number2*150 === (argument.x+75-WhiteChecker.x)+70){
                        Number2 = 0
                      }
                      }
                      }

                    }
                    if((NumbeR*150)*3 === (argument.x+75-WhiteChecker.x)-150){
                       NumbeR = 0
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*3 === (argument.x+75-WhiteChecker.x)+150){
                       NumbeR = 0
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*3 === (argument.x+75-WhiteChecker.x)+70){
                       NumbeR = 0
                       Number3 = undefined
                       Number4 = undefined
                    }
                    }
                    }
                    if((NumbeR*150)*2 === (argument.x+75-WhiteChecker.x)-150){
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*2 === (argument.x+75-WhiteChecker.x)+150){
                       Number3 = undefined
                       Number4 = undefined
                    }else{
                      if((NumbeR*150)*2 === (argument.x+75-WhiteChecker.x)+70){
                       Number3 = undefined
                       Number4 = undefined
                    }
                    }
                    }
                  }
                 if((Number2+NumbeR)*150 === (argument.x+75-WhiteChecker.x)-150){
                  Number2 = 0
                  NumbeR = 0
                }else{
                  if((Number2+NumbeR)*150 === (argument.x+75-WhiteChecker.x)+150){
                    Number2 = 0
                    NumbeR = 0
                  }else{
                    if((Number2+NumbeR)*150 === (argument.x+75-WhiteChecker.x)+70){
                    Number2 = 0
                    NumbeR = 0
                  }
                  }
                }
                if(NumbeR*150 === (argument.x+75-WhiteChecker.x)-150){
                  NumbeR = 0
                }else{
                  if(NumbeR*150 === (argument.x+75-WhiteChecker.x)+150){
                   NumbeR = 0
                  }else{
                    if(NumbeR*150 === (argument.x+75-WhiteChecker.x)+70){
                   NumbeR = 0
                  }
                  }
                }
                if(Number2*150 === (argument.x+75-WhiteChecker.x)-150){
                  Number2 = NumbeR
                  NumbeR =0
                }else{
                  if(Number2*150 === (argument.x+75-WhiteChecker.x)+150){
                    Number2 = NumbeR
                    NumbeR = 0
                  }else{
                    if(Number2*150 === (argument.x+75-WhiteChecker.x)+70){
                    Number2 = NumbeR
                    NumbeR = 0
                  }
                  }
                }
                 WhiteChecker.x = argument.x+75
                 WhiteCheckers.forEach(WhiteChecker=>{
                  if(argument.x+75 === WhiteChecker.x){
                    BottomY-=14
                  } 
                 })
                 Start.textContent = 'Roll Dice'
                 if(NumbeR === 0 && Number2 === 0){
                  WhoIsTurn = 'Black'
                  GameTip.textContent = "Black's Turn roll dice"
                  Start.textContent = 'Roll Dice!'
                 }
                 WhiteChecker.y = BottomY*5
                 context.clearRect(0,0,1950,1230)
                 CreateBoard()
                 TopBlackTriangLe()
                 TopWhiteTriangLe()
                 BottomBlackTriangLe()
                 BottomWhiteTriangLe()
                CheckBlackCheckers(WhiteChecker.x,WhiteChecker.y)
                BlackCheckerToCenter(WhiteChecker.x,WhiteChecker.y)
                Checkers()
                }
             } 
           })
          }
         }else{
         }
        }
      }
    })
    if(WhoIsTurn === 'Black'){
      CheckBlackCheckersHomeBoard()
      if(Counter === 15){
        BlackCheckers.forEach(BlackChecker=>{
          if(x === BlackChecker.x){
            if(y === BlackChecker.y){
              BlackChecker.x = 1995
              Counter = 0
              BlackCheckers.forEach(BlackChecker=>{
                if(BlackChecker.x === 1995){
                 Counter++
                }
              })
              BlackChecker.y = Counter*75
              context.clearRect(0,0,1950,1230)
                 CreateBoard()
                 TopBlackTriangLe()
                 TopWhiteTriangLe()
                 BottomBlackTriangLe()
                 BottomWhiteTriangLe()
                 Board3()
                 Board4()
              Checkers()
            }
          }
        })
      }
    }
    if(WhoIsTurn === 'White'){
      CheckWhiteCheckersHomeBoard()
      if(Counter === 15){
        WhiteCheckers.forEach(WhiteChecker=>{
          if(x === WhiteChecker.x){
            if(y === WhiteChecker.y){
              WhiteChecker.x = 1995
              BottomY = 233
              WhiteCheckers.forEach(WhiteChecker=>{
                if(WhiteChecker.x === 1995){
                 BottomY-=14
                }
              })
              WhiteChecker.y = BottomY*5
              context.clearRect(0,0,1950,1230)
                 CreateBoard()
                 TopBlackTriangLe()
                 TopWhiteTriangLe()
                 BottomBlackTriangLe()
                 BottomWhiteTriangLe()
                 Board3()
                 Board4()
              Checkers()
            }
          }
        })
      }
    }
}
})
