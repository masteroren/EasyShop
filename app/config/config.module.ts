import { NgModule } from "@angular/core";
import { ConfigComponent } from "./config.component";
import { ConfigService } from "../shared/config.service";

@NgModule({
  exports: [ConfigComponent],
  declarations: [
    ConfigComponent,
  ],
  providers: [ConfigService]
})
export class ConfigModule {}