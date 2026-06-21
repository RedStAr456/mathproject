import MainLayout from '../../layouts/MainLayout'

import '../../styles/lesson.css'

export default function Equations() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Алгебра
          </div>

          <h1>
            Уравнения
          </h1>

          <p>
            Уравнение — равенство,
            содержащее неизвестную переменную.
            Решить уравнение означает найти все значения
            переменной, при которых равенство становится верным.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Что такое корень уравнения
          </h2>

          <p>
            Корнем называется значение переменной,
            которое обращает уравнение в верное равенство.
          </p>

          <div className="formula-card-large">
            x + 5 = 9
          </div>

          <p>
            x = 4 является корнем.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Линейные уравнения
          </h2>

          <div className="formula-card-large">
            ax + b = 0
          </div>

          <div className="example-box">

            <h3>
              Пример
            </h3>

            <div className="mini-formula">
              3x - 12 = 0
            </div>

            <p>
              3x = 12
            </p>

            <p>
              x = 4
            </p>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Квадратные уравнения
          </h2>

          <div className="formula-card-large">
            ax² + bx + c = 0
          </div>

          <p>
            где a ≠ 0.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Дискриминант
          </h2>

          <div className="formula-card-large">
            D = b² - 4ac
          </div>

          <div className="table-block">

            <div className="table-row">
              <span>D {'>'} 0</span>
              <span>Два корня</span>
            </div>

            <div className="table-row">
              <span>D = 0</span>
              <span>Один корень</span>
            </div>

            <div className="table-row">
              <span>D {'<'} 0</span>
              <span>Корней нет</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Формула корней
          </h2>

          <div className="formula-card-large">
            x₁,₂ = (-b ± √D) / 2a
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Решение квадратного уравнения
          </h2>

          <div className="example-box">

            <h3>
              Пример
            </h3>

            <div className="mini-formula">
              x² - 5x + 6 = 0
            </div>

            <p>
              a = 1
            </p>

            <p>
              b = -5
            </p>

            <p>
              c = 6
            </p>

            <div className="mini-formula">
              D = (-5)² - 4·1·6
            </div>

            <div className="mini-formula">
              D = 25 - 24 = 1
            </div>

            <div className="mini-formula">
              x₁ = 2
            </div>

            <div className="mini-formula">
              x₂ = 3
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Неполные квадратные уравнения
          </h2>

          <div className="lesson-grid">

            <div className="lesson-card">

              <h3>
                ax² = 0
              </h3>

              <p>
                x = 0
              </p>

            </div>

            <div className="lesson-card">

              <h3>
                ax² + bx = 0
              </h3>

              <p>
                Выносим x за скобки.
              </p>

            </div>

            <div className="lesson-card">

              <h3>
                ax² + c = 0
              </h3>

              <p>
                Переносим и извлекаем корень.
              </p>

            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Теорема Виета
          </h2>

          <p>
            Для приведённого квадратного уравнения:
          </p>

          <div className="formula-card-large">
            x² + px + q = 0
          </div>

          <div className="formula-card-large">
            x₁ + x₂ = -p
          </div>

          <div className="formula-card-large">
            x₁ · x₂ = q
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Пример применения Виета
          </h2>

          <div className="example-box">

            <div className="mini-formula">
              x² - 7x + 12 = 0
            </div>

            <p>
              Нужно найти два числа,
              сумма которых равна 7,
              а произведение равно 12.
            </p>

            <p>
              Это числа 3 и 4.
            </p>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Типичные ошибки
          </h2>

          <div className="lesson-grid">

            <div className="lesson-card">
              <p>
                Ошибка в вычислении дискриминанта.
              </p>
            </div>

            <div className="lesson-card">
              <p>
                Потеря знака минус.
              </p>
            </div>

            <div className="lesson-card">
              <p>
                Неправильное применение формулы Виета.
              </p>
            </div>

            <div className="lesson-card">
              <p>
                Забывают проверить ответ.
              </p>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Что нужно запомнить
          </h2>

          <div className="remember-box">

            <ul>

              <li>
                Линейное уравнение имеет вид ax+b=0.
              </li>

              <li>
                Квадратное уравнение имеет вид ax²+bx+c=0.
              </li>

              <li>
                Дискриминант D=b²−4ac.
              </li>

              <li>
                Формула корней: (-b±√D)/(2a).
              </li>

              <li>
                Теорема Виета позволяет находить корни устно.
              </li>

            </ul>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}