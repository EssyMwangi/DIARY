import { Entry } from './../entry';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})

// entries is an object and attributed it to the Entry blueprint.
export class EntryComponent implements OnInit {
  entries:Entry[]=[
    new Entry(1, 'Netflix Party with friends', 'Be online at 9pm for netflix session',new Date(2020,3,14)),
    new Entry(2,'Finish Thursday content','Create diary app',new Date(2020,3,14)),
    new Entry(3,'Cook Dinner','Cook chapatis',new Date(2020,9,14)),
    new Entry(4,'Read a novel','Read any book in my book list',new Date(2020,5,14)),
    new Entry(5,'Workout session','1 hr fast passed walk and cardio',new Date(2020,11,14)),
  ];
  //toggleDetails() function in our component class and specified that it takes index as an argument.
  toggleDetails(index){
    this.entries[index].showDetail = !this.entries[index].showDetail;
    //we have defined the logic for displaying the entry detail, which in our case changes the showDetail from false to true .
    //The entries[index] ensures that the function is executed for the entry at the specific index. 
  }

  deleteEntry(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.entries[index].name}?`)

      if (toDelete){
        this.entries.splice(index,1)
      }
    }
  }
  addNewEntry(entry){
    let entryLength = this.entries.length;
    entry.id = entryLength+1;
    entry.completeDate = new Date(entry.completeDate)
    this.entries.push(entry)
  }

  constructor() { }

  ngOnInit(): void {
  }
  // ngOnInit is a lifecycle hook, it is called each time the component is created.
}
