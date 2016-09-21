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

    //
    //public onItemTap(args) {
    //    console.log("------------------------ ItemTapped: " + args.index);
    //}

    public scanProduct() {
        this.scanService.scan().then((result) => {
            this.itemBarcode = result;
            //check if the the barcode is in the super
            this.isItemExist = true;
            //save the scaned product

            if (this.isItemExist && this.itemBarcode != null)
            {
                this.myItems.push(new Product("לחם",  5, this.itemBarcode));

            }

            for(let index = 0; index < this.myItems.length; index++){
                console.log(this.myItems[index].name);
            }

        });

    }

}

