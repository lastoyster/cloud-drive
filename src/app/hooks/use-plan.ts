import { create } from "zustand";

type PlanStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const usePlan = create<PlanStore>((set: (arg0: { isOpen: boolean; }) => any) => {
  return {
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  };
});