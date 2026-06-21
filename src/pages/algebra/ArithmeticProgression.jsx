import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function ArithmeticProgression() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Алгебра
          </div>

          <h1>
            Арифметическая прогрессия
          </h1>

          <p>
            Последовательность, в которой каждый следующий
            член отличается от предыдущего на одно и то же число.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Определение
          </h2>

          <div className="formula-card-large">
            aₙ₊₁ = aₙ + d
          </div>

          <p>
            d — разность прогрессии.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Формула n-го члена
          </h2>

          <div className="formula-card-large">
            aₙ = a₁ + (n − 1)d
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Сумма первых n членов
          </h2>

          <div className="formula-card-large">
            Sₙ = (a₁ + aₙ)n / 2
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Пример
          </h2>

          <div className="example-box">

            <div className="mini-formula">
              2, 5, 8, 11...
            </div>

            <p>
              d = 3
            </p>

            <p>
              a₅ = 2 + 4·3 = 14
            </p>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}