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
  Login = '/login'
}
