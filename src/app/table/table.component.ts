import { Component } from '@angular/core';
import { TableService } from './service/table.service';
import { User } from './model/table';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  userData: User[] = [];
  username: string = 'raonieqr';

  constructor(private tableService: TableService) {
    this.getUsersGit();
  }

  getUsersGit() {
    this.tableService.getUser(this.username).subscribe(
      (tableServiceResponse: User[]) => {
        console.log('Response:', tableServiceResponse);
        this.userData = tableServiceResponse;
      },
      (err) => {
        console.log('Error API:', err);
      }
    );
  }

  clear(table: any) {
  }
}
