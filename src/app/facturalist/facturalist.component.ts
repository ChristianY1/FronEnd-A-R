import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-facturalist',
  templateUrl: './facturalist.component.html',
  styleUrls: ['./facturalist.component.css']
})
export class FacturalistComponent implements OnInit {

  Factura: any = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.getFacturas();
  }

  getFacturas() {
    return this.dataService.getBills().subscribe((data: {}) => {
      this.Factura = data;
    })
  }

}
