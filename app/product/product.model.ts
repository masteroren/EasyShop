export class Product {
    barcode: string;
    name: string;
    price: number;

    constructor(_name: string, _price: number , _barcode: string) {
        this.barcode = _barcode;
        this.name = _name;
        this.price = _price;
    }
}

