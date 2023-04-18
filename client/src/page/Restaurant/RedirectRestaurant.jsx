import {useEffect} from 'react';
import { useNavigate,useParams } from 'react-router';

const RedirectRestaurant = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        navigate(`/restaurant/${id}/overview`);
    },[id, navigate]);

    return null;
}

export default RedirectRestaurant;