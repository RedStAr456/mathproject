import MainLayout from '../../layouts/MainLayout'

import '../../styles/subjects.css'
import '../../styles/lesson.css'

export default function Functions() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Алгебра
          </div>

          <h1>
            Функции
          </h1>

          <p>
            Функция — одно из важнейших понятий математики.
            Она описывает зависимость одной величины от другой
            и используется практически во всех разделах науки.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Определение функции
          </h2>

          <p>
            Функцией называется правило,
            которое каждому значению переменной x
            ставит в соответствие единственное значение y.
          </p>

          <div className="formula-card-large">
            y = f(x)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Аргумент и значение функции
          </h2>

          <div className="lesson-grid">

            <div className="lesson-card">

              <h3>
                Аргумент
              </h3>

              <div className="mini-formula">
                x
              </div>

              <p>
                Независимая переменная,
                значение которой выбирается произвольно.
              </p>

            </div>

            <div className="lesson-card">

              <h3>
                Значение функции
              </h3>

              <div className="mini-formula">
                y
              </div>

              <p>
                Результат,
                который вычисляется по правилу функции.
              </p>

            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Пример функции
          </h2>

          <div className="formula-card-large">
            y = 2x + 3
          </div>

          <div className="example-box">

            <h3>
              Вычислим значения
            </h3>

            <ul>
              <li>x = 0 → y = 3</li>
              <li>x = 1 → y = 5</li>
              <li>x = 2 → y = 7</li>
            </ul>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Способы задания функции
          </h2>

          <div className="lesson-grid">

            <div className="lesson-card">
              <h3>Формулой</h3>

              <p>
                Наиболее распространённый способ.
              </p>

              <div className="mini-formula">
                y = x²
              </div>
            </div>

            <div className="lesson-card">
              <h3>Таблицей</h3>

              <p>
                Значения задаются набором чисел.
              </p>
            </div>

            <div className="lesson-card">
              <h3>Графиком</h3>

              <p>
                Зависимость изображается на координатной плоскости.
              </p>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Область определения
          </h2>

          <p>
            Область определения —
            множество всех допустимых значений аргумента.
          </p>

          <div className="formula-card-large">
            D(f)
          </div>

          <div className="example-box">

            <h3>
              Пример
            </h3>

            <div className="mini-formula">
              y = 1/x
            </div>

            <p>
              x ≠ 0
            </p>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Область значений
          </h2>

          <p>
            Множество всех значений,
            которые принимает функция.
          </p>

          <div className="formula-card-large">
            E(f)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Основные типы функций
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>Линейная</span>
              <span>y = kx + b</span>
            </div>

            <div className="table-row">
              <span>Квадратичная</span>
              <span>y = ax² + bx + c</span>
            </div>

            <div className="table-row">
              <span>Степенная</span>
              <span>y = xⁿ</span>
            </div>

            <div className="table-row">
              <span>Показательная</span>
              <span>y = aˣ</span>
            </div>

            <div className="table-row">
              <span>Логарифмическая</span>
              <span>y = logₐx</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Что нужно запомнить
          </h2>

          <div className="remember-box">

            <ul>
              <li>Функция связывает x и y.</li>
              <li>Каждому x соответствует только одно y.</li>
              <li>D(f) — область определения.</li>
              <li>E(f) — область значений.</li>
              <li>Функции можно задавать формулой, таблицей и графиком.</li>
            </ul>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}