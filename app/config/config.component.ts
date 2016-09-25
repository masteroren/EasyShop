import { Component } from "@angular/core";
import { ConfigService } from "./config.service";

import { Page } from "ui/page";


@Component({
    selector: 'app-config',
    templateUrl: 'config/config.component.html',
    styleUrls: ['config/config.css']
})
export class ConfigComponent {

    constructor(public configService: ConfigService, page: Page) {
        page.actionBar.title = "Easy Shop"; 
    }

    bonusChange(checked) {
        this.configService.model.bonuses = checked;
    }

    nutritionChange(checked) {
        this.configService.model.nutrition = checked;
    }
}

