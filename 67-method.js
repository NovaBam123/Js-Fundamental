/*  METHODS
    Static Method:
    - dipanggil langsung dari kelas tanpa membuat instance object
    - tidak memiliki akses ke property non static karena tidak memiliki instance object.
    - static method dapat diwariskan dan dipanggil dari subclass tanpa membuat instance dari superclass dan subclass.
    Method: 
    -dibuat dan dipanggil berhubungan dengan instance object
    -memiliki akses ke-static dan non static 
    -Method diwariskan namun dalam konteks "this" merujuk pada instance object subclass, bukan superclass.
*/
class Shape{
    constructor(height, width){
        this.height= height;
        this.width= width;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.height*this.width;
    }
    *getSides(){
        yield this.height;
        yield this.width;
    }
}
const shape= new Shape(10, 10)
console.log("01.", shape.area);
console.log("02.", [...shape.getSides()]);