import { Routes, Route } from 'react-router-dom'

/* HOME */
import Home from '../pages/Home'

/* ALGEBRA */
import Algebra from '../pages/algebra/Algebra'
import Functions from '../pages/algebra/Functions'
import DomainRange from '../pages/algebra/DomainRange'
import LinearFunction from '../pages/algebra/LinearFunction'
import QuadraticFunction from '../pages/algebra/QuadraticFunction'
import Equations from '../pages/algebra/Equations'
import Inequalities from '../pages/algebra/Inequalities'
import ArithmeticProgression from '../pages/algebra/ArithmeticProgression'
import GeometricProgression from '../pages/algebra/GeometricProgression'
import Graphs from '../pages/algebra/Graphs'

/* TRIGONOMETRY */
import Trigonometry from '../pages/trigonometry/Trigonometry'
import TrigCircle from '../pages/trigonometry/TrigCircle'
import Sinus from '../pages/trigonometry/Sinus'
import Cosinus from '../pages/trigonometry/Cosinus'
import Tangent from '../pages/trigonometry/Tangent'
import Cotangent from '../pages/trigonometry/Cotangent'
import Formulas from '../pages/trigonometry/Formulas'
import ReductionFormulas from '../pages/trigonometry/ReductionFormulas'
import SumAndDifference from '../pages/trigonometry/SumAndDifference'
import TrigEquations from '../pages/trigonometry/TrigEquations'

/* LOGARITHMS */
import Logarithms from '../pages/logarithms/Logarithms'
import Definition from '../pages/logarithms/Definition'
import Properties from '../pages/logarithms/Properties'
import LogEquations from '../pages/logarithms/Equations'
import LogInequalities from '../pages/logarithms/Inequalities'

/* CALCULUS */
import Calculus from '../pages/calculus/Calculus'
import Limits from '../pages/calculus/Limits'
import Derivatives from '../pages/calculus/Derivatives'
import Integrals from '../pages/calculus/Integrals'
import Extrema from '../pages/calculus/Extrema'

/* PROBABILITY */
import Probability from '../pages/probability/Probability'
import Events from '../pages/probability/Events'
import ClassicalProbability from '../pages/probability/ClassicalProbability'
import Bayes from '../pages/probability/Bayes'
import Statistics from '../pages/probability/Statistics'

/* LINEAR ALGEBRA */
import LinearAlgebra from '../pages/linear-algebra/LinearAlgebra'
import Matrices from '../pages/linear-algebra/Matrices'
import MatrixTypes from '../pages/linear-algebra/MatrixTypes'
import MatrixOperations from '../pages/linear-algebra/MatrixOperations'
import Determinants from '../pages/linear-algebra/Determinants'
import Cramer from '../pages/linear-algebra/Cramer'
import Gauss from '../pages/linear-algebra/Gauss'

export default function AppRouter() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* ALGEBRA */}
      <Route path="/algebra" element={<Algebra />} />
      <Route path="/algebra/functions" element={<Functions />} />
      <Route path="/algebra/domain-range" element={<DomainRange />} />
      <Route path="/algebra/linear-function" element={<LinearFunction />} />
      <Route path="/algebra/quadratic-function" element={<QuadraticFunction />} />
      <Route path="/algebra/equations" element={<Equations />} />
      <Route path="/algebra/inequalities" element={<Inequalities />} />
      <Route path="/algebra/arithmetic-progression" element={<ArithmeticProgression />} />
      <Route path="/algebra/geometric-progression" element={<GeometricProgression />} />
      <Route path="/algebra/graphs" element={<Graphs />} />

      {/* TRIGONOMETRY */}
      <Route path="/trigonometry" element={<Trigonometry />} />
      <Route path="/trigonometry/trig-circle" element={<TrigCircle />} />
      <Route path="/trigonometry/sinus" element={<Sinus />} />
      <Route path="/trigonometry/cosinus" element={<Cosinus />} />
      <Route path="/trigonometry/tangent" element={<Tangent />} />
      <Route path="/trigonometry/cotangent" element={<Cotangent />} />
      <Route path="/trigonometry/formulas" element={<Formulas />} />
      <Route path="/trigonometry/reduction-formulas" element={<ReductionFormulas />} />
      <Route path="/trigonometry/sum-and-difference" element={<SumAndDifference />} />
      <Route path="/trigonometry/equations" element={<TrigEquations />} />

      {/* LOGARITHMS */}
      <Route path="/logarithms" element={<Logarithms />} />
      <Route path="/logarithms/definition" element={<Definition />} />
      <Route path="/logarithms/properties" element={<Properties />} />
      <Route path="/logarithms/equations" element={<LogEquations />} />
      <Route path="/logarithms/inequalities" element={<LogInequalities />} />

      {/* CALCULUS */}
      <Route path="/calculus" element={<Calculus />} />
      <Route path="/calculus/limits" element={<Limits />} />
      <Route path="/calculus/derivatives" element={<Derivatives />} />
      <Route path="/calculus/integrals" element={<Integrals />} />
      <Route path="/calculus/extrema" element={<Extrema />} />

      {/* PROBABILITY */}
      <Route path="/probability" element={<Probability />} />
      <Route path="/probability/events" element={<Events />} />
      <Route path="/probability/classical" element={<ClassicalProbability />} />
      <Route path="/probability/bayes" element={<Bayes />} />
      <Route path="/probability/statistics" element={<Statistics />} />

      {/* LINEAR ALGEBRA */}
      <Route path="/linear-algebra" element={<LinearAlgebra />} />
      <Route path="/linear-algebra/matrices" element={<Matrices />} />
      <Route path="/linear-algebra/matrix-types" element={<MatrixTypes />} />
      <Route path="/linear-algebra/matrix-operations" element={<MatrixOperations />} />
      <Route path="/linear-algebra/determinants" element={<Determinants />} />
      <Route path="/linear-algebra/cramer" element={<Cramer />} />
      <Route path="/linear-algebra/gauss" element={<Gauss />} />

      {/* 404 */}
      <Route
        path="*"
        element={
          <div style={{ padding: '80px', textAlign: 'center' }}>
            <h1>404</h1>
            <p>Страница не найдена</p>
          </div>
        }
      />

    </Routes>
  )
}