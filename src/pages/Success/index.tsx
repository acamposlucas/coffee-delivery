import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { IconContainer } from "../../styles/components/IconContainer";
import { Container, DeliveryStatus } from "./style";

export const Success = () => {
  const { formData } = useShoppingCart();
  let metodoPagamento;
  switch (formData.metodoPagamento) {
    case 'debito':
      metodoPagamento = `Cartão de Débito`;
      break;
    case 'credito':
      metodoPagamento = `Cartão de Crédito`;
      break;
    case 'dinheiro':
      metodoPagamento = `Dinheiro`;
      break;
  }
  


  return (
    <main>
      <Container>

          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>

        <section>
          <DeliveryStatus>
            <article>
              <IconContainer>
                <MapPin size={16} weight="fill" color="#ffffff" />
              </IconContainer>
              <p>
                Entrega em <strong>
                  {`${formData.rua}, ${formData.numero}${formData.complemento ? `, ${formData.complemento}` : null}`}
                  </strong>{" "}
                <br />
                {`${formData.bairro} - ${formData.cidade}, ${formData.uf}`}
              </p>
            </article>
            <article>
              <IconContainer>
                <Clock size={16} weight="fill" color="#ffffff" />
              </IconContainer>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </article>
            <article>
              <IconContainer>
                <CurrencyDollar size={16} weight="fill" color="#ffffff" />
              </IconContainer>
              <p>
                Pagamento na entrega <br />
                <strong>{metodoPagamento}</strong>
              </p>
            </article>
          </DeliveryStatus>
          <img src="./assets/delivery.svg" alt="" />
        </section>
      </Container>
    </main>
  );
};
