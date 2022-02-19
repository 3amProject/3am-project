const ProfileOrder = ({name, qty, totalPrice}) => {
    return (
        <li>
            <p>{name}</p>
            <p>{qty}</p>
            <p>{totalPrice}</p>
        </li>
    )
}

export default ProfileOrder;