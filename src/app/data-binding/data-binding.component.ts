import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  valorAtual = '';
  valorSalvo = '';

  isMouseOver = false;

  nomeDoCurso = 'Angular';

  constructor() { }

  ngOnInit() {
  }

  eventClickBtn() {
    alert('Botão clicado!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (event.target as HTMLInputElement).value;
    console.log(this.valorAtual);
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
