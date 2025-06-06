declare namespace Express {
  export interface UserSession {
    id: string;
    rol: {
      id: string;
      nombre: string;
    };
  }

  export interface Request {
    userSession?: UserSession;
  }
}
