import {NewTaskData} from './task/task.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TasksService {

  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Dominar Angular',
      summary:
        'Aprender Angular para poder desenvolver aplicações web',
      dueDate: '31/11/2024',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Construir um protótipo do site da loja online',
      summary: 'Construir um protótipo do site da loja online para a loja de roupas',
      dueDate: '15/12/2024',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Preparar e descrever um modelo de problema',
      summary:
        'Preparar e descrever um modelo de problema para a disciplina de matemática',
      dueDate: '30/1/2025',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

    getUserTasks(userId: string) {
      return this.tasks.filter(
        task => task.userId === userId);
    }

    addTasks(taskData: NewTaskData, userId: string) {
      this.tasks.push({
        id: Math.random().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate
      })

      this.saveTasks();
    }

    removeTask(id: string) {
      this.tasks = this.tasks.filter(task => task.id !== id);

      this.saveTasks();
    }

    private saveTasks(){
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
