import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Matrices() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Линейная алгебра</div>
          <h1>Матрицы</h1>
          <p>Матрица — это прямоугольная таблица чисел, состоящая из строк и столбцов.</p>
        </section>

        <section className="lesson-section">
          <h2>Пример матрицы 2x3</h2>
          <div className="formula-card-large">
              (1 2 3)<br/>
              (4 5 6) 
          </div>
        </section>

      </div>
    </MainLayout>
  )
}