export const cardsArray = [
  {
    name: 'VISA',
    image: 'images/card-visa.webp',
  },
  {
    name: 'AMEX',
    image: 'images/card-american-express.webp',
  },
  {
    name: 'MASTERCARD',
    image: 'images/card-master.webp',
  },
  {
    name: 'DISCOVER',
    image: 'images/card-discover.webp',
  },
];

export type CardsArray = typeof cardsArray;

export enum paymentMethod {
  creditCard,
  purchaseOrder,
  creditWallet = 'Credit',
}
