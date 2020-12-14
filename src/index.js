/* import User from './User'
let employee = new User()
console.log(`user name:`, employee.getName()) */

let dragSrcEl = null

function onDragStart(e){
    //console.log(`start`)
    dragSrcEl = this
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML)
}

function onDragOver(e){
    if (e.preventDefault) {
        e.preventDefault();
      }
    return false
}

function onDrop(e){
    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }
      
      if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
      
      return false;
}

function onDragEnd(e){
/*     if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }
 */

    // glob.innerHTML = this.innerHTML 
    // this.innerHTML = e.dataTransfer.getData('text/html')
}


let items = document.querySelectorAll('.item')

items.forEach(item => {
    // console.log(`item`, item)
    item.addEventListener('dragstart', onDragStart, false)
    item.addEventListener('dragover', onDragOver, false)
    item.addEventListener('drop', onDrop, false)
    item.addEventListener('dragend', onDragEnd, false)
})