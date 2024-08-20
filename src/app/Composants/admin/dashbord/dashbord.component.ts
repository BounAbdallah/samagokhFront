import { Component, OnInit,Input } from '@angular/core';
import { UserService } from '../../../Services/adminServices/user/user.service';
import { CommuneService } from '../../../Services/adminServices/commune/commune.service';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../Services/adminServices/shared.service';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent  implements OnInit{
  // @Input() villes: any[] = [];  
  cards: any[] = [];

  // cards = [
  //   { imgSrc: 'https://img.freepik.com/vecteurs-libre/batiments-ville-moderne_1441-3042.jpg', title: 'Dakar', updated: '3 mins ago' },
  //   { imgSrc: 'https://img.freepik.com/photos-gratuite/grande-ville_1127-3102.jpg', title: 'Saint-luis', updated: '3 mins ago' },
  //   { imgSrc: 'https://img.freepik.com/photos-gratuite/vue-aerienne-complexe-ville_23-2148975282.jpg', title: 'Louga', updated: '3 mins ago' },
  //   { imgSrc: 'https://img.freepik.com/photos-gratuite/grande-ville_1127-3102.jpg?ga=GA1.2.1272467380.1720960746&semt=ais_hybrid', title: 'Fatick', updated: '3 mins ago' },
  //   { imgSrc: 'https://img.freepik.com/photos-gratuite/acier-entreprise-construction-urbaine-observation_1127-2397.jpg?ga=GA1.2.1272467380.1720960746&semt=ais_hybrid', title: 'Thiès', updated: '3 mins ago' },
  //   { imgSrc: 'https://img.freepik.com/photos-gratuite/shiny-ville-nuit_1127-8.jpg?ga=GA1.2.1272467380.1720960746&semt=ais_hybrid', title: 'Villes3', updated: '3 mins ago' },
  //   { imgSrc: 'https://img.freepik.com/photos-gratuite/vue-ville-new-york-au-coucher-du-soleil_23-2151279432.jpg?ga=GA1.2.1272467380.1720960746&semt=ais_hybrid', title: 'Villes3', updated: '3 mins ago' },

  //   // Ajoutez d'autres cartes ici
  // ];

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

  constructor(private userService : UserService,private communeService: CommuneService,private sharedService: SharedService){}

  ngOnInit(): void {
    this.fetchTotalUsers();
    this.fetchTotalCommunes();
    this.subscribeToVilles();
  }
//Paginate suivante
  nextPage() {
    if (this.currentPage < Math.ceil(this.cards.length / this.cardsPerPage)) {
      this.currentPage++;
    }
  }

  //Paginate préédente
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }


  subscribeToVilles() {
    this.sharedService.villes$.subscribe(villes => {
      this.populateCards(villes);
    });
  }

  populateCards(villes: any[]): void {
    this.cards = villes.map(ville => ({
      imgSrc: 'https://fr.freepik.com/photos-gratuite/new-york-city_26745119.htm#fromView=search&page=1&position=20&uuid=d9bea586-ada9-4494-8593-e9f4f43adf4b', // Remplacez par l'image réelle si disponible
      title: ville.libelle,
      updated: ville.description
    }));
    this.totalPages = Math.ceil(this.cards.length / this.cardsPerPage);
  }

  //Récupération du nombre d'utilisateurs
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

  //Récupération du nombre de commune
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


