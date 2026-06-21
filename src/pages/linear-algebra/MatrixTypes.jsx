import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function MatrixTypes() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Линейная алгебра</div>
          <h1>Виды матриц</h1>
          <p>Квадратные, нулевые, единичные, диагональные, симметричные</p>
        </section>

        <section className="lesson-section">
          <div className="formula-card-large">
                 (1 0)<br/>
            E₂ = (0 1) <br/>
              единичная матрица
          </div>

          <div className="formula-card-large">
                  (0 0 0)<br/>
             0₃ = (0 0 0)<br/>
                  (0 0 0)<br/>
              нулевая матрица
          </div>
        </section>

      </div>
    </MainLayout>
  )
}