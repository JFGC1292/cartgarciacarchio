export const btnConfig = (quantity, maxStock, handleAdd, handleSubtract) => {

    return {
        subtract: {
            className: `btn ${quantity === 0 ? 'btn-outline-danger' : 'btn-outline-primary'}`,
            onClick: handleSubtract,
            disabled: quantity === 0
        },
        add: {
            className: `btn ${quantity === maxStock ? 'btn-danger' : 'btn-primary'}`,
            onClick: handleAdd,
            disabled: quantity === maxStock
        }
    }
}