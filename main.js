// Вивести на сторінку в один рядок через кому числа від 10 до 20
let result = '';
for (let i = 10;i <= 20;i++) {
    result += i + ',';
}
console.log(result.slice(0,-1));



// Вивести квадрати чисел від 10 до 20
for (let i = 10;i <= 20;i++) {
    console.log(i*i);
}



// Вивести таблицю множення на 7
for (let i = 1;i <= 10;i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}



// Знайти суму всіх цілих чисел від 1 до 15
let res = 0;
for (let i = 1;i <= 15;i++) { 
    res += i; 
}
console.log(res);



// Знайти добуток усіх цілих чисел від 15 до 35
restwo = 1;
for (let i = 15;i <= 35;i++) {
    restwo *= i;
}
console.log(restwo);



// Знайти середнє арифметичне всіх цілих чисел від 1 до 500
resThree = 0;
for (let i = 1;i <= 500;i++) {
    resThree += i;
}
console.log(`Результат: ${resThree / 500}`);



// Вивести суму лише парних чисел у діапазоні від 30 до 80
resFour = 0;
for (let i = 30;i <= 80;i++) {
    if (i % 2 == 0) {
        resFour += i;
    }
}
console.log(`Результат: ${resFour}`);



// Вивести всі числа в діапазоні від 100 до 200 кратні 3
for (let i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}



// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників
// Знайти суму його парних дільників
num = Number(prompt('Введіть натуральне число: '));
let numList = '';
let numListSum = 0;
let numCounter = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
            numList += i + ',';
            if (i % 2 == 0) {
                numCounter++;
                numListSum += i;
            }
        }       
}

alert(`
    Дільники числа ${num}: ${numList.slice(0,-1)}
    Кількість парних дільників: ${numCounter}
    Сума цих парних дільників: ${numListSum}
`);



// Надрукувати повну таблицю множення від 1 до 10
for (let i = 1; i <= 10; i++) {
    console.log('');
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}