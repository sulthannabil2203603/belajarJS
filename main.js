// console.log("Hello World")
// alert("Notifikasi")
// prompt("hai kau")

// var Promnet = "Coding is Easy (Bismillah)"
// console.log(Promnet)
// var Promnet = "Coding is Not Easy (Astagfirullah)"
// console.log(Promnet)

// let Promnet = "Coding is Easy (Bismillah)"
// console.log(Promnet)
// let Promnet = "Coding is Not Easy (Astagfirullah)"
// console.log(Promnet)

// const Promnet = "Coding is Easy (Bismillah)"
// console.log(Promnet)
// const Promnet = "Coding is Not Easy (Astagfirullah)"
// console.log(Promnet)

// let totalPoin = prompt("Masukkan Poin Anda")
//     if(totalPoin > 100){
//         document.write("Congratulations");
//     }
//     else{
//         {
//             document.write("Hayolo");
//         }
//     }

// const x = 6;
// const y = 3;

// if (x < 10 && y > 1) {
//   console.log("a: true");
// } else {
//   console.log("a: false");
// }

// if (x < 10 && y < 1) {
//   console.log("b: true");
// } else {
//   console.log("b: false");
// }

// if (x == 5 || y == 5) {
//   console.log("c: true");
// } else {
//   console.log("c: false");
// }

// if (x == 6 || y == 5) {
//   console.log("d: true");
// } else {
//   console.log("d: false");
// }

// if (!(x == y)) {
//   console.log("e: true");
// } else {
//   console.log("e: false");
// }

// let x =6;
// let y =3;

// console.log(x < 10 && y > 1)
// console.log(x < 10 && y < 1)
// console.log(x == 5 || y == 5)
// console.log(x == 6 || y == 5)
// console.log(!(x == y))

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

// Fungsi untuk menambahkan tugas baru
// function addTask() {
//     const taskInput = document.getElementById("task");
//     const taskText = taskInput.value.trim();

//     if (taskText !== "") {
//         const taskList = document.getElementById("taskList");
//         const taskItem = document.createElement("li");
//         taskItem.textContent = taskText;

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Hapus";
//         deleteButton.onclick = function () {
//             taskItem.remove();
//         };

//         taskItem.appendChild(deleteButton);
//         taskList.appendChild(taskItem);

//         taskInput.value = "";
//     }
// }

// // Mengambil referensi ke tombol " Tambahkan" dan menambahkan event listener
// const addButton = document.getElementById("addButton");
// addButton.addEventListener("click", addTask);
/* Basic Style */

const button = document.getElementById('tombol_form');
const input = document.getElementById('input');
const hasilContainer = document.getElementById('hasil');

button.addEventListener('click', function(){
    const isi = input.value;
    if (isi.trim() !== '') {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const teks = document.createElement('span');
        teks.textContent = isi;

        const hapus = document.createElement('span');
        hapus.textContent = ' X';
        hapus.className = 'hapus-item'; 
        hapus.style.cursor = 'pointer';
        hapus.style.color = 'black';
        
        const item = document.createElement('div');
        item.appendChild(checkbox);
        item.appendChild(teks);
        item.appendChild(hapus);

        hasilContainer.appendChild(item);

        input.value = '';

        hapus.addEventListener('click', function() {
            hasilContainer.removeChild(item);
        });

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                teks.style.textDecoration = 'line-through';
            } else {
                teks.style.textDecoration = 'none';
            }
        });
    }
});