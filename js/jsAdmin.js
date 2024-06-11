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
    const rowsPerPage = 10;
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

// ========================= ADD USER ========================= //

// Get the modal
var addUserModal = document.getElementById("addUserModal");

// Function to open the modal
function openAddUserModal() {
    addUserModal.style.display = "block";
}

// Function to close the modal
function closeAddUserModal() {
    addUserModal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == addUserModal) {
        addUserModal.style.display = "none";
    }
}



// ========================= SEE USER ========================= //
document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("userDetailsModal");
    const closeModal = document.getElementsByClassName("close-btn2")[0];

    // Close the modal
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal if user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Add event listener to table rows
    const table = document.getElementById("data-table-product");
    table.addEventListener('click', function(e) {
        const target = e.target.closest('tr');
        if (target) {
            const name = target.querySelector('td:nth-child(3)').innerText;
            const address = target.querySelector('td:nth-child(4)').innerText;
            const profileImage = target.querySelector('img').src;
            const telp = target.querySelector('td:nth-child(5)').innerText;
            const email = target.querySelector('td:nth-child(6)').innerText;

            document.getElementById("modalName").innerText = name;
            document.getElementById("modalAddress").innerText = address;
            document.getElementById("modalProfileImage").src = profileImage;
            document.getElementById("modalPhone").innerText = telp;
            document.getElementById("modalEmail").innerText = email;

            modal.style.display = "block";
        }
    });
});



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

// Fungsi untuk menutup modal tambah artikel
function closeAddArticleModal() {
    var modal = document.getElementById("addArticleModal");
    modal.style.display = "none";
}

// Fungsi untuk membuka modal tambah artikel
function openAddArticleModal() {
    var modal = document.getElementById("addArticleModal");
    modal.style.display = "block";
}

// Fungsi untuk menangani pengiriman formulir artikel baru
document.getElementById("addArticleForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah formulir untuk melakukan submit default

    // Ambil data dari formulir
    var title = document.getElementById("articleTitle").value;
    var date = document.getElementById("articleDate").value;
    var text = document.getElementById("articleText").value;
    var image = document.getElementById("articleImage").files[0];

    // Lakukan operasi sesuai kebutuhan, seperti mengirim data ke server
    // Di sini Anda dapat menambahkan kode untuk mengirim data artikel baru ke server

    // Setelah berhasil menambahkan artikel, tutup modal
    closeAddArticleModal();
});

// Event listener untuk menutup modal ketika tombol close diklik
document.querySelector(".close-btn2").addEventListener("click", function() {
    closeAddArticleModal();
});
