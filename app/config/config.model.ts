export class ConfigModel {
    bonuses: boolean;
    nutrition: boolean;
    gloten: boolean;
    alchohol: boolean;
    soy: boolean;

    constructor(showBonuses: boolean, showNutrition: boolean) {
        this.bonuses = showBonuses;
        this.nutrition = showNutrition;
        this.gloten = false;
        this.alchohol = false;
        this.soy = false;
    }
}
