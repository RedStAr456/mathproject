import MainLayout from '../../layouts/MainLayout'

import '../../styles/lesson.css'

export default function TrigCircle() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">
          <div className="lesson-badge">Тригонометрия</div>

          <h1>Тригонометрическая окружность</h1>

          <p>
            Единичная окружность — основа для определения
            синуса, косинуса, тангенса и котангенса.
          </p>
        </section>

        <section className="lesson-section">
          <h2>Определение функций через окружность</h2>
          <p>
            На единичной окружности радиус равен 1.
            Точка P(x, y) определяет угол α:
          </p>

          <div className="graph-box">
            <svg width="100%" height="350" viewBox="0 0 400 400">

              {/* Ось X */}
              <line x1="200" y1="0" x2="200" y2="400" stroke="#94a3b8" strokeWidth="2" />

              {/* Ось Y */}
              <line x1="0" y1="200" x2="400" y2="200" stroke="#94a3b8" strokeWidth="2" />

              {/* Окружность */}
              <circle cx="200" cy="200" r="150" stroke="#6366f1" strokeWidth="3" fill="none" />

              {/* Прямой угол */}
              <line x1="200" y1="200" x2="350" y2="200" stroke="#f472b6" strokeWidth="2" />
              <line x1="200" y1="200" x2="200" y2="50" stroke="#f472b6" strokeWidth="2" />

              {/* Точка на окружности */}
              <circle cx="350" cy="200" r="6" fill="#facc15" />
              <text x="360" y="200" fontSize="16" fill="#334155">P(x, y)</text>

              {/* Текстовые подписи */}
              <text x="180" y="40" fontSize="16" fill="#334155">α</text>
              <text x="360" y="50" fontSize="16" fill="#334155">y = sin(α)</text>
              <text x="360" y="80" fontSize="16" fill="#334155">x = cos(α)</text>

            </svg>
          </div>

        </section>

        <section className="lesson-section">
          <h2>Основные углы</h2>

          <table className="table-block">
            <tbody>
              <tr className="table-row">
                <td>0°</td><td>0</td><td>1</td>
              </tr>
              <tr className="table-row">
                <td>30°</td><td>1/2</td><td>√3/2</td>
              </tr>
              <tr className="table-row">
                <td>45°</td><td>√2/2</td><td>√2/2</td>
              </tr>
              <tr className="table-row">
                <td>60°</td><td>√3/2</td><td>1/2</td>
              </tr>
              <tr className="table-row">
                <td>90°</td><td>1</td><td>0</td>
              </tr>
            </tbody>
          </table>

        </section>

        <section className="lesson-section">
          <h2>Что нужно запомнить</h2>

          <div className="remember-box">
            <ul>
              <li>Синус — это y координата точки на окружности.</li>
              <li>Косинус — это x координата точки на окружности.</li>
              <li>Тангенс = sin/cos, котангенс = cos/sin.</li>
              <li>Угол измеряется от положительного направления оси X против часовой стрелки.</li>
              <li>Единичная окружность помогает запоминать все формулы.</li>
            </ul>
          </div>
        </section>

      </div>

    </MainLayout>
  )
}