import { Component } from "@angular/core";
import { ScanService } from "../shared/scan.service";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";

@Component({
    selector: 'home',
    templateUrl: 'home/home.component.html',
    providers:[ScanService]
})
export class HomeComponent{
    storeBarcode: string;
    storeExist: boolean = false;

    constructor(private scanService: ScanService, 
        private routerExtensions: RouterExtensions){}

    scanStore(){
        this.scanService.scan().then((result) => {
            this.storeBarcode = result;
            this.storeExist = true;
        });
    }

    goToProduct(){
        this.routerExtensions.navigate(["/product"]);
    }
}