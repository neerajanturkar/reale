import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  searchTxt: string;
  buy: boolean;
  rent: boolean;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.buy = true;
    this.rent = true;
  }
  onSearch() {
    if (this.searchTxt === undefined) {
      alert('Enter City, District, Street, ZIP code');
    }
    if (this.buy === false && this.rent === false) {
      alert('Please select at least one of the offer types (Buy/Rent)');
    }
    const searchParams = {
      'searchTxt': this.searchTxt,
      'buy': this.buy,
      'rent': this.rent
    };

    this.homeService.getProperties(searchParams).then(properties => {
      console.log(properties);
    });
  }
}
