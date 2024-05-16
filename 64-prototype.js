/*
    prototype merupakan objek yang digunakan sebagai template untuk membuat obj baru.
    ketika obj dibuat, js mencari prop dan metode pada obj tsb, jika tidak ditemukan maka akan mencarinya dalam rantai prototype yang dihubungkan oleh hal tsb pd setiap obj.
    Syntax: 
    - let obj= Object.create(prototypeObject): 
      "Membuat object dg prototype tertentu"
    - Object.setPrototypeOf();
      membuat objek baru dgn prototype dan property tertentu.
      kedua cara ini adalah cara yg disarankan dan sesuai standar.
    
    - __proto__:    
      property non standar yang digunakan untuk mengakses atau mengubah prototype object secara langsung.
      let obj= {};  
      obj.__proto__= prototypeObject;  

    - obj.__proto__ accesor:   
      cara lain untuk mengakses atau mengubah prototype objek.
      merujuk langsung ke prototype dari obj
      let obj= {}
      let protoObj= obj.__proto__;  

    Fungsi: 
    1.  Pewarisan(inheritence):
        memungkinkan obj untuk mewarisi prop dan method dari obj lain. 
    2.  Eketensibilitas(extensiblity):
        menambahkan prop dan metode baru kesemua obj dari suatu tupe tanpa mengubah definisi asli dari tipe tsb.
    3.  Penggunaan kode yang efisien:
        dg prototype dapat mendefinikan metode diluar fungsi constructor, sehingga hanya ada satu salinan method yang dibagiakan pada semua obj.
    4.  Polimorfisme(Polymorphism):
        Dapat mengganti implementasi method yg diwarisi dg implementasi baru pada obj turunan.
    5.  Pembaharuan Secara Dinamis: 
        memperbaharui prop dan metode pada suatu obj disaat run time, sehingga aplikasi tsb dinamis dan fleksibel.
    3 konsep pencarian prop dalam chain prototype:
    - Dynamic Bags of property:
        ini berarti prop dapat ditambahkan, dihapus dan diperbaharui kapan-pun selama runtime. Prop ini disebut "Own Properties".
    - Link to a Prop Obj:
        Setiap obj memiliki referensi thd obj prototype. prototype ini adalah obj yang digunakan sebagai tempelate untuk obj tsb. ketika mengakses prop dari obj, js juga akan mencari property tsb pada prototype obj-nya.
    - Pencarian Property pada rantai proto:
        ketika prop coba diakses, js akan mencari prop tsb pada obj itu sendiri, jika tidak ditemukan akan dilanjutkan pencarian pada proto obj. proses ini berlanjut secara berurut hingga properti terakhir(obj dg proto Null).        
*/
