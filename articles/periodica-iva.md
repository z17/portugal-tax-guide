##  Declaração periódica do IVA

Это общая декларация об НДС, по ней определяется сколько нужно заплатить или вернуть НДС.

Ниже описывается, только когда у вас нет НДС к оплате, ваши сделки внутри ЕС, и нет вычетов и прочих особенностей про НДС. Если у вас один заказчик в ЕС и только услуги для него - то вам подходит.


### Подается если:
- СЗ/ИП на нормальном режиме НДС
  - Ваш режим можно проверить тут: https://sitfiscal.portaldasfinancas.gov.pt/integrada/presentation -> `Informação Cadastral` -> `Atividade Exercida`, смотреть блок `Atividade em IVA`

### Когда подавать
- каждый месяц при обороте 650 000 € и выше в предыдущем году
  - до 20ого числа второго месяца (пример: до 20ого апреля за февраль)
- каждый квартал при обороте ниже 650 000 € в предыдущем году
  - до 20ого числа второго месяца после квартала
  - обычно: до 20ого февраля за Q4, до 20ого мая за Q1, до 20ого августа за Q2, до 20ого ноября за Q3
  - удобно упростить и считать просто следующий месяц: в январе за Q4, в апреле за Q1, в июле за Q2, в октябре за Q3

Источник: [Artigo 41.º](https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/civa_rep/Pages/iva41.aspx)

### Ссылки
- https://iva.portaldasfinancas.gov.pt/dpiva/portal - общее
- https://iva.portaldasfinancas.gov.pt/dpiva/portal/consultar-declaracao - список предыдущих


### Как подавать
- https://iva.portaldasfinancas.gov.pt/dpiva/portal переходим, жмём `Entregar`
- Заголовок `Entregar Declaração` - проверяем под ним свой NIF, год и квартал, за который подаём
- Выбираем `Continuar sem pré-preenchimento` (не предзаполнять) или `Pré-preencher` (предзаполнить). Я выбираю первое, но наверно результат одинаковый
- Страница `0 Início`
  - `Número de Identificação Fiscal` - проверяем свой ниф
  - `1 Localização da Sede` - выбираем где мы, `Continente` если не на островах
  - `2 Identificação da Declaração` - год и квартал (в `Período declarativo` есть и месяца, и кварталы)
  - `3 Operações em espaço diferente do da sede` - пропускаем для нашего случая
  - `4-A Declaração recapitulativa` - отмечаем, потому что мы подаём такие декларации
  - остальное оставляем пустым
- Страница `6 Apuramento`
  - `Neste período de imposto efetuou operações` - Não, если вы не покупали услуги где начисляешь НДС сам. Вероятно ответ нет, если вы не понимаете о чём тут речь
  - Спускаемся до пункта `Isentas ou não tributadas` - `Transmissões intracomunitárias de bens e prestações de serviços mencionadas nas declarações recapitulativas` и указываем тут полную сумму из ваших деклараций `Declaração Recapitulativa do IVA` за период. Речь о всех услугах внутри ЕС, которые вы оказывали 
- Жмём `Validar` - синяя кнопка сверху справа, должно выйти сообщение, что ошибок нет
- Жмём `Entregar` справа сверху. И затем ещё раз `Ettregar` в окне
- После нужно будет пройти авторизацию
- Готово!
