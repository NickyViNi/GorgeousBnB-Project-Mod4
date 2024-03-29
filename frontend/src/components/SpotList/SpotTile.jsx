import { useNavigate } from 'react-router-dom';

const SpotTile = ({spot}) => {
    const navigate = useNavigate();

    return (
        <div className='spot-tile' title={spot?.name} onClick={() => navigate(`/spots/${spot?.id}`)}>
            <div className='spot-image'>
                <img className='image' src={spot?.previewImage} />
            </div>
            <div className='spot-infomation'>
                <div className='get-city-state-rating'>
                    <div className='city-state'>
                        {`${spot?.city}, ${spot?.state}`}
                    </div>

                    <div className='star-rating'>
                        <i className='fas fa-star single-star'></i>
                        { spot?.avgRating === 'New' ? 'New' : parseFloat(spot?.avgRating).toFixed(1)}
                    </div>
                </div>
                <span className='price-span'>${parseFloat(spot?.price).toFixed(2)}</span> <span className='night-span'>night</span>
            </div>
        </div>
    )
}

export default SpotTile;
