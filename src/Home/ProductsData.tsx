import produitImage0  from"../image/samsung-s22_1.jpg"
import produitImage1 from"../image/iphone14_2.jpeg";
import produitImage2 from "../image/iphone14_1.jpeg"
import produitImage3 from "../image/samsung-s22_2.jpg"
import produitImage4 from"../image/PS5_Consoles_1.jpg";
import produitImage5  from"../image/PS5_console_2.jpg"
import produitImage6 from "../image/xbox_series_s_1.jpg"
import produitImage7 from "../image/xbox_series_x_2.jpg"

export interface Products {
  id: number;
  type: String;
  image: String;
  category: String;
  quatite: number;
  prix: number;
}
export const Products = [
    {
      id: 1,
      type:"samsung S22",
      image: produitImage0,
      category: "phones",
      prix: 12000.00

    },
    {
      id: 2,
      type:"iphone 14 Pro",
      image: produitImage1,
      category: "phones",
      prix: 9000.00
    },
    {
      id: 3,
      type:"iphone 14",
      image: produitImage2,
      category: "phones",
      prix: 9000.00
    },
    {
      id: 4,
      type:"samsung S22",
      image: produitImage3,
      category: "phones",
      prix: 9000.00
    },
    {
      id: 5,
      type:"Ps5 slim",
      image: produitImage4,
      category: "consoles",
      prix: 9000.00
  },
  {
      id: 6,
      type:"Ps5",
      image: produitImage5,
      category: "consoles",
      prix: 9500.00
  },
  {
      id: 7,
      type:"xbox series S",
      image: produitImage6,
      category: "consoles",
      prix: 12000.00
  },
  {
      id: 8,
      type:"xbox series X",
      image: produitImage7,
      category: "consoles",
      prix:	8000.00
  }

  ];