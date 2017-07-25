import { MallMwPage } from './app.po';

describe('mall-mw App', () => {
  let page: MallMwPage;

  beforeEach(() => {
    page = new MallMwPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
