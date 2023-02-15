import { CadastroService } from './../cadastro.service';
import { Cadastro } from './../cadastros';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cadastros',
  templateUrl: './listar-cadastros.component.html',
  styleUrls: ['./listar-cadastros.component.css']
})
export class ListarCadastrosComponent implements OnInit{
  listaCadastros: Cadastro[] = [
    /*{
      nome: 'Paulo Rafael',
      email: 'paulo@hotmail.com'
    },
    {
      nome: 'Jean Julio',
      email: 'jean@hotmail.com'
    }*/
  ];

  constructor(private service: CadastroService){}

  ngOnInit(): void {
    //O Observable avisa quando há o subscribe
    this.service.listar().subscribe((listaCadastros)=>{
      this.listaCadastros = listaCadastros
    });
  }
}
