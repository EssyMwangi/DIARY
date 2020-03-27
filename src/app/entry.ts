export class Entry {
  public showDetail: boolean;
  constructor(public id: number,public name:string,public detail:string,public completeDate: Date){
    this.showDetail=false; // declared asfalse to be hidden 
  }
}


//created showDetail property and assigned it to data type boolean.In constructor the entry properties are passed as constructor arguments . 