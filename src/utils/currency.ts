import { MyBig } from "@/lib/big";

export const toCent = (amount: number) => {
  return new MyBig(amount).mul(100).round(2).toNumber();
};

export const fromCent = (amount: number) => {
  return new MyBig(amount).div(100).round(2).toNumber();
};

export const toCurrencyFromCent = (amount: number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(fromCent(amount));
};
