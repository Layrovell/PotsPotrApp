const somePromiseBasedURLRequest = async () => {
  return new Promise((resolve, reject) => {
    resolve('Oh, yes!');
  })
} 

class TicketStore {

  async getSum() {
    let error = null;
    try {
      await somePromiseBasedURLRequest();
      await somePromiseBasedURLRequest();
      await somePromiseBasedURLRequest();
      await somePromiseBasedURLRequest();
      await somePromiseBasedURLRequest();
      await somePromiseBasedURLRequest();
    } catch (err) {
      error = err;
    } finally {
      console.log(error);
    }

  }
}