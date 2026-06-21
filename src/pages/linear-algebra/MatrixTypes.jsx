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
            E₂ = [ [1,0], [0,1] ] (единичная матрица)
          </div>

          <div className="formula-card-large">
            0₃ = [ [0,0,0], [0,0,0], [0,0,0] ] (нулевая матрица)
          </div>
        </section>

      </div>
    </MainLayout>
  )
}