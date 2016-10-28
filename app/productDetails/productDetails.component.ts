import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { Utils } from "../shared/Utils";
import { CartService } from "../shared/cart.service";
import { ProductsService } from "../shared/products.service";
import { ConfigService } from "../config/config.service";
import { Product } from "../product/product.model";

@Component({
    selector: 'product-details',
    styleUrls: ['productDetails/productDetails.css'],
    templateUrl: 'productDetails/productDetails.component.html',
    providers: [ProductsService],
})
export class ProductDetailsComponent {
    public itemBarcode: string;
    public itemName: string;
    public itemDescription: string;
    public product: Product;

    constructor(private route: ActivatedRoute, private productsService: ProductsService, private router: Router, private userConfig: ConfigService, private cart: CartService) { }

    ngOnInit() {
        let salesArr;

        this.route.params.subscribe(params => {
            this.itemBarcode = params['id'];

            this.product = this.productsService.search(this.itemBarcode);
            if (this.product) {
                console.log(this.product.name);
                // this.itemName = this.product.name;
                // salesArr = this.product.details.sales;

                // if (this.userConfig.Config.bonuses && salesArr.length > 0) {
                //     this.itemDescription = salesArr[0].description;
                // }
            }
        });

    }

    addProductToCart() {
        if (this.product) {
            this.cart.addItem(this.product);
        }

        this.router.navigate(["/product"]);
    }
}