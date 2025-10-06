# Contratos de API - Slim Club

## Visão Geral
Este documento define os contratos de API para a integração backend da landing page Slim Club. Atualmente, o frontend está funcionando com dados mock (mock.js). Este arquivo serve como guia para implementação futura do backend.

---

## Status Atual: Frontend com Mock Data ✅

### Dados Mockados em `/app/frontend/src/mock.js`:
- ✅ Hero Section (headline, subtitle, CTA, estatísticas)
- ✅ Benefits/Features (6 cards com ícones e descrições)
- ✅ Pricing Plans (4 planos: Mensal, Trimestral, Semestral, Anual)
- ✅ Testimonials (3 depoimentos com ratings)
- ✅ FAQ (8 perguntas e respostas)
- ✅ Footer (links, social, copyright)

### Funcionalidade Atual:
- Navegação smooth scroll entre seções
- Botões CTA redirecionam para placeholder `[LINK DO CHECKOUT AQUI]`
- Design responsivo (desktop e mobile)
- Todos os dados são estáticos do mock.js

---

## Próxima Fase: Backend Implementation

### Quando Implementar Backend?
O backend será necessário quando você precisar de:
1. **CMS/Admin Panel**: Editar conteúdo sem mexer no código
2. **Analytics**: Rastrear cliques, conversões, visualizações
3. **Email Marketing**: Capturar leads (formulário de email)
4. **A/B Testing**: Testar diferentes versões de copy/preços
5. **Integrações**: Conectar com Hotmart, Eduzz, email services

---

## API Endpoints Propostos

### 1. Content Management (CMS)

#### GET /api/content/hero
Retorna dados do Hero Section
```json
{
  "headline": "string",
  "subtitle": "string",
  "ctaText": "string",
  "ctaLink": "string",
  "stats": [
    {
      "value": "string",
      "label": "string"
    }
  ]
}
```

#### PUT /api/content/hero
Atualiza dados do Hero Section
```json
{
  "headline": "string",
  "subtitle": "string",
  "ctaText": "string",
  "ctaLink": "string"
}
```

---

#### GET /api/content/benefits
Retorna lista de benefícios
```json
[
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "icon": "string",
    "order": "number"
  }
]
```

#### PUT /api/content/benefits/:id
Atualiza benefício específico
```json
{
  "title": "string",
  "description": "string",
  "icon": "string"
}
```

---

#### GET /api/content/pricing
Retorna planos de preço
```json
[
  {
    "id": "string",
    "name": "string",
    "price": "string",
    "period": "string",
    "originalPrice": "string",
    "description": "string",
    "badge": "string",
    "features": ["string"],
    "ctaText": "string",
    "ctaLink": "string",
    "highlighted": "boolean",
    "order": "number"
  }
]
```

#### PUT /api/content/pricing/:id
Atualiza plano específico
```json
{
  "price": "string",
  "features": ["string"],
  "ctaLink": "string"
}
```

---

#### GET /api/content/testimonials
Retorna depoimentos
```json
[
  {
    "id": "string",
    "name": "string",
    "role": "string",
    "content": "string",
    "rating": "number",
    "image": "string",
    "approved": "boolean",
    "order": "number"
  }
]
```

#### POST /api/content/testimonials
Cria novo depoimento
```json
{
  "name": "string",
  "role": "string",
  "content": "string",
  "rating": "number"
}
```

---

#### GET /api/content/faq
Retorna perguntas frequentes
```json
[
  {
    "id": "string",
    "question": "string",
    "answer": "string",
    "order": "number",
    "category": "string"
  }
]
```

---

### 2. Lead Capture

#### POST /api/leads
Captura lead de email (para futuro formulário)
```json
Request:
{
  "email": "string",
  "name": "string",
  "source": "hero_cta | pricing_cta | popup",
  "metadata": {}
}

Response:
{
  "success": true,
  "leadId": "string",
  "message": "Lead captured successfully"
}
```

---

### 3. Analytics

#### POST /api/analytics/event
Rastreia eventos de usuário
```json
{
  "eventType": "page_view | cta_click | plan_view | faq_open",
  "data": {
    "section": "string",
    "plan": "string",
    "timestamp": "ISO8601"
  },
  "sessionId": "string"
}
```

#### GET /api/analytics/dashboard
Retorna métricas do dashboard
```json
{
  "totalViews": "number",
  "ctaClicks": "number",
  "conversionRate": "number",
  "topPlan": "string",
  "popularFAQs": ["string"]
}
```

---

### 4. A/B Testing (Opcional)

#### GET /api/experiments/active
Retorna experimentos ativos
```json
[
  {
    "id": "string",
    "name": "headline_test_v1",
    "variants": [
      {
        "id": "control",
        "content": {
          "headline": "string"
        },
        "traffic": 50
      },
      {
        "id": "variant_a",
        "content": {
          "headline": "string"
        },
        "traffic": 50
      }
    ]
  }
]
```

---

## Modelos de Dados (MongoDB)

### Content Model
```javascript
{
  _id: ObjectId,
  section: "hero" | "benefits" | "pricing" | "testimonials" | "faq",
  content: {}, // Dynamic based on section
  updatedAt: Date,
  updatedBy: String
}
```

### Lead Model
```javascript
{
  _id: ObjectId,
  email: String,
  name: String,
  source: String,
  metadata: {},
  capturedAt: Date,
  converted: Boolean,
  conversionData: {}
}
```

### Analytics Model
```javascript
{
  _id: ObjectId,
  eventType: String,
  sessionId: String,
  data: {},
  timestamp: Date,
  userAgent: String,
  ip: String
}
```

---

## Integração Frontend ↔ Backend

### Passo 1: Criar Service Layer
Criar `/app/frontend/src/services/api.js`:
```javascript
import axios from 'axios';

const API_BASE = process.env.REACT_APP_BACKEND_URL;

export const contentService = {
  getHero: () => axios.get(`${API_BASE}/api/content/hero`),
  getBenefits: () => axios.get(`${API_BASE}/api/content/benefits`),
  getPricing: () => axios.get(`${API_BASE}/api/content/pricing`),
  // ...
};
```

### Passo 2: Substituir Mock por API Calls
No `Home.jsx` ou componentes individuais:
```javascript
// Antes (Mock)
import { mockData } from '../mock';

// Depois (API)
import { contentService } from '../services/api';

useEffect(() => {
  const fetchData = async () => {
    const heroData = await contentService.getHero();
    setHeroData(heroData.data);
  };
  fetchData();
}, []);
```

### Passo 3: Implementar Backend Endpoints
Criar routes e controllers no FastAPI:
```python
# /app/backend/routes/content.py
@router.get("/content/hero")
async def get_hero_content():
    content = await db.content.find_one({"section": "hero"})
    return content
```

---

## Segurança e Validação

### Frontend
- Validar URLs de CTA antes de redirecionar
- Sanitizar inputs de formulários
- Implementar rate limiting para API calls

### Backend
- Autenticação JWT para endpoints de admin
- Validação de schema com Pydantic
- Rate limiting no FastAPI
- CORS configurado corretamente

---

## Roadmap de Implementação

### Fase 1: CMS Básico (Prioridade Alta)
- [ ] Implementar GET endpoints para todas as seções
- [ ] Criar admin panel simples para editar conteúdo
- [ ] Migrar dados do mock.js para MongoDB
- [ ] Substituir imports de mock por chamadas de API

### Fase 2: Lead Capture (Prioridade Média)
- [ ] Adicionar formulário de captura de email
- [ ] Implementar POST /api/leads
- [ ] Integrar com email marketing service (Mailchimp, SendGrid)
- [ ] Criar fluxo de welcome email

### Fase 3: Analytics (Prioridade Média)
- [ ] Implementar tracking de eventos
- [ ] Criar dashboard de analytics
- [ ] Integrar Google Analytics
- [ ] Implementar Facebook Pixel

### Fase 4: A/B Testing (Prioridade Baixa)
- [ ] Sistema de experiments
- [ ] Variantes de headline/pricing
- [ ] Analytics comparativo

---

## Ferramentas e Tecnologias Recomendadas

### Backend
- FastAPI (já configurado)
- MongoDB (já configurado)
- Pydantic para validação
- JWT para autenticação

### Frontend
- Axios (já instalado)
- React Query (recomendado para cache)
- Context API para state management

### Integrações Futuras
- Hotmart/Eduzz API (pagamentos)
- SendGrid/Mailchimp (email marketing)
- Google Analytics / Facebook Pixel
- Stripe (pagamentos alternativos)

---

## Notas Importantes

1. **Não Implementar Backend Agora**: O frontend funciona perfeitamente com mock data. Implemente backend apenas quando houver necessidade real.

2. **Links de Checkout**: Atualmente todos os CTAs redirecionam para `[LINK DO CHECKOUT AQUI]`. Substitua por seus links reais do Hotmart/Eduzz:
   - Hero CTA
   - Pricing CTAs (4 planos)
   - Header CTA

3. **SEO**: Adicionar meta tags no `/app/frontend/public/index.html`:
   - Title, description, keywords
   - Open Graph tags
   - Schema.org markup

4. **Performance**: Frontend está otimizado. Ao adicionar backend, implementar:
   - Cache de API responses
   - CDN para assets
   - Lazy loading de imagens

---

**Criado**: 2025  
**Status**: Frontend Completo | Backend Pendente  
**Próxima Ação**: Substituir placeholders de checkout por links reais
