import { useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { Data, DropdownState, ErrorState } from '../models';
import * as Actions from '../redux/actions';

// COMBINE DROPDOWN MODEL & ERROR MODEL
type DropdownProps = DropdownState & ErrorState;

// REUSABLE DROPDOWN ELEMENT
const Dropdown: React.FC<DropdownProps> = ({ data, loading, focusId, error }) => {

    const dispatch = useDispatch();
    const { chooseData } = Actions;

    // HANDLE ONCHANGE EVENT IN SELECT ELEMENT
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(chooseData(e.target.value));
    };

    return (
        <div className="dropdown-container">
            {loading ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                error ? (
                    <div className='error'>{error}</div>
                ) : (
                    <select className="dropdown" value={focusId} onChange={handleChange}>
                        {data.map((data: Data) => (
                            <option key={data.id} className='item' value={data.id}>
                                {data.title}
                            </option>
                        ))}
                    </select>
                )
            )}
        </div>
    );
};

export default Dropdown;