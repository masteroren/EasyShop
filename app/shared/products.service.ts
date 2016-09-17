import { Injectable } from "@angular/core";
import { ScanService } from "./scan.service";

import { PRODUCTS } from "./products";

@Injectable()
export class productsService{
    constructor(private scanService: ScanService){

    }

    scanProduct(){
        return this.scanService.scan();
    }

    search(barcode: string){
        return PRODUCTS[barcode];
    }
}