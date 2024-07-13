const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.read = read; 

    this.reportInfo= function() {
        console.log(`${title} by ${author}, ${pages} pages, ${read}`); 
    }
}

function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    clearInput();
  }

 function displayBook() {
    myLibrary.forEach((array) => {
        const card = document.createElement("div");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const emptyDiv = document.createElement("div");
        const read = document.createElement("button");
        const deleteBtn = document.createElement("button");
        card.classList.add("card");
        read.classList.add("read");
        deleteBtn.classList.add("delete");
        title.innerHTML = `<b>Title:</b> ${array.title}`;
        author.innerHTML = `<b>Author:</b> ${array.author}`;
        pages.innerHTML = `<b>Pages:</b> ${array.pages}`;
        if (array.read) {
            read.textContent = "Read: Yes";
        } else {
            read.textContent = "Read: No";
        }
        deleteBtn.textContent = "Delete";
        read.addEventListener ("click", (e) => {
            if (e.target.textContent == "Read: Yes") {
                e.target.textContent = "Read: No";
            } else {
                e.target.textContent = "Read: Yes";
            }
            
         })
        deleteBtn.addEventListener ("click",(e) => {
            const cardRemove = deleteBtn.closest(".card")
            cardRemove.remove();
         }) 
        emptyDiv.appendChild(deleteBtn);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(emptyDiv);
        document.querySelector(".books").appendChild(card);
        myLibrary.length = 0; 
      })
 }


 function clearInput () {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").checked = false;
 }

const dialog = document.querySelector("dialog");
const readBtns = document.querySelectorAll(".read")
const deleteBtns = document.querySelectorAll(".delete")
const addBtn = document.querySelector(".add")
const cancelBtn = document.querySelector("#cancel")
const submitBtn = document.querySelector("#submit")

 addBtn.addEventListener ("click", (e) => {
    dialog.showModal();
 })

 cancelBtn.addEventListener ("click", (e) => {
    dialog.close();
 })

 submitBtn.addEventListener ("click", (e) => {
    addBookToLibrary()
    dialog.close();
    displayBook()
 })

 deleteBtns.forEach(deletebtn => {
    deletebtn.addEventListener ("click",(e) => {
        const cardRemove = deletebtn.closest(".card")
        cardRemove.remove();
     })
 })


 readBtns.forEach (readbtn => {
    readbtn.addEventListener ("click", (e) => {
        if (e.target.textContent == "Read: Yes") {
            e.target.textContent = "Read: No";
        } else {
            e.target.textContent = "Read: Yes";
        }
        
     })
 })


    
 