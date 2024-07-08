import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TaskComponent {
  tasks: string[] = [];
  showToDo: boolean = false;
  title: string = 'Lista de Teste';

  hasTasks() {
    alert(
      `${
        this.tasks.length > 0 ? 'Tem tarefas' : 'Não existem tarefas pendentes'
      }`
    );
  }
}
