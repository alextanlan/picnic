import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpClientMock;

  beforeEach(() => {
    httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProductService(httpClientMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
