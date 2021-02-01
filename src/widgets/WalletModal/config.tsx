import Metamask from "./icons/Metamask";
import TrustWallet from "./icons/TrustWallet";
import { Config } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: "injected",
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
