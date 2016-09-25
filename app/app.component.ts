import { Component } from "@angular/core";
import application = require("application");

@Component({
    selector: "easy-shope-main",
    templateUrl: "app.component.html",
    styleUrls: ["app.css"]
})
export class AppComponent {

    constructor(){}

    ngOnInit(){
        if (application.android){

        }

        if (application.ios){
            
        }
    }
}
