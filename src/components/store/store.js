import { createStore } from 'vuex';
import PouletRoti from '@/assets/imageStore/pouletRoti.jpg';
import TarteAuCitron from '@/assets/imageStore/TarteAuCitron.jpg';
import BœufBourguignon from '@/assets/imageStore/BœufBourguignon.jpg';
import Profiteroles from '@/assets/imageStore/Profiteroles.jpg';
import Ratatouille from '@/assets/imageStore/Ratatouille.jpg';
import MousseAuChocolat from '@/assets/imageStore/MousseAuChocolat.jpg';
import SaladeNicoise from '@/assets/imageStore/SaladeNiçoise.jpg';
import CremeBrulee from '@/assets/imageStore/CrèmeBrûlée.jpg';
import CoqAuVin from '@/assets/imageStore/CoqAuVin.jpeg';
import ClafoutisAuxCerises from '@/assets/imageStore/ClafoutisAuxCerises.jpg';
import QuicheLorraine from '@/assets/imageStore/QuicheLorraine.jpg';
import PannaCotta from '@/assets/imageStore/PannaCotta.jpg';
import CouscousRoyal from '@/assets/imageStore/CouscousRoyal.jpg';
import EclairAuChocolat from '@/assets/imageStore/ÉclairAuChocolat.jpg';
import Paella from '@/assets/imageStore/Paella.jpg';
import Tiramisu from '@/assets/imageStore/Tiramisu.jpg';
import TagliatellesAuSaumon from '@/assets/imageStore/TagliatellesAuSaumon.jpg';
import Macarons from '@/assets/imageStore/Macarons.jpg';
import GratinDauphinois from '@/assets/imageStore/GratinDauphinois.jpeg';
import GateauAuFromage from '@/assets/imageStore/GâteauAuFromage.jpg';

export default createStore({
    state: {
      products: [
        { id: 1, category: 'plat', name: 'Poulet Rôti', description: 'Poulet rôti avec des herbes de Provence', price: '12.00€', image: PouletRoti },
        { id: 2, category: 'dessert', name: 'Tarte au Citron', description: 'Délicieuse tarte au citron avec une meringue légère', price: '6.00€', image: TarteAuCitron },
        { id: 3, category: 'plat', name: 'Bœuf Bourguignon', description: 'Bœuf mijoté au vin rouge avec des légumes', price: '15.00€', image: BœufBourguignon },
        { id: 4, category: 'dessert', name: 'Profiteroles', description: 'Choux garnis de glace vanille et nappés de chocolat', price: '7.00€', image: Profiteroles },
        { id: 5, category: 'plat', name: 'Ratatouille', description: 'Mélange de légumes provençaux mijotés', price: '10.00€', image: Ratatouille },
        { id: 6, category: 'dessert', name: 'Mousse au Chocolat', description: 'Mousse légère et onctueuse au chocolat', price: '5.00€', image: MousseAuChocolat },
        { id: 7, category: 'plat', name: 'Salade Niçoise', description: 'Salade fraîche avec thon, olives et œufs durs', price: '8.00€', image: SaladeNicoise },
        { id: 8, category: 'dessert', name: 'Crème Brûlée', description: 'Crème vanille caramélisée', price: '6.50€', image: CremeBrulee },
        { id: 9, category: 'plat', name: 'Coq au Vin', description: 'Poulet mijoté dans du vin rouge avec des champignons', price: '13.00€', image: CoqAuVin },
        { id: 10, category: 'dessert', name: 'Clafoutis aux Cerises', description: 'Gâteau moelleux aux cerises', price: '5.50€', image: ClafoutisAuxCerises },
        { id: 11, category: 'plat', name: 'Quiche Lorraine', description: 'Quiche traditionnelle avec lardons et fromage', price: '7.00€', image: QuicheLorraine },
        { id: 12, category: 'dessert', name: 'Panna Cotta', description: 'Crème cuite à la vanille avec coulis de fruits rouges', price: '5.00€', image: PannaCotta },
        { id: 13, category: 'plat', name: 'Couscous Royal', description: 'Couscous avec agneau, poulet et merguez', price: '16.00€', image: CouscousRoyal },
        { id: 14, category: 'dessert', name: 'Éclair au Chocolat', description: 'Pâtisserie allongée garnie de crème au chocolat', price: '4.50€', image: EclairAuChocolat },
        { id: 15, category: 'plat', name: 'Paella', description: 'Riz safrané aux fruits de mer, poulet et légumes', price: '14.00€', image: Paella },
        { id: 16, category: 'dessert', name: 'Tiramisu', description: 'Dessert italien au café et mascarpone', price: '6.00€', image: Tiramisu },
        { id: 17, category: 'plat', name: 'Tagliatelles au Saumon', description: 'Pâtes fraîches au saumon fumé et crème', price: '12.50€', image: TagliatellesAuSaumon },
        { id: 18, category: 'dessert', name: 'Macarons', description: 'Assortiment de macarons faits maison', price: '7.00€', image: Macarons },
        { id: 19, category: 'plat', name: 'Gratin Dauphinois', description: 'Pommes de terre gratinées à la crème', price: '8.00€', image: GratinDauphinois },
        { id: 20, category: 'dessert', name: 'Gâteau au Fromage', description: 'Cheesecake onctueux à la vanille', price: '5.50€', image: GateauAuFromage }
      ],
      cart: []
    },
    getters: {
      allProducts: state => state.products,
      plats: state => state.products.filter(product => product.category === 'plat'),
      desserts: state => state.products.filter(product => product.category === 'dessert'),
      getRandomProducts: (state) => () => {
        const shuffledProducts = [...state.products].sort(() => 0.5 - Math.random());
        return shuffledProducts.slice(0, 5);
      },
      cart: state => state.cart,
      cartTotalQuantity: state => state.cart.reduce((total, item) => total + item.quantity, 0),
      cartTotalPrice: state => state.cart.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0),
      getProductQuantity: (state) => (productId) => {
        const product = state.cart.find(item => item.id === productId);
        return product ? product.quantity : 0;
      }
    },
    mutations: {
      ADD_TO_CART(state, product) {
        const cartItem = state.cart.find(item => item.id === product.id);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          state.cart.push({ ...product, quantity: 1 });
        }
      },
      REMOVE_FROM_CART(state, productId) {
        const index = state.cart.findIndex(item => item.id === productId);
        if (index !== -1) {
          if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--;
          } else {
            state.cart.splice(index, 1);
          }
        }
      }
    },
    actions: {
      addToCart({ commit }, product) {
        commit('ADD_TO_CART', product);
      },
      removeFromCart({ commit }, productId) {
        commit('REMOVE_FROM_CART', productId);
      }
    }
  });