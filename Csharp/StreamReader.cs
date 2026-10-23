//Você pode abrir um arquivo com um StreamReadere fechá-lo com .Close().

StreamReader reader = new StreamReader("notes.txt");
string contents = reader.ReadToEnd();
Console.WriteLine(contents);
reader.Close();

//File.ReadAllLines()Retorna cada linha como uma string separada em um array

string[] lines = File.ReadAllLines("notes.txt");

foreach (string line in lines)
{
    Console.WriteLine(line);
}

//A maneira mais eficiente em termos de memória é usar um ` StreamReadera` e chamá-lo .ReadLine()em um loop. Ele retorna nullquando não houver mais linhas para ler.

using StreamReader reader = new StreamReader("notes.txt");
string line;

while ((line = reader.ReadLine()) != null)
{
    Console.WriteLine(line);
}