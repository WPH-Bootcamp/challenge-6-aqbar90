"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
console.log('Book Management Application - Week 6');
console.log('=====================================');
const book1 = {
    title: 'buku1',
    author: 'aqbar1',
    publicationYear: 2000,
};
const book2 = {
    title: 'buku2',
    author: 'aqbar2',
    publicationYear: 2001,
};
const book3 = {
    title: 'buku3',
    author: 'aqbar3',
    publicationYear: 2002,
};
const bookCollection = [book1, book2, book3];
function addBook(book) {
    if (!book.title || !book.author || !book.publicationYear) {
        console.log('Data buku tidak lengkap');
        return;
    }
    bookCollection.push(book);
    console.log(`Buku "${book.title}" Berhasil ditambahkan`);
}
function listBooks() {
    if (bookCollection.length === 0) {
        console.log('Belum ada buku di dalam list');
        return;
    }
    console.log('Daftar Buku');
    bookCollection.forEach((book, index) => {
        console.log(`
      Buku ke-${index + 1}
      title           : ${book.title}
      author          : ${book.author}
      publicationYear : ${book.publicationYear}`);
    });
}
function searchBook(title) {
    if (!title || title.trim() === '') {
        console.log('Masukkan judul buku yang anda cari');
        return;
    }
    const result = bookCollection.filter((book) => book.title?.toLowerCase().includes(title.toLowerCase()));
    if (result.length === 0) {
        console.log(`Buku dengan judul ${title} tidak ditemukan`);
        return;
    }
    console.log(`Hasil pencarian untuk buku ${title} :\n`);
    result.forEach((book, index) => {
        console.log(`
      Buku ke-${index + 1}
      title          :${book.title}
      author         :${book.author}
      publicationYear:${book.publicationYear}`);
    });
}
function runApp() {
    let isRunning = true;
    while (isRunning) {
        console.log('=== Book Management ===');
        console.log('1.Tambahkan Buku');
        console.log('2.Lihat Semua Buku');
        console.log('3.Cari Buku');
        console.log('4.Keluar');
        const choise = prompt('Pilih menu : ');
        switch (choise) {
            case '1':
                const title = prompt('Masukkan judul buku : ');
                const author = prompt('Masukkan nama author : ');
                const publicationYear = Number(prompt('Masukkan tahun terbit : '));
                const NewBook = {
                    title,
                    author,
                    publicationYear,
                };
                addBook(NewBook);
                break;
            case '2':
                listBooks();
                break;
            case '3':
                const keyWord = String(prompt('Masukkan judul buku yang dicari : '));
                searchBook(keyWord);
                break;
            case '4':
                console.log('Keluar dari aplikasi');
                isRunning = false;
                break;
            default:
                console.log('Menu tidak valid');
        }
    }
}
runApp();
