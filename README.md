# Rede de Egressos · Modelagem Computacional no Brasil

Site para egressos dos programas de pós-graduação em modelagem computacional do Brasil:
mapa dos programas, mapa de onde os egressos moram (por cidade ou por estado, com zoom), busca,
cadastro em etapas com perguntas rápidas, fórum e painel de indicadores com exportação para planilha.

O cadastro pergunta: programa, nível e ano; orientador(a); título da dissertação ou tese; linha de pesquisa;
se mora no Brasil e em qual cidade (busca entre os 5.570 municípios do IBGE) ou país; se trabalha na área,
setor, onde trabalha e cargo; quanto tempo levou para conseguir trabalho; dificuldades enfrentadas;
se a linha de pesquisa mudou por causa do mercado; disponibilidade para mentoria.

O site é estático (roda no **GitHub Pages**) e guarda os dados no **Firebase**
(Firestore + login com conta Google), no plano gratuito.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O site inteiro (layout, mapas, fórum, perfis) |
| `firebase-config.js` | Configuração do seu projeto Firebase e e-mails dos moderadores |
| `firestore.rules` | Regras de segurança do banco de dados |

## Passo a passo

### 1. Criar o projeto no Firebase
1. Acesse https://console.firebase.google.com e clique em **Adicionar projeto**
   (pode desativar o Google Analytics).
2. Em **Criação > Authentication > Primeiros passos**, ative o provedor **Google**.
3. Em **Criação > Firestore Database**, clique em **Criar banco de dados**,
   escolha o modo de **produção** e a região `southamerica-east1` (São Paulo).
4. Na aba **Regras** do Firestore, apague o conteúdo, cole o arquivo `firestore.rules`,
   troque `coordenacao@exemplo.br` pelo(s) e-mail(s) da coordenação e clique em **Publicar**.
5. Em **Configurações do projeto (engrenagem) > Geral > Seus apps**, clique no ícone **</>**
   para registrar um app da Web. Copie o objeto `firebaseConfig` que aparece.

### 2. Configurar o site
Abra `firebase-config.js`, cole os valores do `firebaseConfig` e coloque os e-mails
dos moderadores em `ADMIN_EMAILS`.

> A `apiKey` do Firebase não é secreta: ela identifica o projeto. Quem protege os dados
> são as regras do `firestore.rules`.

### 3. Publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `rede-egressos-modelagem`).
2. Envie os três arquivos (`index.html`, `firebase-config.js`, `firestore.rules`) e este README
   (botão **Add file > Upload files**, ou `git push`).
3. Em **Settings > Pages**, em *Source* escolha **Deploy from a branch**,
   branch `main`, pasta `/ (root)`, e salve.
4. Em um ou dois minutos o site estará em `https://SEU-USUARIO.github.io/rede-egressos-modelagem/`.

### 4. Autorizar o domínio do GitHub no login
No Firebase, em **Authentication > Configurações > Domínios autorizados**,
clique em **Adicionar domínio** e coloque `SEU-USUARIO.github.io`.
Sem isso, o botão "Entrar com Google" dá erro.

### 5. Testar
Abra o site, entre com sua conta Google, faça seu cadastro na aba **Meu cadastro** e abra um tópico no fórum.
O mapa e o painel devem atualizar na hora.

## Privacidade (LGPD)
- Só quem entra com conta Google consegue ver os perfis e o fórum.
- Cada egresso marca uma autorização antes de salvar e pode editar ou remover o perfil quando quiser.
- O mapa mostra apenas o **estado** (ou país), não o endereço.
- Moderadores (e-mails em `ADMIN_EMAILS` e no `firestore.rules`) podem apagar tópicos, respostas e perfis.

Se quiser restringir o acesso só a e-mails institucionais, troque `signedIn()` nas regras por, por exemplo:
`signedIn() && request.auth.token.email.matches('.*@(lncc|ufjf)[.]br$')`.

## Exportar os dados (relatórios CAPES)
Quem está em `ADMIN_EMAILS` vê, na aba **Painel**, o botão **Baixar planilha (CSV)**.
Ele exporta todos os cadastros (ou só os de um programa, se escolhido no filtro) num arquivo que abre direto no Excel.

## Editar a lista de programas
No `index.html`, procure `const PROGRAMS = [` e adicione ou corrija os programas
(sigla, nome, cidade, UF, latitude, longitude). Confira os dados na Plataforma Sucupira.
