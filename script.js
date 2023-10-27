
let library = []

document.addEventListener("DOMContentLoaded", function(){
  let pop = document.querySelector('.pop-main')
  let popBtn = document.querySelector('.pop-btn')
  let colseBtn = document.querySelector('.x-btn')
  let title = document.querySelector('#title')
  let author = document.querySelector('#Author')
  let pages = document.querySelector('#Pages')
  let read = document.querySelector('#read')
  let subBtn = document.querySelector('.subBtn')
  let delBtn= document.querySelector('.dltBtn')
  popBtn.addEventListener("click", function(){
    pop.style.display='flex'
  })
  
  colseBtn.addEventListener("click", function(){
    pop.style.display='none'
  })
  
  
  subBtn.addEventListener('click', function(e){
    e.preventDefault()
    addBookToLibrary()
  })
})

function render() {
  let newBooks = document.querySelector('.books')
  newBooks.innerHTML = ''
  for(i=0; i<library.length; i++){
    console.log(library[i])
    let book = library[i]
    let div = document.createElement('div')
    div.innerHTML = 
    `<div class='flex-container'>
      <div class='flex-main'>
        <div class='flex-one'>
          <p>Title: ${book.title}</p>
          <p>Author: ${book.author}</p>
          <p>Pages: ${book.pages}</p>
        </div>
        <div class='flex-two'>
          <p>${book.read? 'read' : 'not read'}</p>
          <button class='dltBtn' onClick='remove(${i})'>Remove</button>
          <button class='dltBtn' onClick='toggleRead(${i})'>Toggle Read</button>
        </div>
        </div>
     </div>`
    newBooks.appendChild(div)
  }
}

function Book(title, author, pages, read) {
   this.title = title
   this.author = author
   this.pages = pages
   this.read = read
}
Book.prototype.toggleRead = function(){
  this.read = !this.read
}

function toggleRead(index) {
  library[index].toggleRead()
  render()
}

function remove(index) {
  console.log(index)
  library.splice(index,1)
  render()
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value
  let author = document.querySelector('#Author').value
  let pages = document.querySelector('#Pages').value
  let read = document.querySelector('#read').checked
  let newBook = new Book(title,author,pages,read)
  library.push(newBook)
  render()
}