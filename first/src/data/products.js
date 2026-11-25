import img1 from '../image/1.jpg'
import img2 from '../image/2.jpg'
import img3 from '../image/3.jpg'
import img4 from '../image/4.jpg'
import img5 from '../image/5.jpg'
import img6 from '../image/6.jpg'
import img7 from '../image/7.jpg'
import img8 from '../image/8.jpg'

export const CATEGORIES = ['Tops', 'Bottoms', 'Dresses', 'Jackets']

// Prices in rupees. `mrp` is the original price, shown struck through when on sale.
export const products = [
  {
    id: 1, slug: 'embroidered-sleeve-sweatshirt', title: 'Embroidered Sleeve Sweatshirt', image: img1, category: 'Tops',
    price: 1499, mrp: 2199, tag: 'Sale', rating: 4.5, reviews: 128, stock: 14,
    sizes: ['S', 'M', 'L', 'XL'], colors: ['Blush', 'Ivory'],
    description: 'A relaxed half-zip sweatshirt in soft brushed cotton, with floral embroidery down both sleeves.',
  },
  {
    id: 2, slug: 'rust-corduroy-shorts', title: 'Rust Corduroy Shorts', image: img2, category: 'Bottoms',
    price: 1199, mrp: 1199, tag: 'New', rating: 4.2, reviews: 64, stock: 30,
    sizes: ['26', '28', '30', '32'], colors: ['Rust', 'Olive'],
    description: 'High-waisted corduroy shorts with a matching fabric belt and deep front pockets.',
  },
  {
    id: 3, slug: 'rose-print-shorts', title: 'Rose Print Shorts', image: img3, category: 'Bottoms',
    price: 1299, mrp: 1299, rating: 4.3, reviews: 87, stock: 3,
    sizes: ['S', 'M', 'L'], colors: ['Pink', 'Black'],
    description: 'Breezy pull-on shorts with an all-over rose print and contrast side stripes.',
  },
  {
    id: 4, slug: 'floral-maxi-dress', title: 'Floral Maxi Dress', image: img4, category: 'Dresses',
    price: 1899, mrp: 1899, tag: 'Hot', rating: 4.7, reviews: 203, stock: 9,
    sizes: ['XS', 'S', 'M', 'L'], colors: ['Lemon', 'Sky'],
    description: 'A flowing tiered maxi dress in a lightweight floral print, with balloon sleeves and a tie neckline.',
  },
  {
    id: 5, slug: 'broderie-lace-blouse', title: 'Broderie Lace Blouse', image: img5, category: 'Tops',
    price: 999, mrp: 1499, tag: 'Sale', rating: 4.1, reviews: 156, stock: 22,
    sizes: ['XS', 'S', 'M', 'L'], colors: ['White'],
    description: 'A crisp cotton blouse with broderie anglaise sleeves and a pleated high neck.',
  },
  {
    id: 6, slug: 'mustard-knit-sweater', title: 'Mustard Knit Sweater', image: img6, category: 'Tops',
    price: 2299, mrp: 2299, tag: 'Hot', rating: 4.8, reviews: 94, stock: 6,
    sizes: ['S', 'M', 'L', 'XL'], colors: ['Mustard', 'Charcoal'],
    description: 'A fine-gauge crew-neck sweater in a wool blend. Warm without the bulk, and easy to tuck in.',
  },
  {
    id: 7, slug: 'printed-button-blouse', title: 'Printed Button Blouse', image: img7, category: 'Tops',
    price: 799, mrp: 1199, tag: 'Sale', rating: 4.4, reviews: 311, stock: 40,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Rust print', 'Navy print'],
    description: 'A loose button-front blouse in a geometric block print, with a band collar and cuffed sleeves.',
  },
  {
    id: 8, slug: 'classic-denim-jacket', title: 'Classic Denim Jacket', image: img8, category: 'Jackets',
    price: 1399, mrp: 1799, tag: 'Sale', rating: 4.0, reviews: 45, stock: 0,
    sizes: ['S', 'M', 'L'], colors: ['Indigo'],
    description: 'A timeless trucker jacket in mid-weight indigo denim. Back in stock soon.',
  },
]

export const findProduct = (id) => products.find((p) => p.id === Number(id))
