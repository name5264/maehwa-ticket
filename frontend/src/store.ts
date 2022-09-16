import create from "zustand";

interface store {
  name: string;
  setName: (name: string) => void;
  nextTime: { name: string; order: number };
  setNextTime: (nextTime: { name: string; order: number }) => void;
  cardIndex: number;
  setCardIndex: (index: number) => void;
  pageTotalCardNumber: number;
  setPageTotalCardNumber: (cardNumber: number) => void;
}

export const useStore = create<store>((set) => ({
  name: "",
  setName: (name) => set({ name }),
  nextTime: { name: "매화네컷", order: 16 },
  setNextTime: (nextTime) => set({ nextTime }),
  cardIndex: 1,
  setCardIndex: (index) => set({ cardIndex: index }),
  pageTotalCardNumber: 1,
  setPageTotalCardNumber: (cardNumber) =>
    set({ pageTotalCardNumber: cardNumber }),
}));
