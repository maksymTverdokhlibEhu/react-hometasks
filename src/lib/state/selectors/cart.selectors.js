import { createSelector } from "reselect";

export const productsSelector = (state) => state.cart.products;

export const allProductsSortedSelector = createSelector(
    [productsSelector],
    (products) => {
        const idSet = new Set()
        return products.filter((el) => {
            if(idSet.has(el.id)) return false
            idSet.add(el.id)
            return true
        })
    }
)

export const productCountSelector = (id) =>
    createSelector(
        [productsSelector],
        (products) => products.filter(item => item.id === id).length
    )

export const allProductsCountSelector = createSelector(
    [productsSelector],
    (products) => products.length
)