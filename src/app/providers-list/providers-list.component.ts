import { Component, OnInit } from '@angular/core';
import { Provider } from '../common/models/provider';
import { LocalStorageService } from '../common/services/local-storage.service';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent implements OnInit {
  public selectedProviders: Provider[] = [];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    const unselectedInStorage = this.localStorageService.getItem('unselected_providers');
    const selectedInStorage = this.localStorageService.getItem('selected_providers');

    if (unselectedInStorage) {
      this.unselectedProviders = unselectedInStorage;
    }

    if (selectedInStorage) {
      this.selectedProviders = selectedInStorage;
    }
  }

  saveProvidersToStorage() {
    this.localStorageService.setItem('unselected_providers', this.unselectedProviders);
    this.localStorageService.setItem('selected_providers', this.selectedProviders);
  }

  saveProvider(provider: Provider) {
    this.unselectedProviders = this.unselectedProviders.filter((p: Provider) => p.id !== provider.id);
    this.selectedProviders.push(provider);
    this.saveProvidersToStorage();
  }

  removeSavedProvider(provider: Provider) {
    this.selectedProviders = this.selectedProviders.filter((p: Provider) => p.id !== provider.id);
    this.unselectedProviders.push(provider);
    this.saveProvidersToStorage();
  }

  clearList() {
    this.localStorageService.clearStorage();
    location.reload();
  }
}
