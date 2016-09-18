import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductComponent } from "./product.component";

const productRoutes: Routes = [
    { path: "product", component: ProductComponent }
]
export const productRouting: ModuleWithProviders = RouterModule.forChild(productRoutes);
