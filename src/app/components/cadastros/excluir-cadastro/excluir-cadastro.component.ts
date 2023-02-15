import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { Cadastro } from './../cadastros';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-cadastro',
  templateUrl: './excluir-cadastro.component.html',
  styleUrls: ['./excluir-cadastro.component.css']
})
export class ExcluirCadastroComponent implements OnInit{
  cadastro: Cadastro = {
    id:0,
    nome: '',
    email:''
  }

  //ActivatedRoute disponibiliza informações da rota
  constructor(private service: CadastroService,
    private router: Router,
    private route: ActivatedRoute){}

  //snapshot - faz como se fosse uma fotografia da rota, do momento em que foi acessada
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((cadastro) => {
      this.cadastro = cadastro
    })
  }

  excluir(){
    if(this.cadastro.id){
        this.service.excluir(this.cadastro.id).subscribe(()=>{
          this.router.navigate(['/listar']);
        })
    }
  }

  cancelar(){
    this.router.navigate(['/listar']);
  }
}
