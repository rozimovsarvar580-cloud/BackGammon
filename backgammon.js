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
let Counter2 = 0
let Loop = 1
let BottomY = 233
let Number3
let Number4
let TriangleInfo 
let InfoOnWhereToMove = []
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
function CheckBlackCheckers(X,Y){
Counter2 = 0
BlackCheckers.forEach(BlackChecker=>{
  if(BlackChecker.x === X+75){
    if(Y<600){
      if(BlackChecker.y<600){
        Counter2++
      }
    }else{
      if(BlackChecker.y>600){
        Counter2++
      }
    }
  }
})
}
function CheckWhiteCheckers (X,Y){
  Counter2 = 0
WhiteCheckers.forEach(WhiteChecker=>{
  if(WhiteChecker.x === X+75){
    if(Y<600){
      if(WhiteChecker.y<600){
        Counter2++
      }
    }else{
      if(WhiteChecker.y>600){
        Counter2++
      }
    }
  }
})
}
function HighlightTriangle (X,Y){
if(WhoIsTurn === 'White'){
  context.clearRect(0,0,1950,1230)
  CreateBoard()
  TopTriangle()
  BottomTriangle()
  Checkers()
  Counter = 0
  TriangleInfo  = [
  {},
  {1:1765,y:500},
  {2:1615,y:500},
  {3:1465,y:500},
  {4:1315,y:500},
  {5:1165,y:500},
  {6:1015,y:500},
  {7:785,y:500},
  {8:635,y:500},
  {9:485,y:500},
  {10:335,y:500},
  {11:185,y:500},
  {12:35,y:500},
  {13:35,  y:610},
  {14:185, y:610},
  {15:335, y:610},
  {16:485, y:610},
  {17:635, y:610},
  {18:785, y:610},
  {19:1015,y:610},
  {20:1165,y:610},
  {21:1315,y:610},
  {22:1465,y:610},
  {23:1615,y:610},
  {24:1765,y:610},
 ]

  while (Counter<=24) {
    Counter++
    if(Y<600){
      if(TriangleInfo[Counter].y < 600){
      if(TriangleInfo[Counter][Counter] === X - 75){
        break
      }
    }
    }else{
      if(TriangleInfo[Counter].y > 600){
      if(TriangleInfo[Counter][Counter] === X - 75){
        break
      }
    }
    }
  } 

  if(NumbeR === Number2){
    if(TriangleInfo[Counter+NumbeR].y<600){
      CheckBlackCheckers(TriangleInfo[Counter+NumbeR][Counter+NumbeR],TriangleInfo[Counter+NumbeR].y)
     if(Counter2<=1){
       context.clearRect(0,0,1950,1230)
       CreateBoard()
       TopTriangle(TriangleInfo[Counter+NumbeR][Counter+NumbeR])
       InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR][Counter+NumbeR],yigindi:Counter+NumbeR})
       if(TriangleInfo[Counter+NumbeR+Number2].y<600){
         CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],TriangleInfo[Counter+NumbeR+Number2].y)
         if(Counter2<=1){
          TopTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
          if(TriangleInfo[Counter+NumbeR+Number2+Number3].y<600){
            CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
              InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }else{
            CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
               InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                   InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }
         }
       }else{
        CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],TriangleInfo[Counter+NumbeR+Number2].y)
         if(Counter2<=1){
          BottomTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
          if(TriangleInfo[Counter+NumbeR+Number2+Number3].y<600){
            CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
               InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }else{
            CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
               InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }
         }
       }
       BottomTriangle()
       Checkers(X,Y)
     }
    }else{
      CheckBlackCheckers(TriangleInfo[Counter+NumbeR][Counter+NumbeR],TriangleInfo[Counter+NumbeR].y)
     if(Counter2<=1){
       context.clearRect(0,0,1950,1230)
       CreateBoard()
       TopTriangle()
      if(TriangleInfo[Counter+NumbeR+Number2].y<600){
         CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],TriangleInfo[Counter+NumbeR+Number2].y)
         if(Counter2<=1){
          TopTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
          if(TriangleInfo[Counter+NumbeR+Number2+Number3].y<600){
            CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
              InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }else{
            CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
               InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                   InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }
         }
       }else{
        CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],TriangleInfo[Counter+NumbeR+Number2].y)
         if(Counter2<=1){
          BottomTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
          if(TriangleInfo[Counter+NumbeR+Number2+Number3].y<600){
            CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
               InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }else{
            CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
               InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckBlackCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }
         }
       }
       BottomTriangle(TriangleInfo[Counter+NumbeR][Counter+NumbeR])
       InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR][Counter+NumbeR],yigindi:Counter+NumbeR})
       Checkers(X,Y)
     }
    }
    
  }else{
    if(NumbeR !== 0 && Number2 !== 0){
      context.clearRect(0,0,1950,1230)
      CreateBoard()
      CheckBlackCheckers(TriangleInfo[Counter+Number2][Counter+Number2],TriangleInfo[Counter+Number2].y)
      if(Counter2<=1){
        if(TriangleInfo[Counter+Number2].y<600){
           TopTriangle(TriangleInfo[Counter+Number2][Counter+Number2])
           InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+Number2][Counter+Number2],yigindi:Counter+Number2})
        }else{
          BottomTriangle(TriangleInfo[Counter+Number2][Counter+Number2])
          InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+Number2][Counter+Number2],yigindi:Counter+Number2}) 
        }
      
      }
    if(TriangleInfo[Counter+NumbeR].y<600){
      CheckBlackCheckers(TriangleInfo[Counter+NumbeR][Counter+NumbeR],TriangleInfo[Counter+NumbeR].y)
      if(Counter2<=1){
      TopTriangle(TriangleInfo[Counter+NumbeR][Counter+NumbeR])
      InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR][Counter+NumbeR],yigindi:Counter+NumbeR})
      CheckBlackCheckers(TriangleInfo[Counter+Number2+NumbeR][Counter+Number2+NumbeR],TriangleInfo[Counter+Number2+NumbeR].y)
           if(Counter2<=1){
            if(TriangleInfo[Counter+Number2+NumbeR].y<600){
             TopTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
              InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
           }else{
             BottomTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
             InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
           }
           }
      BottomTriangle()
      Checkers(X,Y)
      }
    }else{
      CheckBlackCheckers(TriangleInfo[Counter+NumbeR][Counter+NumbeR],TriangleInfo[Counter+NumbeR].y)
      if(Counter2<=1){
      TopTriangle()
      BottomTriangle(TriangleInfo[Counter+NumbeR][Counter+NumbeR])
      InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR][Counter+NumbeR],yigindi:Counter+NumbeR})
      CheckBlackCheckers(TriangleInfo[Counter+Number2+NumbeR][Counter+Number2+NumbeR],TriangleInfo[Counter+Number2+NumbeR].y)
           if(Counter2<=1){
            if(TriangleInfo[Counter+Number2+NumbeR].y<600){
             TopTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
              InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
           }else{
             BottomTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
             InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
           }
           }
      Checkers(X,Y)
      } 
    }
   }
}
  Checkers(X,Y)
}
if(WhoIsTurn === 'Black'){
   context.clearRect(0,0,1950,1230)
  CreateBoard()
  TopTriangle()
  BottomTriangle()
  Checkers()
  Counter = 0
  TriangleInfo  = [
  {},
  {1:1765,y:610},
  {2:1615,y:610},
  {3:1465,y:610},
  {4:1315,y:610},
  {5:1165,y:610},
  {6:1015,y:610},
  {7:785,y: 610},
  {8:635,y: 610},
  {9:485,y: 610},
  {10:335,y:610},
  {11:185,y:610},
  {12:35,y: 610},
  {13:35,  y:500},
  {14:185, y:500},
  {15:335, y:500},
  {16:485, y:500},
  {17:635, y:500},
  {18:785, y:500},
  {19:1015,y:500},
  {20:1165,y:500},
  {21:1315,y:500},
  {22:1465,y:500},
  {23:1615,y:500},
  {24:1765,y:500},
 ]
  while (Counter<=24) {
    Counter++
    if(Y<600){
      if(TriangleInfo[Counter].y < 600){
      if(TriangleInfo[Counter][Counter] === X - 75){
        break
      }
    }
    }else{
      if(TriangleInfo[Counter].y > 600){
      if(TriangleInfo[Counter][Counter] === X - 75){
        break
      }
    }
    }
  }
  if(NumbeR === Number2){
    if(TriangleInfo[Counter+NumbeR].y<600){
      CheckWhiteCheckers(TriangleInfo[Counter+NumbeR][Counter+NumbeR],TriangleInfo[Counter+NumbeR].y)
     if(Counter2<=1){
       context.clearRect(0,0,1950,1230)
       CreateBoard()
       TopTriangle(TriangleInfo[Counter+NumbeR][Counter+NumbeR])
       InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR][Counter+NumbeR],yigindi:Counter+NumbeR})
       if(TriangleInfo[Counter+NumbeR+Number2].y<600){
         CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],TriangleInfo[Counter+NumbeR+Number2].y)
         if(Counter2<=1){
          TopTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
          if(TriangleInfo[Counter+NumbeR+Number2+Number3].y<600){
            CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
              InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }else{
            CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
              InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
               if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }
         }
       }else{
        CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],TriangleInfo[Counter+NumbeR+Number2].y)
         if(Counter2<=1){
          BottomTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
          if(TriangleInfo[Counter+NumbeR+Number2+Number3].y<600){
            CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
              InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }else{
            CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
              InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
               if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }
         }
       }
       BottomTriangle()
       Checkers(X,Y)
     }
    }else{
      CheckWhiteCheckers(TriangleInfo[Counter+NumbeR][Counter+NumbeR],TriangleInfo[Counter+NumbeR].y)
     if(Counter2<=1){
       context.clearRect(0,0,1950,1230)
       CreateBoard()
       TopTriangle()
      if(TriangleInfo[Counter+NumbeR+Number2].y<600){
         CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],TriangleInfo[Counter+NumbeR+Number2].y)
         if(Counter2<=1){
          TopTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
          if(TriangleInfo[Counter+NumbeR+Number2+Number3].y<600){
            CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
              InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }else{
            CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
              InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
               if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }
         }
       }else{
        CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],TriangleInfo[Counter+NumbeR+Number2].y)
         if(Counter2<=1){
          BottomTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
          if(TriangleInfo[Counter+NumbeR+Number2+Number3].y<600){
            CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
              InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
              if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }else{
            CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],TriangleInfo[Counter+NumbeR+Number2+Number3].y)
            if(Counter2<=1){
              BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3])
              InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3][Counter+NumbeR+Number2+Number3],yigindi:Counter+NumbeR+Number2+Number3})
               if(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y<600){
                 CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  TopTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }else{
                CheckWhiteCheckers(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],TriangleInfo[Counter+NumbeR+Number2+Number3+Number4].y)
                 if(Counter2<=1){
                  BottomTriangle(TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4])
                  InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2+Number3+Number4][Counter+NumbeR+Number2+Number3+Number4],yigindi:Counter+NumbeR+Number2+Number3+Number4})
                 }
              }
            }
          }
         }
       }
       BottomTriangle(TriangleInfo[Counter+NumbeR][Counter+NumbeR])
       InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR][Counter+NumbeR],yigindi:Counter+NumbeR})
       Checkers(X,Y)
     }
    }
    
  }else{
    if(NumbeR !== 0 && Number2 !== 0){
      context.clearRect(0,0,1950,1230)
      CreateBoard()
      CheckWhiteCheckers(TriangleInfo[Counter+Number2][Counter+Number2],TriangleInfo[Counter+Number2].y)
      if(Counter2<=1){
        if(TriangleInfo[Counter+Number2].y<600){
           TopTriangle(TriangleInfo[Counter+Number2][Counter+Number2])
           InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+Number2][Counter+Number2],yigindi:Counter+Number2})
        }else{
          BottomTriangle(TriangleInfo[Counter+Number2][Counter+Number2])
          InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+Number2][Counter+Number2],yigindi:Counter+Number2})
        }
      }
    if(TriangleInfo[Counter+NumbeR].y<600){
      CheckWhiteCheckers(TriangleInfo[Counter+NumbeR][Counter+NumbeR],TriangleInfo[Counter+NumbeR].y)
      if(Counter2<=1){
      TopTriangle(TriangleInfo[Counter+NumbeR][Counter+NumbeR])
      InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR][Counter+NumbeR],yigindi:Counter+NumbeR})
      CheckWhiteCheckers(TriangleInfo[Counter+Number2+NumbeR][Counter+Number2+NumbeR],TriangleInfo[Counter+Number2+NumbeR].y)
      if(Counter2<=1){
        if(TriangleInfo[Counter+Number2+NumbeR].y<600){
          TopTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
        }else{
          BottomTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
        }
      }
      BottomTriangle()
      Checkers(X,Y)
      }
    }else{
      CheckWhiteCheckers(TriangleInfo[Counter+NumbeR][Counter+NumbeR],TriangleInfo[Counter+NumbeR].y)
      if(Counter2<=1){
      TopTriangle()
      BottomTriangle(TriangleInfo[Counter+NumbeR][Counter+NumbeR])
      InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR][Counter+NumbeR],yigindi:Counter+NumbeR})
      CheckWhiteCheckers(TriangleInfo[Counter+Number2+NumbeR][Counter+Number2+NumbeR],TriangleInfo[Counter+Number2+NumbeR].y)
      if(Counter2<=1){
       if(TriangleInfo[Counter+Number2+NumbeR].y<600){
          TopTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:false,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
        }else{
          BottomTriangle(TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2])
          InfoOnWhereToMove.push({bottom:true,X:TriangleInfo[Counter+NumbeR+Number2][Counter+NumbeR+Number2],yigindi:Counter+NumbeR+Number2})
        }
      }
      Checkers(X,Y)
      }
    }
   }
}
  Checkers(X,Y)
}
}
CreateBoard()
TopTriangle()
BottomTriangle()
Checkers()
function CreateBoard(){
    Board1()
    Board2()
    Board3()
    Board4()
}

function TopTriangle(X){
  TopWhiteTriangLe(X)
  TopBlackTriangLe(X)
}
function BottomTriangle(X){
  BottomWhiteTriangLe(X)
  BottomBlackTriangLe(X)
}
function Board1(){
    context.fillStyle ='wheat'
    context.fillRect(20,20,935,1200)
    context.lineWidth = 30
    context.strokeStyle = 'orange'
    context.strokeRect(20,20,935,1200)
    }
function Board2(){
    context.fillStyle ='wheat'
    context.fillRect(1000,20,935,1200)
    context.lineWidth = 30
    context.strokeStyle = 'orange'
    context.strokeRect(1000,20,935,1200)
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
WhiteCheckers = [
  {x:1840,y:150},
  {x:1840,y:75},
  {x:1090,y:885},
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
CreateBoard()
TopTriangle()
BottomTriangle()
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
  NumbeR = 5
  Number2 = 4
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
          Checkers(WhiteChecker.x,WhiteChecker.y)
          HighlightTriangle(WhiteChecker.x,WhiteChecker.y)
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
         HighlightTriangle(BlackChecker.x,BlackChecker.y)
         }
      }) 
      }
    }
    InfoOnWhereToMove.forEach(argument=>{
      console.log(argument.X,argument.yigindi,argument.bottom)
    })
  }
})
