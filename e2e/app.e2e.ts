import { ZipCallPage } from './app.po';

describe('zip-call App', function() {
  let page: ZipCallPage;

  beforeEach(() => {
    page = new ZipCallPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('zip-call works!');
  });
});
