// 1) Cole aqui a configuração do seu projeto Firebase
//    (Console do Firebase > Configurações do projeto > Seus apps > App da Web > Configuração do SDK)
window.FIREBASE_CONFIG = {
  apiKey: "COLE_AQUI_SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000"
};

// 2) E-mails de quem pode moderar o fórum (apagar tópicos e perfis de outras pessoas).
//    Use os mesmos e-mails no arquivo firestore.rules.
window.ADMIN_EMAILS = [
  "coordenacao@exemplo.br"
];
