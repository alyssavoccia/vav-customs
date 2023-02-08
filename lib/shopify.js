import Client from 'shopify-buy';

export const shopifyClient = Client.buildClient({
  storefrontAccessToken: '493769b404bf83733826c0783d32ff85',
  domain: 'vavcustoms.myshopify.com'
});

export const parseShopifyResponse = (response) =>  JSON.parse(JSON.stringify(response));