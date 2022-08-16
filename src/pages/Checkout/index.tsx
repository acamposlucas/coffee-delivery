import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { CheckoutCard } from "../../components/CheckoutCard";
import { CheckoutTitle } from "../../styles/helpers";
import {
  ConfirmPaymentForm,
  Container,
  CheckoutForm,
  FormHeader,
  InputLabel,
  AddressInfoGrid,
  InnerFormContainer,
  RadioGroupGrid,
  RadioLabel,
} from "./style";

export const Checkout = () => {
  return (
    <main>
      <Container>
        <div>
          <CheckoutTitle>Complete seu pedido</CheckoutTitle>
          <CheckoutForm>
            <InnerFormContainer role="group" aria-label="endereço">
              <FormHeader>
                <MapPinLine size={22} color="#C47F17" />
                <strong>
                  Endereço de entrega{" "}
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </strong>
              </FormHeader>
              <AddressInfoGrid>
                <InputLabel htmlFor="cep">
                  <input type="text" id="cep" placeholder="CEP" />
                </InputLabel>
                <InputLabel htmlFor="rua">
                  <input type="text" id="rua" placeholder="Rua" />
                </InputLabel>
                <InputLabel htmlFor="numero">
                  <input type="text" id="numero" placeholder="Número" />
                </InputLabel>
                <InputLabel htmlFor="complemento">
                  <input
                    type="text"
                    id="complemento"
                    placeholder="Complemento"
                  />
                  <span>Opcional</span>
                </InputLabel>
                <InputLabel htmlFor="bairro">
                  <input type="text" id="bairro" placeholder="Bairro" />
                </InputLabel>
                <InputLabel htmlFor="cidade">
                  <input type="text" id="cidade" placeholder="Cidade" />
                </InputLabel>
                <InputLabel htmlFor="uf">
                  <input type="text" id="uf" placeholder="UF" />
                </InputLabel>
              </AddressInfoGrid>
            </InnerFormContainer>
            <InnerFormContainer role="radiogroup" aria-label="pagamento">
              <FormHeader>
                <CurrencyDollar size={22} color="#8047F8" />
                <strong>
                  Pagamento{" "}
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </strong>
              </FormHeader>
              <RadioGroupGrid>
                <RadioLabel id="credito">
                  <input type="radio" name="metodoPagamento" id="credito" />
                  <CreditCard size={16} color="#8047F8" />
                  <span>Cartão de crédito</span>
                </RadioLabel>
                <RadioLabel id="debito">
                  <input type="radio" name="metodoPagamento" id="debito" />
                  <Bank size={16} color="#8047F8" />
                  <span>Cartão de débito</span>
                </RadioLabel>
                <RadioLabel id="dinheiro">
                  <input type="radio" name="metodoPagamento" id="dinheiro" />
                  <Money size={16} color="#8047F8" />
                  <span>Dinheiro</span>
                </RadioLabel>
              </RadioGroupGrid>
            </InnerFormContainer>
          </CheckoutForm>
        </div>
        <div>
          <CheckoutTitle>Cafés selecionados</CheckoutTitle>
          <ConfirmPaymentForm>
            <ul>
              <CheckoutCard as={"li"} />
              <CheckoutCard as={"li"} />
            </ul>
            <div className="bill">
              <p>
                Total de itens <span>R$ 29,70</span>
              </p>
              <p>
                Entrega <span>R$ 3,50</span>
              </p>
              <strong>
                Total <span>R$ 33,20</span>
              </strong>
            </div>
            <DefaultButton type="submit">Confirmar pedido</DefaultButton>
          </ConfirmPaymentForm>
        </div>
      </Container>
    </main>
  );
};
