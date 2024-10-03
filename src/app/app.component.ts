import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManagementModule } from './components/user-management/user-management.module';
import { PanelModule } from 'primeng/panel'; // Import PanelModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserManagementModule, PanelModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DemoAngular';
}
