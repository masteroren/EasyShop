import { Injectable } from "@angular/core";

import { Product } from "./product.model";

@Injectable()
export class CartService{
    products: {};

    getItems(){
        return this.products;
    }

    addItem(barcode, product){
        this.products[barcode] = product;
    }

    removeItem(barcode){
        delete this.products[barcode];
    }
}