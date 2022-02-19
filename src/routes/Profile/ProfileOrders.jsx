import ProfileOrder from "./ProfileOrder";

const ProfileOrders = ({date, orderTotalPrice, orders}) => {
    return (
        <>
        <p>배송 날짜 : {date}</p>
        <details> 
            <summary>메뉴</summary>
            <ul>
            {orders.length > 1 ? (
                orders.map((v)=>{
                    const {productSeq, productName, productQty, totalPrice} = v;
                    return (
                        <ProfileOrder 
                        key={productSeq}
                        name={productName}
                        qty={productQty}
                        totalPrice={totalPrice}
                        />
                    );
                })
            ) : 
            <ProfileOrder
            name={orders[0].productName}
            qty={orders[0].productQty}
            totalPrice={orders[0].totalPrice}
            />
            }
            </ul>    
        </details>
        <p>총 가격 : {orderTotalPrice} 원</p>
        </>
    );
}

export default ProfileOrders;