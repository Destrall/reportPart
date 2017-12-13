import { ReportPartPage } from './app.po';

describe('report-part App', function() {
  let page: ReportPartPage;

  beforeEach(() => {
    page = new ReportPartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
