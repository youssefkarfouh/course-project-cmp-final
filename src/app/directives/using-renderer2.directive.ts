import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appUsingRenderer2]',
})
export class UsingRenderer2Directive implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log('this.renderer', this.renderer);
  }

  @HostListener('mouseenter') mousOver() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'brown'
    );
  }
  @HostListener('mouseleave',['$event.type' , '$event.target']) mouseLeave(event , target) {

  console.log('event in directive :', event);
  console.log('target :', target);

    
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'transparent'
    );
  }
}
