import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent implements OnInit {

  nome = 'Iago';
  pessoa = {
    nome: 'Iago Rocha',
    idade: 27,
  };

  constructor() { }

  ngOnInit() {
  }

}
