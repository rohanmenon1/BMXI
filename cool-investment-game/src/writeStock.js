const writerStocks = function writeStockData(stockId, stockName, stockPrice, arrayOfPrices) {
  set(ref(database, 'stock/' + stockId), {
    stockId: stockId,
    stockName: stockName,
    stockPrice: stockPrice,
    arrayOfPrices: arrayOfPrices
  });
}

export default writerStocks;