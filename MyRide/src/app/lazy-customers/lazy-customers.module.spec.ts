import { LazyCustomersModule } from './lazy-customers.module';

describe('LazyCustomersModule', () => {
  let lazyCustomersModule: LazyCustomersModule;

  beforeEach(() => {
    lazyCustomersModule = new LazyCustomersModule();
  });

  it('should create an instance', () => {
    expect(lazyCustomersModule).toBeTruthy();
  });
});
