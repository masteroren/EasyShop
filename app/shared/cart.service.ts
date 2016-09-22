import { Injectable } from "@angular/core";
import { PRODUCTSTOBUY } from "../product/productListToBuy";
import { Product } from "./models/product.model";

@Injectable()
export class CartService{
    products = PRODUCTSTOBUY;

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