import './TrendCard.css';
import {TrendData} from '../../Data/TrendData.js';

function TrendCard() {
    return (
        <div className="TrendCard">
            <h3>Trends for you</h3>
            {TrendData.map((trend, id) => {
                return (
                    <div className='trend' key={trend.name}>
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}
        </div>
    );
}

export default TrendCard;