//Os parâmetros são entradas nomeadas listadas dentro dos parênteses, cada uma com seu próprio tipo. Eles permitem que você passe informações para o método cada vez que o chama.

void Greet(string name)
{
    Console.WriteLine($"Hello, {name}!");
}

Greet("Alex"); // Output: Hello, Alex!
Greet("Sam");  // Output: Hello, Sam!

//Você pode definir vários parâmetros separando-os por vírgulas.

void Greet(string name, string greeting)
{
    Console.WriteLine($"{greeting}, {name}!");
}

Greet("Alex", "Hi"); // Output: Hi, Alex!

//Você pode atribuir um valor padrão a um parâmetro definindo-o como `null` =na definição do método. Se o chamador não fornecer esse argumento, o valor padrão será usado.

void Greet(string name, string greeting = "Hello")
{
    Console.WriteLine($"{greeting}, {name}!");
}

Greet("Alex");             // Output: Hello, Alex!
Greet("Alex", "Welcome");  // Output: Welcome, Alex!