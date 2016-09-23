import { Component } from "@angular/core";
import { ConfigService } from "./config.service";

@Component({
    selector: 'config',
    templateUrl: 'config/config.component.html',
    styleUrls: ['config/config.css']
})
export class ConfigComponent {

    constructor(public configService: ConfigService) {
        console.log('ConfigComponent constructor -> ' + this.configService.model.bonuses);
    }

    bonusChange(checked) {
        this.configService.model.bonuses = checked;
        console.log('Bonuses changed -> ' + this.configService.model.bonuses);
    }

    nutritionChange(checked) {
        this.configService.model.nutrition = checked;
        console.log('Nutrition changed -> ' + this.configService.model.nutrition);
    }
}

