import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-cadastros',
  templateUrl: './criar-cadastros.component.html',
  styleUrls: ['./criar-cadastros.component.css']
})
export class CriarCadastrosComponent{

  cadastro ={
    id:'1',
    nome:'Victoria',
    email:'vic@gmail.com'

  }

  cadastrar(){
    alert("cadastro realizado")
  }

  cancelar(){

  }

}
