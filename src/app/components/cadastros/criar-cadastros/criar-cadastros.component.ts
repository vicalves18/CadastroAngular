import { CadastroService } from './../cadastro.service';
import { Cadastro } from './../cadastros';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-cadastros',
  templateUrl: './criar-cadastros.component.html',
  styleUrls: ['./criar-cadastros.component.css']
})
export class CriarCadastrosComponent implements OnInit{

  cadastro: Cadastro ={
    nome:'',
    email:''

  }

  //Injeção de Depência
  constructor(private service: CadastroService,
    private router: Router){}

  ngOnInit(): void {

  }

  cadastrar(){
    this.service.criar(this.cadastro).subscribe(() =>{
      this.router.navigate(['/listar'])
    });
  }

  cancelar(){
    this.router.navigate(['/listar']);
  }


}
