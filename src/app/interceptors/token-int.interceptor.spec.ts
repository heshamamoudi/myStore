import { TestBed } from '@angular/core/testing';

import { TokenIntInterceptor } from './token-int.interceptor';

describe('TokenIntInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenIntInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenIntInterceptor = TestBed.inject(TokenIntInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
