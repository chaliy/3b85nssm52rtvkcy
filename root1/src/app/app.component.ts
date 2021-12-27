import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  host: {
    'class': 'min-h-full'
  }
})
export class AppComponent {
  title = 'root1';

  menu = [{
    title: "Home",
    subtitle: "Example pages",
    description: "",
    routerLink : "/home"
  }, {
    title: "App1 External",
    subtitle: "Example Grid App",
    description: "Runs App1 with ag-grid (about 1.5MB of JS), loaded in IFRAME, hosted on GitHub",
    routerLink : "/app1ext-view"
  }, {
    title: "App1",
    subtitle: "Example Grid App",
    description: "Runs App1 with ag-grid (about 1.5MB of JS), loaded in IFRAME",
    routerLink : "/app1-view"
  }, {
    title: "App2",
    routerLink : "/app2-view"
  }]
}
