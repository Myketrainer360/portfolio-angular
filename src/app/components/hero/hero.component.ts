import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 py-20"
    >
      <div class="container mx-auto px-4">
        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <!-- Text Content -->
          <div class="text-left lg:w-1/2 fade-in">
            <h1
              class="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight"
            >
              Hello, I'm
              <span class="text-yellow-300 slide-in-right block"
                >Myke Rodriguez</span
              >
            </h1>
            <p
              class="text-xl md:text-2xl text-gray-600 mb-8 fade-in-delay max-w-2xl"
            >
              Full Stack Developer specializing in modern web technologies
            </p>
            <div class="flex gap-4 fade-in-delay-2">
              <a
                href="#projects"
                class="inline-flex items-center px-6 py-3 text-lg bg-blue-600 text-black-300 rounded-lg hover:bg-blue-700 hover:text-yellow-300 transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                class="inline-flex items-center px-6 py-3 text-lg border-2 border-blue-600 text-black-300 rounded-lg hover:bg-blue-600 hover:text-yellow-300 transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Contact Me
              </a>
            </div>
          </div>

          <!-- Image Container -->
          <div class="lg:w-1/2 relative fade-in-delay">
            <div class="relative">
              <!-- Background Circle -->
              <div
                class="absolute inset-0 bg-blue-100 rounded-full transform -translate-x-6 translate-y-6"
              ></div>
              <!-- Image -->
              <div
                class="relative z-10 rounded-full overflow-hidden border-8 border-white shadow-xl w-72 h-72 md:w-96 md:h-96 mx-auto"
              >
                <img
                  src="/assets/profile.jpg"
                  alt="John Doe"
                  class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <!-- Decorative Elements -->
              <div
                class="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-50"
              ></div>
              <div
                class="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-300 rounded-full opacity-50"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .fade-in {
        animation: fadeIn 0.8s ease-out;
      }
      .fade-in-delay {
        animation: fadeIn 0.8s ease-out 0.3s both;
      }
      .fade-in-delay-2 {
        animation: fadeIn 0.8s ease-out 0.6s both;
      }
      .slide-in-right {
        display: inline-block;
        animation: slideInRight 0.8s ease-out;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `,
  ],
})
export class HeroComponent {}
