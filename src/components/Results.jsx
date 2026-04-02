import { useNavigate } from 'react-router-dom'
import './Results.css'

export default function Results() {
  const navigate = useNavigate()

  return (
    <div className="results-container">
      <div className="results-content">
        <h1 className="results-heading">COMING SOON</h1>
        <p className="results-subtitle">Results will be announced shortly</p>
        
        <button 
          className="results-back-button"
          onClick={() => navigate('/')}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
