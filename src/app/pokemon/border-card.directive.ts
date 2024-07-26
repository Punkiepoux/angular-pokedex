import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]',
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @Input('pkmBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() { 
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() { 
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) { 
    this.el.nativeElement.style.height = `${this.defaultHeight}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
