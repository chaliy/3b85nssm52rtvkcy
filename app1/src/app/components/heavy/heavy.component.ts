import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  GridReadyEvent,
  FilterOpenedEvent,
  FilterChangedEvent,
  FilterModifiedEvent
} from '@ag-grid-community/core'

@Component({
  selector: 'app-heavy',
  templateUrl: './heavy.component.html',
  styleUrls: ['./heavy.component.scss']
})
export class HeavyComponent {

  columnDefs;
  defaultColDef;

  constructor(private http: HttpClient) {

    this.columnDefs = [
      {
        field: 'athlete',
        filter: 'agTextColumnFilter',
        filterParams: {
          buttons: ['reset', 'apply'],
        },
      },
      {
        field: 'age',
        maxWidth: 100,
        filter: 'agNumberColumnFilter',
        filterParams: {
          buttons: ['apply', 'reset'],
          closeOnApply: true,
        },
      },
      {
        field: 'country',
        filter: 'agSetColumnFilter',
        filterParams: {
          buttons: ['clear', 'apply'],
        },
      },
      {
        field: 'year',
        filter: 'agSetColumnFilter',
        filterParams: {
          buttons: ['apply', 'cancel'],
          closeOnApply: true,
        },
        maxWidth: 100,
      },
      { field: 'sport' },
      {
        field: 'gold',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'silver',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'bronze',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'total',
        filter: 'agNumberColumnFilter',
      },
    ];

    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      filter: true,
    };
  }

  onFilterOpened(e: FilterOpenedEvent) {
    console.log('onFilterOpened', e);
  }

  onFilterChanged(e: FilterChangedEvent) {
    console.log('onFilterChanged', e);
    console.log('gridApi.getFilterModel() =>', e.api.getFilterModel());
  }

  onFilterModified(e: FilterModifiedEvent) {
    console.log('onFilterModified', e);
    console.log('filterInstance.getModel() =>', e.filterInstance.getModel());
    console.log(
      'filterInstance.getModelFromUi() =>',
      e.filterInstance.getModel()
    );
  }

  onGridReady(params: GridReadyEvent) {
    console.log("onGridReady");

    this.http
      .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) => params.api.setRowData(data as any[]));
  }

}
