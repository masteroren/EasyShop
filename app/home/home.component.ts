import { Component } from "@angular/core";
import { Routes, RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { Page } from "ui/page";

import { Utils } from "../shared/utils";
import { StoreService } from "../shared/store.service";
import { StoreModel } from "../shared/models/store.model";

@Component({
    selector: 'app-home',
    templateUrl: 'home/home.component.html',
    styleUrls: ['home/home.css'],
    providers: [StoreService]
})
export class HomeComponent {
    store: StoreModel;
    utils: Utils;

    constructor(private router: Router, page: Page, private storeSrv: StoreService) {
        page.actionBar.title = "Easy Shop";
        this.utils = new Utils();
    }

    ngOnInit() {
    }

    scanStore() {
        this.utils.scan().then((barcode) => {
            this.store = this.storeSrv.getStore(barcode);
            if (this.store) {
                this.router.navigate(["/product"]);
            }
        });
    }
}