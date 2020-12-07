import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify-icons/noto-v1/volcano'

const VolcanoMarker = ({ lat, lng, onClick}) => {    
    return (
        <div className="fire-marker" onClick={onClick}>
            <Icon icon={volcanoIcon} className="fire-icon"/>
        </div>
    )
}

export default VolcanoMarker