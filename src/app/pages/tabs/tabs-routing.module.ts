import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
path:'',redirectTo:'tab1'
//Este path es para cuando se accede directamente al url redireccione por defecto
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {path: 'tab1', loadChildren:'../avatar/avatar.module#AvatarPageModule'}
      // El modulo es lo que necesito para load children
      ,
        {path: 'tab2', loadChildren:'../list/list.module#ListPageModule'}
      ,
        {path: 'tab3', loadChildren:'../slides/slides.module#SlidesPageModule'}
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
