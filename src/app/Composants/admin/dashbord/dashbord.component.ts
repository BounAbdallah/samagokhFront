import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/adminServices/user/user.service';
import { CommuneService } from '../../../Services/adminServices/commune/commune.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent  implements OnInit{
  cards = [
    { imgSrc: 'https://img.freepik.com/vecteurs-libre/batiments-ville-moderne_1441-3042.jpg', title: 'Villes1', updated: '3 mins ago' },
    { imgSrc: 'https://img.freepik.com/photos-gratuite/grande-ville_1127-3102.jpg', title: 'Ville2', updated: '3 mins ago' },
    { imgSrc: 'https://img.freepik.com/photos-gratuite/vue-aerienne-complexe-ville_23-2148975282.jpg', title: 'Villes3', updated: '3 mins ago' },
    { imgSrc: 'https://img.freepik.com/photos-gratuite/vue-aerienne-complexe-ville_23-2148975282.jpg', title: 'Villes3', updated: '3 mins ago' },
    { imgSrc: 'https://img.freepik.com/photos-gratuite/vue-aerienne-complexe-ville_23-2148975282.jpg', title: 'Villes3', updated: '3 mins ago' },
    { imgSrc: 'https://img.freepik.com/photos-gratuite/vue-aerienne-complexe-ville_23-2148975282.jpg', title: 'Villes3', updated: '3 mins ago' },
    { imgSrc: 'https://img.freepik.com/photos-gratuite/vue-aerienne-complexe-ville_23-2148975282.jpg', title: 'Villes3', updated: '3 mins ago' },
    // Ajoutez d'autres cartes ici
  ];
  // variable de pagination 
  currentPage = 1;
  cardsPerPage = 3;

  totalUsers: number = 0;
  totalCommunes: number = 0;

  get pagedCards() {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage;
    return this.cards.slice(startIndex, endIndex);
  }

  totalPages = Math.ceil(this.cards.length / this.cardsPerPage);

  constructor(private userService : UserService,private communeService: CommuneService){}

  ngOnInit(): void {
    this.fetchTotalUsers();
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.cards.length / this.cardsPerPage)) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  fetchTotalUsers(): void {
    this.userService.getTotalUsers().subscribe(
      (data: number) => {
        this.totalUsers = data;
      },
      (error) => {
        console.error('Error fetching user count:', error);
      }
    );
  }

  fetchTotalCommunes(): void {
    this.communeService.getTotalCommunes().subscribe(
      (data: number) => {
        this.totalCommunes = data;
      },
      (error: any) => {
        console.error('Error fetching communes count:', error);
      }
    );
  }
}
