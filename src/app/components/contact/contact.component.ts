import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormData {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section id="contact" class="py-24 bg-gray-50">
      <div class="container mx-auto max-w-2xl px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Let's Connect</h2>
        <form class="space-y-6" (submit)="onSubmit($event)">
          <div class="group">
            <label class="block text-gray-700 mb-2 font-medium">Name</label>
            <input
              type="text"
              [(ngModel)]="formData.name"
              name="name"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
              [class.border-red-500]="submitted && !formData.name"
              required
            />
            @if (submitted && !formData.name) {
            <p class="text-red-500 text-sm mt-1">Name is required</p>
            }
          </div>

          <div class="group">
            <label class="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              [(ngModel)]="formData.email"
              name="email"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
              [class.border-red-500]="submitted && !formData.email"
              required
            />
            @if (submitted && !formData.email) {
            <p class="text-red-500 text-sm mt-1">Email is required</p>
            }
          </div>

          <div class="group">
            <label class="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              [(ngModel)]="formData.message"
              name="message"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none h-32 resize-none"
              [class.border-red-500]="submitted && !formData.message"
              required
            ></textarea>
            @if (submitted && !formData.message) {
            <p class="text-red-500 text-sm mt-1">Message is required</p>
            }
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>

          @if (showSuccess) {
          <div
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div class="bg-white p-8 rounded-lg shadow-xl">
              <div class="text-center">
                <i class="fas fa-check-circle text-4xl text-green-500 mb-4"></i>
                <h3 class="text-xl font-bold mb-2">Message Sent!</h3>
                <p class="text-gray-600">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
                <button
                  (click)="showSuccess = false"
                  class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          }
        </form>
      </div>
    </section>
  `,
})
export class ContactComponent {
  formData: FormData = {
    name: '',
    email: '',
    message: '',
  };
  submitted = false;
  showSuccess = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted = true;

    if (this.formData.name && this.formData.email && this.formData.message) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.formData);
      this.showSuccess = true;
      this.resetForm();
    }
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
    this.submitted = false;
  }
}
