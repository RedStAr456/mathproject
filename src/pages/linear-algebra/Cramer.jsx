import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Cramer() {
  return (
    <MainLayout>
      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Линейная алгебра</div>
          <h1>Метод Крамера</h1>
          <p>Решение системы 3 переменных с помощью определителей.</p>
        </section>

        <section className="lesson-section">
          <h2>Исходная система</h2>
          <div className="example-box">
            <div className="mini-formula">x + y + z = 6</div>
            <div className="mini-formula">2x - y + z = 5</div>
            <div className="mini-formula">x + 2y - z = 1</div>
          </div>
        </section>

        <section className="lesson-section">
          <h2>Основнаой определитель </h2>
          <div className="formula-card-large">
            | 1  1  1 |<br/>
            | 2 -1  1 |<br/>
            | 1  2 -1 |
          </div>
          <div className="formula-card-large">det(A) = 3</div>
        </section>

        <section className="lesson-section">
          <h2>Определитель для x</h2>
          <div className="formula-card-large">
            | 6  1  1 |<br/>
            | 5 -1  1 |<br/>
            | 1  2 -1 |
          </div>
          <div className="formula-card-large">det(Ax) = 6</div>
        </section>

        <section className="lesson-section">
          <h2>Определитель для y</h2>
          <div className="formula-card-large">
            | 1  6  1 |<br/>
            | 2  5  1 |<br/>
            | 1  1 -1 |
          </div>
          <div className="formula-card-large">det(Ay) = 3</div>
        </section>

        <section className="lesson-section">
          <h2>Определитель z</h2>
          <div className="formula-card-large">
            | 1  1  6 |<br/>
            | 2 -1  5 |<br/>
            | 1  2  1 |
          </div>
          <div className="formula-card-large">det(Az) = 9</div>
        </section>

        <section className="lesson-section">
          <h2>Решение</h2>
          <div className="formula-card-large">x = 6 / 3 = 2</div>
          <div className="formula-card-large">y = 3 / 3 = 1</div>
          <div className="formula-card-large">z = 9 / 3 = 3</div>
        </section>

      </div>
    </MainLayout>
  )
}