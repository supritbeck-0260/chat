import { Directive , ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(private elem:ElementRef) {}
   ngDoCheck() {
     if(!this.elem.nativeElement) return;
    this.elem.nativeElement.scrollTop=this.elem.nativeElement.scrollHeight;
}

}
