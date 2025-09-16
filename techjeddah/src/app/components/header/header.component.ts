import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  toggleMenu() {
    // const menu = this.el.nativeElement.querySelector('.nav');
    // if (menu.classList.contains('active')) {
    //   this.renderer.removeClass(menu, 'active');
    //   this.isMenuOpen = false;
    // } else {
    //   this.renderer.addClass(menu, 'active');
    //   this.isMenuOpen = true;
    // }
    this.isMenuOpen = !this.isMenuOpen;
    console.log('open', this.isMenuOpen)
  }

}
