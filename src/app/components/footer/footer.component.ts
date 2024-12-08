import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-900 text-gray-400">
      <!-- Main Footer Content -->
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Brand Section -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-yellow-300">MykeDev 360°</h3>
            <p class="text-gray-400">
              Crafting digital experiences with modern web technologies.
            </p>
            <div class="flex space-x-4">
              @for (link of socialLinks; track link.url) {
              <a
                [href]="link.url"
                class="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i [class]="link.icon + ' text-xl'"></i>
              </a>
              }
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold text-yellow-300 mb-4">
              Quick Links
            </h4>
            <ul class="space-y-2">
              @for (link of quickLinks; track link.text) {
              <li>
                <a
                  [href]="link.url"
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span
                    class="transform group-hover:translate-x-1 transition-transform duration-300"
                  >
                    {{ link.text }}
                  </span>
                </a>
              </li>
              }
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold text-yellow-300 mb-4">
              Contact Info
            </h4>
            <ul class="space-y-3">
              @for (info of contactInfo; track info.text) {
              <li class="flex items-center space-x-3">
                <i [class]="info.icon + ' text-blue-500'"></i>
                <span>{{ info.text }}</span>
              </li>
              }
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800">
        <div class="container mx-auto px-4 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm text-gray-400">
              © {{ currentYear }} Myke Rodriguez. All rights reserved.
            </p>
            <div class="flex space-x-4 mt-4 md:mt-0">
              @for (link of legalLinks; track link.text) {
              <a
                [href]="link.url"
                class="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                {{ link.text }}
              </a>
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com' },
  ];

  quickLinks = [
    { text: 'About', url: '#about' },
    { text: 'Projects', url: '#projects' },
    { text: 'Skills', url: '#skills' },
    { text: 'Contact', url: '#contact' },
  ];

  contactInfo = [
    { icon: 'fas fa-envelope', text: 'hello@myke.rodriguez.dev' },
    { icon: 'fas fa-phone', text: '+39 (333) 123-4567' },
    { icon: 'fas fa-map-marker-alt', text: 'Rome, IT' },
  ];

  legalLinks = [
    { text: 'Privacy Policy', url: '#privacy' },
    { text: 'Terms of Service', url: '#terms' },
  ];
}
