/* import User from './User'
let employee = new User()
console.log(`user name:`, employee.getName()) */



let items = document.querySelectorAll('.box')
let ball = document.querySelector('.ball')
let globThis = null

function handleDragStart(e){
  // console.log(`start`, this)
  globThis = this.querySelector('img')
}

function handleDragOver(e){
  e.preventDefault()
}

function handleDrop(e){
  e.stopPropagation()
  console.log(globThis)


  this.append(globThis)
  return false
}

function handleDragEnd(e){  
}

items.forEach(item => {
  item.addEventListener('dragstart', handleDragStart, false)
  item.addEventListener('dragover', handleDragOver, false)
  item.addEventListener('drop', handleDrop, false)
  item.addEventListener('dragend', handleDragEnd, false)
})