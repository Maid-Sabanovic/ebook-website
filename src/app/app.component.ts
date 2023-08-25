import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Initial check for scroll position
    this.handleScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.handleScroll();
  }

  private handleScroll(): void {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-dark');
        navbar.classList.add('navbar-sticky');
      } else {
        navbar.classList.remove('bg-dark');
        navbar.classList.remove('navbar-sticky');
      }
    }
  }
}
