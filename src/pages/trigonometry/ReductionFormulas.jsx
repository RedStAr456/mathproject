import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function ReductionFormulas() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Тригонометрия
          </div>

          <h1>
            Формулы приведения
          </h1>

          <p>
            Формулы приведения позволяют переходить
            от сложных углов к табличным значениям.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Главное правило
          </h2>

          <div className="remember-box">

            <ul>

              <li>
                π → функция меняется
              </li>

              <li>
                π/2 → функция меняется на соседнюю
              </li>

              <li>
                знак определяется четвертью
              </li>

            </ul>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Формулы с π − α
          </h2>

          <div className="formula-card-large">
            sin(π−α)=sinα
          </div>

          <div className="formula-card-large">
            cos(π−α)=−cosα
          </div>

          <div className="formula-card-large">
            tg(π−α)=−tgα
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Формулы с π + α
          </h2>

          <div className="formula-card-large">
            sin(π+α)=−sinα
          </div>

          <div className="formula-card-large">
            cos(π+α)=−cosα
          </div>

          <div className="formula-card-large">
            tg(π+α)=tgα
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Формулы с π/2 ± α
          </h2>

          <div className="formula-card-large">
            sin(π/2−α)=cosα
          </div>

          <div className="formula-card-large">
            cos(π/2−α)=sinα
          </div>

          <div className="formula-card-large">
            tg(π/2−α)=ctgα
          </div>

        </section>

      </div>

    </MainLayout>
  )
}