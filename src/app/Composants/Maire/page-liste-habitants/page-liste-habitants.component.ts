import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { ListeHabitantsComponent } from "../liste-habitants/liste-habitants.component";

@Component({
  selector: 'app-page-liste-habitants',
  standalone: true,
  imports: [SideBarComponent, ListeHabitantsComponent],
  templateUrl: './page-liste-habitants.component.html',
  styleUrl: './page-liste-habitants.component.css'
})
export class PageListeHabitantsComponent {

}
