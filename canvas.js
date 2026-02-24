const game = document.querySelector('.game')
const context = game.getContext('2d')
console.log(context)
// class circle {
//     constructor(x,y,radius) {
//         this.x = x
//         this.y= y
//         this.radius = radius
//     }
//     draw(context){
//         context.beginPath()
//         context.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
//         context.fillStyle = 'black'
//         context.fill()
//         context.stroke()
//     }
//     updateCircl(){
//         context.clearRect(0,0,700,700)
//         this.draw(context)
//         this.x+=10
//         this.y+=10
//     }
//     eventCircle(mouseX,mouseY){
//      const distance = Math.sqrt(
//         ((mouseX - this.x)*(mouseX - this.x))
//         +
//         ((mouseY - this.y )*(mouseY - this.y))
//      )
//      if(distance< this.radius){
//         updateCircle()
//      }
//     }
// }
// let myCircle = new circle(200,200,50)
// myCircle.draw(context)
// let updateCircle = () =>{
//       requestAnimationFrame(updateCircle)
//       myCircle.updateCircl()
// }
// game.addEventListener('click', (e)=>{
//     let x= e.clientX 
//     let y= e.clientY
//     myCircle.eventCircle(x,y)
// })
// context.moveTo(100,100)
// context.lineTo(200,300)
// context.lineTo(300,100)
// context.fillStyle='red'
// context.fill()
CreateBoard()
function CreateBoard(){
    function Board1(){
    context.fillStyle ='wheat'
    context.fillRect(20,20,900,1200)
    context.lineWidth = 30
    context.strokeStyle = 'orange'
    context.strokeRect(20,20,900,1200)
    }
    function Board2(){
    context.fillStyle ='wheat'
    context.fillRect(960,20,900,1200)
    context.lineWidth = 30
    context.strokeStyle = 'orange'
    context.strokeRect(960,20,900,1200)
    
    }
    Board1()
    Board2()
}
 function TopWhiteTriangle(){
      function WhiteTriangle () {
        context.beginPath()
        context.moveTo(35,35)
        context.lineTo(100,400)
        context.lineTo(180,35)
        context.closePath()
        context.fillStyle ='white'
        context.fill()
        
      }
      function White2Triangle () {
        context.beginPath()
        context.moveTo(340,35)
        context.lineTo(390,400)
        context.lineTo(490,35)
        context.closePath()
        context.fillStyle ='white'
        context.fill()
        
      }
      WhiteTriangle()
      White2Triangle()
    }
    TopWhiteTriangle()
    function TopBlackTriangle(){
      function BlackTriangle () {
        context.beginPath()
        context.moveTo(180,35)
        context.lineTo(260,400)
        context.lineTo(340,35)
        context.closePath()
        context.fillStyle ='black'
        context.fill()
      }
      BlackTriangle()
      function Black2Triangle () {
        context.beginPath()
        context.moveTo(490,35)
        context.lineTo(550,400)
        context.lineTo(650,35)
        context.closePath()
        context.fillStyle ='black'
        context.fill()
      }
      Black2Triangle()
    }
    TopBlackTriangle()
    
