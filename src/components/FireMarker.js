import { Icon } from '@iconify/react';
import fireIcon from '@iconify-icons/noto-v1/fire'

const FireMarker = ({ lat, lng, onClick}) => {    
    return (
        <div className="fire-marker" onClick={onClick}>
            <Icon icon={fireIcon} className="fire-icon"/>
        </div>
    )
}

export default FireMarker