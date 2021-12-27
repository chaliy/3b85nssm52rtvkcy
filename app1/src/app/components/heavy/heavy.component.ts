import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy',
  templateUrl: './heavy.component.html',
  styleUrls: ['./heavy.component.scss']
})
export class HeavyComponent {

  columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
}
