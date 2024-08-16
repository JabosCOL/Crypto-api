import { z } from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const CryptoResponseSchema = z.object({
    CoinInfo: z.object({
        Name: z.string(),
        FullName: z.string()
    })
})

export const CryptoResponsesSchema = z.array(CryptoResponseSchema)

export const PairSchema = z.object({
    currency: z.string(),
    crypto: z.string()
})

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGE24HOUR: z.string(),
    LASTUPDATE: z.string()
})