import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  estudante: Estudante = {
    Id: 1,
    Nome: 'Luiz Lobui',
    Idade: 24,
    Altura: 173,
    Peso: 80,

  };

  constructor() { }

  ngOnInit(): void {
  }

}
