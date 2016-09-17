import { Injectable } from "@angular/core";

import { Product } from "./product.model";

@Injectable()
export class CartService{
    cartItems: {};

    getCartItems(){
        return this.cartItems;
    }

    add(barcode, product){
        this.cartItems[barcode] = product;
    }

    remove(barcode){
        delete this.cartItems[barcode];
    }
}