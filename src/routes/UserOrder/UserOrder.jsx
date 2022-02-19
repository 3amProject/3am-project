import styled from "styled-components";

const Li = styled.li`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    & .name {
        width: 120px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    & .qty {
        width: 30px;
    }
    & .price {
        width: 60px;
    }
`;

const UserOrder = ({name, qty, totalPrice}) => {
    return (
        <Li>
            <p className="name">{name}</p>
            <p className="qty">{qty}</p>
            <p className="price">{totalPrice}</p>
        </Li>
    );
}
export default UserOrder;