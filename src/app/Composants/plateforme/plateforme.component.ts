import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plateforme',
  standalone: true,
  imports: [PlateformeComponent,RouterLink],
  templateUrl: './plateforme.component.html',
  styleUrl: './plateforme.component.css'
})
export class PlateformeComponent {

}
