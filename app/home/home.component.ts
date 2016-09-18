import { Component } from "@angular/core";
import { ScanService } from "../shared/scan.service";

@Component({
    selector: 'home',
    templateUrl: 'home/home.component.html',
    providers:[ScanService]
})
export class HomeComponent{
    storeBarcode: string;
    storeExist: boolean = false;

    constructor(private scanService: ScanService){}

    scanStore(){
        this.scanService.scan().then((result) => {
            this.storeBarcode = result;
            this.storeExist = true;
        });
    }
}