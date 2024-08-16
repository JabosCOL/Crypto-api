import { z } from "zod";
import { CryptoPriceSchema, CryptoResponsesSchema, CurrencySchema, PairSchema } from "../schema/cryptoSchema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoResponses = z.infer<typeof CryptoResponsesSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>