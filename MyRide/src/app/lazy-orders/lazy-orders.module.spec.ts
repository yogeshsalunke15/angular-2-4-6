import { LazyOrdersModule } from './lazy-orders.module';

describe('LazyOrdersModule', () => {
  let lazyOrdersModule: LazyOrdersModule;

  beforeEach(() => {
    lazyOrdersModule = new LazyOrdersModule();
  });

  it('should create an instance', () => {
    expect(lazyOrdersModule).toBeTruthy();
  });
});
