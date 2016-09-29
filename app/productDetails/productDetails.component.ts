import { Component } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { ScanService } from "../shared/scan.service";
import { CartService } from "../shared/cart.service";
import { ProductsService } from "../shared/products.service";

@Component({
    selector: 'product-details',
    styleUrls: ['productDetails/productDetails.css'],
    templateUrl: 'productDetails/productDetails.component.html',
    providers: [
        ScanService,
        CartService,
        ProductsService
    ],
})
export class ProductDetailsComponent{
    public itemBarcode:string;
    public itemName:string;

    constructor(private _activatedRoute: ActivatedRoute, private productsService:ProductsService){}

    ngOnInit() {
        console.log("details page");

        this._activatedRoute.params.forEach((param: Params) => {
            console.log("product barcode: " + param['id']);
            this.itemBarcode = param['id'];
        });
        let product = this.productsService.search(this.itemBarcode);
        this.itemName = product.name;
        console.log("product name: " + product.name);
    };
}