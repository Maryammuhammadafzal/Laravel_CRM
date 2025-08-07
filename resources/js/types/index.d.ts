export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
}

export interface PageProps {
  [key: string]: any;
  auth: {
    user: User;
  };
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

declare global {
  interface Window {
    route: (name: string, params?: any, absolute?: boolean) => string;
  }
}