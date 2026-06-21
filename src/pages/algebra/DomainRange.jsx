import MainLayout from '../../layouts/MainLayout'

import '../../styles/lesson.css'

export default function DomainRange() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Алгебра
          </div>

          <h1>
            Область определения и область значений
          </h1>

          <p>
            Перед исследованием любой функции необходимо
            определить, какие значения аргумента допустимы
            и какие значения может принимать функция.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Область определения
          </h2>

          <p>
            Область определения — множество всех допустимых
            значений аргумента x.
          </p>

          <div className="formula-card-large">
            D(f)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Когда появляются ограничения?
          </h2>

          <div className="lesson-grid">

            <div className="lesson-card">

              <h3>
                Деление на ноль
              </h3>

              <div className="mini-formula">
                y = 1/x
              </div>

              <p>
                x ≠ 0
              </p>

            </div>

            <div className="lesson-card">

              <h3>
                Корень чётной степени
              </h3>

              <div className="mini-formula">
                y = √x
              </div>

              <p>
                x ≥ 0
              </p>

            </div>

            <div className="lesson-card">

              <h3>
                Логарифм
              </h3>

              <div className="mini-formula">
                y = log(x)
              </div>

              <p>
                x {'>'} 0
              </p>

            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Примеры поиска области определения
          </h2>

          <div className="example-box">

            <h3>
              Пример 1
            </h3>

            <div className="mini-formula">
              y = 5x² + 1
            </div>

            <p>
              Ограничений нет.
            </p>

            <p>
              D(f)=(-∞;+∞)
            </p>

          </div>

          <div className="example-box">

            <h3>
              Пример 2
            </h3>

            <div className="mini-formula">
              y = 1/(x-4)
            </div>

            <p>
              x ≠ 4
            </p>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Область значений
          </h2>

          <p>
            Область значений —
            множество всех возможных значений функции.
          </p>

          <div className="formula-card-large">
            E(f)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Примеры области значений
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>y=x</span>
              <span>(-∞;+∞)</span>
            </div>

            <div className="table-row">
              <span>y=x²</span>
              <span>[0;+∞)</span>
            </div>

            <div className="table-row">
              <span>y=sin(x)</span>
              <span>[-1;1]</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Что нужно запомнить
          </h2>

          <div className="remember-box">

            <ul>
              <li>Всегда ищи ограничения первым делом.</li>

              <li>Нельзя делить на ноль.</li>

              <li>Подкоренное выражение чётного корня должно быть неотрицательным.</li>

              <li>Аргумент логарифма должен быть положительным.</li>

              <li>D(f) — область определения.</li>

              <li>E(f) — область значений.</li>

            </ul>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}