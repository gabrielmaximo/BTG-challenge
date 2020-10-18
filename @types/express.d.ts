declare namespace Express {
  export interface Request {
    token: {
      userEmail: string;
    };
  }
}