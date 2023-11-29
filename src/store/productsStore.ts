import { defineStore } from "pinia";
import { ref } from "vue";
import type { IProduct } from "@/types/entities/IProduct";

export const useProductsStore = defineStore(
  "products",
  () => {
    const productsList = ref<IProduct[]>([
      {
        title: "Adicolor Classics Joggers",
        imgName: "image-product-1",
        type: "Dress",
        price: "$63.85",
        isOnSale: false,
        isHot: false,
      },
      {
        title: "Nike Sportswear Futura Luxe",
        imgName: "image-product-2",
        type: "Bag",
        price: "$130.00",
        isOnSale: false,
        isHot: false,
      },
      {
        title: "Geometric print Scarf",
        imgName: "image-product-3",
        type: "Scarf",
        price: "$53.00",
        discount: "20%",
        isOnSale: true,
        isHot: false,
      },
      {
        title: "Yellow Reserved Hoodie",
        imgName: "image-product-4",
        type: "Dress",
        price: "$155.00",
        isOnSale: false,
        isHot: true,
      },
      {
        title: "Basic Dress Green",
        imgName: "image-product-5",
        type: "Dress",
        price: "$236.00",
        isOnSale: false,
        isHot: false,
      },
      {
        title: "Nike Air Zoom Pegasus",
        imgName: "image-product-6",
        type: "shoe",
        price: "$198.00",
        isOnSale: false,
        isHot: false,
      },
      {
        title: "Nike Repel Miler",
        imgName: "image-product-7",
        type: "Dress",
        price: "$120.50",
        discount: "20%",
        isOnSale: true,
        isHot: false,
      },
      {
        title: "Nike Sportswear Futura Luxe",
        imgName: "image-product-8",
        type: "Glasses",
        price: "$160.00",
        isOnSale: false,
        isHot: true,
      },
    ]);

    return { productsList };
  },
  {
    persist: {
      paths: ["productsList"],
    },
  }
);
