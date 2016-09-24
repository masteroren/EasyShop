import { Injectable } from "@angular/core";
import { STORES } from "./mocks/stores_mock";

@Injectable()
export class StoreService{

    getStore(barcode){
        if (STORES[barcode]){
            STORES[barcode].barcode = barcode;
            return STORES[barcode];
        }
        return null;
    }
}