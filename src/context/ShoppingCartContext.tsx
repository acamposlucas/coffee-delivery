import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Coffee } from "../interfaces/ICoffee";
import data from "../../data.json";

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  setFormData: any;
  cartQuantity: number;
  cartItems: CartItem[];
  coffees: Coffee[];
  formData: IFormData;
};

type CartItem = {
  id: number;
  quantity: number;
}

interface IFormData {
  cep: number | undefined,
  rua: string | undefined,
  numero: number | undefined,
  complemento: string | undefined,
  bairro: string | undefined,
  cidade: string | undefined,
  uf: string | undefined,
  metodoPagamento: string | undefined,
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: { children: ReactNode}) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[]);
  
  const [formData, setFormData] = useState<IFormData>({
    cep: undefined,
    rua: undefined,
    numero: undefined,
    complemento: undefined,
    bairro: undefined,
    cidade: undefined,
    uf: undefined,
    metodoPagamento: undefined,
  });
  
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    setCoffees(data);
  }, []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0)

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, coffees, formData, setFormData }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};
