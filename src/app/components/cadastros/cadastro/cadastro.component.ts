import { Cadastro } from './../cadastros';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  @Input() cadastro: Cadastro = {
    id: 4,
    nome: 'Paulo Rafael',
    email: 'paulo@hotmail.com'
  }

}
