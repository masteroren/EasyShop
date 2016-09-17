import { Injectable } from "@angular/core";

import { Product } from "./product.model";

@Injectable()
export class CartService{
    cartItems: {};

    getItems(){
        return this.cartItems;
    }

    addItem(barcode, product){
        this.cartItems[barcode] = product;
    }

    removeItem(barcode){
        delete this.cartItems[barcode];
    }
}