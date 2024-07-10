import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TaskComponent {
  tasks: string[] = [
    'Abacate',
    'Laranja',
    'Pera',
    'Maçã',
    'Uva',
    'Graviola',
    'Pitomba',
  ];
  showToDo: boolean = false;
  title: string = 'Lista de Teste';
  favoriteDay: string = 'Friday';

  hasTasks() {
    alert(
      `${
        this.tasks.length > 0 ? 'Tem tarefas' : 'Não existem tarefas pendentes'
      }`
    );
  }
}
