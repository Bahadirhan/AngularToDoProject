import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Key } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = {
    todo: [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ],

    inProgress: [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ],
    done: [
      "Solve Math"
    ]
  };

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // inProgress = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];
  // done = [
  //   "Solve Math"
  // ];

  // constructor() { }

  // ngOnInit(): void {
  //   this.setItems();
  // }
  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }

  // }

  // insert(param: any) {
  //   this.todo.push(param.value);
  //   localStorage.setItem('ToDo', JSON.stringify(this.todo));
  //   param.value = '';
  // }


  // setItems() {
  //   if (!localStorage.getItem('ToDo')) {
  //     localStorage.setItem('ToDo', JSON.stringify(this.todo));
  //   }
  //   else {
  //     // this.todo=JSON.parse(localStorage.getItem('ToDo')|| '{}');
  //     this.todo = JSON.parse(localStorage.getItem('ToDo')!);

  //   }

  //   if (!localStorage.getItem('InProgress')) {
  //     localStorage.setItem('InProgress', JSON.stringify(this.inProgress));
  //   }
  //   else {
  //     this.inProgress = JSON.parse(localStorage.getItem('InProgress')!);
  //   }

  //   if (!localStorage.getItem('Done')) {
  //     localStorage.setItem('Done', JSON.stringify(this.done));
  //   }
  //   else {
  //     this.done = JSON.parse(localStorage.getItem('Done')!);
  //   }

  // }

  constructor() { }

  ngOnInit(): void {
    this.setItems();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      Object.keys(this.data).forEach(item => {
        localStorage.setItem(item, JSON.stringify(this.data[item]));

      });
    }

  };

  insert(param: any) {
    this.data.todo.push(param.value);
    localStorage.setItem('todo', JSON.stringify(this.data.todo));
    param.value = '';
  };

  setItems() {
    Object.keys(this.data).forEach(item => {
      if (!localStorage.getItem(item)) {
        localStorage.setItem(item, JSON.stringify(this.data[item]));
      }
      else {
        // this.data[item]=JSON.parse(localStorage.getItem(item)|| '{}');
        this.data[item] = JSON.parse(localStorage.getItem(item)!);
      }
    });

  };

};