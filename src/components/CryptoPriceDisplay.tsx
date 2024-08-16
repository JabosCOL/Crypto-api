import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)
    const hasData = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <>
            {loading ? <Spinner />
                : hasData && (
                    <div className="result-wrapper">
                        <h2>Quote</h2>
                        <div className="result">
                            <div className="icon">
                                <img
                                    src={`https://cryptocompare.com/${result.IMAGEURL}`}
                                    alt="Crypto Image"
                                />
                            </div>
                            <div className="result-text">
                                <div>
                                    <p><span>Price</span> {result.PRICE}</p>
                                    <p><span>Change on last 24Hr </span>{result.CHANGE24HOUR}</p>
                                    <p><span>Last update </span>{result.LASTUPDATE}</p>
                                </div>
                                <div>
                                    <p><span>Highest price </span>{result.HIGHDAY}</p>
                                    <p><span>Lowest price </span>{result.LOWDAY}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}
