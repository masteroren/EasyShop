import { Component } from "@angular/core";
import { ScanService } from "../shared/scan.service";

@Component({
    selector: 'home',
    templateUrl: 'product/product.component.html',
    providers:[ScanService]
})
export class ProductComponent{
    
}