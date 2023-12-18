import { Component } from '@angular/core';
import { TableService } from './service/table.service';
import { User } from './model/table';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  userData: User[] = [];
  username: string = '';

  constructor(private tableService: TableService) {
  }

  getUsersGit() {
    this.tableService.getUser(this.username).subscribe(
      (tableServiceResponse: User | User[]) => {  
        if (Array.isArray(tableServiceResponse)) {  
          this.userData = tableServiceResponse;
        } else if (tableServiceResponse && tableServiceResponse.login) {  
          this.userData = [tableServiceResponse];
        } else {
          this.userData = [];
        }
      },
      (err) => {
        console.log('Error API:', err);
      });
  }
  
  searchUser(inputField: HTMLInputElement) {
    this.username = inputField.value;
    this.getUsersGit();
  }
  
  clear(inputField: HTMLInputElement) {
    inputField.value = "";
  }
}
