let some: unknown;
some = 'Text';
let str: string;

// Перевірка типу
if (typeof some === 'string') {
    str = some;
}

// Або через явне приведення типу
str = some as string;


export {};
