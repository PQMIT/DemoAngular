import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UserManagementModule } from "./pages/application/user-management/user-management.module";
import { PanelModule } from "primeng/panel"; // Import PanelModule
import { HeaderModule } from "./components/header/header.module";
@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, UserManagementModule, PanelModule, HeaderModule],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    title = "DemoAngular";
}
