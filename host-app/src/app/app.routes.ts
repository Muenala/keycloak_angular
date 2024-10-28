import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [{
    path: 'remote',
    loadChildren: () =>
        loadRemoteModule('remote', './FeaturesModule').then((m) => m.FeaturesModule),
    canActivate: [AuthGuard],
    data: { roles: ['manage-account'] }
},];
