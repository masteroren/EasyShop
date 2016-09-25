import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ScanService } from "../shared/scan.service";
import { CartService } from "../shared/cart.service";
import { Product } from "./product";

import observableArrayModule = require("data/observable-array");
import { Page } from "ui/page";
import { ListView } from "ui/list-view";

@Component({
    selector: 'app-product',
    templateUrl: 'product/product.component.html',
    providers: [ScanService, CartService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent {
    public itemBarcode: string;
    public isItemExist: boolean = false;

    listView: ListView;

    constructor(private cartService: CartService, private scanService: ScanService, public page: Page) {
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
            this.itemBarcode = result;
            //check if the
            this.isItemExist = true;

            // For test
            this.listView.items.push({
                name: "לחם שחור",
                price: 3.5
            });
        });

    }



}

