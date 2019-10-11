import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';

  constructor() {
	  this.todos.push(new Todo(1,'Primeira tarefa',false));
	  this.todos.push(new Todo(2,'Segunda tarefa',true));
	  this.todos.push(new Todo(3,'Terceira tarefa',false));
  }

  remove(todo: Todo){
	  const index = this.todos.indexOf(todo);

	  if(index !== -1){
			this.todos.splice(index, 1);
	  }
  }

  markAsDone(){

  }

  masAsUndone(){

  }
}
