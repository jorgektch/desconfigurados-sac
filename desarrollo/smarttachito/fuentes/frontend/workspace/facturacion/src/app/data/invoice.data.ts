import { Invoice } from "../models/invoice";

export const invoiceData: any = {

    id: 1,
    name: 'FACTURA DE COMPRA DE TACHITO',
    client: {
        name: 'Jhordan',
        lastname: 'Laureano',
        address: {
            country: 'Peru',
            city: 'Puente Piedra',
            street: 'Av 12',
            number: 15,
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 3123123,
    },
    items: [
        {
            id: 1,
            product: 'Tachito 1',
            price: 599,
            quantity: 1
        },
        {
            id: 2,
            product: 'Tachito 2',
            price: 399,
            quantity: 2
        },
        {
            id: 3,
            product: 'Tachito 3',
            price: 899,
            quantity: 3
        },
    ]
}