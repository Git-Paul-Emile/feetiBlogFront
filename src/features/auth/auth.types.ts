export interface AdminUser {
  id: string;
  email: string;
  name: string;
}

export interface AdminSession {
  admin: AdminUser;
}

export interface AdminLoginInput {
  email: string;
  password: string;
}

export interface AdminRegistrationInput extends AdminLoginInput {
  name: string;
  registrationSecret: string;
}
