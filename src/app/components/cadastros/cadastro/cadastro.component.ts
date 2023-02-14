import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  @Input() cadastro = {
    nome: 'Paulo Rafael',
    email: 'paulo@hotmail.com'
  }

}
