import { Component, OnInit } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { PanelModule } from "primeng/panel"; // Import PanelModule
// import { HeaderModule } from "./components/header/header.module";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { InputGroupModule } from "primeng/inputgroup";
import { CardModule } from "primeng/card";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { MenubarModule } from "primeng/menubar";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { PrimeNGConfig } from "primeng/api";
import { Aura } from "primeng/themes/aura";
import { Lara } from "primeng/themes/lara";
@Component({
    selector: "app-root",
    standalone: true,
    imports: [
        RouterOutlet,
        InputGroupAddonModule,
        PanelModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        PanelModule,
        RouterModule,
        InputTextModule,
        InputGroupModule,
        CardModule,
        HeaderComponent,
        TableModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        ConfirmDialogModule,
        MenubarModule,
        BadgeModule,
        AvatarModule,
        RippleModule,
        MenubarModule,
        ButtonModule,
        ConfirmDialogModule,
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    title = "DemoAngular";
    constructor(private config: PrimeNGConfig) {
        this.config.theme.set({ preset: Aura });
    }
}
