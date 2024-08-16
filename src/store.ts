import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoPrice, CryptoResponses, Pair } from "./types"
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService"

type CryptoStore = {
    cryptos: CryptoResponses,
    result: CryptoPrice,
    loading: boolean,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptos: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGE24HOUR: '',
        LASTUPDATE: ''
    },
    loading: false,
    fetchCryptos: async () => {
        const cryptos = await getCryptos()
        set(() => ({
            cryptos
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))
    }
})))