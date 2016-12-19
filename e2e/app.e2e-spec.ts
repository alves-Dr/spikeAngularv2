import { Spike1Page } from './app.po';

describe('spike1 App', function() {
  let page: Spike1Page;

  beforeEach(() => {
    page = new Spike1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
