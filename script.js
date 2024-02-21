async function startQuest() {
  const app = document.getElementById('app');
 
    app.innerHTML = `
          <div class="con-cross">
              <h2>Задание 1: Исторический кроссворд</h2>
              <p>Разгадайте кроссворд, где каждая загадка связана с историей России.</p>
              
          <table width="1000px" height="500px">
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num">10</td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s10-1" type="text" value="ф"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s10-2" type="text" value="е"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num">11</td>
              <td><input class="s11-1" type="text" value="с"></td>
              <td><input class="s11-2" type="text" value="т"></td>
              <td><input class="s11-3 s10-3" type="text" value="в"></td>
              <td><input class="s11-4" type="text" value="о"></td>
              <td><input class="s11-5" type="text" value="л"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td> <input class="s10-4" type="text" value="р"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num">9</td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num">7</td>
              <td style="opacity: 0%;"></td>
              <td><input class="s10-5" type="text" value="а"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s9-1" type="text" value="к"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num">8</td>
              <td><input class="s8-1 s7-1" type="text" value="к"></td>
              <td><input class="s8-2" type="text" value="о"></td>
              <td><input class="s10-6 s8-3" type="text" value="л"></td>
              <td><input class="s8-4" type="text" value="ь"></td>
              <td><input class="s8-5" type="text" value="ч"></td>
              <td><input class="s8-6" type="text" value="у"></td>
              <td><input class="s8-7" type="text" value="г"></td>
              <td><input class="s8-8 s9-2" type="text" value="а"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s7-2" type="text" value="а"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s10-7" type="text" value="ь"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s9-3" type="text" value="л"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s7-3" type="text" value="с"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num">14</td>
              <td><input class="s9-4 s14-1" type="text" value="а"></td>
              <td><input class="s14-2" type="text" value="р"></td>
              <td><input class="s14-3" type="text" value="м"></td>
              <td><input class="s14-4" type="text" value="и"></td>
              <td><input class="s14-5" type="text" value="я"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num">3</td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s7-4" type="text" value="к"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num">13</td>
              <td style="opacity: 0%;"></td>
              <td><input class="s9-5" type="text" value="ш"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num"">5</td>
              <td><input class="s5-1 s3-1" type="text" value="с"></td>
              <td><input class="s5-2" type="text" value="п"></td>
              <td><input class="s5-3" type="text" value="е"></td>
              <td><input class="s5-4" type="text" value="ц"></td>
              <td><input class="s5-5" type="text" value="н"></td>
              <td><input class="s5-6 s7-5" type="text" value="а"></td>
              <td><input class="s5-7" type="text" value="з"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s13-1" type="text" value="в"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s9-6" type="text" value="н"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num">2</td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s3-2" type="text" value="в"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num">12</td>
              <td><input class="s12-1" type="text" value="р"></td>
              <td><input class="s12-2 s13-2" type="text" value="о"></td>
              <td><input class="s12-3" type="text" value="д"></td>
              <td><input class="s12-4 s9-7" type="text" value="и"></td>
              <td><input class="s12-5" type="text" value="н"></td>
              <td><input class="s12-6" type="text" value="а"></td>
          </tr>
          <tr height="50px">
              <td class="num">1</td>
              <td><input class="s1-1" type="text" value="п"></td>
              <td><input class="s1-2" type="text" value="о"></td>
              <td><input class="s1-3" type="text" value="д"></td>
              <td><input class="s1-4 s2-1" type="text" value="в"></td>
              <td><input class="s1-5" type="text" value="о"></td>
              <td><input class="s1-6" type="text" value="д"></td>
              <td><input class="s1-7" type="text" value="н"></td>
              <td><input class="s1-8 s3-3" type="text" value="и"></td>
              <td><input class="s1-9" type="text" value="к"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s13-3" type="text" value="и"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s9-8" type="text" value="к"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s2-2" type="text" value="с"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s3-4" type="text" value="с"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s13-4" type="text" value="н"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s9-9" type="text" value="о"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s2-3" type="text" value="а"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td class="num">4</td>
              <td><input class="s3-5 s4-1" type="text" value="т"></td>
              <td><input class="s4-2" type="text" value="а"></td>
              <td><input class="s4-3" type="text" value="н"></td>
              <td><input class="s4-4" type="text" value="к"></td>
              <td><input class="s4-5" type="text" value="и"></td>
              <td><input class="s4-6" type="text" value="с"></td>
              <td><input class="s4-7" type="text" value="т"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s9-10" type="text" value="в"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s2-4" type="text" value="д"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s2-5" type="text" value="н"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td class="num">6</td>
              <td><input class="s6-1" type="text" value="т"></td>
              <td><input class="s6-2" type="text" value="р"></td>
              <td><input class="s2-6 s6-3" type="text" value="и"></td>
          </tr>
          <tr height="50px">
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td style="opacity: 0%;"></td>
              <td><input class="s2-7" type="text" value="к"></td>
          </tr>
          </table>
              
              <button onclick="getAnswer()">Проверить</button>

              <div class="question">
              <ul>
                  <li>1) Какой вид вооруженных сил отличается специализацией в подводных операциях?</li>
                  <li>2) 2 головы, 6 ног, 2 руки, 1 хвост. Кто это?</li>
                  <li>3) Главное оружие Соловья-разбойника</li>
                  <li>4) Военный, управляющий боевой машиной с гусеничным ходом.</li>
                  <li>5) Как называется специально обученный отряд для выполнения сложных и опасных заданий?</li>
                  <li>6) Сколько цветов на флаге России?</li>
                  <li>7) Защитный предмет, надеваемый на голову военнослужащих</li>
                  <li>8) Какой доспех из металлических колец использовался в древности для защиты?</li>
                  <li>9) Какая модель автомата широко используется в российской армии?</li>
                  <li>10) В какой месяц отмечается в России в день защитника Отечества?</li>
                  <li>11) Как называется основная часть стрелкового оружия?</li>
                  <li>12) Страна, которую защищают военнослужащие.</li>
                  <li>13) Человек, служащий в армии или участвующий в боевых действиях.</li>
                  <li>14) Военное формирование, объединяющее большое количество военнослужащих.</li>
              </ul>
          </div>
          </div>
            <div class="popup">
                <h2 id="text-con"></h2>
                <button onclick="nextQuest()">Продолжить</button>
            </div>

      


      `;
  }


  let answer = {
    1: "подводник",
    2: "всадник",
    3: "свист",
    4: "танкист",
    5: "спецназ",
    6: "три",
    7: "каска",
    8: "кольчуга",
    9: "калашников",
    10: "февраль",
    11: "ствол",
    12: "родина",
    13: "воин",
    14: "армия"
  }





  function getAnswer(){
    let cur = {}
    for (let i = 1; i <= 14; i++){
      let res = ""
      for (let j = 1; j <=10; j++){
        if (document.querySelector(`.s${i}-${j}`)){
          res += document.querySelector(`.s${i}-${j}`).value
        }
      }
      cur[i] = res.toLowerCase()
    }
    checkAnswer(cur)
  }
  

  function checkAnswer(obj){
    let count = 0;
    for(let i = 1; i <= 14; i++){
      if (obj[i] == answer[i]){
        console.log(obj[i], answer[i])
        count++
      } 
      else continue 
    }
    let popup = document.querySelector('.popup');
    popup.style.display = 'block'
    let text = document.getElementById('text-con');
    text.textContent = (count + " правильных ответов")
    
  }









  
  function nextQuest() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="container">
        <h2>Задание 2: По следам героев</h2>
        <p>Пройдите через "следы" героев, чтобы найти скрытые сообщения.</p>
        <div class="con-img">
            <img src="./img/pngwing.com (1).png" id="step1" srcset="">
            <img src="./img/pngwing.com (1).png" id="step2" srcset="">
            <img src="./img/pngwing.com (1).png" id="step3" srcset="">
            <img src="./img/pngwing.com (1).png" id="step4" srcset="">
            <img src="./img/pngwing.com (1).png" id="step5" srcset="">
            <img src="./img/pngwing.com (1).png" id="step6" srcset="">
        </div>
        
        <p>Введите кодовое слово</p>
        <p>Открытые буквы:</p>
        <ul id="letter">
            
        </ul>
        <input type="text" id="word">

        <button id="checkAnswer">Перейти к следующему заданию</button>
        <div class="popup">
                <h2 id="text-con"></h2>
                <input type="text" id="answer">
                <button id="questBtn">Ответить</button>
        </div>
      </div>
    `;
    let steps = document.querySelectorAll(".con-img img")
    let click = function(e){
        viewQuestion(e.target.id)

    }


    let questBtn = document.querySelector("#checkAnswer")
    questBtn.addEventListener("click", (e)=>{
        let curAnswer = document.querySelector("#word")
        if (curAnswer.value.toLowerCase() == "звезда"){
            alert("Праильно! Вы успешно завершили задание")
        } 
        else{
            alert("Упс! Неверно")
        }
    })

    for (elem of steps){
        elem.addEventListener("click", click)
    }

    let question = {
        step1: {
            question: "В бою неустанный, в деле неуклонный, на подвиги готовый. Кто он?",
            answer: "солдат",
            letter: "А"
        },
        step2: {
            question: "Он стреляет безотказно, и любой простой солдат управляет им прекрасно. Что же это?",
            answer: "автомат",
            letter: "В"
        }, 
        step3: {
            question: "Морское дело изучает когда-то станет моряком. Хоть он пока еще подросток, но с кораблем давно знаком.",
            answer: "юнга",
            letter: "Д"
        }, 
        step4: {
            question: "Когда звучит он — все стоят по стойке смирно на плацу. И гордость наполняет взгляд, Которая бойцам к лицу.",
            answer: "гимн",
            letter: "З"
        },   
        step5: {
            question: "Есть она у генерала, у солдата тоже есть, отдают ее друг другу. Что это такое?",
            answer: "честь",
            letter: "З"
        }, 
        step6: {
            question: "Стреляют наши пушки очень метко. О целях доложила нам",
            answer: "разведка",
            letter: "Е"
        }, 
     
    }
    let popup = document.querySelector(".popup")


    let btnFunc = function(e){
    checkAnswer(e.target.myParameter)
    }
    function viewQuestion(id){    
        popup.style.display = "block";
        let popupQuestion = document.querySelector("#text-con")
        popupQuestion.textContent = ""
        popupQuestion.textContent = question[id]["question"]
        let btn = document.querySelector("#questBtn")
        btn.addEventListener("click", btnFunc)
        btn.myParameter = id       
    }

    function checkAnswer(id){
        let curAnswer = document.querySelector("#answer")
    
        if (curAnswer.value == question[id]["answer"]){
            curAnswer.value = ""
            alert("Правильно")
            popup.style.display = "none"
            let letter = document.createElement("li")
            letter.textContent = question[id]["letter"]

            let letterMomy = document.querySelector("#letter")
            letterMomy.appendChild(letter)

            let remove = document.querySelector(`#${id}`)
            remove.removeEventListener("click", click)

            let btn = document.querySelector("#questBtn")
            btn.removeEventListener('click', btnFunc)
        
        } 
        else{
          alert("Неправильно")  
        
        } 
    }
  }
  
  // function nextTask() {
  //   const app = document.getElementById('app');
  //   app.innerHTML = `
  //     <div class="container">
  //       <h2>Задание 3: Викторина "Знаток истории"</h2>
  //       <p>Ответьте на вопросы о военной истории России.</p>
  //       <!-- Добавьте викторину с вопросами и вариантами ответов -->
  //       <button onclick="finalTask()">Перейти к финальному заданию</button>
  //     </div>
  //   `;
  // }
  
  // function finalTask() {
  //   const app = document.getElementById('app');
  //   app.innerHTML = `
  //     <div class="container">
  //       <h2>Финальное задание: Создание открытки</h2>
  //       <p>Создайте виртуальную открытку на тему 23 февраля.</p>
  //       <!-- Добавьте форму для создания открытки -->
  //       <button onclick="finishQuest()">Завершить квест</button>
  //     </div>
  //   `;
  // }
  
  // function finishQuest() {
  //   const app = document.getElementById('app');
  //   app.innerHTML = `
  //     <div class="container">
  //       <h2>Поздравляем!</h2>
  //       <p>Вы успешно завершили квест "23 февраля: Путь за памятью".</p>
  //       <p>Поделитесь своим результатом с друзьями!</p>
  //     </div>
  //   `;
  // }