import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      "login": "Entrar",
      "signup": "Cadastrar",
      "welcome_back": "Bem-vindo de volta",
      "enter_credentials": "Digite suas credenciais para acessar sua conta",
      "email": "E-mail",
      "password": "Senha",
      "menu": {
        "dashboard": "Dashboard",
        "records": "Cadastros",
        "products": "Produtos",
        "categories": "Categorias",
        "company": "Empresa",
        "clients": "Clientes",
        "suppliers": "Fornecedores"
      }
    }
  },
  en: {
    translation: {
      "login": "Login",
      "signup": "Sign Up",
      "welcome_back": "Welcome Back",
      "enter_credentials": "Enter your credentials to access your account",
      "email": "Email",
      "password": "Password",
      "menu": {
        "dashboard": "Dashboard",
        "records": "Records",
        "products": "Products",
        "categories": "Categories",
        "company": "Company",
        "clients": "Clients",
        "suppliers": "Suppliers"
      }
    }
  },
  es: {
    translation: {
      "login": "Iniciar sesión",
      "signup": "Registrarse",
      "welcome_back": "Bienvenido de nuevo",
      "enter_credentials": "Ingrese sus credenciales para acceder a su cuenta",
      "email": "Correo electrónico",
      "password": "Contraseña",
      "menu": {
        "dashboard": "Panel",
        "records": "Registros",
        "products": "Productos",
        "categories": "Categorías",
        "company": "Empresa",
        "clients": "Clientes",
        "suppliers": "Proveedores"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;