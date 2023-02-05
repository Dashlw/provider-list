import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersListComponent } from './providers-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Provider } from '../common/models/provider';
import { By } from '@angular/platform-browser';

describe('ProvidersListComponent', () => {
  let component: ProvidersListComponent;
  let fixture: ComponentFixture<ProvidersListComponent>;
  let unselectedProviders: Provider[];
  let selectedProviders: Provider[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvidersListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProvidersListComponent);
    component = fixture.componentInstance;
    unselectedProviders = [{
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
      }];
    component.unselectedProviders = unselectedProviders;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a list of unselected providers', () => {
    const providers = fixture.debugElement.queryAll(By.css('.unselected'));
    expect(providers.length).toEqual(component.unselectedProviders.length);

    providers.forEach((item, index) => {
      expect(item.nativeElement.textContent).toContain(component.unselectedProviders[index].name);
    });
  });

  it('saves a provider to the selected list', () => {});

  it('deletes a provider from the selected list', () => {});

  it('renders an updated unselected list', () => {});
});
