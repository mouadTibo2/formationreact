import { useContext, createContext} from "react";
import { useState } from "react";

import { numberProduitList } from "../App";

export const AppContext = createContext<numberProduitList | undefined>(undefined);


