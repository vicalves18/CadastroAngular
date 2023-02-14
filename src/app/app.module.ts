import { CadastroComponent } from './components/cadastros/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CriarCadastrosComponent } from './components/cadastros/criar-cadastros/criar-cadastros.component';
import { FormsModule } from '@angular/forms';
import { ListarCadastrosComponent } from './components/cadastros/listar-cadastros/listar-cadastros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CriarCadastrosComponent,
    ListarCadastrosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
