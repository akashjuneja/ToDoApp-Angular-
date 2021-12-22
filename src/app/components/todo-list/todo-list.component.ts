import { Component, OnInit } from '@angular/core';
import { faTrash  } from '@fortawesome/free-solid-svg-icons';
import Todo from 'src/app/Model/Todo';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  faTrash=faTrash
  todos:Todo[] | undefined
  constructor(private todoservice :TodoService) {
   }
  ngOnInit() :void {
    this.todoservice.getTodo().subscribe((x)=>{
            this.todos=x
    })
  }

   createTodoService(todo:Todo){
     this.todoservice.createTodo(todo)
   }


    changeTodoStatus(todo:Todo){
      this.todoservice.updateTodo(todo)
    }

    deleteTodos(todo:Todo){
      this.todoservice.deleteTodo(todo)
    }
  }




