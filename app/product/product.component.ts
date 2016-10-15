import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ScanService } from "../shared/scan.service";
import { Router } from '@angular/router';
import { CartService } from "../shared/cart.service";
import { ProductsService } from "../shared/products.service";

import { Product } from "../shared/models/product.model";

import observableArrayModule = require("data/observable-array");
import { Page } from "ui/page";
import { ListView } from "ui/list-view";
import dockModule = require("ui/layouts/dock-layout");
import observable = require("data/observable");

@Component({
    selector: 'app-product',
    templateUrl: 'product/product.component.html',
    providers: [
        ScanService,
        CartService,
        ProductsService
    ],
    styleUrls: ['product/product.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent {
    itemBarcode: string;
    isItemExist: boolean = false;
    items: observableArrayModule.ObservableArray<Object>;

    constructor(public cartService: CartService, private scanService: ScanService, private router: Router,
        private productsService: ProductsService, public page: Page) {

        page.actionBar.title = "Easy Shop";
    }

    ngOnInit() {
        this.items = new observableArrayModule.ObservableArray([]);
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }

    public scanProduct() {
        this.scanService.scan().then((result) => {
            let product = this.productsService.search(result);
            this.cartService.addItem(result, product);
            this.items.push(product);
            // this.router.navigate(["/productDetails/" + result]);
        });

    }


}

