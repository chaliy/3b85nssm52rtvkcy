import { Component, OnInit } from '@angular/core';
import { 
  Router, 
  Event, 
  NavigationEnd
} from '@angular/router';

import { getLCP, getFID, getCLS, Metric } from 'web-vitals';

declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  host: {
    'class': 'min-h-full'
  }
})
export class AppComponent implements OnInit {
  title = 'Root App1';
  subtitle = '';
  description = '';

  menu = [{
    title: 'Home',
    subtitle: 'Example pages',
    description: '',
    routerLink : '/home'
  }, {
    title: 'App1 External',
    subtitle: 'Example Grid App',
    description: 'Runs App1 with ag-grid (about 1.5MB of JS), loaded in IFRAME, hosted on GitHub',
    routerLink : '/app1ext-view'
  }, {
    title: 'App1',
    subtitle: 'Example Grid App',
    description: 'Runs App1 with ag-grid (about 1.5MB of JS), loaded in IFRAME',
    routerLink : '/app1-view'
  }, {
    title: 'App2',
    subtitle: 'Nothing yet',
    description: '',
    routerLink : '/app2-view'
  }]

  constructor(private router: Router){

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log(router.url)

        const currentItem = this.menu.find(m => m.routerLink == router.url)
        if (currentItem) {
          this.title = currentItem.title;
          this.subtitle = currentItem.subtitle;
          this.description = currentItem.description;
        }
      }
  });

    
  }
  ngOnInit(): void {
    function send(metric: Metric) {
      gtag('event', metric.name, {
        value: metric.delta,
        metric_id: metric.id,
        metric_value: metric.value,
        metric_delta: metric.delta
      });
    }

    getCLS(send);
    getFID(send);
    getLCP(send);
  }
}
