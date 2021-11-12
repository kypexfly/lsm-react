import { Link } from 'react-router-dom';
import './Calc.css'

function Calc({ toUrl, imageUrl, title }) {
    return (
        <Link to={toUrl}>
            <div className="calc-body" style={{ backgroundImage: `url('${imageUrl}')` }}>
                <div className="calc-text">
                    <h3>{title}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Calc;