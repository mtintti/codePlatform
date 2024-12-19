export const LANG_VERSION = {
    javascript: "18.15.0",
    java: "15.0.2",
    python: "3.10.0",
    cpp: "23.0.0",
};

export const CODE_SNIPPETS = {
    javascript: `// JavaScript example
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("World"));`,

    java: `// Java example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,

    python: `# Python example
def greet(name):
    return f"Hello from Python, {name}"

print(greet("World"))`,

    cpp: `// C++ example
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl; // Prints to stdout
    int a = 5, b = 10;
    cout << "The sum of " << a << " and " << b << " is " << (a + b) << endl;

    return 0; // Indicates successful program termination
}`,
};