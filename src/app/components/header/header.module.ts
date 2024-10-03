import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { FormsModule } from "@angular/forms";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { HeaderComponent } from "./header.component";
import { MenubarModule } from "primeng/menubar";
import { BadgeModule } from "primeng/badge";
import { AvatarModule } from "primeng/avatar";
import { RippleModule } from "primeng/ripple";
@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, TableModule, ButtonModule, InputTextModule, FormsModule, ConfirmDialogModule, MenubarModule, BadgeModule, AvatarModule, RippleModule],
    exports: [HeaderComponent],
    providers: [ConfirmationService],
})
export class HeaderModule {}
