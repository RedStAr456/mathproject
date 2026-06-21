import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Extrema() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Матанализ
          </div>

          <h1>
            Исследование функции
          </h1>

        </section>

        <section className="lesson-section">

          <h2>
            Алгоритм исследования
          </h2>

          <div className="remember-box">

            <ol>

              <li>Найти область определения.</li>

              <li>Найти производную.</li>

              <li>Найти критические точки.</li>

              <li>Определить интервалы возрастания.</li>

              <li>Найти экстремумы.</li>

              <li>Найти вторую производную.</li>

              <li>Исследовать выпуклость.</li>

              <li>Найти точки перегиба.</li>

              <li>Построить график.</li>

            </ol>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}