import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { Container, FormContainer, FormSection } from "./style";

export const Checkout = () => {
  return (
    <main>
      <Container>
        <FormSection>
          <h2>Complete seu pedido</h2>
          <FormContainer>
            <div className="address">
              <fieldset data-fieldset="address">
                <legend>
                  <MapPinLine size={22} color="#C47F17" />
                  <strong>Endereço de entrega</strong>
                  <br />
                  Informe o endereço onde deseja receber seu pedido
                </legend>
                <label htmlFor="cep">
                  <input type="text" id="cep" placeholder="CEP" />
                </label>
                <label htmlFor="street">
                  <input type="text" id="street" placeholder="Rua" />
                </label>
                <label htmlFor="number">
                  <input type="text" id="number" placeholder="Número" />
                </label>
                <label htmlFor="secondaryAddress">
                  <input
                    type="text"
                    id="secondaryAddress"
                    placeholder="Complemento"
                  />
                </label>
                <label htmlFor="neighborhood">
                  <input type="text" id="neighborhood" placeholder="Bairro" />
                </label>
                <label htmlFor="city">
                  <input type="text" id="city" placeholder="Cidade" />
                </label>
                <label htmlFor="state">
                  <input type="text" id="state" placeholder="UF" />
                  {/* <datalist id="uf">
                  <option value="RJ" />
                </datalist> */}
                </label>
              </fieldset>
            </div>
            <div className="payment">
              <fieldset data-fieldset="payment">
                <legend>
                  <CurrencyDollar size={22} color="#8047F8" />
                  <strong>Pagamento</strong>
                  <br />O pagamento é feito na entrega. Escolha a forma que
                  deseja pagar
                </legend>
                <label htmlFor="creditCard">
                  <CreditCard size={16} color="#8047F8" />
                  <input type="radio" name="payment-method" id="creditCard" />
                  <strong>Cartão de crédito</strong>
                </label>
                <label htmlFor="debitCard">
                  <Bank size={16} color="#8047F8" />
                  <input type="radio" name="payment-method" id="debitCard" />
                  <strong>Cartão de débito</strong>
                </label>
                <label htmlFor="money">
                  <Money size={16} color="#8047F8" />
                  <input type="radio" name="payment-method" id="money" />
                  <strong>Dinheiro</strong>
                </label>
              </fieldset>
            </div>
          </FormContainer>
        </FormSection>
      </Container>
    </main>
  );
};
