import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elemef: ElementRef) { }

  ngOnInit (){
    this.renderer.setStyle(this.elemef.nativeElement, 'background-color', 'lightblue');
  }
}
