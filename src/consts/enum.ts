export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Error = 'error',
  Success = 'success'
}

export enum UserStatus {
  Unknown = 'unknown',
  Auth = 'auth',
  NoAuth = 'noauth'
}

export enum SliceNameSpace {
  App = 'app'
}

export enum AppRoute {
  Root = '/',
  Catalog = '/catalog',
  Program = '/program',
  Login = '/login',
}

export enum APIRoute {
  Poducts = 'fakeApi/products',
  ExtraProducts = 'fakeApi/extra-products'
}

export enum MaxElementCount {
  CatalogCard = 7,
}

export enum CatalogCardVariant {
  Extra = 'extra',
  Primary = 'primary'
}
