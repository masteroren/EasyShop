import { Component } from "@angular/core";
import { ConfigService } from "./config.service";

@Component({
    selector: 'config',
    templateUrl: 'config/config.component.html',
    styleUrls: ['config/config.css']
})
export class ConfigComponent {

    constructor(public configService: ConfigService) {
        console.log('ConfigComponent constructor -> ' + this.configService.model.showBonuses);
    }

    bonusChange(checked) {
        this.configService.model.showBonuses = checked;
        console.log('Bonuses changed -> ' + this.configService.model.showBonuses);
    }

    nutritionChange(checked) {
        this.configService.model.showNutrition = checked;
        console.log('Nutrition changed -> ' + this.configService.model.showNutrition);
    }
}

