export interface Credentials {
  email: string;
  password: string;
}

export interface AuthContext {
  isAuthenticated: () => Promise<boolean>;
  onLogin: (credentials: Credentials) => Promise<void>;
  onLogout: () => Promise<void>;
}
