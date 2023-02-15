import { Router, ActivatedRoute } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { Cadastro } from './../cadastros';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.css']
})
export class EditarCadastroComponent implements OnInit{

  cadastro: Cadastro ={
    id:0,
    nome:'',
    email:''
  }
  constructor(private service: CadastroService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((cadastro) => {
      this.cadastro = cadastro;
    })
  }

  editar(){
    this.service.editar(this.cadastro).subscribe(() => {
      this.router.navigate(['/listar']);
    })

  }

  cancelar(){
    this.router.navigate(['/listar']);
  }
}
