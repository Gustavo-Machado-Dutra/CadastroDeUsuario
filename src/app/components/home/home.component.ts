import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  nome: string = '';
  telefone: number | null = null;
  email: string = '';
  usuarios: { nome: string, telefone: number, email: string }[] = [];

  // Função chamada quando o botão é clicado
  adicionarUsuario() {
    if (this.nome && this.telefone && this.email) {
      const novoUsuario = {
        nome: this.nome,
        telefone: this.telefone,
        email: this.email
      };
      
      this.usuarios.push(novoUsuario);  // Adiciona o novo usuário ao array
      this.limparCampos();  // Limpa os campos dos inputs
    } else {
      alert('Por favor, preencha todos os campos!');  // Alerta se algum campo estiver vazio
    }
  }

  // Limpa os campos após adicionar o usuário
  limparCampos() {
    this.nome = '';
    this.telefone = null;
    this.email = '';
  }
}