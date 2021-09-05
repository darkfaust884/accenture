import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  array: any
  constructor(private storageService: StorageService, private httpService: HttpService) { }
  async getShares() {
    let user_info = {
      id_user: 1, 
      token: '',
      page: 10,
  }


    this.httpService.get('getNewsFeed', user_info).subscribe(
      data => {
        this.array = data;
        console.log(data)
      }
      
    )
    
  }
  ngOnInit(): void {
    this.getShares()
  }

}

