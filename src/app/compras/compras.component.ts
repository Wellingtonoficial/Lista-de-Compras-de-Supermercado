import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  compras: { nome: string, comprado: boolean }[] = [];
  novoItem: string = '';

  get itensNaoComprados() {
    return this.compras.filter(item => !item.comprado);
  }

  get itensComprados() {
    return this.compras.filter(item => item.comprado);
  }

  adicionarItem() {
    if (this.novoItem.trim()) {
      this.compras.push({ nome: this.novoItem, comprado: false });
      this.novoItem = '';
    }
  }

  editarItem(item: { nome: string, comprado: boolean }, novoNome: string) {
    item.nome = novoNome;
  }

  marcarComoComprado(item: { nome: string, comprado: boolean }) {
    item.comprado = !item.comprado;
  }

  excluirItem(item: { nome: string, comprado: boolean }) {
    const index = this.compras.indexOf(item);
    if (index > -1) {
      this.compras.splice(index, 1);
    }
  }
}
