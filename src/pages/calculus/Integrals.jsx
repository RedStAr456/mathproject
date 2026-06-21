import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Integrals() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Матанализ
          </div>

          <h1>
            Интегралы
          </h1>

          <p>
            Интеграл является обратной операцией
            к производной.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Неопределённый интеграл
          </h2>

          <div className="formula-card-large">
            ∫f(x)dx
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Таблица интегралов
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>∫dx</span>
              <span>x + C</span>
            </div>

            <div className="table-row">
              <span>∫xⁿdx</span>
              <span>xⁿ⁺¹/(n+1)+C</span>
            </div>

            <div className="table-row">
              <span>∫sinx dx</span>
              <span>-cosx + C</span>
            </div>

            <div className="table-row">
              <span>∫cosx dx</span>
              <span>sinx + C</span>
            </div>

            <div className="table-row">
              <span>∫eˣ dx</span>
              <span>eˣ + C</span>
            </div>

            <div className="table-row">
              <span>∫1/x dx</span>
              <span>ln|x| + C</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Определённый интеграл
          </h2>

          <div className="formula-card-large">
            ∫[a,b] f(x)dx
          </div>

          <p>
            Геометрический смысл —
            площадь под графиком функции.
          </p>

        </section>

      </div>

    </MainLayout>
  )
}