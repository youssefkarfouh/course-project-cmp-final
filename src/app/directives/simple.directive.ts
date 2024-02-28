import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSimple]',
})
export class SimpleDirective implements OnInit{
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    console.log("this.elementRef"   , this.elementRef);
    console.log("this.elementRef.nativeElement"   , this.elementRef.nativeElement);

    (this.elementRef.nativeElement as HTMLElement).classList.add("directiveClass")
    
  }
}
