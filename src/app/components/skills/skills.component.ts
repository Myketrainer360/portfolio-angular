import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { SKILLS } from '../../shared/data/skills.data';
import { Skill } from '../../shared/models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  template: `
    <section id="skills" class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Technical Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          @for (skill of skills; track skill.name) {
          <app-skill-card [skill]="skill" />
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  skills: Skill[] = SKILLS;
}
