import { AngularJS2PipesPage } from './app.po';

describe('angular-js2-pipes App', function() {
  let page: AngularJS2PipesPage;

  beforeEach(() => {
    page = new AngularJS2PipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
