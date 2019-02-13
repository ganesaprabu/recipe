import { Directive, OnInit, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEventlistenerHighlightDirective]'
})
export class EventlistenerHighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementref: ElementRef) {}

  ngOnInit() {
  }

  @HostListener('mouseenter')
  mouseEnterMethod(event: Event) {
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'lightBlue');
  }

  @HostListener('mouseleave')
  mouseLeaveMethod(event: Event) {
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'transparent');
  }
}
