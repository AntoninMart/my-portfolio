import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public age: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateAge();
  }

  calculateAge(): void {
    const birthDate = new Date('2002-10-16');
    let timeDiff = Math.abs(Date.now() - birthDate.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  }
}
