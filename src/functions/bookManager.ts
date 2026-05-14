// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

function addBook(book: BookManagement): void {
  if (!book.title || !book.author || !book.publicationYear) {
    console.log('Data buku tidak lengkap');
    return;
  }
  bookCollection.push(book);
  console.log(`Buku ${book.title} Berhasil ditambahkan`);
}
// console.log(bookCollection);

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

function listBooks(): void {
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
listBooks();

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

function searchBook(title?: string): void {
  if (!title || title.trim() === '') {
    console.log('Masukkan judul buku yang anda cari');
    return;
  }

  const result = bookCollection.filter((book) =>
    book.title?.toLowerCase().includes(title.toLowerCase())
  );

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
searchBook();
