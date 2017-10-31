import { TableMaterialPage } from './app.po';

describe('table-material App', () => {
  let page: TableMaterialPage;

  beforeEach(() => {
    page = new TableMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
