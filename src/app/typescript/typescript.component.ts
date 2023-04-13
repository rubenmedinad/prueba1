import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent {
  edadninio = 20;
  ngOnInit(){
    console.log(this.edadninioconsola(this.edadninio))
  }
  edadninioconsola(edad:number){
    return edad;
  }
}
