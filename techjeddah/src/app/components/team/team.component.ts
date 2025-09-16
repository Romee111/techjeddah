import { Component ,OnInit, OnDestroy, HostListener } from '@angular/core';


interface TeamMember {
  name: string;
  title: string;
  experience: string;
  image: string;
  shape: 'circle' | 'hexagon' | 'square' | 'diamond';
}
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, OnDestroy {
  activeIndex = 0;
  autoplayInterval!: ReturnType<typeof setInterval>;
  slidesToShow = 3;
  isMobile = false;

  teamMembers: TeamMember[] = [
    {
      name: 'Sohaib Romee',
      title: 'IT Specialist',
      experience: 'High skill in IT',
      image: 'assets/CEO.jpg',
      shape: 'circle'
    },
    {
      name: 'Hafsah Khan',
      title: 'Business & Digital Skills Specialist',
      experience: '12+ years in Business & Marketing',
      image: 'assets/hafsah.jpg',
      shape: 'hexagon'
    },
    {
      name: 'Sohaib Ahmed',
      title: 'Frontend Engineer',
      experience: '3+ years in React, Angular & Web Dev',
      image: 'assets/sohaib.jpg'  ,
      shape: 'square'
    },
    {
      name: 'Aneeq Mehmood',
      title: 'WordPress developer',
      experience: '2+ years in Machine Learning',
      image: 'assets/images/placeholder.jpg',
      shape: 'diamond'
    },
    {
      name: 'Ahmed Mudassir',
      title: 'Devops Engineer',
      experience: '2+ years in Product Development',
      image: 'assets/images/placeholder.jpg',
      shape: 'circle'
    },
    {
      name: 'Muhammad Mahad',
      title: 'Django Developer',
      experience: '2+ years in Server Architecture',
      image: 'assets/images/placeholder.jpg',
      shape: 'hexagon'
    }
  ];

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.checkScreenSize();
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768;
    this.slidesToShow = this.isMobile ? 1 : 3;
    // ensure activeIndex is in bounds
    const maxIndex = this.teamMembers.length - this.slidesToShow;
    if (this.activeIndex > maxIndex) {
      this.activeIndex = 0;
    }
  }

  private startAutoplay(): void {
    this.autoplayInterval = setInterval(() => this.next(), 5000);
  }

  private stopAutoplay(): void {
    clearInterval(this.autoplayInterval);
  }

  next(): void {
    const maxIndex = this.teamMembers.length - this.slidesToShow;
    this.activeIndex = this.activeIndex >= maxIndex ? 0 : this.activeIndex + 1;
    this.restartAutoplay();
  }

  prev(): void {
    const maxIndex = this.teamMembers.length - this.slidesToShow;
    this.activeIndex = this.activeIndex <= 0 ? maxIndex : this.activeIndex - 1;
    this.restartAutoplay();
  }

  goToSlide(index: number): void {
    const maxIndex = this.teamMembers.length - this.slidesToShow;
    this.activeIndex = Math.min(index, maxIndex);
    this.restartAutoplay();
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  isSlideVisible(index: number): boolean {
    return index >= this.activeIndex && index < this.activeIndex + this.slidesToShow;
  }

  get maxDotIndex(): number {
    return this.teamMembers.length - this.slidesToShow + 1;
  }
}