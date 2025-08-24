const myArray = [876, "database", -79.9, "algorithm", "develop", "code",
    [657, "variable", 80, "debugger"], [8765, 3, 6, "frontend"]
];
function getStringFromArray(myArray) { // функция кот возвращает список всех собранных строк 
    const myArray2 = [];  // Временный список

    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];
        if (typeof element === 'string') {
            myArray2.push(element);
        } else if (Array.isArray(element)) {
            for (let j = 0; j < element.length; j++) {
                const insideArrayItem = element[j];
                if (typeof insideArrayItem === 'string') {
                    myArray2.push(insideArrayItem);
                }

            }
        }
    }
    return myArray2;
    

}
const allStrings = getStringFromArray(myArray);
console.log(allStrings);
// создаем переменную вне функции которая хранит результат вызова ф ции
// т е список всех собранных строк.

/*Объяснения
4 Создаем функцию для сбора строк из массива и вложенных массивов
5 Создаем пустой список куда будем складывать строки( временный список)
он существует только внутри функции когда ф ция завершает свою работу
она возвращает значение (return myArray2).Вся память  со строками 
передается обратно в место вызова функции
7 Проходим по каждому элементу в нашем большом массиве
8 Берем один элемент
9 ПРоверяем это слово или число
10 если это слово то пушим его в наш список
11 если это массив смотрим внутри его элементы
12 
13 берем один элемент внутри массива
14 Проверяем -это слово?
15 если да то добавляем его в наш список, пушим
16 Возвращаем наш список со всеми словами

getStringFromArray- получит строку из списка
allStrings-все строки
insideArrayItem- внутренний предмет списка
Array.isArray- список является списком( встроенный класс для проверки)


*/

