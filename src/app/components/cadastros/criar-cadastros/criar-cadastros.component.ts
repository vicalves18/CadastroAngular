import { CadastroService } from './../cadastro.service';
import { Cadastro } from './../cadastros';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-cadastros',
  templateUrl: './criar-cadastros.component.html',
  styleUrls: ['./criar-cadastros.component.css']
})
export class CriarCadastrosComponent implements OnInit{

  formulario!: FormGroup;

  //Injeção de Depência
  constructor(private service: CadastroService,
    private router: Router,
    private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['',Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(5)
      ])],
      email:['',Validators.compose([
        Validators.required,
        Validators.email
      ])],
      tel:['',Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])]
    })
  }

  cadastrar(){
    console.log(this.formulario);
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() =>{
        this.router.navigate(['/listar'])
      });
    }
  }

  cancelar(){
    this.router.navigate(['/listar']);
  }


}
