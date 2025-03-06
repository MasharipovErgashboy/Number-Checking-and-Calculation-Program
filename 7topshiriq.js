 // 1. Kiritilgan 2 ta sondan kattasini topish
      function findLarger() {
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        let result = document.getElementById("result1");

        if (num1 === num2) {
          result.innerHTML = "Sonlar teng.";
        } else {
          let larger = num1 > num2 ? num1 : num2;
          result.innerHTML = "Kattasi: " + larger;
        }
      }

      // 2. Raqamning xonali sonini aniqlash
      function checkDigitLength() {
        let number = document.getElementById("singleDigitNumber").value;
        let result = document.getElementById("result2");

        if (number < 10) {
          result.innerHTML = "Bu bir xonali son.";
        } else if (number < 100) {
          result.innerHTML = "Bu ikki xonali son.";
        } else if (number < 1000) {
          result.innerHTML = "Bu uch xonali son.";
        } else if (number < 10000) {
          result.innerHTML = "Bu ko'p xonali son.";
        } else {
          result.innerHTML = "Juda ko'p xonali son.";
        }
      }

      // 3. Musbat sonlar sonini topish
      function countPositive() {
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let c = document.getElementById("c").value;
        let result = document.getElementById("result3");
        let positiveCount = 0;

        if (a > 0) positiveCount++;
        if (b > 0) positiveCount++;
        if (c > 0) positiveCount++;

        result.innerHTML = "Musbat sonlar soni: " + positiveCount;
      }

      // 4. Uchta sondan eng kattasini topish
      function findMax() {
        let numA = document.getElementById("numA").value;
        let numB = document.getElementById("numB").value;
        let numC = document.getElementById("numC").value;
        let result = document.getElementById("result4");

        let largest = Math.max(numA, numB, numC);
        result.innerHTML = "Eng katta son: " + largest;
      }

      // 5. Musbat yoki manfiy sonlarni tekshirish
      function checkPositiveNegative() {
        let number = document.getElementById("inputNumber").value;
        let result = document.getElementById("result5");

        if (number > 0) {
          result.innerHTML = "Musbat son.";
        } else if (number < 0) {
          result.innerHTML = "Manfiy son.";
        } else {
          result.innerHTML = "Bu nol.";
        }
      }

      // 6. 5 ta sondan eng kattasi va eng kichigini topish
      function findMinMax5() {
        let numbers = document.getElementById("fiveNumbers").value.split(",");
        let result = document.getElementById("result6");

        let min = Math.min(...numbers);
        let max = Math.max(...numbers);

        result.innerHTML = "Eng kichigi: " + min + " | Eng kattasi: " + max;
      }

      // 7. Hafta kunini aniqlash
      function checkDay() {
        let day = document.getElementById("dayNumber").value;
        let result = document.getElementById("result7");

        switch (parseInt(day)) {
          case 1:
            result.innerHTML = "Dushanba";
            break;
          case 2:
            result.innerHTML = "Seshanba";
            break;
          case 3:
            result.innerHTML = "Chorshanba";
            break;
          case 4:
            result.innerHTML = "Payshanba";
            break;
          case 5:
            result.innerHTML = "Juma";
            break;
          case 6:
            result.innerHTML = "Shanba";
            break;
          case 7:
            result.innerHTML = "Yakshanba";
            break;
          default:
            result.innerHTML = "Noto'g'ri kun raqami.";
            break;
        }
      }

      // 8. Oy faslini aniqlash
      function findSeason() {
        let month = document.getElementById("monthNumber").value;
        let result = document.getElementById("result8");

        if (month >= 3 && month <= 5) {
          result.innerHTML = "Bahor";
        } else if (month >= 6 && month <= 8) {
          result.innerHTML = "Yoz";
        } else if (month >= 9 && month <= 11) {
          result.innerHTML = "Kuz";
        } else if (month == 12 || month <= 2) {
          result.innerHTML = "Qish";
        } else {
          result.innerHTML = "Noto'g'ri oy raqami.";
        }
      }
