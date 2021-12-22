import Todo  from 'src/app/Model/Todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/Services/todo.service';
import { v4 as uuidv4 } from "uuid";
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoService:TodoService) { }
  title!: string;
  ngOnInit(): void {
  }
  AddTheTodos(){
     const todo:Todo={
      id:uuidv4(),
      title:this.title,
      date:new Date(),
      isCompleted:false
     }

     this.todoService.createTodo(todo)
  }
}
