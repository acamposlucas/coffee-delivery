import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { Container, DeliveryStatus, IconContainer } from "./style";

export const Success = () => {
  return (
    <main>
      <Container>
        <header>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>
        <section>
          <DeliveryStatus>
            <article>
              <IconContainer>
                <MapPin size={16} weight="fill" color="#ffffff" />
              </IconContainer>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{" "}
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de crédito</strong>
              </p>
            </article>
          </DeliveryStatus>
          <img src="" alt="" />
        </section>
      </Container>
    </main>
  );
};
