import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  User: any = [];
  Factura: any = [];

  @Input() facturaDetails = {
    fecha: '', producto: '', precio: '', cantidad: '',
    total:'', subtotal:'', precioTotal:'', user_id: 0
  }

  constructor(
    public dataService: DataService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.dataService.getUsers().subscribe((data: {}) => {
      this.User = data;
    })
  }

  addFactura(dataBill) {
    return this.dataService.facturar(this.facturaDetails).subscribe((data: {}) => {
      this.router.navigate(['/bills'])
    })
  }

  calcularTotal() {
    var cant: number = + this.facturaDetails.cantidad;
    var pre: number = + this.facturaDetails.precio;
    var tot: number = + this.facturaDetails.total
    console.log("cantidad: "+cant)
    tot = cant * pre;
    console.log("total: "+tot)
    return this.facturaDetails.total = tot.toString()
  }

  calcularSubtotal() {
    return this.facturaDetails.subtotal = this.facturaDetails.total;
  }
  calcularPrecioTotal() {
    return this.facturaDetails.precioTotal = this.facturaDetails.total;
  }

  onFinish() {
    this.calcularTotal();
  }

}
