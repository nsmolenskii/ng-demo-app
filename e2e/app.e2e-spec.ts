import { NsNgDemoAppPage } from './app.po';

describe('ns-ng-demo-app App', () => {
  let page: NsNgDemoAppPage;

  beforeEach(() => {
    page = new NsNgDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
