import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @Input() UserDetails = {
    username: '', apellido: '',
    fechaDeNacimiento: '', sexo: '',
    telefono:'', correo:'', psw:''
  }

  constructor(
    public dataService: DataService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  public miMensaje = false;
  addUser(dataUser) {
    this.dataService.save(this.UserDetails).subscribe((data: {}) => {
      this.router.navigate(['/users'])
      this.miMensaje = true;
      alert("Usuario creado")
    })
  }

}
