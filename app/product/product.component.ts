import { Component } from "@angular/core";
import { ScanService } from "../shared/scan.service";
import { CartService } from "../shared/cart.service";
import { Product } from "./product";


@Component({
    selector: 'home',
    styleUrls: ['app.css'],
    templateUrl: 'product/product.component.html',
    providers: [ScanService, CartService]
})

export class ProductComponent {
    public myItems :Product[] ;
    public itemsString:Array<string> = [];
    public itemBarcode: string;
    public isItemExist: boolean = false;

    constructor(private cartService:CartService, private scanService:ScanService) {
        this.myItems = cartService.getItems();
        for(let index = 0; index < this.myItems.length; index++){
            this.itemsString.push(this.myItems[index].name);
        }
    };


    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }

    public scanProduct() {
        this.scanService.scan().then((result) => {
            this.itemBarcode = result;
            //check if the
            this.isItemExist = true;
        });

    }

}

