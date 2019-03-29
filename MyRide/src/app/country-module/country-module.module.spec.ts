import { CountryModuleModule } from './country-module.module';

describe('CountryModuleModule', () => {
  let countryModuleModule: CountryModuleModule;

  beforeEach(() => {
    countryModuleModule = new CountryModuleModule();
  });

  it('should create an instance', () => {
    expect(countryModuleModule).toBeTruthy();
  });
});
