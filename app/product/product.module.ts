import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

// import { productRouting } from "./product.routes";
import { ProductComponent } from "./product.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule
    // productRouting
  ],
  exports: [ProductComponent],
  declarations: [
    ProductComponent,
  ]
})
export class ProductModule {}