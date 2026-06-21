import MainLayout from '../../layouts/MainLayout'

import '../../styles/lesson.css'

export default function Inequalities() {
  return (
    <MainLayout>

      <div className="lesson-page">

        <section className="lesson-hero">

          <div className="lesson-badge">
            Алгебра
          </div>

          <h1>
            Неравенства
          </h1>

          <p>
            Неравенства позволяют сравнивать величины
            и находить диапазоны значений переменной,
            при которых выполняется заданное условие.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Основные знаки
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>{'>'}</span>
              <span>Больше</span>
            </div>

            <div className="table-row">
              <span>{'<'}</span>
              <span>Меньше</span>
            </div>

            <div className="table-row">
              <span>≥</span>
              <span>Больше или равно</span>
            </div>

            <div className="table-row">
              <span>≤</span>
              <span>Меньше или равно</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Свойства неравенств
          </h2>

          <div className="lesson-grid">

            <div className="lesson-card">

              <h3>
                Прибавление числа
              </h3>

              <div className="mini-formula">
                a {'>'} b
              </div>

              <div className="mini-formula">
                a+c {'>'} b+c
              </div>

            </div>

            <div className="lesson-card">

              <h3>
                Умножение на положительное число
              </h3>

              <div className="mini-formula">
                a {'>'} b
              </div>

              <div className="mini-formula">
                ac {'>'} bc
              </div>

            </div>

            <div className="lesson-card">

              <h3>
                Умножение на отрицательное число
              </h3>

              <div className="mini-formula">
                a {'>'} b
              </div>

              <div className="mini-formula">
                -a {'<'} -b
              </div>

              <p>
                Знак обязательно меняется.
              </p>

            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Линейные неравенства
          </h2>

          <div className="formula-card-large">
            ax + b {'>'} 0
          </div>

          <div className="example-box">

            <h3>
              Пример
            </h3>

            <div className="mini-formula">
              3x - 6 {'>'} 0
            </div>

            <div className="mini-formula">
              3x {'>'} 6
            </div>

            <div className="mini-formula">
              x {'>'} 2
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Интервалы
          </h2>

          <div className="table-block">

            <div className="table-row">
              <span>(a;b)</span>
              <span>Открытый интервал</span>
            </div>

            <div className="table-row">
              <span>[a;b]</span>
              <span>Закрытый интервал</span>
            </div>

            <div className="table-row">
              <span>(a;b]</span>
              <span>Смешанный интервал</span>
            </div>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Квадратные неравенства
          </h2>

          <div className="formula-card-large">
            ax² + bx + c {'>'} 0
          </div>

          <p>
            Решаются методом интервалов.
          </p>

        </section>

        <section className="lesson-section">

          <h2>
            Метод интервалов
          </h2>

          <div className="example-box">

            <h3>
              Пример
            </h3>

            <div className="mini-formula">
              x² - 5x + 6 {'>'} 0
            </div>

            <div className="mini-formula">
              (x-2)(x-3) {'>'} 0
            </div>

            <p>
              Критические точки:
              2 и 3.
            </p>

            <p>
              Разбиваем числовую прямую
              на интервалы и определяем знак.
            </p>

          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Системы неравенств
          </h2>

          <div className="formula-card-large">
            x {'>'} 2
          </div>

          <div className="formula-card-large">
            x {'<'} 7
          </div>

          <p>
            Ответ:
          </p>

          <div className="mini-formula">
            (2 ; 7)
          </div>

        </section>

        <section className="lesson-section">

          <h2>
            Типичные ошибки
          </h2>

          <div className="lesson-grid">

            <div className="lesson-card">
              <p>
                Не меняют знак при умножении
                на отрицательное число.
              </p>
            </div>

            <div className="lesson-card">
              <p>
                Неверно записывают интервалы.
              </p>
            </div>

            <div className="lesson-card">
              <p>
                Ошибаются в методе интервалов.
              </p>
            </div>

            <div className="lesson-card">
              <p>
                Путают объединение
                и пересечение решений.
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
                При умножении на отрицательное число
                знак меняется.
              </li>

              <li>
                Линейные неравенства решаются как уравнения.
              </li>

              <li>
                Квадратные неравенства удобно решать
                методом интервалов.
              </li>

              <li>
                Ответ часто записывается через интервалы.
              </li>

              <li>
                Для систем берётся пересечение решений.
              </li>

            </ul>

          </div>

        </section>

      </div>

    </MainLayout>
  )
}