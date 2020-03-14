import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedFoodsPage } from './saved-foods.page';

describe('SavedFoodsPage', () => {
  let component: SavedFoodsPage;
  let fixture: ComponentFixture<SavedFoodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedFoodsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedFoodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
