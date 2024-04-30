// // First task

// let age = +prompt('Введите Ваш возраст');

// if (isNaN(age) || age <= 0) {
//     alert('Нуль нельзя и буквы тоже =)');
// } else{
//   if (age <= 18) { 
//     alert('Покинь страницу и пора в школу');
//   } else if (age <=50) {
//     alert('Нужно больше золота');
//   } else if (age <= 59) {
//     alert('На зиккурат осталось совсем чутка золота');
//   } else if (age <= 100) {
//     alert('Носок Ваш, Добби');
//   } else {
//     alert('Фатальная ошибка, Вы мертвец');
//   }
// }

// Second task

// let time = +prompt('Введите время');
// switch (true) {
//     case (isNaN(time)):
//         alert('Давай без букв');
//         break;
//     case (time ==1):
//         alert(time + ' ' + 'час ночи' );
//         break;
//     case (time >= 1 && time <=3):
//         alert(time + ' ' + 'часа ночи' );
//         break;
//     case (time == 4):
//         alert(time + ' ' + 'часа утра' );
//         break;
//     case ((time == 5 || time <=11) && time != 0):
//         alert(time + ' ' + 'часов утра' );
//         break;
//     case (time == 12):
//         alert('ПОЛДЕНЬ');
//         break;
//     case (time == 13):
//         alert((time - 12) + ' ' + 'час дня' );
//         break;
//     case (time >= 14 && time <=16):
//         alert((time - 12) + ' ' + 'часа дня' );
//         break;
//     case (time == 17):
//         alert((time - 12) + ' ' + 'часов дня' );
//         break;
//     case (time >= 18 && time <=23):
//         alert((time - 12) + ' ' + 'часов вечера' );
//         break;
//     case (time == 0 || time == 24):
//         alert('ПОЛНОЧЬ' );
//     case (time > 24):
//         alert('Нормально время вводи' );
        
//         break;
// }

// Third task

// const num1 = +prompt('Первое число');
// const num2 = +prompt('Второе число');
// const num3 = +prompt('Третье число');

// if (isNaN(num1) || isNaN(num2) || isNaN (num3)){
//     alert('Давай без букв');
// }else{
//     if (num2 < num1 && num1 < num3 || num3 < num1 && num1 < num2) {
//         alert(num1);
//     }else if (num1 < num2 && num2 > num3 || num3 < num2 && num2 < num1) {
//         alert(num2);
//     }else if (num1 < num3 && num3 > num2 || num3 > num2 && num3 < num1) {
//         alert(num3);
//     }else{
//         console.error('ERRRRRROR');
//     }
// }   
