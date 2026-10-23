int saleAmount = 1001;
int discount = saleAmount > 1000 ? 100 : 50;
Console.WriteLine($"Discount: {discount}");
//>>Discount: 100

//------------------------//

Random coin = new Random();
int flip = coin.Next(0, 2);
Console.WriteLine((flip == 0) ? "heads" : "tails");
//Esse código é apenas "uma solução possível". Você poderia ter eliminado a variável flip temporária chamando o Next() interior da expressão booliana da seguinte maneira:
Random coin = new Random();
Console.WriteLine((coin.Next(0, 2) == 0) ? "heads" : "tails");