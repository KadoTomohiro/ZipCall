import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ZipCallAppComponent } from '../app/zip-call.component';

beforeEachProviders(() => [ZipCallAppComponent]);

describe('App: ZipCall', () => {
  it('should create the app',
      inject([ZipCallAppComponent], (app: ZipCallAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'zip-call works!\'',
      inject([ZipCallAppComponent], (app: ZipCallAppComponent) => {
    expect(app.title).toEqual('zip-call works!');
  }));
});
