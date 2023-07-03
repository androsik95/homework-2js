// let  name, surname, patronymic, age;

// do {
//     surname = prompt("Введите вашу фамилию:");
//   } while(!surname)
//   do {
//    name = prompt("Введите ваше имя:");
//   } while (!name);
//   do {
//     patronymic = prompt("Введите ваше отчество:");
//   } while (!patronymic);
//   do {
//     age = prompt("Введите ваш возраст:");
//   } while (isNaN(age) || !age);
//   let gender = confirm("Ваш пол - мужской?") ? "мужской" : "женский";
  

// if (
//   (gender === "мужской" && age >= 65) ||
//   (gender === "женский" && age >= 55)
// ) {
//   pension = "да";
// } else {
//   pension = "нет";
// }

// alert(`
//   Ваше ФИО: ${surname} ${name} ${patronymic}
//   Ваш возраст в годах: ${age}
//   Ваш возраст в днях: ${age * 365}
//   Через 5 лет вам будет: ${age + 5}
//   Ваш пол: ${gender}
//   Вы на пенсии: ${pension}
// `);




// Задание 1
// var codeWord1 = "обернись";
// var codeWord2 = "неужели";
// var codeWord3 = "огурцы";
// var codeWord4 = "липкие";
// var codeWord5 = "?!";
// var cipher =
// codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
// // "беги!"
//  console.log(cipher);

// Задание 2
// let navigation = prompt ("куда идти?");
// switch (navigation) {
//   case 'юг':
//     alert( 'на юг пойдешь счастье найдешь' );
//     break;
//   case 'север':
//     alert( 'на север пойдешь много денег найдешь' );
//     break;
//     case 'запад':
//         alert( 'на запад пойдешь верного друга найдешь' );
//         break;
//         case 'восток':
//         alert( 'на восток пойдешь разработчиком станешь' );
//         break;
//         default:
//             alert("Неверное направление, попробуй еще раз");
// }

// ADV задание 1

// var name = 'пОлИнА нАбЕрЕжНаЯ';
// var space = name.indexOf(' ');
// alert(`Привет, ${name[0].toUpperCase()}${name.slice(1,space).toLowerCase()} ${name[space+1].toUpperCase()}${name.slice(space+2,name.length).toLowerCase()}!`);



// ADV задание 2

// var n = Number(prompt("Введите начальное число",""));
// var takeaway = Number(prompt("Сколько отнять?",""));
// var add = Number(prompt("Сколько прибавить?",""));
// var multiply = Number(prompt("Сколько умножить?",""));
// var divide = Number(prompt("разделить от предыдущего результата?",""));

// var solution = ((n - takeaway + add) * multiply) / divide;
// alert(
//     `((((${n} - ${takeaway}) + ${add}) * ${multiply}) / ${divide}) = ${solution}`
//   );


// ADV задание 3

// var n = Number(prompt('введите начальное число ', '0'));
// var k = Number(prompt('введите конечное число ', '0' ));
// var a = [];


// while (n <= k) {
//     a.push(n++);
// }
// console.log('Числа заданного диапозона: ' + a);

// ADV задание 4
// var n = Number(prompt("Введите начальное число",""));
// var k = Number(prompt("Введите конечное число",""));
// var sum = 0;
 
// for (var i = n; i <= k; i++) {
//     sum += i;
//   }
//   alert(`Сумма чисел: ${sum}`)

// ADV задание 5
// var n = Number(prompt('введите число ', ''));
// var k = Number(prompt('таблица умножения', '' ));
// for(i=1; i<=10; i++){
//     console.log(`${n} * ${i} = ${n*i}`);
// }