import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class StructuralDirective implements OnInit{

  @Input('appUnless')
  set unless(condition: boolean) {
    if (! condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {}
}
