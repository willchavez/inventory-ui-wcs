export class StockServiceMock {
  async listStockItems() {
    await timer(1000);
    return [
      {
        name: 'Item 1',
        description: 'The first item',
        stock: 10,
        unitPrice: 100.0,
        picture: 'test',
        manufacturer: 'unknown'
      },
      {
        name: 'Item 2',
        description: 'The second item',
        stock: 15,
        unitPrice: 120.5,
        picture: 'test1',
        manufacturer: 'Apple'
      },
      {
        name: 'Item 3',
        description: 'The third item',
        stock: 20,
        unitPrice: 75.5,
        picture: 'test1',
        manufacturer: 'Sony'
      }
    ];
  }
}
async function timer(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
