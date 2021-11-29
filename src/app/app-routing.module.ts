/** Core imports */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/** Application imports */
import { AppComponent } from './app.component';
import { ChildComponent } from './Child/child.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        canActivate: [],
        canActivateChild: [],
        children: [
          {
            path: 'child',
            component: ChildComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
