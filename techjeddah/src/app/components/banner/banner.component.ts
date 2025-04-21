import { Component,ViewChild,ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent  {
  // @ViewChild('bgVideo')
  // bgVideo!: ElementRef;

  // ngAfterViewInit() {
  //   const videoElement: HTMLVideoElement = this.bgVideo.nativeElement;
  //   videoElement.muted = true; // Mute the video after the view is initialized
  // }
}


