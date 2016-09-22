import { Component } from "@angular/core";
import { ScanService } from "../shared/scan.service";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";

import timer = require("timer");

import { StoreService } from "../shared/store.service";
import { StoreModel } from "../shared/models/store.model";

@Component({
    selector: 'home',
    templateUrl: 'home/home.component.html',
    styleUrls: ['home/home.css'],
    providers: [ScanService, StoreService]
})
export class HomeComponent {
    store: StoreModel;

    welcomText: string;

    constructor(private scanService: ScanService,
        private routerExtensions: RouterExtensions,
        private storeService: StoreService) { }

    ngOnInit() {
        console.log("Home -> Init");
        this.welcomText = "סרוק את הברקוד בכניסה לסופר ובוא נתחיל לתקתק את הקניות!";
    }

    scanStore() {
        this.scanService.scan().then((barcode) => {
            this.store = this.storeService.getStore(barcode)
            if (this.store) {
                timer.setTimeout(() => {
                    this.routerExtensions.navigate(["/product"]);
                }, 2000);
            }
        });
    }
}