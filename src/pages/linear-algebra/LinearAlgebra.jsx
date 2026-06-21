import { Link } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import '../../styles/subjects.css'

export default function LinearAlgebra() {
  return (
    <MainLayout>

      <div className="subject-page">

        <section className="subject-hero">
          <div className="subject-badge">Раздел</div>
          <h1>Линейная алгебра</h1>
          <p>Матрицы, определители и системы линейных уравнений.</p>
        </section>

        <h2 className="subject-title">Темы раздела</h2>

        <div className="topic-grid">

          <Link to="/linear-algebra/matrices" className="topic-card">
            <h3>Матрицы</h3>
            <p>Определение и элементы матрицы</p>
            <span>Открыть →</span>
          </Link>

          <Link to="/linear-algebra/matrix-types" className="topic-card">
            <h3>Виды матриц</h3>
            <p>Квадратные, нулевые, единичные и диагональные</p>
            <span>Открыть →</span>
          </Link>

          <Link to="/linear-algebra/matrix-operations" className="topic-card">
            <h3>Операции над матрицами</h3>
            <p>Сложение, умножение, транспонирование</p>
            <span>Открыть →</span>
          </Link>

          <Link to="/linear-algebra/determinants" className="topic-card">
            <h3>Определители</h3>
            <p>2x2 и 3x3, свойства определителей</p>
            <span>Открыть →</span>
          </Link>

          <Link to="/linear-algebra/cramer" className="topic-card">
            <h3>Метод Крамера</h3>
            <p>Решение систем линейных уравнений</p>
            <span>Открыть →</span>
          </Link>

          <Link to="/linear-algebra/gauss" className="topic-card">
            <h3>Метод Гаусса</h3>
            <p>Пошаговое решение систем уравнений</p>
            <span>Открыть →</span>
          </Link>

        </div>

      </div>

    </MainLayout>
  )
}