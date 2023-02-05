const myLibrary = [];

function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}

function addBookToMyLibrary(Title, Author, Pages, Read) {
    const book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    displayBookInMyLibrary();
}


function displayBookInMyLibrary() {
    const books = document.querySelector(".books");

    const removeCards = document.querySelectorAll(".card");
    for(let i = 0; i < removeCards.length; i++) {
        removeCards[i].remove();
    }

    let index = 0;
    myLibrary.forEach(myLibrarys => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        const removeBookBtn = document.createElement("button");
        removeBookBtn.classList.add("removeBookBtn");
        removeBookBtn.textContent = "Remove Book";
        console.log("merge" + myLibrarys);

        removeBookBtn.dataset.linkedArray = index;
        index++;
        card.appendChild(removeBookBtn);

        removeBookBtn.addEventListener("click", removeCardFct);
         
        function removeCardFct() {
            let retrieveBookToRemove = removeBookBtn.dataset.linkedArray;
            myLibrary.splice(parseInt(retrieveBookToRemove), 1);
            card.remove();
            displayBookInMyLibrary();
        }


        const toggleReadStatusBtn = document.createElement("button");
        toggleReadStatusBtn.classList.add("readStatusBtn");
        toggleReadStatusBtn.textContent = "Toggle Read Status"

        toggleReadStatusBtn.dataset.linkedArray = index;
        card.appendChild(toggleReadStatusBtn);

        toggleReadStatusBtn.addEventListener("click", toggleReadStatus);

        function toggleReadStatus () {
            let retireveBookToToggle = toggleReadStatusBtn.dataset.linkedArray;
            Book.prototype = Object.create(Book.prototype);
            const toggleBook = new Book();

            if((myLibrary[parseInt(retireveBookToToggle)].Read) == "YES") {
                toggleBook.Read = "NO";
                myLibrary[parseInt(retireveBookToToggle)].Read =toggleBook.Read;
            } else if ((myLibrary[parseInt(retireveBookToToggle)].Read) == "NO") {
                toggleBook.Read = "YES";
                myLibrary[parseInt(retireveBookToToggle)].Read = toggleBook.Read;
            }
            displayBookInMyLibrary();
        }


        for(let elem in myLibrarys) {
            const paragraph = document.createElement("p");
            paragraph.classList.add("cardText");
            paragraph.textContent = (`${elem}: ${myLibrarys[elem]}`);
            card.appendChild(paragraph);
        }
        index++;
    })
}

const addBookBtn = document.querySelector(".addBookBtn");
addBookBtn.addEventListener("click", displayForm);

function displayForm() {
    document.querySelector(".addBookForm").style.display= "";
}

const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", intakeForm);

function intakeForm() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

    if( Title == "" || Author == "" || Pages == "" || Read == "") {
        return alert("Write some Name, Author, Pages and if you aleady read!!!");
    }

     addBookToMyLibrary(Title, Author, Pages, Read);

     document.getElementById("add-book").reset();
 
}

const clearBtn = document.querySelector(".resetBtn");
clearBtn.addEventListener("click", resetForm);

function resetForm() {
    document.getElementById("add-book").reset();
}


