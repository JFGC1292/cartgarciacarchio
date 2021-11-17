import { stock } from "../Data/stock"

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    })
}