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
  autoplayInterval: any;
  slidesToShow = 3;
  isMobile = false;
  
  teamMembers: TeamMember[] = [
    {
      name: "Sohaib",
      title: "IT specialist",
      experience: "highly skilled in IT",
      image: "assets/images/placeholder.jpg",
      shape: 'circle'
    },
    {
      name: "Hafsah Khan",
      title: " Business & digital skills specialist",
      experience: "more than 12 years of experience in Business and marketing",
      image: "assets/images/placeholder.jpg",
      shape: 'hexagon'
    },
    {
      name: "Sohaib Ahmed",
      title: "Frontend Engineer",
      experience: "6+ years experience in React Development,angular and web development",
      image: "assets/images/placeholder.jpg",
      shape: 'square'
    },
    {
      name: "Aneeq Mehmood", 
      title: "SEO expert",
      experience: "2+ years experience in Machine Learning",
      image: "assets/images/placeholder.jpg",
      shape: 'diamond'
    },
    // {
    //   name: "Lena Kim",
    //   title: "Product Manager",
    //   experience: "9+ years experience in Product Development",
    //   image: "assets/images/placeholder.jpg",
    //   shape: 'circle'
    // },
    // {
    //   name: "David Wilson",
    //   title: "Backend Developer",
    //   experience: "7+ years experience in Server Architecture",
    //   image: "assets/images/placeholder.jpg",
    //   shape: 'hexagon'
    // }
  ];

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.checkScreenSize();
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768;
    this.slidesToShow = this.isMobile ? 1 : 3;
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  next(): void {
    const maxIndex = this.teamMembers.length - this.slidesToShow;
    this.activeIndex = this.activeIndex >= maxIndex ? 0 : this.activeIndex + 1;
  }

  prev(): void {
    const maxIndex = this.teamMembers.length - this.slidesToShow;
    this.activeIndex = this.activeIndex <= 0 ? maxIndex : this.activeIndex - 1;
  }

  goToSlide(index: number): void {
    const maxIndex = this.teamMembers.length - this.slidesToShow;
    this.activeIndex = Math.min(index, maxIndex);
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