import { OnInit, Directive, Renderer2, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective implements OnInit{

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
  }

  @HostListener('click')
  mousedownMeth() {
    const classes = this.elementRef.nativeElement.classList.value;

    if (classes.includes('open')) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    }
  }
}
