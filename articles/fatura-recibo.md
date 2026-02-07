#  Fatura-recibo

## Что это такое

- Fatura это счёт на услуги
- Recibo это квитанция или подтверждение оплаты
- Fatura-Recibo — это эти два случая вместе, говорит сразу, что вы оказали услугу и получили за это деньги

На каждую оплату, что вы получаете, должна быть Fatura-Recibo

## Полезные ссылки
- https://irs.portaldasfinancas.gov.pt/recibos/portal/ раздел на налоговом портале
- https://irs.portaldasfinancas.gov.pt/recibos/portal/consultar список ваших предыдущих ресиб/фатур
- https://irs.portaldasfinancas.gov.pt/recibos/portal/emitir выпуск новой

## Как выписать новую fatura-recibo

Вы — ИП, оказываете услуги компании из ЕС. 
И вы, и компания зарегистрированы в системе VIES (это влияет на пункты про НДС). Детали про НДС смотреть в разделе IVA


1. Идем сюда https://irs.portaldasfinancas.gov.pt/recibos/portal/ 
2. Жмем `Emitir` или переходим сюда https://irs.portaldasfinancas.gov.pt/recibos/portal/emitir
3. Жмем `Fatura ou Fatura-Recibo`
4. Выбираем дату поступления денег `Data da transação` и `Tipo:` `Fatura-Recibo`
5. Блок `Transmitente`: проверяете данные и выбираете нужный вам `Atividade exercida` - это деятельность, по которой вы выписываете ресиба-фатуру
6. Блок `Adquirente`:
   * `País` - код страны контрагента
   * `NIF` - его налоговый номер
   * `Nome` - его название
   * Эти поля можно заполнить автоматом, выбрав вашего заказчика через окно `Procurar`
   * `Morada de Cliente` и `Morada de Entrega` можно оставить пустыми
7. Блок `Motivo de Emissão`: `Documento emitido a título de` выбираем `Pagamento dos bens ou dos serviços`
8. Блок `Produtos, Serviços ou Outros`
   * Жмём `Adicionar`, открывается окно `Adicionar Produto, Serviço ou Outros`, в нем:
   * `Tipo`: `Serviço`
   * `Tipo Ref.`: `Outro`
   * `Referência`: заполняете название вашей услуги, например `Software development`
   * `Descrição`: заполняете название вашей услуги, например `Software development`
   * `Valores` `Unidade` : `mês - Mês` - если у вас это услуги за месяц
   * `Preço Unitário s/IVA` - вносим сумму платежа в евро
   * `Taxa IVA` - это ставка НДС, выбираем 0%
   * `Motivo de Isenção` - это причина, почему ставка НДС 0%, выбираем `IVA - autoliquidação - Artigo 6.º n.º 6 alínea a) do CIVA, a contrário` - если ваш заказчик в ЕС и есть в системе VIES
   * Жмем `GUARDAR` - синяя кнопка внизу окна
9. На этом всё, жмем `EMITIR`, проверяем данные в появившимся окне, подтверждаем.