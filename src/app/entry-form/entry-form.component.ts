import { Entry } from './../entry';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  newEntry = new Entry(0,"","",new Date());
  @Output() addEntry = new EventEmitter<Entry>();

  submitGoal(){
    this.addEntry.emit(this.newEntry);
 }
  constructor() { }



  ngOnInit(): void {
  }

}
