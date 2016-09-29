import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ScanService } from "../shared/scan.service";
import { CartService } from "../shared/cart.service";
import { ProductsService } from "../shared/products.service";
import { Product } from "./product";

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
    public itemBarcode:string;
    public isItemExist:boolean = false;

    listView:ListView;

    //total;

    constructor(public cartService: CartService, private scanService: ScanService,
        private productsService: ProductsService, public page: Page) {

        page.actionBar.title = "Easy Shop";
    }

    ngOnInit() {
        this.page.id = "listItemsPage";
        this.listView = this.page.getViewById("items-view") as ListView;
        this.listView.itemTemplate = `
            <StackLayout>
                <GridLayout rows="40" columns="50,*" horizontalAlignment="stretch">
                    <Label row="0" col="0" text='{{ price }}' horizonalAlignment="right"></Label>
                    <Label row="0" col="1" class="product-name" text='{{ name }}' horizonalAlignment="left"></Label>
                </GridLayout>
            </StackLayout>
        `;
        this.listView.items = new observableArrayModule.ObservableArray([]);
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }

    public scanProduct() {
        this.scanService.scan().then((result) => {
            let product = this.productsService.search(result);
            this.cartService.addItem(result, product);
            this.listView.items.push(product);
            //this.total = this.cartService.getTotalPrice();
        });

    }



}

