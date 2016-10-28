import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Router } from '@angular/router';
import observableArrayModule = require("data/observable-array");
import { Page } from "ui/page";
import dockModule = require("ui/layouts/dock-layout");
import observable = require("data/observable");

import { Product } from "../shared/models/product.model";

import { Utils } from "../shared/utils";
import { CartService } from "../shared/cart.service";
import { ProductsService } from "../shared/products.service";

@Component({
    selector: 'app-product',
    templateUrl: 'product/product.component.html',
    providers: [ProductsService],
    styleUrls: ['product/product.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent {
    itemBarcode: string;
    isItemExist: boolean = false;
    items: observableArrayModule.ObservableArray<Object>;
    utils: Utils;

    constructor(private cart: CartService, private router: Router, public page: Page) {
        page.actionBar.title = "Easy Shop";
        this.utils = new Utils();
    }

    ngOnInit() {
        this.items = new observableArrayModule.ObservableArray(this.cart.getItems());
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }

    public scanProduct() {
        this.utils.scan().then(result => {
            this.router.navigate(["/productDetails/" + result]);
        });

    }


}

