import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { Product } from "../product/product.model";

@Injectable()
export class CartService{
    totalPrice: number = 0;
    cartItems: Array<Product> = [];

    constructor(){
        console.log("Cart service constructor...");
    }

    isEmpty(){
        return this.cartItems.length == 0;
    }


    getItems(){
        console.log("Items in cart", this.cartItems.length);
        return this.cartItems;
    }

    addItem(product: Product){
        console.log("Adding product to curt => ", product.name);
        this.cartItems.push(product);
        console.log("Items in cart", this.cartItems.length);
        // this.totalPrice += product.price;
    }

    removeItem(barcode){
        _.remove(this.cartItems, item => {
            item.barcode == barcode;
        })
    }

    getTotalPrice(){
        return this.totalPrice;
    }
}