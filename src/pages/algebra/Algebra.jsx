import { Link } from 'react-router-dom'

import MainLayout from '../../layouts/MainLayout'

import '../../styles/subjects.css'

export default function Algebra() {
  return (
    <MainLayout>

      <div className="subject-page">

        <section className="subject-hero">

          <div className="subject-badge">
            Раздел
          </div>

          <h1>
            Алгебра
          </h1>

          <p>
            Основа всей школьной математики.
            Изучает функции, уравнения,
            неравенства, последовательности
            и методы решения задач.
          </p>

        </section>

        <h2 className="subject-title">
          Темы раздела
        </h2>

        <div className="topic-grid">

          <Link
            to="/algebra/functions"
            className="topic-card"
          >
            <h3>
              Функции
            </h3>

            <p>
              Основное понятие функции,
              область определения,
              область значений и способы задания.
            </p>

            <span>
              Открыть →
            </span>
          </Link>

          <Link
            to="/algebra/domain-range"
            className="topic-card"
          >
            <h3>
              Область определения
            </h3>

            <p>
              Допустимые значения аргумента,
              ограничения и поиск области определения.
            </p>

            <span>
              Открыть →
            </span>
          </Link>

          <Link
            to="/algebra/linear-function"
            className="topic-card"
          >
            <h3>
              Линейная функция
            </h3>

            <p>
              Функция вида y = kx + b,
              её график и основные свойства.
            </p>

            <span>
              Открыть →
            </span>
          </Link>

          <Link
            to="/algebra/quadratic-function"
            className="topic-card"
          >
            <h3>
              Квадратичная функция
            </h3>

            <p>
              Парабола, вершина,
              ветви и влияние коэффициентов.
            </p>

            <span>
              Открыть →
            </span>
          </Link>

          <Link
            to="/algebra/equations"
            className="topic-card"
          >
            <h3>
              Уравнения
            </h3>

            <p>
              Основные методы решения
              линейных и квадратных уравнений.
            </p>

            <span>
              Открыть →
            </span>
          </Link>

          <Link
            to="/algebra/inequalities"
            className="topic-card"
          >
            <h3>
              Неравенства
            </h3>

            <p>
              Линейные, квадратные
              и рациональные неравенства.
            </p>

            <span>
              Открыть →
            </span>
          </Link>

          <Link
            to="/algebra/arithmetic-progression"
            className="topic-card"
          >
            <h3>
              Арифметическая прогрессия
            </h3>

            <p>
              Формула n-го члена,
              сумма первых членов.
            </p>

            <span>
              Открыть →
            </span>
          </Link>

          <Link
            to="/algebra/geometric-progression"
            className="topic-card"
          >
            <h3>
              Геометрическая прогрессия
            </h3>

            <p>
              Формула n-го члена,
              сумма и свойства прогрессии.
            </p>

            <span>
              Открыть →
            </span>
          </Link>

          <Link
            to="/algebra/graphs"
            className="topic-card"
          >
            <h3>
              Графики функций
            </h3>

            <p>
              Построение графиков,
              преобразования и анализ функций.
            </p>

            <span>
              Открыть →
            </span>
          </Link>

        </div>

      </div>

    </MainLayout>
  )
}