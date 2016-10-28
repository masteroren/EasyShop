import { Injectable } from "@angular/core";
import { Utils } from "./utils";
import { PRODUCTS } from "./mocks/products_mock";
import * as _ from "lodash";

@Injectable()
export class ProductsService {
    utils: Utils;

    constructor() {
    }

    scanProduct() {
        return this.utils.scan();
    }

    search( barcode: string ) {
        return _.find(PRODUCTS, { barcode: barcode});
    }
}