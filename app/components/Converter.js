'use client'
import Select from 'react-select';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Converter() {
    const [cryptoData, setCryptoData] = useState();
    const [selectedFrom, setSelectedFrom] = useState(null);
    const [selectedTo, setSelectedTo] = useState(null);
    const [fromAmount, setFromAmount] = useState('');
    const [toAmount, setToAmount] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("https://api.coinlore.net/api/tickers/");
                const parsedData = data.data.map((crypto) => ({
                    value: crypto.id,
                    label: `${crypto.name} - (${crypto.symbol})`,
                    price: parseFloat(crypto.price_usd),
                }));
                setCryptoData(parsedData);

                setSelectedFrom(parsedData.find((coin) => coin.label.includes('BTC')));
                setSelectedTo(parsedData.find((coin) => coin.label.includes('USD')));
            } catch (error) {
                console.log("Veri çekim hatası:", error);
            }
        };
        fetchData();
    }, []);

    const handleFromChange = (amount) => {
        setFromAmount(amount);
        if (selectedFrom && selectedTo) {
            const convertedAmount = (amount * selectedFrom.price) / selectedTo.price;
            setToAmount(convertedAmount.toFixed(6));
        }
    };

    const handleToChange = (amount) => {
        setToAmount(amount);
        if (selectedFrom && selectedTo) {
            const convertedAmount = (amount * selectedTo.price) / selectedFrom.price;
            setFromAmount(convertedAmount.toFixed(6));
        }
    };

    const handleSwap = () => {
        const temp = selectedFrom;
        setSelectedFrom(selectedTo);
        setSelectedTo(temp);
        setFromAmount(toAmount);
        setToAmount(fromAmount);
    };

    return (
        <div className="w-4/5 mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4" style={{ marginTop: '10px' }}>
                    <input
                        type="number"
                        className="flex-grow p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={fromAmount}
                        onChange={(e) => handleFromChange(e.target.value)}
                        placeholder="Miktar gir"
                        min="0"
                    />
                    <div className="w-60">
                        <Select
                            options={cryptoData}
                            value={selectedFrom}
                            onChange={setSelectedFrom}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    borderRadius: '0.375rem',
                                    padding: '0.25rem',
                                }),
                            }}
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={handleSwap}
                        className="p-2 w-16 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        ⇆
                    </button>

                </div>

                <div className="flex items-center gap-4">
                    <input
                        type="number"
                        className="flex-grow p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={toAmount}
                        onChange={(e) => handleToChange(e.target.value)}
                        placeholder="Miktar gir"
                        min="0"
                    />
                    <div className="w-60">
                        <Select
                            options={cryptoData}
                            value={selectedTo}
                            onChange={setSelectedTo}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    borderRadius: '0.375rem',
                                    padding: '0.25rem',
                                }),
                            }}
                        />
                    </div>
                </div>
            </div>

            {selectedFrom && selectedTo && (
                <div className="mt-4 text-center text-sm text-gray-700">
                    1 {selectedFrom.label.split(' ')[0]} ≈ {(selectedFrom.price / selectedTo.price).toFixed(6)}{' '}
                    {selectedTo.label.split(' ')[0]}
                </div>
            )}

            <div className="description">Bu sayfa kripto paranın itibari paraya karşı gerçek zamanlı döviz kurunu gösterir. Bitcoin (BTC), Ethereum (ETH) ve Ripple (XRP) gibi 100 popüler kripto parayı anında istediğiniz itibari paraya dönüştürebilirsiniz. </div>
        </div>
    );
}

export default Converter;
