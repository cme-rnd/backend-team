import { TqaAppPage } from './app.po';

describe('tqa-app App', () => {
  let page: TqaAppPage;

  beforeEach(() => {
    page = new TqaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
