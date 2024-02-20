async function startQuest() {
  const app = document.getElementById('app');
  const response = await fetch('./table.html');
  if (response.ok) {
      const crossHTML = await response.text();
      app.innerHTML = `
          <div class="container">
              <h2>Задание 1: Исторический кроссворд</h2>
              <p>Разгадайте кроссворд, где каждая загадка связана с историей России.</p>
              ${crossHTML} <!-- Вставляем содержимое файла -->
              
              <button onclick="taskCompleted()">Перейти к следующему заданию</button>
          </div>
      `;
  } else {
      console.error('Ошибка загрузки файла table.html');
  }
}
startQuest()
  
  function taskCompleted() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="container">
        <h2>Задание 2: По следам героев</h2>
        <p>Пройдите через "следы" героев, чтобы найти скрытые сообщения.</p>
        <!-- Добавьте интерактивные элементы для этого задания -->
        <button onclick="nextTask()">Перейти к следующему заданию</button>
      </div>
    `;
  }
  
  function nextTask() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="container">
        <h2>Задание 3: Викторина "Знаток истории"</h2>
        <p>Ответьте на вопросы о военной истории России.</p>
        <!-- Добавьте викторину с вопросами и вариантами ответов -->
        <button onclick="finalTask()">Перейти к финальному заданию</button>
      </div>
    `;
  }
  
  function finalTask() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="container">
        <h2>Финальное задание: Создание открытки</h2>
        <p>Создайте виртуальную открытку на тему 23 февраля.</p>
        <!-- Добавьте форму для создания открытки -->
        <button onclick="finishQuest()">Завершить квест</button>
      </div>
    `;
  }
  
  function finishQuest() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="container">
        <h2>Поздравляем!</h2>
        <p>Вы успешно завершили квест "23 февраля: Путь за памятью".</p>
        <p>Поделитесь своим результатом с друзьями!</p>
      </div>
    `;
  }