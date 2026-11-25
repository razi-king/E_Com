const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })
export const money = (n) => inr.format(n)
export const FREE_SHIPPING_OVER = 999
export const shippingFor = (subtotal) => (subtotal === 0 || subtotal >= FREE_SHIPPING_OVER ? 0 : 79)
