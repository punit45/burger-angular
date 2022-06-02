import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer mt-auto py-3">
      <div class="container footer-container">
          Footer  in Angular
      </div>
    </footer>
  `,
  styles: [
    `
      .footer-container {
        margin-top: 20px;
        text-align: center;
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
