import { HelloworldPage } from './app.po';

describe('helloworld App', () => {
  let page: HelloworldPage;

  beforeEach(() => {
    page = new HelloworldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
