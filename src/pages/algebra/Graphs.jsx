import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Graphs() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Алгебра
          </div>

          <h1>
            Графики функций
          </h1>

          <p>
            График функции позволяет визуально увидеть
            зависимость между переменными.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Что такое график
          </h2>

          <p>
            График функции —
            множество точек координатной плоскости,
            координаты которых удовлетворяют уравнению функции.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Линейная функция
          </h2>

          <div className="formula-card-large">
            y = kx + b
          </div>

          <p>
            График — прямая.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Квадратичная функция
          </h2>

          <div className="formula-card-large">
            y = ax² + bx + c
          </div>

          <p>
            График — парабола.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Построение графика
          </h2>

          <div className="remember-box">

            <ol>
              <li>Составить таблицу значений.</li>
              <li>Отметить точки.</li>
              <li>Соединить точки.</li>
              <li>Проанализировать график.</li>
            </ol>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Что нужно запомнить
          </h2>

          <div className="remember-box">

            <ul>

              <li>
                График помогает исследовать функцию.
              </li>

              <li>
                Линейная функция задаёт прямую.
              </li>

              <li>
                Квадратичная функция задаёт параболу.
              </li>

              <li>
                Для построения достаточно нескольких точек.
              </li>

            </ul>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}