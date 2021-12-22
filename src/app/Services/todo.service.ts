import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import Todo from '../Model/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[]

  constructor() {
    this.todos=[{
      id:"2345",
      title:"learn Java",
      isCompleted:true,
      date:new Date()
    },
    {
      id:"2346",
      title:"learn Spring",
      isCompleted:false,
      date:new Date()
    },
    {
      id:"2347",
      title:"learn React",
      isCompleted:true,
      date:new Date()
    }
  ]
  }

  getTodo(){
     return of(this.todos)
  }

  createTodo(todo: Todo){
       this.todos.push(todo)
  }

  updateTodo(todo:Todo){
       this.todos.map((x)=>{
         if(x.isCompleted===todo.isCompleted){
           x.isCompleted=!x.isCompleted
         }
       })
  }

  deleteTodo(todo:Todo){
    this.todos.filter((x)=>{
      x.id!==todo.id
    })
  }
}
