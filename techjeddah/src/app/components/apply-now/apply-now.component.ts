import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MeetingDetailsComponent } from '../meeting-details/meeting-details.component';
@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent {
  constructor(private dialog: MatDialog) {}

  openMeetingDialog() {
    this.dialog.open(MeetingDetailsComponent,
      {
        width: '800px',
        height: '600px',
        maxWidth: '100%',
        maxHeight: '100%',
        panelClass: 'full-screen-modal',
        position: { top:'90%', left:'25%' }
     
        
        
      }
    );
  }
  toggleAccordion(event: any) {
    const accordionItem = event.target.closest('.accordion');
    const accordionBody = accordionItem.querySelector('.accordion-body');
    const isExpanded = accordionItem.classList.contains('is-expanded');
    
    // Close all accordions
    document.querySelectorAll('.accordion').forEach(item => {
      item.classList.remove('is-expanded');
      (item.querySelector('.accordion-body') as HTMLElement).style.maxHeight = '0px';
    });
    
    // Expand clicked accordion if it wasn't already expanded
    if (!isExpanded) {
      accordionItem.classList.add('is-expanded');
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
    }
  }

}
