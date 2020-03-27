import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

    
  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}
//We use ElementRef to inject a reference to the host DOM element in which we will use this directive.
//We have then targeted the host element's style attribute and changed the text-decoration to line-through. 
// The ElementRef grants us direct access to the host DOM element through its nativeElement property.
//function textDeco() which takes in an action and then performs a text-decoration using the action.
