import { OnInit, Directive, Input, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAdvancedDirective]'
})
export class AdvancedDirective implements OnInit{
  @Input() defaultColor: string;
  @Input('appAdvancedDirective') highlightColor: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.defaultColor);
  }

  @HostListener('mouseenter')
  onMouseEnterMeth() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.highlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeaveMeth() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.defaultColor);
  }
}
