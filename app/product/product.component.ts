import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ScanService } from "../shared/scan.service";
import { CartService } from "../shared/cart.service";
import { ProductsService } from "../shared/products.service";
import { Product } from "./product";

import observableArrayModule = require("data/observable-array");
import { Page } from "ui/page";
import { ListView } from "ui/list-view";

@Component({
    selector: 'app-product',
    templateUrl: 'product/product.component.html',
    providers: [
        ScanService,
        CartService,
        ProductsService
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent {
    public itemBarcode: string;
    public isItemExist: boolean = false;

    listView: ListView;

    constructor(private cartService: CartService, private scanService: ScanService,
        private productsService: ProductsService, public page: Page) {

        page.actionBar.title = "Easy Shop";
    }

    ngOnInit() {
        this.page.id = "listItemsPage";
        this.listView = this.page.getViewById("items-view") as ListView;
        this.listView.itemTemplate = `
            <StackLayout>
                <Label text='{{ name }}'></Label>
                <Label text='{{ price }}'></Label>
            </StackLayout>
        `;
        this.listView.items = new observableArrayModule.ObservableArray(this.cartService.getItems());;
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }

    public scanProduct() {
        this.scanService.scan().then((result) => {
            let product = this.productsService.search(result);
            this.listView.items.push(product);
        });

    }



}

