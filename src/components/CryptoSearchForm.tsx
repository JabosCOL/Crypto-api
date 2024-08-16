import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import Error from "./Error";

export default function CryptoSearchForm() {

    const cryptos = useCryptoStore((state) => state.cryptos)
    const fetchData = useCryptoStore((state) => state.fetchData)
    const [pair, setPair] = useState<Pair>({
        currency: '',
        crypto: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(pair).includes('')) {
            setError('All fields are required')
            return
        }
        setError('')
        fetchData(pair)
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            {error && <Error>{error}</Error>}
            <div className="field">
                <label htmlFor="currency">Currency:</label>
                <select
                    name="currency"
                    id="currency"
                    onChange={handleChange}
                    value={pair.currency}
                >
                    <option value="">Select a currency</option>
                    {currencies.map(currency => (
                        <option
                            key={currency.code}
                            value={currency.code}
                        >
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="field">
                <label htmlFor="crypto">Crypto:</label>
                <select
                    name="crypto"
                    id="crypto"
                    onChange={handleChange}
                    value={pair.crypto}
                >
                    <option value="">Select a crypto</option>
                    {cryptos.map(crypto => (
                        <option
                        key={crypto.CoinInfo.Name}
                        value={crypto.CoinInfo.Name}
                    >
                        {crypto.CoinInfo.FullName}
                    </option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Search" />
        </form>
    )
}
