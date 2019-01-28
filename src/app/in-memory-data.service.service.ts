import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pizzas = [
      { id: 11, name: 'Veg Pizza1',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 200, base: 'Thin crust', type: 'Cheese burst'},
      { id: 12, name: 'Veg Pizza2',init:'v', pizza: 'Veg', image: './assets/2.png',price: 300, base: 'Multigrain', type: 'Cheese burst' },
      { id: 13, name: 'NV Pizza3',init:'n', pizza: 'Non Veg', image: 'assets/3.png',price: 200, base: 'Regular base', type: 'Cheese burst' },
      { id: 14, name: 'NV Pizza4',init:'n', pizza: 'Non Veg', image: 'assets/6.png',price: 350, base: 'Flat bread', type: 'Cheese burst'}

    ];
    return {pizzas};
  }
}