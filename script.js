const myLibrary = [
    {
        title: "Dragon Ball",
        author: "Akira Toriyama",
        pages: "Over 9000!",
        read: true,
    },
];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
};

function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    clearInput();
  };

 function displayBook() {
    const getLastBook = myLibrary.length - 1; 
    for (let i = getLastBook; i < myLibrary.length; i++) {
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
        title.innerHTML = `<b>Title:</b> ${myLibrary[i].title}`;
        author.innerHTML = `<b>Author:</b> ${myLibrary[i].author}`;
        pages.innerHTML = `<b>Pages:</b> ${myLibrary[i].pages}`;
        if (myLibrary[i].read) {
            read.textContent = "Read: Yes";
        } else {
            read.textContent = "Read: No";
        };
        deleteBtn.textContent = "Delete";
        read.addEventListener ("click", (e) => {
            if (e.target.textContent == "Read: Yes") {
                e.target.textContent = "Read: No";
                myLibrary[i].read = false;
            } else {
                e.target.textContent = "Read: Yes";
                myLibrary[i].read = true;
            };
            
         });
        deleteBtn.addEventListener ("click",() => {
            const cardRemove = deleteBtn.closest(".card");
            cardRemove.remove();
            myLibrary.splice(i, 1);
         });
        emptyDiv.appendChild(deleteBtn);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(emptyDiv);
        document.querySelector(".books").appendChild(card);
    };
 };

 function clearInput () {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").checked = false;
 };

const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector("#cancel");
const submitBtn = document.querySelector("#submit");

 addBtn.addEventListener ("click", () => {
    dialog.showModal();
 });

 cancelBtn.addEventListener ("click", () => {
    dialog.close();
 });

 submitBtn.addEventListener ("click", () => {
    addBookToLibrary();
    dialog.close();
    displayBook();
 });

displayBook();