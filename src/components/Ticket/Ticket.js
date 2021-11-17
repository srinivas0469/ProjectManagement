import React from "react";
import styled from "styled-components";

const TicketWrapper = styled.div`
  background: darkGray;
  padding: 20px;
  boarder-radius: 20px;

  &:not(:last-child) {
    margin-bottom: 5%;
    margin-right: ${(props) => (!!props.marginRight ? "1%" : "0")};
  }
`;
const Title = styled.h3`
  width: 100%;
  margin: 0px;
`;
const Body = styled.p`
  width: 100%;
`;
const Ticket = ({ marginRight, ticket, onDragStart }) => (
  <TicketWrapper
    marginRight={marginRight}
    draggable
    onDragStart={(e) => onDragStart(e, ticket.id)}
  >
    <Title>{ticket.title}</Title>
    <Body>{ticket.body}</Body>
  </TicketWrapper>
);
export default Ticket;
