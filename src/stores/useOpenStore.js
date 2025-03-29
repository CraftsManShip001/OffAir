import { create } from "zustand";

const useOpenStore = create((set)=>({
        open: false,
        changeOpen : () => set((state) => ({open : !state.open})),
}));

export default useOpenStore;