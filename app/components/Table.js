'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Table() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 20;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coinData = await axios.get("https://api.coinlore.net/api/tickers/");
                setData(coinData.data.data);
                const totalCoins = coinData.data.data.length;
                setTotalPages(Math.ceil(totalCoins / itemsPerPage));
            } catch (error) {
                console.log("Veri çekim hatası", error);
            }
        };
        fetchData();
    }, []);

    const currentPageData = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="p-6 font-sans">
            <h1 className="text-center text-2xl font-semibold mb-4">Fiyatlar</h1>
            <table className="w-3/5 table-auto border-collapse max-w-4xl mx-auto">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Kripto Para</th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">Fiyat ($)</th>
                        <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">24 Sattlik Değişim (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.length > 0 ? (
                        currentPageData.map((coin, index) => (
                            <tr key={coin.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                                <td className="py-2 px-4 text-sm text-gray-900">{coin.name}</td>
                                <td className="py-2 px-4 text-sm text-gray-900">${parseFloat(coin.price_usd).toFixed(2)}</td>
                                <td className={`py-2 px-4 text-sm ${coin.percent_change_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {coin.percent_change_24h}%
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="py-4 text-center text-gray-500">Yükleniyor...</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePrevPage}
                    className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md"
                    disabled={page === 1}
                >
                    Önceki
                </button>
                <span className="flex items-center">{page} / {totalPages}</span>
                <button
                    onClick={handleNextPage}
                    className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md"
                    disabled={page === totalPages}
                >
                    Sonraki
                </button>
            </div>
        </div>
    );
}

export default Table;
