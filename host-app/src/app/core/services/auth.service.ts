import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private keycloak: KeycloakService) {}

  public getLoggedUser(): Promise<KeycloakProfile | null> {
    return this.keycloak.loadUserProfile();
  }

  public async logout() {
    await this.keycloak.logout(window.location.origin);
  }

  public getRoles(): string[] {
    return this.keycloak.getUserRoles();
  }

  public isLoggedIn(): boolean {
    return this.keycloak.isLoggedIn();
  }
}
