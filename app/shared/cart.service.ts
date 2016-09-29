import { Injectable } from "@angular/core";

@Injectable()
export class CartService{

    totalPrice: number = 0;

    cartItems = {};

    getItems(){
        return this.cartItems;
    }

    addItem(barcode, product){

        this.cartItems[barcode] = product;
        this.totalPrice += product.price;
    }

    removeItem(barcode){
        this.totalPrice -= this.cartItems[barcode].price;
        delete this.cartItems[barcode];
    }

    getTotalPrice(){
        return this.totalPrice;
    }
}