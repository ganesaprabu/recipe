import { Directive, OnInit, Renderer2, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBindingHighlightDirective]'
})
export class HostBindingHighlightDirective implements OnInit{

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {

  }
  ngOnInit() {

  }

  @HostListener('keydown')
  onMouseDownMet() {
    let colorIndex = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorIndex];
  }

}
