import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="bg-gray-900 text-yellow-300 p-6">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">MykeDev 360°</h1>
        <ul class="flex space-x-6">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
