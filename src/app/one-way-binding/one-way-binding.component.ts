import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent implements OnInit {

  aceptar: boolean= false;

  ngOnInit(): void {

  }

  cambiarValor(){
    this.aceptar=!this.aceptar;
  }

}
