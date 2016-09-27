import { Injectable } from "@angular/core";
import { ScanService } from "./scan.service";

import { PRODUCTS } from "./mocks/products_mock";

@Injectable()
export class ProductsService{
    constructor(private scanService: ScanService){

    }

    scanProduct(){
        return this.scanService.scan();
    }

    search(barcode: string){
        return PRODUCTS[barcode];
    }
}