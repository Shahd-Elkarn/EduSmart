// ==================== USER CHECK ====================
const currentUser = getCurrentUser();

if (!currentUser) {
    window.location.href = "/Auth/Login/Login.html";
}

// ==================== API ====================
const API_URL =
"https://www.googleapis.com/books/v1/volumes?q=computer+science&maxResults=8";

// ==================== GLOBAL BORROWED BOOKS ====================
// {
//   "BOOK_ID": "user@email.com"
// }
let borrowedBooks =
JSON.parse(localStorage.getItem("borrowedBooks")) || {};

// ==================== LOAD BOOKS ====================
async function loadBooks(){
    const res = await fetch(API_URL);
    const data = await res.json();
    renderBooks(data.items);
}

// ==================== RENDER BOOKS ====================
function renderBooks(books){
    const library = document.getElementById("library");
    library.innerHTML = "";

    books.forEach(book => {
        const info = book.volumeInfo;
        const id = book.id;

        const isBorrowed = borrowedBooks[id];
        const isMyBook = borrowedBooks[id] === currentUser.email;

        library.innerHTML += `
        <div class="card">
            <img src="${info.imageLinks?.thumbnail || ''}">
            <h3>${info.title}</h3>
            <p>Author: ${info.authors?.[0] || "Unknown"}</p>

            <p class="status ${isBorrowed ? "borrowed" : "available"}">
                ${isBorrowed ? "Borrowed" : "Available"}
            </p>

            <button
                ${isBorrowed && !isMyBook ? "disabled" : ""}
                class="${isBorrowed ? "return" : ""}"
                onclick="${
                    isBorrowed
                      ? isMyBook ? `returnBook('${id}')` : ""
                      : `borrowBook('${id}')`
                }">
                ${
                    isBorrowed
                      ? isMyBook ? "Return Book" : "Not Available"
                      : "Borrow Book"
                }
            </button>
        </div>`;
    });
}

// ==================== BORROW BOOK ====================
function borrowBook(id){
    // حماية إضافية
    if (borrowedBooks[id]) return;

    borrowedBooks[id] = currentUser.email;

    localStorage.setItem(
        "borrowedBooks",
        JSON.stringify(borrowedBooks)
    );

    alert("Book borrowed successfully 📚");
    loadBooks();
}

// ==================== RETURN BOOK ====================
function returnBook(id){
    if (borrowedBooks[id] !== currentUser.email) return;

    delete borrowedBooks[id];

    localStorage.setItem(
        "borrowedBooks",
        JSON.stringify(borrowedBooks)
    );

    alert("Book returned successfully ✅");
    loadBooks();
}

// ==================== INIT ====================
loadBooks();
