import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DROPDOWN_COUNT } from '../config/key';
import * as Actions from '../redux/actions';
import Dropdown from './Dropdown';

// LANDING PAGE CONTAINING ALL DROPDOWN ELEMENTS
const Landing: React.FC = () => {

    const dispatch = useDispatch();
    
    // WHEN PAGE LOADED, FETCH DATA THROUGH PUBLIC API
    useEffect(() => {
        dispatch(Actions.fetchData());
    }, [dispatch]);

    // GET DROPDOWN & ERROR STATE FROM REDUX (GLOBAL STATE MANAGEMENT SYSTEM)
    const dropdown = useSelector(({ dropdown }) => dropdown);
    const error = useSelector(({ error }) => error);

    return (
        <>
            {Array.from({ length: DROPDOWN_COUNT }, (_, index) => (
                <Dropdown
                    key={index}
                    {...dropdown}
                    {...error}
                />
            ))}
        </>
    );
};

export default Landing;