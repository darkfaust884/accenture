import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-briefcase-aggressive',
  templateUrl: './briefcase-aggressive.component.html',
  styleUrls: ['./briefcase-aggressive.component.scss']
})
export class BriefcaseAggressiveComponent implements OnInit {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  array: any
  constructor(private storageService: StorageService, private httpService: HttpService) { }
  async getShares() {
    let user_info = {
      id_user: JSON.stringify(1), 
      token: '',
  }


    this.httpService.get('getAllShares', user_info).subscribe(
      data => {
        this.array = data;
        console.log(this.array)
      }
      
    )
    
  }
  ngOnInit(): void {
  }

}
