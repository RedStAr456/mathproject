import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function GeometricProgression() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Алгебра
          </div>

          <h1>
            Геометрическая прогрессия
          </h1>

          <p>
            Последовательность, в которой каждый следующий
            член получается умножением на одно и то же число.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Определение
          </h2>

          <div className="formula-card-large">
            bₙ₊₁ = bₙ · q
          </div>

          <p>
            q — знаменатель прогрессии.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Формула n-го члена
          </h2>

          <div className="formula-card-large">
            bₙ = b₁ · qⁿ⁻¹
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Сумма первых n членов
          </h2>

          <div className="formula-card-large">
            Sₙ = b₁(qⁿ − 1)/(q − 1)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Пример
          </h2>

          <div className="example-box">

            <div className="mini-formula">
              2, 6, 18, 54...
            </div>

            <p>
              q = 3
            </p>

            <p>
              b₅ = 162
            </p>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}