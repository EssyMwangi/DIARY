import { Entry } from './../entry';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-entrydetail',
  templateUrl: './entrydetail.component.html',
  styleUrls: ['./entrydetail.component.css']
})

//we define entry as the property that will undergo input property binding,which is of the type Goal.
export class EntrydetailComponent implements OnInit {
  @Input() entry: Entry;
  @Output() isComplete = new EventEmitter<boolean>();
  //Output decorator to define isComplete as an EventEmitter that takes in a boolean.

  entryDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
 //created our goalComplete() function which calls the emit method on the isComplete EventEmitter. What this does is pass this event to the parent component.
  constructor() { }

  ngOnInit(): void {
  }

}
