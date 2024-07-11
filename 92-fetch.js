/*
    Fetch digunakan untuk memulai proses pengambilan (fetching) sumber daya dari sebuah jaringan. Mengembalikan sebuah promise yang mewakili respons terhadap permintaan (request) user.
    1. Promise resolve to response Object: 
        Promise yang dikembalikan oleh fetch akan diselesaikan (resolve) menjadi object "RESPONSE" yang mewakili permintaan (request) dari kita.
    2. Promise rejection:
        Promise dari fetch() akan ditolak jika permintaan gagal, misal dikarenakan URL permintaan salah atau kesalah jaringan. Namun saat status 404 atau 504 ini dicek dalam response.ok atau response.status dalam handler than().
        -response.ok: properti ini bernilai true(kode 200-299) dan false jika tidak.
        -response.status: properti yg memberikan informasi status HTTP dari respons. misal: 200-> OK, 404-> NOT Found.
    3. CSP(Content Security Policy) 
        method ini dikendalikan oleh direktif "connect src" dari CSP dan bukan dari direktif sumber daya yang diambil.
    4. Parameter 
        Parameter dari method fetch() identik dengan parameter constructor Request(). kita dapat menggunakan objek "request untuk mendetailkan" permintaan lebih lanjut, termasuk header, body, dll.
    SYNTAX:
    -fetch(resource)    
    -fetch(resource, options)
    a).resources: mendifinisikan sumber daya yang ingin kita ambil(fetch), dapat    berupa string atau object yang diubah kedalam string(seperti object URL).
    b).options: merupakan object yg berisi pengaturan kustom yang ingin diterapkan pada permintaan.
    - method: "POST" 
    - headers: {"content-Type:" "application/json"} 
    - body: JSON.stringify(data)

    Parameter "body" dalam opsi fetch digunakan untuk menentukan data yg diinginkan bersama permintaan HTTP. beberapa tipe data:
    Blob, ArrayBuffer, TypedArray, Dataview, FormData, URLSearchParams, String, ReadableStream
    NOTE:
    Method get() dan head() tidak mendukung body.
    TopicAPI-> experimental memungkinkan situs web memahami minat pengguna berdasar aktivitas browser.

    Catch options:
    1. default- perilaku catch standar dalam browser
    2. no store
    - permintaan tidak akan menyimpan respons di cache, dan respon tidak akan diambil dari catch. memastikan data selalu fresh dan tidak diambil dari catch.
    3. Reload-> browser mengubungi server untuk mendapatkan versi terbaru dari sumber daya. respon disimpan dalam catch.
    4. no-cathe-> browser akan selalu memeriksa server untuk mendapatkan versi terbaru dari resources, tetapi juga dapat menggunakan versi yang disimpan dalam di cache.
    5. force-catch browser selalu menggunakan respons yg disimpan dalam catch tanpa memeriksa server. jika tidak ada barulah melakukan permintaan.
    6. only-if cached: hanya akan menggunakan respon yg ada dicache. jika tidak ada maka gagal.

    Credential Option: 
    mengontrol bagaimana browser menangani credential cookie, entri autensifikasi, sertifikasi klien TLS saat membuat permintaan.
    1. Omit: browser mengecualikan kredential dari permintaan, dan mengabaikannya yang dikirim kembali lewat respon(header set-cookie)-> digunakan ketika kita tidak ingin mengirim dan menerima kredential apapun.
    2. same-origin: Menginstrusikan browser menyertakan credential dengan permintaan ke URL dengan asal yang sama, dan menggunakan credential apa pun yang dikirim kembali dalam respon dari URL. nilai-nya: default.
    3. Include: menginstrusikan browser untuk menyertakan credential dalam permintaan ke URL dengan asal yg sama maupun lintas asal(cross-origin) dan selalu menggunakan credential yang dikirim kembali dalam respon.
    kegunaan: ketika kita ingin menyertakan credential untuk semua permintaan, baik ke asal atau cross-origin.
    NOTE: 
    -Preflight request: dalam konteks CORS(Cross Origin Resources Sharing) kredensail seharusnya tidak disertakan dalam permintaan preflight CORS(option request) yg dilakukan sebelum permintaan utama.
    -kredential dalam permintaan (cross-origin) menyertakan credential dapat memiliki implikasi keamanan, sehingga harus digunakan secara hati-hati.

*/  
// CONTOH PENGGUNAAN FETCH U/ MENGAMBIL DATA DARI SUAT URL
fetch("https://api.example.come/data")
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok" + response.statusText);
        }
        return response.json()
    })
    .then(data=> {
        console.log(data)
    })
    .catch(error=> {
        console.error("Fetch is fail:", error)
    })
// CONTOH PARAMETER OPTION OBJECT REQUEST:
const request =  new Request('http://api.example.com/data', {
    method: "POST", 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ key: "value"}) //convert to JSON string
})    
fetch(request)
    .then(response=> {
        console.log(response.status)
    })
    .catch(error=> console.log(error))

// 1. Blob : file Mentah atau data biner dalam ukuran byte. (gambar/file/video)
const blob = new Blob(['Hello, world!'], { type: 'text/plain' });
fetch('https://api.example.com/upload', {
    method: 'POST',
    body: blob
});

// 2. ArrayBuffer : data biner mentah.
const buffer = new ArrayBuffer(8);
fetch('https://api.example.com/upload', {
    method: 'POST',
    body: buffer
});

// 3.TypedArray: Uint8Array, Int16Array dll
const typedArray = new Uint8Array([21, 31]);
fetch('https://api.example.com/upload', {
    method: 'POST',
    body: typedArray
});

// 4. DataView: cara flexible untuk membaca dan menulis data ke dalam ArrayBuffer
const buffer2 = new ArrayBuffer(8);
const view = new DataView(buffer2);
fetch('https://api.example.com/upload', {
    method: 'POST',
    body: view
});

// 5. FormData : mengumpulkan pasangan kunci/nilai seperti yg dikirimkan dalam HTML mengirim data multipart seperti file upload bersama dengan field lainnya.
const formData = new FormData();
formData.append('username', 'example');
formData.append('file', fileInput.files[0]);
fetch('https://api.example.com/upload', {
    method: 'POST',
    body: formData
});

// 6. URLSearchParams : object yang menyediakan cara mengkonstruksi dan memanipulasi string query URL. => mengirim data dalam bentuk query string.
const params = new URLSearchParams();
params.append('name', 'example');
params.append('age', '30');
fetch('https://api.example.com/data', {
    method: 'POST',
    body: params
});

// 7.String: Data/teks mentah dalam bentuk string. (JSON, text biasa/plain text)
fetch('https://api.example.com/data', {
    method: 'POST',
    body: JSON.stringify({ key: 'value' }),
    headers: {
        'Content-Type': 'application/json'
    }
});

// 8. ReadableStream(Expremintal): memungkinkan kita mengalirkan data ke server.
const stream = new ReadableStream({
    start(controller) {
        controller.enqueue('Stream data');
        controller.close();
    }
});
fetch('https://api.example.com/upload', {
    method: 'POST',
    body: stream
});

// CONTOH FETCH DENGAN OPSI CATCHE.
fetch('https://example.com/api/data', {
    method: 'GET',
    cache: 'no-cache' // Menggunakan opsi cache 'no-cache'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Fetch error:', error));

// CONTOH CREDENTIAL-omit
fetch('https://example.com/api/data', {
    method: 'GET',
    credentials: 'omit' // Kredensial tidak akan dikirim atau diterima
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Fetch error:', error));
// same-origin:
fetch('https://example.com/api/data', {
    method: 'GET',
    credentials: 'same-origin' // Kredensial hanya akan dikirim untuk permintaan dengan asal yang sama
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Fetch error:', error));
// include
fetch('https://example.com/api/data', {
    method: 'GET',
    credentials: 'include' // Kredensial akan dikirim untuk permintaan lintas asal dan asal yang sama
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Fetch error:', error));




        