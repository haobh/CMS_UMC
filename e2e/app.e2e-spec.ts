import { AngularAOTPage } from './app.po';

describe('angular-aot App', () => {
  let page: AngularAOTPage;

  beforeEach(() => {
    page = new AngularAOTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
