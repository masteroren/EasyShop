import { Injectable } from "@angular/core";
import barcodescannerModule = require("nativescript-barcodescanner");

@Injectable()
export class ScanService{
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
}