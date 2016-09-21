import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { ConfigComponent} from "./config/config.component";

export const appRoutes = [
    { path: "", redirectTo: "/product", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "product", component: ProductComponent },
    { path: "config", component: ConfigComponent }
];