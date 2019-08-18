import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //nome de entrada do usuario a ser mostrado no app.
  public usuario: string = "Matheus de Aquino";
  public data: string = "16, Agosto, 2019";
  public texto: string="Encontrei este gato sozinho na Av. Maestro Paulo e Silva proximo ao shopping ilha plaza. Aparentemente ele não tem feridas.";
  
  constructor() {}
}
