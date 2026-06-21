import MainLayout from '../../layouts/MainLayout'

import '../../styles/lesson.css'

export default function LinearFunction() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Алгебра
          </div>

          <h1>
            Линейная функция
          </h1>

          <p>
            Линейная функция описывает прямую линию
            на координатной плоскости и является одной
            из важнейших функций школьного курса.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Определение
          </h2>

          <p>
            Линейной называется функция вида:
          </p>

          <div className="formula-card-large">
            y = kx + b
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Что означают коэффициенты
          </h2>

          <div className="lesson-grid">

            <div className="lesson-card">

              <h3>
                Коэффициент k
              </h3>

              <div className="mini-formula">
                y = kx + b
              </div>

              <p>
                Определяет наклон прямой.
              </p>

              <p>
                Чем больше k,
                тем круче график.
              </p>

            </div>

            <div className="lesson-card">

              <h3>
                Коэффициент b
              </h3>

              <div className="mini-formula">
                y = kx + b
              </div>

              <p>
                Показывает точку пересечения
                графика с осью Oy.
              </p>

            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            График линейной функции
          </h2>

          <p>
            Графиком линейной функции всегда является прямая.
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
                y1="175"
                x2="580"
                y2="175"
                stroke="#94a3b8"
                strokeWidth="2"
              />

              <line
                x1="80"
                y1="280"
                x2="500"
                y2="80"
                stroke="#6366f1"
                strokeWidth="4"
              />

            </svg>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Возрастание и убывание
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>k {'>'} 0</span>
              <span>Функция возрастает</span>
            </div>

            <div className="table-row">
              <span>k {'<'} 0</span>
              <span>Функция убывает</span>
            </div>

            <div className="table-row">
              <span>k = 0</span>
              <span>Постоянная функция</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Пример построения
          </h2>

          <div className="example-box">

            <h3>
              Построить график
            </h3>

            <div className="mini-formula">
              y = 2x + 1
            </div>

            <p>
              Выберем несколько значений x:
            </p>

            <div className="table-block">

              <div className="table-row">
                <span>x = 0</span>
                <span>y = 1</span>
              </div>

              <div className="table-row">
                <span>x = 1</span>
                <span>y = 3</span>
              </div>

              <div className="table-row">
                <span>x = 2</span>
                <span>y = 5</span>
              </div>

            </div>

            <p style={{ marginTop: '20px' }}>
              Отмечаем точки на координатной плоскости
              и проводим через них прямую.
            </p>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Частные случаи
          </h2>

          <div className="lesson-grid">

            <div className="lesson-card">

              <h3>
                y = kx
              </h3>

              <p>
                Прямая проходит через начало координат.
              </p>

            </div>

            <div className="lesson-card">

              <h3>
                y = b
              </h3>

              <p>
                Горизонтальная прямая.
              </p>

            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Что нужно запомнить
          </h2>

          <div className="remember-box">

            <ul>

              <li>
                Линейная функция имеет вид y = kx + b.
              </li>

              <li>
                График линейной функции — прямая.
              </li>

              <li>
                k отвечает за наклон.
              </li>

              <li>
                b отвечает за пересечение с осью Oy.
              </li>

              <li>
                При k {'>'} 0 функция возрастает.
              </li>

              <li>
                При k {'<'} 0 функция убывает.
              </li>

            </ul>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}