class User {
  username: string;
}

class Product {
  productname: string;
}

class Order {
  user: User;
  product: Product;
  summary() {
    console.log(
      `사용자 ${this.user.username}가 상품 ${this.product.productname}을 구매했습니다.`
    );
  }
}

let user = new User();
user.username = "Amy";

let product = new Product();
product.productname = "labtop";

let order = new Order();
order.user = user;
order.product = product;

order.summary();
