import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { CartCard } from "../../components/CartCard/";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CheckoutTitle } from "../../styles/helpers";
import { formatCurrency } from "../../utilities/formatCurrency";
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
  ConfirmButton,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  cep: yup.string().required(),
  rua: yup.string().required(),
  numero: yup.number().positive().integer().required(),
  complemento: yup.string(),
  bairro: yup.string().required(),
  cidade: yup.string().required(),
  uf: yup.string().max(2).required()
});

interface IFormInputs {
  cep: number,
  rua: string,
  numero: number,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string,
  metodoPagamento: string,
}

export const Checkout = () => {
  const { cartItems, coffees, formData, setFormData } = useShoppingCart();
  let navigate = useNavigate();

  const totalItemsCost = 
    cartItems.reduce((total, cartItem) => {
      const item = coffees.find(i => i.id === cartItem.id)
      return total + (item?.price || 0) * cartItem.quantity
    }, 0);
  const DELIVERY_COST = 3;
  const finalCost = totalItemsCost + DELIVERY_COST;

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data: IFormInputs) => {
    setFormData(data);
    navigate('/success');
  }

  return (
    <main>
      <Container>
        <div>
          <CheckoutTitle>Complete seu pedido</CheckoutTitle>
          <CheckoutForm id="CheckoutForm" onSubmit={handleSubmit(handleSubmitForm)}>
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
                  <input {...register("cep")} type="text" name="cep" id="cep" placeholder="CEP" />
                  <span>{errors.cep?.message}</span>
                </InputLabel>
                <InputLabel htmlFor="rua">
                  <input
                   {...register("rua")} type="text" name="rua" id="rua" placeholder="Rua" />
                </InputLabel>
                <InputLabel htmlFor="numero">
                  <input
                   {...register("numero")} type="text" name="numero" id="numero" placeholder="Número" />
                </InputLabel>
                <InputLabel htmlFor="complemento">
                  <input
                   {...register("complemento")}
                    type="text"
                    name="complemento"
                    id="complemento"
                    placeholder="Complemento"
                  />
                  <span>Opcional</span>
                </InputLabel>
                <InputLabel htmlFor="bairro">
                  <input
                   {...register("bairro")} type="text" name="bairro" id="bairro" placeholder="Bairro" />
                </InputLabel>
                <InputLabel htmlFor="cidade">
                  <input
                   {...register("cidade")} type="text" name="cidade" id="cidade" placeholder="Cidade" />
                </InputLabel>
                <InputLabel htmlFor="uf">
                  <input
                   {...register("uf")} type="text" name="uf" id="uf" placeholder="UF" />
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
                  <input {...register("metodoPagamento")} type="radio" name="metodoPagamento" id="credito" value="credito" />
                  <CreditCard size={16} color="#8047F8" />
                  <span>Cartão de crédito</span>
                </RadioLabel>
                <RadioLabel id="debito">
                  <input {...register("metodoPagamento")} type="radio" name="metodoPagamento" id="debito" value="debito" />
                  <Bank size={16} color="#8047F8" />
                  <span>Cartão de débito</span>
                </RadioLabel>
                <RadioLabel id="dinheiro">
                  <input {...register("metodoPagamento")} type="radio" name="metodoPagamento" id="dinheiro" value="dinheiro" />
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
              {cartItems.map((item) => (
                <CartCard key={item.id} {...item}/>
              ))}
            </ul>
            <div className="bill">
              <p>
                Total de itens <span>{formatCurrency(totalItemsCost)}</span>
              </p>
              <p>
                Entrega <span>{formatCurrency(DELIVERY_COST)}</span>
              </p>
              <strong>
                Total <span>{formatCurrency(finalCost)}</span>
              </strong>
            </div>
            <ConfirmButton type="submit" form="CheckoutForm">Confirmar pedido</ConfirmButton>
          </ConfirmPaymentForm>
        </div>
      </Container>
    </main>
  );
};
