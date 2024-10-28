import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { KeycloakProfile } from 'keycloak-js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userProfile: KeycloakProfile | null = null;
  roles: string[] = [];

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.userProfile = await this.authService.getLoggedUser();
    this.roles = this.authService.getRoles();
  }

  async logout() {
    await this.authService.logout();
  }
}