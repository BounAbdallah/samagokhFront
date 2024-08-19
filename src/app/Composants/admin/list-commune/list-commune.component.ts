import { Component , OnInit} from '@angular/core';
import { CommuneService } from '../../../Services/adminServices/commune/commune.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { log } from 'console';

@Component({
  selector: 'app-list-commune',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-commune.component.html',
  styleUrl: './list-commune.component.css'
})
export class ListCommuneComponent {
totalCommunes: number = 0;
constructor(private communeService: CommuneService){}
ngOnInit(): void {
  this.loadCommunes();
  this.fetchTotalCommunes();
  
}
loadCommunes(){
this.communeService.getCommunes().subscribe(
  (response:any)=>{
    console.log(response);
  }
)
}

fetchTotalCommunes(): void {
  this.communeService.getTotalCommunes().subscribe(
    (data: number) => {
      this.totalCommunes = data;
    },
    (error) => {
      console.error('Error fetching communes count:', error);
    }
  );
}

}
