import { Router, ActivatedRoute } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { Cadastro } from './../cadastros';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.css']
})
export class EditarCadastroComponent implements OnInit{


  formulario!: FormGroup;

  constructor(private service: CadastroService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder : FormBuilder){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((cadastro) => {
      this.formulario = this.formBuilder.group({
        id: [cadastro.id],
        nome: [cadastro.nome,Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(5)
        ])],
        email:[cadastro.email,Validators.compose([
          Validators.required,
          Validators.email
        ])],
        tel:[cadastro.tel,Validators.compose([
          Validators.required,
          Validators.minLength(10)
        ])]
      })
    })
  }

  editar(){
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listar']);
    })

  }

  cancelar(){
    this.router.navigate(['/listar']);
  }
}
