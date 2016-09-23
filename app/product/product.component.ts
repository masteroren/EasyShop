import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ScanService } from "../shared/scan.service";
import { CartService } from "../shared/cart.service";
import { Product } from "./product";
import observableArrayModule = require("data/observable-array");


@Component({
    selector: 'home',
    styleUrls: ['app.css'],
    templateUrl: 'product/product.component.html',
    providers: [ScanService, CartService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent {
    public itemBarcode: string;
    public isItemExist: boolean = false;
    public itemsString;

    constructor(private cartService:CartService, private scanService:ScanService){
        let products = cartService.getItems().map((product) => {
            return product.name;
        });

        this.itemsString = new observableArrayModule.ObservableArray(products);
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
            this.itemsString.push("לחם שחור");
        });

    }

}

