import { Component } from "@angular/core";
import { ScanService } from "../shared/scan.service";
import { Routes, RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { Page } from "ui/page";

import timer = require("timer");

import { StoreService } from "../shared/store.service";
import { StoreModel } from "../shared/models/store.model";

@Component({
    selector: 'app-home',
    templateUrl: 'home/home.component.html',
    styleUrls: ['home/home.css'],
    providers: [ScanService, StoreService]
})
export class HomeComponent {
    store:StoreModel;

    constructor(private scanService:ScanService, private router: Router, private storeService:StoreService, page: Page) {
        page.actionBar.title = "Easy Shop";
    }

    ngOnInit() {
    }

    scanStore() {
        this.scanService.scan().then((barcode) => {
            this.store = this.storeService.getStore(barcode);
            if (this.store) {
                timer.setTimeout(() => {
                    this.router.navigate(["/product"]);
                }, 2000);
            }
        });
    }
}