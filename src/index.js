const message = document.querySelectorAll('.message'),
    messagesW = document.querySelector('.messagesW')

const dragStart = function() {
    this.classList.add('drag')
}
const dragEnd = function () {
    this.classList.remove('drag')
    messagesW.appendChild(this)
}
const dragOver = function (e) {
    e.preventDefault()
    return
}
const dragEnter = function (e) {
    e.preventDefault()
    console.log(item)
    messagesW.appendChild(item)
}
let item
message.forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})

messagesW.addEventListener('dragover', dragOver)
messagesW.addEventListener('dragenter', dragEnter)