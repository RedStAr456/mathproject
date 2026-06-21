import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Cotangent() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Тригонометрия
          </div>

          <h1>
            Котангенс
          </h1>

          <p>
            Котангенс является обратным отношением
            тангенса.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Определение
          </h2>

          <div className="formula-card-large">
            ctg(x)=cos(x)/sin(x)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Область определения
          </h2>

          <div className="formula-card-large">
            x ≠ πk
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Основные значения
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>30°</span>
              <span>√3</span>
            </div>

            <div className="table-row">
              <span>45°</span>
              <span>1</span>
            </div>

            <div className="table-row">
              <span>60°</span>
              <span>√3/3</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Свойства
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>Период</span>
              <span>π</span>
            </div>

            <div className="table-row">
              <span>Нечётность</span>
              <span>ctg(-x)=-ctg(x)</span>
            </div>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}