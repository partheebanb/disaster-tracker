import { Icon } from '@iconify/react';
import cloudWithLightningAndRain from '@iconify-icons/noto-v1/cloud-with-lightning-and-rain';

const StormMarker = ({ lat, lng, onClick}) => {    
    return (
        <div className="storm-marker" onClick={onClick}>
            <Icon icon={cloudWithLightningAndRain} className="fire-icon"/>
        </div>
    )
}

export default StormMarker