import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Formulas() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Тригонометрия
          </div>

          <h1>
            Основные формулы
          </h1>

          <p>
            Формулы, которые необходимо знать
            для ЕГЭ и школьного курса.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Основное тригонометрическое тождество
          </h2>

          <div className="formula-card-large">
            sin²x + cos²x = 1
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Тангенс и котангенс
          </h2>

          <div className="formula-card-large">
            tg(x)=sin(x)/cos(x)
          </div>

          <div className="formula-card-large">
            ctg(x)=cos(x)/sin(x)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Формулы двойного угла
          </h2>

          <div className="formula-card-large">
            sin(2x)=2sin(x)cos(x)
          </div>

          <div className="formula-card-large">
            cos(2x)=cos²(x)-sin²(x)
          </div>

        </section>

      </div>

    </MainLayout>
  )
}