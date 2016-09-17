import { Component } from "@angular/core";
import { ScanService } from "../shared/scan.service";

@Component({
    selector: 'home',
    templateUrl: 'home/home.component.html',
    providers:[ScanService]
})
export class HomeComponent{
    storeBarcode: any;

    constructor(private scanService: ScanService){}

    scanStore(){
        this.scanService.scan();
    }
}