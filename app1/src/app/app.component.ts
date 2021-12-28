import { Component, OnInit } from '@angular/core';

import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

import { getLCP, getFID, getCLS, Metric } from 'web-vitals';

declare var gtag: any;

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app1';

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
