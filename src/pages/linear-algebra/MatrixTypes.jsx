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
            ㅤㅤㅤ(1 0)<br/>
            E₂ =  (0 1) <br/>
            ㅤединичная матрица
          </div>

          <div className="formula-card-large">
            ㅤㅤㅤㅤ(0 0 0)<br/>
            ㅤ0₃ =ㅤ (0 0 0)<br/>
            ㅤㅤㅤㅤ(0 0 0)<br/>
            ㅤнулевая матрица
          </div>
        </section>

      </div>
    </MainLayout>
  )
}