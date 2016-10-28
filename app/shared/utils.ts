import { Injectable } from "@angular/core";
import barcodescannerModule = require("nativescript-barcodescanner");

export class Utils{
    scan(): Promise<string>{
        return barcodescannerModule.scan({
            cancelLabel: "Stop scanning",
            message: "Go scan something",
            preferFrontCamera: false,
            showFlipCameraButton: true
        }).then((result) => {
            console.log("Barcode: " + result.text);
            return Promise.resolve(result.text);
        }, (error) => {
            console.log("No scan: " + error);
        });
    }
}