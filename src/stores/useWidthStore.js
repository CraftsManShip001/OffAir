import { create } from "zustand";

const useWidthStore = create((set)=>{
    const updateWidth = () => set({ widthsize: window.innerWidth });
    if (typeof window !== "undefined") {
        window.addEventListener("resize", updateWidth);
    }

    return {
        widthsize: window.innerWidth,
        setWidthsize: updateWidth,
    };
})

export default useWidthStore;