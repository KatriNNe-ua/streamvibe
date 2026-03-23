import { createContext } from "react";

type Context = {
  isOpenPopup: boolean;
  toggle:()=>void
};

export const PopupContext = createContext<Context|undefined>(undefined);
