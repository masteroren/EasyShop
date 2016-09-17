import { Injectable } from "@angular/core";
import barcodescannerModule = require("nativescript-barcodescanner");

import { PRODUCTS } from "./products";

@Injectable()
export class productsService{
    scan(){
        barcodescannerModule.scan({
            cancelLabel: "Stop scanning",
            message: "Go scan something",
            preferFrontCamera: false,
            showFlipCameraButton: true
        }).then((result) => {
            return result.text;
        }, (error) => {
            console.log("No scan: " + error);
        });
    }

    search(barcode: string){
        return PRODUCTS[barcode];
    }
}