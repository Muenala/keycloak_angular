import { KeycloakService } from 'keycloak-angular';
export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8080',
                realm: 'CJ',
                clientId: 'cj_evaluaciones'
            },
            initOptions: {
                onLoad: 'check-sso',
                checkLoginIframe: false
            }
        });
}