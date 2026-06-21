import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function MatrixOperations() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Линейная алгебра</div>
          <h1>Операции над матрицами</h1>
        </section>

        <section className="lesson-section">
          <h2>Сложение матриц</h2>
          <div className="formula-card-large">
            A + B = [aᵢⱼ + bᵢⱼ]
          </div>
        </section>

        <section className="lesson-section">
          <h2>Умножение на число</h2>
          <div className="formula-card-large">
            k·A = [k·aᵢⱼ]
          </div>
        </section>

        <section className="lesson-section">
          <h2>Транспонирование</h2>
          <div className="formula-card-large">
            Aᵀ = [aⱼᵢ]
          </div>
        </section>

      </div>
    </MainLayout>
  )
}