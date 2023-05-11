import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitMQAdminComponent } from './rabbit-mqadmin.component';

describe('RabbitMQAdminComponent', () => {
  let component: RabbitMQAdminComponent;
  let fixture: ComponentFixture<RabbitMQAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabbitMQAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbitMQAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
