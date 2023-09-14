
const tabellone = []

const numbers = function(){
  
    for(let i=1; i<77;i++){
    tabellone.push(i)}

    const createNumber = function(){
        for(let i=0; i < tabellone.length;i++) {
        const grill = document.getElementById('tabellone')
        const newGrillElement = document.createElement('span')
        newGrillElement.classList.add('numero')
        newGrillElement.innerText = tabellone[i]
        grill.appendChild(newGrillElement)
       
        console.log(newGrillElement)
    }
        }
    createNumber()
}  
numbers()
console.log(tabellone)   



const bottone = function(){
    const but = document.querySelector('button')
    but.addEventListener('click', ()=>{
    Math.floor(Math.random()*77)
    but.classList.add('estratto')
   
     } )

   }     
bottone()
console.log(generated)





