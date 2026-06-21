import MainLayout from '../../layouts/MainLayout'
import '../../styles/lesson.css'

export default function Sinus() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Тригонометрия</div>

          <h1>Синус</h1>

          <p>
            Функция синуса показывает вертикальную координату точки на единичной окружности.
          </p>
        </section>

        <section className="lesson-section">
          <h2>Определение</h2>
          <p>
            Для угла α на единичной окружности:
          </p>
          <div className="formula-card-large">
            y = sin(α)
          </div>
        </section>

        <section className="lesson-section">
          <h2>Свойства</h2>
          <ul>
            <li>-1 ≤ sin(α) ≤ 1</li>
            <li>sin(0) = 0, sin(90°) = 1, sin(180°) = 0, sin(270°) = -1</li>
            <li>Функция периодическая с периодом 2π</li>
            <li>sin(-α) = -sin(α)</li>
          </ul>
        </section>

        <section className="lesson-section">
          <h2>График синуса</h2>

          <div className="graph-box">
            <svg width="100%" height="300" viewBox="0 0 600 300">
              <line x1="0" y1="150" x2="600" y2="150" stroke="#94a3b8" strokeWidth="2"/>
              <line x1="50" y1="0" x2="50" y2="300" stroke="#94a3b8" strokeWidth="2"/>
              <path d="M50 150 
                       C 100 50, 150 50, 200 150 
                       C 250 250, 300 250, 350 150
                       C 400 50, 450 50, 500 150" 
                    stroke="#6366f1" fill="none" strokeWidth="3"/>
            </svg>
          </div>
        </section>

        <section className="lesson-section">
          <h2>Таблица значений</h2>
          <table className="table-block">
            <tbody>
              <tr className="table-row">
                <td>0°</td><td>0</td>
              </tr>
              <tr className="table-row">
                <td>30°</td><td>1/2</td>
              </tr>
              <tr className="table-row">
                <td>45°</td><td>√2/2</td>
              </tr>
              <tr className="table-row">
                <td>60°</td><td>√3/2</td>
              </tr>
              <tr className="table-row">
                <td>90°</td><td>1</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="lesson-section">
          <h2>Что нужно запомнить</h2>
          <div className="remember-box">
            <ul>
              <li>sin(α) — вертикальная координата на единичной окружности</li>
              <li>Функция периодическая с периодом 2π</li>
              <li>Максимум 1, минимум -1</li>
              <li>sin(-α) = -sin(α)</li>
            </ul>
          </div>
        </section>

      </div>

    </MainLayout>
  )
}