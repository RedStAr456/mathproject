import MainLayout from '../../layouts/MainLayout'

import '../../styles/lesson.css'

export default function QuadraticFunction() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Алгебра
          </div>

          <h1>
            Квадратичная функция
          </h1>

          <p>
            Квадратичная функция является одной из самых
            важных функций школьной математики.
            Её график называется параболой.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Определение
          </h2>

          <p>
            Квадратичной называется функция вида:
          </p>

          <div className="formula-card-large">
            y = ax² + bx + c
          </div>

          <p>
            где a ≠ 0.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Коэффициенты
          </h2>

          <div className="lesson-grid">

            <div className="lesson-card">

              <h3>a</h3>

              <p>
                Определяет направление ветвей
                и степень растяжения параболы.
              </p>

            </div>

            <div className="lesson-card">

              <h3>b</h3>

              <p>
                Влияет на положение вершины
                относительно оси Oy.
              </p>

            </div>

            <div className="lesson-card">

              <h3>c</h3>

              <p>
                Показывает точку пересечения
                графика с осью Oy.
              </p>

            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            График функции
          </h2>

          <p>
            Графиком квадратичной функции является парабола.
          </p>

          <div className="graph-box">

            <svg
              width="100%"
              height="350"
              viewBox="0 0 600 350"
            >

              <line
                x1="300"
                y1="20"
                x2="300"
                y2="330"
                stroke="#94a3b8"
                strokeWidth="2"
              />

              <line
                x1="20"
                y1="280"
                x2="580"
                y2="280"
                stroke="#94a3b8"
                strokeWidth="2"
              />

              <path
                d="M120 280 Q300 40 480 280"
                fill="none"
                stroke="#6366f1"
                strokeWidth="4"
              />

            </svg>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Направление ветвей
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>a {'>'} 0</span>
              <span>Ветви вверх</span>
            </div>

            <div className="table-row">
              <span>a {'<'} 0</span>
              <span>Ветви вниз</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Вершина параболы
          </h2>

          <p>
            Координаты вершины:
          </p>

          <div className="formula-card-large">
            x₀ = -b / 2a
          </div>

          <p>
            После нахождения x₀
            подставляем его в функцию
            и получаем y₀.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Ось симметрии
          </h2>

          <div className="formula-card-large">
            x = -b / 2a
          </div>

          <p>
            Парабола всегда симметрична
            относительно этой прямой.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Пример
          </h2>

          <div className="example-box">

            <h3>
              Найти вершину
            </h3>

            <div className="mini-formula">
              y = x² - 4x + 3
            </div>

            <p>
              a = 1
            </p>

            <p>
              b = -4
            </p>

            <div className="mini-formula">
              x₀ = -(-4)/(2·1)
            </div>

            <div className="mini-formula">
              x₀ = 2
            </div>

            <div className="mini-formula">
              y₀ = -1
            </div>

            <p>
              Вершина: (2 ; -1)
            </p>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Что нужно запомнить
          </h2>

          <div className="remember-box">

            <ul>

              <li>
                График квадратичной функции — парабола.
              </li>

              <li>
                При a {'>'} 0 ветви направлены вверх.
              </li>

              <li>
                При a {'<'} 0 ветви направлены вниз.
              </li>

              <li>
                Вершина находится по формуле
                x₀ = -b/(2a).
              </li>

              <li>
                Ось симметрии проходит через вершину.
              </li>

            </ul>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}