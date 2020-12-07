import { Icon, InlinIcon } from '@iconify/react';
import waterWave from '@iconify-icons/noto-v1/water-wave';

const FloodMarker = ({ lat, lng, onClick}) => {    
    return (
        <div className="flood-marker" onClick={onClick}>
            <Icon icon={waterWave} className="fire-icon"/>
        </div>
    )
}

export default FloodMarker