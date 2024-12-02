import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../shared/models/skill.model';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="group p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
      (mouseenter)="skill.isHovered = true"
      (mouseleave)="skill.isHovered = false"
    >
      <div class="text-center">
        <div class="w-16 h-16 mx-auto mb-4 relative">
          <div
            class="absolute inset-0 bg-blue-100 rounded-full transform transition-transform duration-300"
            [class.scale-110]="skill.isHovered"
          ></div>
          <i
            [class]="
              skill.icon +
              ' text-2xl absolute inset-0 flex items-center justify-center text-blue-600'
            "
          ></i>
        </div>
        <h3 class="font-bold mb-2">{{ skill.name }}</h3>
        <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div
            class="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
            [style.width.%]="skill.isHovered ? skill.level : 0"
          ></div>
        </div>
        <span class="text-sm text-gray-600">{{ skill.level }}%</span>
      </div>
    </div>
  `,
})
export class SkillCardComponent {
  @Input() skill!: Skill;
}
