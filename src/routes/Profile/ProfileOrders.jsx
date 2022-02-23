import React from 'react';
import styled from 'styled-components';

import UserOrder from '../../components/UserOrder';

const Div = styled.div`
  & .date {
    font-weight: 700;
    margin-top: 50px;
  }
  & .orderTitle {
    margin: 10px;
  }
  & .order {
    padding: 20px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: var(--lightgray);
  }
  & .totalPrice {
    text-align: end;
  }
`;

const ProfileOrders = ({ date, totalPrice, orders, showPrice }) => {
  return (
    <Div>
      <p className="date">배송 날짜 : {date}</p>
      <details>
        <summary className="orderTitle">메뉴</summary>
        <ul className="order">
          {orders.length > 1 ? (
            orders.map((v) => {
              const { productSeq, productName, productQty, totalPrice } = v;
              return (
                <UserOrder
                  key={productSeq}
                  name={productName}
                  qty={productQty}
                  totalPrice={showPrice(totalPrice)}
                />
              );
            })
          ) : (
            <UserOrder
              name={orders[0].productName}
              qty={orders[0].productQty}
              totalPrice={showPrice(orders[0].totalPrice)}
            />
          )}
        </ul>
      </details>
      <p className="totalPrice">총 가격 : {totalPrice}</p>
    </Div>
  );
};

export default ProfileOrders;
