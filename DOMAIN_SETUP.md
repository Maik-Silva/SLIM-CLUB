# Instruções para Configuração de Domínio Registro.br

## Visão Geral
Este guia fornece instruções detalhadas para vincular seu domínio registrado no Registro.br à sua aplicação Slim Club hospedada na plataforma Emergent.

---

## Passo 1: Obter Informações da Plataforma Emergent

Antes de configurar o DNS, você precisa das seguintes informações da plataforma Emergent:

1. **Endereço IP do Servidor** ou **CNAME de destino**
   - Exemplo de IP: `203.0.113.45`
   - Exemplo de CNAME: `slimclub.emergent.sh`

2. **URL Atual da Aplicação**
   - Esta é a URL temporária fornecida pela Emergent
   - Exemplo: `https://slimclub-xyz123.emergent.sh`

> **Nota**: Entre em contato com o suporte da Emergent ou verifique o painel de controle para obter essas informações específicas.

---

## Passo 2: Acessar o Painel do Registro.br

1. Acesse: https://registro.br/
2. Faça login com suas credenciais
3. Vá para **"Meus Domínios"**
4. Selecione o domínio que deseja configurar (ex: `slimclub.com.br`)

---

## Passo 3: Configurar Registros DNS

### Opção A: Usando Registro A (Apontamento Direto por IP)

Se a Emergent forneceu um endereço IP:

1. No painel do Registro.br, acesse **"DNS"** ou **"Editar Zona"**
2. Adicione/Edite os seguintes registros:

```
Tipo: A
Host: @
Valor: [IP FORNECIDO PELA EMERGENT]
TTL: 3600
```

```
Tipo: A
Host: www
Valor: [IP FORNECIDO PELA EMERGENT]
TTL: 3600
```

### Opção B: Usando Registro CNAME (Apontamento por Subdomínio)

Se a Emergent forneceu um CNAME:

1. No painel do Registro.br, acesse **"DNS"** ou **"Editar Zona"**
2. Adicione/Edite os seguintes registros:

```
Tipo: CNAME
Host: www
Valor: [CNAME FORNECIDO PELA EMERGENT]
TTL: 3600
```

```
Tipo: A (ou ALIAS se disponível)
Host: @
Valor: [IP FORNECIDO PELA EMERGENT]
TTL: 3600
```

> **Importante**: O registro @ (raiz do domínio) geralmente não aceita CNAME. Use registro A ou ALIAS se disponível.

---

## Passo 4: Configurar SSL (HTTPS)

A plataforma Emergent provavelmente gerencia SSL automaticamente, mas confirme:

1. **Certificado SSL Automático**: Verifique se a Emergent oferece Let's Encrypt automático
2. **Domínio Customizado**: Adicione seu domínio nas configurações da aplicação Emergent
3. **Forçar HTTPS**: Ative redirecionamento automático de HTTP para HTTPS

---

## Passo 5: Verificar Propagação DNS

Após configurar os registros DNS:

1. **Tempo de Propagação**: Pode levar de 1 a 48 horas (geralmente 1-4 horas)
2. **Ferramentas de Verificação**:
   - https://dnschecker.org/
   - https://www.whatsmydns.net/

3. **Comando Terminal** (Linux/Mac):
   ```bash
   dig slimclub.com.br
   nslookup slimclub.com.br
   ```

---

## Passo 6: Configurar Redirecionamento WWW

Para garantir que tanto `slimclub.com.br` quanto `www.slimclub.com.br` funcionem:

### No Registro.br:
- Certifique-se de ter registros para ambos `@` e `www`

### Na Plataforma Emergent:
- Configure redirecionamento de `www` para domínio raiz (ou vice-versa)
- Adicione ambos os domínios na configuração de domínios permitidos

---

## Configuração Completa de Exemplo

Exemplo de zona DNS completa no Registro.br:

```
# Domínio principal
@       A       203.0.113.45        3600
www     A       203.0.113.45        3600

# Email (opcional)
@       MX      10 mail.slimclub.com.br.  3600
mail    A       203.0.113.50        3600

# Subdomínios adicionais (opcional)
blog    CNAME   slimclub.emergent.sh.     3600
api     CNAME   slimclub.emergent.sh.     3600
```

---

## Checklist Final

Antes de finalizar, confirme:

- [ ] Registros A ou CNAME configurados no Registro.br
- [ ] Domínio adicionado nas configurações da Emergent
- [ ] SSL/HTTPS configurado e funcionando
- [ ] Redirecionamento WWW configurado
- [ ] DNS propagado (verificado com ferramentas)
- [ ] Site acessível via domínio customizado
- [ ] Links de pagamento atualizados com novo domínio

---

## Problemas Comuns e Soluções

### Problema: Site não carrega após 24 horas

**Solução**:
1. Verifique se os registros DNS estão corretos no Registro.br
2. Confirme o IP/CNAME correto com a Emergent
3. Limpe o cache DNS local:
   ```bash
   # Windows
   ipconfig /flushdns
   
   # Mac
   sudo dscacheutil -flushcache
   
   # Linux
   sudo systemd-resolve --flush-caches
   ```

### Problema: Certificado SSL inválido

**Solução**:
1. Aguarde a geração automática do certificado (pode levar até 1 hora após DNS propagar)
2. Verifique nas configurações da Emergent se o domínio está listado corretamente
3. Entre em contato com suporte da Emergent se persistir

### Problema: www funciona mas domínio raiz não (ou vice-versa)

**Solução**:
1. Verifique se ambos os registros (@ e www) estão configurados
2. Configure redirecionamento na plataforma Emergent
3. Adicione ambas as versões do domínio nas configurações

---

## Suporte

- **Registro.br**: https://registro.br/suporte/
- **Emergent**: [Link do suporte da plataforma]
- **Documentação Emergent**: [Link da documentação]

---

## Próximos Passos Após Configuração

Uma vez que seu domínio estiver funcionando:

1. **Atualizar Links de Pagamento**:
   - Edite os placeholders `[LINK DO CHECKOUT AQUI]` no código
   - Use seu domínio customizado + página de checkout

2. **Configurar Google Analytics** (opcional):
   - Adicione código de rastreamento no `index.html`

3. **Configurar Pixel do Facebook** (opcional):
   - Adicione pixel para remarketing

4. **Testar Todos os CTAs**:
   - Verifique se todos os botões redirecionam corretamente
   - Teste formulários de contato se houver

5. **Configurar Email Profissional** (opcional):
   - Use `contato@slimclub.com.br`
   - Configure MX records no Registro.br

---

**Data de Criação**: 2025
**Versão**: 1.0
**Plataforma**: Slim Club + Emergent + Registro.br
