let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function() {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function() {
    const rowsPerPage = 8;
    const table = document.getElementById("data-table");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));
    const pagination = document.getElementById("pagination");

    const pageCount = Math.ceil(rows.length / rowsPerPage);

    function displayRows(startIndex, endIndex, pageIndex) {
        rows.forEach((row, index) => {
            if (index >= startIndex && index < endIndex) {
                row.style.display = '';
                row.querySelector("td").textContent = (pageIndex * rowsPerPage) + (index - startIndex + 1);
            } else {
                row.style.display = 'none';
            }
        });
    }

    function setupPagination() {
        pagination.innerHTML = '';
        for (let i = 0; i < pageCount; i++) {
            const pageLink = document.createElement("span");
            pageLink.className = 'page-link';
            pageLink.textContent = i + 1;
            pageLink.addEventListener('click', () => {
                displayRows(i * rowsPerPage, (i + 1) * rowsPerPage, i);
                document.querySelectorAll('.page-link').forEach(link => link.classList.remove('active'));
                pageLink.classList.add('active');
            });
            pagination.appendChild(pageLink);
        }
    }

    displayRows(0, rowsPerPage, 0);
    setupPagination();
    pagination.querySelector('.page-link').classList.add('active');
});


// =========================PRODUCT========================= //

document.addEventListener("DOMContentLoaded", function() {
    const rowsPerPage = 3;
    const table = document.getElementById("data-table-product");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));
    const pagination = document.getElementById("pagination");

    const pageCount = Math.ceil(rows.length / rowsPerPage);

    function displayRows(startIndex, endIndex, pageIndex) {
        rows.forEach((row, index) => {
            if (index >= startIndex && index < endIndex) {
                row.style.display = '';
                row.querySelector("td").textContent = (pageIndex * rowsPerPage) + (index - startIndex + 1);
            } else {
                row.style.display = 'none';
            }
        });
    }

    function setupPagination() {
        pagination.innerHTML = '';
        for (let i = 0; i < pageCount; i++) {
            const pageLink = document.createElement("span");
            pageLink.className = 'page-link';
            pageLink.textContent = i + 1;
            pageLink.addEventListener('click', () => {
                displayRows(i * rowsPerPage, (i + 1) * rowsPerPage, i);
                document.querySelectorAll('.page-link').forEach(link => link.classList.remove('active'));
                pageLink.classList.add('active');
            });
            pagination.appendChild(pageLink);
        }
    }

    displayRows(0, rowsPerPage, 0);
    setupPagination();
    pagination.querySelector('.page-link').classList.add('active');
});

// =========================ARTICLE========================= //
document.addEventListener("DOMContentLoaded", function() {
    const rowsPerPage = 3;
    const table = document.getElementById("data-table-article");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));
    const pagination = document.getElementById("pagination");

    const pageCount = Math.ceil(rows.length / rowsPerPage);

    function displayRows(startIndex, endIndex, pageIndex) {
        rows.forEach((row, index) => {
            if (index >= startIndex && index < endIndex) {
                row.style.display = '';
                row.querySelector("td").textContent = (pageIndex * rowsPerPage) + (index - startIndex + 1);
            } else {
                row.style.display = 'none';
            }
        });
    }

    function setupPagination() {
        pagination.innerHTML = '';
        for (let i = 0; i < pageCount; i++) {
            const pageLink = document.createElement("span");
            pageLink.className = 'page-link';
            pageLink.textContent = i + 1;
            pageLink.addEventListener('click', () => {
                displayRows(i * rowsPerPage, (i + 1) * rowsPerPage, i);
                document.querySelectorAll('.page-link').forEach(link => link.classList.remove('active'));
                pageLink.classList.add('active');
            });
            pagination.appendChild(pageLink);
        }
    }

    displayRows(0, rowsPerPage, 0);
    setupPagination();
    pagination.querySelector('.page-link').classList.add('active');
});


// == delete row == //
function confirmDelete(btn) {
    if (confirm("Are you sure you want to delete this item?")) {
        var row = btn.closest('tr');
        row.parentNode.removeChild(row);
    }
}


// ========= MODAL EDIT ========== //

document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("editModal");

    // Get the button that opens the modal
    var editButtons = document.querySelectorAll(".edit-btn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get image preview elements
    var productImgInput = document.getElementById('productImg');
    var productImgPreview = document.getElementById('productImgPreview');

    // When the user clicks on the button, open the modal
    editButtons.forEach(button => {
        button.onclick = function() {
            modal.style.display = "block";
            // Populate form fields with existing data
            var row = button.parentElement.parentElement;
            var imgSrc = row.children[1].querySelector('img').src;
            var name = row.children[2].innerText;
            var price = row.children[3].innerText;
            var desc = row.children[4].innerText;
            productImgPreview.src = imgSrc;
            document.getElementById('productName').value = name;
            document.getElementById('productPrice').value = price;
            document.getElementById('productDesc').value = desc;
        };
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Handle image preview
    productImgInput.onchange = function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            productImgPreview.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    // Handle form submission
    document.getElementById('editForm').onsubmit = function(event) {
        event.preventDefault();
        // Perform form validation and submission logic here
        alert('Form submitted!');
        modal.style.display = "none";
    };
});


// ========= MODAL SEE ========== //

function showDetails(btn) {
    var row = btn.closest('tr');
    var imgSrc = row.cells[1].querySelector('img').src;
    var name = row.cells[2].innerText;
    var price = row.cells[3].innerText;
    var desc = row.cells[4].innerText;

    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-name').innerText = name;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-desc').innerText = desc;

    document.getElementById('detailModal').style.display = "block";
}

var modal = document.getElementById('detailModal');
var closeBtn = document.getElementsByClassName('close-btn')[0];

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ========= MODAL ADD ========== //

function showAddProductModal() {
    document.getElementById('addProductModal').style.display = "block";
}

function closeAddProductModal() {
    document.getElementById('addProductModal').style.display = "none";
}

document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addProduct();
});

function addProduct() {
    const table = document.getElementById('data-table-product').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    cell1.innerText = table.rows.length;
    const img = document.createElement('img');
    img.src = URL.createObjectURL(document.getElementById('productImage').files[0]);
    cell2.appendChild(img);
    cell3.innerText = document.getElementById('productName').value;
    cell4.innerText = document.getElementById('productPrice').value;
    cell5.innerText = document.getElementById('productDesc').value;
    cell6.innerHTML = `
        <button class="see-btn"><ion-icon name="eye"></ion-icon></button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn" onclick="confirmDelete(this)">Delete</button>
    `;

    closeAddProductModal();
}


// ========= MODAL ADD ARTICLE ========== //

function showAddArticleModal() {
    document.getElementById('addArticleModal').style.display = "block";
}

function closeAddArticleModal() {
    document.getElementById('addArticleModal').style.display = "none";
}

document.getElementById('addArticleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addArticle();
});

function addArticle() {
    const table = document.getElementById('data-table-article').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    cell1.innerText = table.rows.length + 1;

    const img = document.createElement('img');
    img.src = URL.createObjectURL(document.getElementById('articleImage').files[0]);
    cell2.appendChild(img);

    cell3.innerText = document.getElementById('articleTitle').value;
    cell4.innerText = document.getElementById('articleDate').value;
    cell5.innerText = document.getElementById('articleText').value;
    cell6.innerHTML = `
        <button class="see-btn"><ion-icon name="eye"></ion-icon></button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn" onclick="confirmDelete(this)">Delete</button>
    `;

    document.getElementById('addArticleForm').reset();
    closeAddArticleModal();
}

// function confirmDelete(button) {
//     if (confirm('Are you sure you want to delete this article?')) {
//         const row = button.closest('tr');
//         row.parentNode.removeChild(row);
//     }
// }
