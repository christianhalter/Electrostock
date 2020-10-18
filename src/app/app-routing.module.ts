import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [{
      path: "",
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      
    },
    {
      path: ":internal_code",
      loadChildren: () => import('./elec-comp/elec-comp.module').then( m => m.ElecCompPageModule)
      
    },
    {
      path: ":pcb_code",
      loadChildren: () => import('./pcb/pcb.module').then( m => m.PcbPageModule)
    }
    ]
    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'elec-comp',
    loadChildren: () => import('./elec-comp/elec-comp.module').then( m => m.ElecCompPageModule)
  },
  {
    path: 'pcb',
    loadChildren: () => import('./pcb/pcb.module').then( m => m.PcbPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
