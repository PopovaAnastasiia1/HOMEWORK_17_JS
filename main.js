let name = prompt('Введіть імʼя студента');
let lastName = prompt("Введіть прізвище студента");
let student = {
  name,
  lastName,
  tabel: {},
};

const addRating = (subject = " ", rating = " ") => {
  let ratingSum = 0;
  let ratingCount = 0;
  let badRatingCount = 0;

  for (; subject; ) {
    subject = prompt("Введіть назву предмету");

    if (!!subject) {
        rating = prompt(`Введіть оцінку з предмету ${subject}`);

      if (!!rating) {
        student.tabel[`${subject}`] = +`${rating}`;
        ratingSum += +`${rating}`;
        ratingCount++;
      } else {
        console.log(
          `Не допускається вказувати назву предмета без оцінки! Спробуйте ще раз`
        );
        return student;
      }
    } else {
      for (rating of Object.values(student.tabel)) {
        if (rating < 4) {
          badRatingCount++;
        }
      }

      if (!!badRatingCount) {
        console.log(
          `${badRatingCount} - кількість оцінок нижче 4 балів. Студент ${student.name} ${student.lastName} має здати предмет(предмети) повторно!!!`
        );
        return student;
      } else if (!badRatingCount && ratingSum / ratingCount > 7) {
        console.log(
          `Студента ${student.name} ${student.lastName} переведено на наступний курс.Призначено стипендію!`
        );
        return student;
      } else if (!badRatingCount) {
        console.log(
          `Оцінок нижче 4 балів немає. Студента ${student.name} ${student.lastName} переведено на наступний курс.`
        );
        return student;
      }
    }
  }

  return student;
};

console.log(addRating());
