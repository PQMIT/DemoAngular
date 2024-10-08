import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { PanelModule } from "primeng/panel"; // Import PanelModule
import { HeaderModule } from "./components/header/header.module";
import { RouterLink, RouterLinkActive } from "@angular/router";
@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, PanelModule, HeaderModule, RouterLink, RouterLinkActive, RouterOutlet, PanelModule, RouterModule],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    title = "DemoAngular";
}
