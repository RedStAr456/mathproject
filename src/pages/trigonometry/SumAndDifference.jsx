import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function SumAndDifference() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Тригонометрия
          </div>

          <h1>
            Формулы суммы и разности
          </h1>

        </section>

        <section className="lesson-section">

          <h2>
            Синус суммы
          </h2>

          <div className="formula-card-large">
            sin(a+b)=sin(a)cos(b)+cos(a)sin(b)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Синус разности
          </h2>

          <div className="formula-card-large">
            sin(a−b)=sin(a)cos(b)−cos(a)sin(b)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Косинус суммы
          </h2>

          <div className="formula-card-large">
            cos(a+b)=cos(a)cos(b)−sin(a)sin(b)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Косинус разности
          </h2>

          <div className="formula-card-large">
            cos(a−b)=cos(a)cos(b)+sin(a)sin(b)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Тангенс суммы
          </h2>

          <div className="formula-card-large">
            tg(a+b)=
            (tg(a)+tg(b))
            /
            (1−tg(a)tg(b))
          </div>

        </section>

      </div>

    </MainLayout>
  )
}