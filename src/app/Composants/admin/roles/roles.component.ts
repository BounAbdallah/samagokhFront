import { Component, OnInit} from '@angular/core';
import { RoleService } from '../../../Services/adminServices/role/role.service';
import { CommonModule } from '@angular/common';

interface PaginatedResponse<T> {
  current_page: number;
  data: T[];
  // ... autres propriétés de pagination
}

interface Role {
  id: number;
  name: string;
  permissions: any[]; // Ajustez selon la structure exacte de vos permissions
}

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{roles: Role[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    this.roleService.getRoles().subscribe(
      (response: PaginatedResponse<Role>) => {
        console.log('Response received:', response);
        this.roles = response.data;
        this.currentPage = response.current_page;
        // Calculez le nombre total de pages si nécessaire
        // this.totalPages = ...
        console.log('Roles:', this.roles);
      },
      error => console.error('Erreur lors du chargement des rôles', error)
    );
  }
}
