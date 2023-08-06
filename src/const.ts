import { Tour } from "./types";

const defaultTitle = "La Vieja Adventures"

const tours: Tour[] = [
    {
        id: '001LVA', name: 'La Vieja Adventures', type: 'Extreme', duration: '2h 30m', children: false, lunch: true, photos: true,
    },
    {
        id: '002LVA', name: 'Pozo Verde', type: 'Low', duration: '2h 30m', children: false, lunch: true, photos: true,
    },
    {
        id: '003LVA', name: 'Pozas Sucre', type: 'Medium', duration: '2h 30m', children: false, lunch: true, photos: true,
    },
    {
        id: '004LVA', name: 'Minas de Azufre', type: 'Extreme', duration: '2h 30m', children: false, lunch: true, photos: true,
    },
    {
        id: '005LVA', name: 'Cerro Porvenir', type: 'Extreme', duration: '2h 30m', children: false, lunch: true, photos: true,
    },
    {
        id: '006LVA', name: 'Cerro Platanar', type: 'Extreme', duration: '2h 30m', children: false, lunch: true, photos: true,
    },
    {
        id: '007LVA', name: 'San Vicente ( Hideaway)', type: 'Extreme', duration: '2h 30m', children: false, lunch: true, photos: true,
    },
];


const reservation = [
    {
        clientID: '206850160', date: '10/08/2023', hour: '8AM', people: [
            { clientID: '206850160' }, { clientID: '206850160' }, { clientID: '206850160' }
        ]
    }];

const clients = [
    {
        id: '206850160', name: 'Allan RD', number: '62332535', email: 'aallanrd@gmail.com', date: '10/08/2023', hour: '8AM'
    }
];

export { tours, defaultTitle };