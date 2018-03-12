import { Component, Input } from '@angular/core';
import { User } from '../../models/user.interface';

/**
 * Generated class for the SearchResultComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsComponent {

  @Input() user: User
  

  constructor() {
    console.log('Hello SearchResultsComponent Component');
    
  }

}
