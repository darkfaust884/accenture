import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BriefcaseAggressiveComponent } from './briefcase-aggressive/briefcase-aggressive.component';
import { BriefcaseConservativeComponent } from './briefcase-conservative/briefcase-conservative.component';
import { BriefcaseModerateComponent } from './briefcase-moderate/briefcase-moderate.component';
import { ChartComponent } from './chart/chart.component';
import { MenuComponent } from './menu/menu.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

import { PersonalAreaComponent } from './personal-area/personal-area.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '', component: MenuComponent,
      },
      {
        path: 'chart', component: ChartComponent
      },
      {
        path: 'aggressive',
        children: [
          {
            path: '', component: BriefcaseAggressiveComponent
          },
          {
            path: 'news', component: NewsFeedComponent
          },
          {
            path: 'chart', component: ChartComponent
          }
        ]
      },
      {
        path: 'moderate', 
        children: [
          {
            path: '', component: BriefcaseModerateComponent
          },
          {
            path: 'news', component: NewsFeedComponent
          },
          {
            path: 'chart', component: ChartComponent
          }
        ]
      },
      {
        path: 'conservative',
        children: [
          {
            path: '', component: BriefcaseConservativeComponent
          },
          {
            path: 'news', component: NewsFeedComponent
          },
          {
            path: 'chart', component: ChartComponent
          }
        ]
        
        
      },
      
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
