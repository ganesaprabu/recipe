import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropDownBind]'
})
export class DropDownBindDirective implements OnInit{
    @HostBinding('class.open') openDropDown: boolean = false;
    
    constructor() {}
    ngOnInit() {}

    @HostListener('click')
    onclickMeth() {
        this.openDropDown = !this.openDropDown;
    }
}