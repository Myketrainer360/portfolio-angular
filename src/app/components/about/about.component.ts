import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-4xl font-bold text-center mb-8">
            About Me
          </h2>

          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Front-End Developer with 2+ years of experience
                in building web applications. I specialize in creating elegant
                solutions that combine clean code with exceptional user
                experiences.
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                My journey in tech started with a curiosity about how things
                work on the web, which led me to dive deep into modern web
                technologies and best practices.
              </p>
              <div class="flex flex-wrap gap-4">
                <div class="flex items-center space-x-2">
                  <i class="fas fa-map-marker-alt text-blue-600"></i>
                  <span>Rome, Italy</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i class="fas fa-graduation-cap text-blue-600"></i>
                  <span>Computer Science, NYU</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i class="fas fa-briefcase text-blue-600"></i>
                  <span>2+ Years Experience</span>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <h3 class="text-2xl font-semibold mb-4">What I Do?</h3>
              <div class="space-y-4">
                @for (service of services; track service.title) {
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <i [class]="service.icon + ' text-2xl text-blue-600'"></i>
                  </div>
                  <div>
                    <h4 class="font-medium mb-1">{{ service.title }}</h4>
                    <p class="text-gray-600">{{ service.description }}</p>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  services = [
    {
      title: 'Web Development',
      description:
        'Building responsive and performant web applications using modern frameworks.',
      icon: 'fas fa-code',
    },
    {
      title: 'UI/UX Design',
      description:
        'Creating intuitive and beautiful user interfaces with attention to detail.',
      icon: 'fas fa-paint-brush',
    },
    {
      title: 'API Development',
      description:
        'Designing and implementing robust REST APIs and backend services.',
      icon: 'fas fa-server',
    },
  ];
}
