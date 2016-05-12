export class ZipCallPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('zip-call-app h1')).getText();
  }
}
