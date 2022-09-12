import * as React from "react";
import { RestaurantCtxT } from "../types/restaurant";

const MenusCtx = React.createContext<undefined | RestaurantCtxT>(undefined);

export const RestProv = ({
  children,
  store,
}: {
  children: React.ReactNode;
  store?: RestaurantCtxT;
}) => <MenusCtx.Provider value={store}>{children}</MenusCtx.Provider>;

export const useRestCtx = () => {
  const context = React.useContext(MenusCtx);
  if (context === undefined) {
    throw new Error("useRest must be used within a RestProv");
  }
  return context;
};
