import { defineStore } from "pinia";
import { ref } from "vue";
import type { IProduct } from "@/types/entities/IProduct";

export const useProductsStore = defineStore(
  "products",
  () => {
    const productsList = ref<IProduct[]>([
      {
        id: 0,
        title: "Adicolor Classics Joggers",
        imgName: "image-product-1",
        type: "Dress",
        price: 63.85,
        currency: "$",
        isOnSale: false,
        isHot: false,
        isFavourite: false,
        quantity: 1,
      },
      {
        id: 1,
        title: "Nike Sportswear Futura Luxe",
        imgName: "image-product-2",
        type: "Bag",
        price: 130,
        currency: "$",
        isOnSale: false,
        isHot: false,
        isFavourite: false,
        quantity: 1,
      },
      {
        id: 2,
        title: "Geometric print Scarf",
        imgName: "image-product-3",
        type: "Scarf",
        price: 53,
        currency: "$",
        discount: "20%",
        isOnSale: true,
        isHot: false,
        isFavourite: false,
        quantity: 1,
      },
      {
        id: 3,
        title: "Yellow Reserved Hoodie",
        imgName: "image-product-4",
        type: "Dress",
        price: 155,
        currency: "$",
        isOnSale: false,
        isHot: true,
        isFavourite: false,
        quantity: 1,
      },
      {
        id: 4,
        title: "Basic Dress Green",
        imgName: "image-product-5",
        type: "Dress",
        price: 236,
        currency: "$",
        isOnSale: false,
        isHot: false,
        isFavourite: false,
        quantity: 1,
      },
      {
        id: 5,
        title: "Nike Air Zoom Pegasus",
        imgName: "image-product-6",
        type: "Shoe",
        price: 198,
        currency: "$",
        isOnSale: false,
        isHot: false,
        isFavourite: false,
        quantity: 1,
      },
      {
        id: 6,
        title: "Nike Repel Miler",
        imgName: "image-product-7",
        type: "Dress",
        price: 120.5,
        currency: "$",
        discount: "20%",
        isOnSale: true,
        isHot: false,
        isFavourite: false,
        quantity: 1,
      },
      {
        id: 7,
        title: "Nike Sportswear Futura Luxe",
        imgName: "image-product-8",
        type: "Glasses",
        price: 160,
        currency: "$",
        isOnSale: false,
        isHot: true,
        isFavourite: false,
        quantity: 1,
      },
    ]);
    const favouriteProducts = ref<IProduct[]>([]);
    const cart = ref<IProduct[]>([]);
    const cartSize = ref<number>(0);
    const orderAmount = ref<number>(0);
    const currentCurrency = ref<string>("$");

    const addToCart = (productId: number) => {
      const item = productsList.value.find(
        (product) => product.id === productId
      );
      if (item) {
        const existingItem = cart.value.find((i) => i.id === item.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.value.push(item);
        }
        cartSize.value += 1;
        orderAmount.value += item.price;
      }
    };

    const removeFromCart = (productId: number) => {
      const item = productsList.value.find(
        (product) => product.id === productId
      );
      if (item) {
        const existingItem = cart.value.find((i) => i.id === item.id);
        if (existingItem) {
          cartSize.value -= existingItem.quantity;
          orderAmount.value -= existingItem.price * existingItem.quantity;
        }
        cart.value = cart.value.filter((product) => product.id !== productId);
      }
    };

    const decreaseQuantity = (productId: number) => {
      const existingItem = cart.value.find((i) => i.id === productId);
      if (existingItem) {
        existingItem.quantity -= 1;
        cartSize.value -= 1;
        orderAmount.value -= existingItem.price;
      }
    };

    const addToFavourite = (productId: number) => {
      const favouriteProduct = productsList.value.find(
        (product) => product.id === productId
      );
      if (favouriteProduct) {
        favouriteProduct.isFavourite = true;
        favouriteProducts.value.push(favouriteProduct);
      }
    };

    const removeFromFavourite = (productId: number) => {
      const favouriteProduct = productsList.value.find(
        (product) => product.id === productId
      );
      if (favouriteProduct) {
        favouriteProduct.isFavourite = false;
        favouriteProducts.value = favouriteProducts.value.filter(
          (product) => product.id !== productId
        );
      }
    };

    return {
      productsList,
      favouriteProducts,
      cart,
      cartSize,
      orderAmount,
      currentCurrency,
      addToCart,
      removeFromCart,
      addToFavourite,
      removeFromFavourite,
      decreaseQuantity,
    };
  },
  {
    persist: {
      paths: [
        "productsList",
        "favouriteProducts",
        "cart",
        "cartSize",
        "orderAmount",
      ],
    },
  }
);
