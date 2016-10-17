import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { ScanService } from "../shared/scan.service";
import { CartService } from "../shared/cart.service";
import { ProductsService } from "../shared/products.service";
import { ConfigService } from "../config/config.service";

@Component({
    selector: 'product-details',
    styleUrls: ['productDetails/productDetails.css'],
    templateUrl: 'productDetails/productDetails.component.html',
    providers: [
        ScanService,
        CartService,
        ProductsService,
        ConfigService
    ],
})
export class ProductDetailsComponent {
    public itemBarcode:string;
    public itemName:string;
    public itemDescription:string;
    public product: any;

    constructor( private route:ActivatedRoute, 
        private productsService: ProductsService, 
        private router: Router, 
        private userConfig: ConfigService, 
        private cart: CartService ) {
    }

    ngOnInit() {
        let salesArr;

        this.route.params.subscribe( params => {
            this.itemBarcode = params['id'];
        });

        this.product = this.productsService.search(this.itemBarcode);
        this.itemName = this.product.name;

        salesArr = this.product.details.sales;

        if (this.userConfig.Config.bonuses && salesArr.length > 0) {
            this.itemDescription = salesArr[0].description;
        }
    }

    addProductToCart() {
        this.cart.addItem(this.itemBarcode, this.product);
        this.router.navigate(["/product"]);
    }
}