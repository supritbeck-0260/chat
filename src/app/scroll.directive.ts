import { Directive , ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(private elem:ElementRef) {
    console.log(elem.nativeElement);
   }
   ngDoCheck() {
     if(!this.elem.nativeElement) return;
    console.log(this.elem.nativeElement.scrollTop,this.elem.nativeElement.scrollHeight);
    this.elem.nativeElement.scrollTop=this.elem.nativeElement.scrollHeight;
}

}
