import React from 'react';
import "./style.css";
import { useDispatch } from 'react-redux';
import { removeUser } from '../../features/InfoSlice/InfoSlice';
import Button from '@mui/material/Button';


const Bookbox = ({ usersInfo }) => {

    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch(removeUser(id))
    };


    return (

        <>

            {usersInfo.map((item, id) => (


                <div className='book_box'>


                    <div className='book_head'>


                        <div className='b_from'>
                            <h3 className='bfrom_titel'>From</h3>
                            <p className='bfrom_subtitel'>{item.destinationFrom}</p>
                        </div>

                        <div className='b_to'>
                            <h3 className='bto_titel'>To</h3>
                            <p className='bto_subtitel'>{item.destinationTo}</p>
                        </div>

                        <div className='b_cabin'>
                            <h3 className='bcabin_titel'>Cabin</h3>
                            <p className='bcabin_subtitel'>{item.destinationCabin}</p>
                        </div>

                        <div className='b_date'>
                            <h3 className='bdate_titel'>Date</h3>
                            <p className='bdate_subtitel'>{item.destinationDate}</p>
                        </div>

                        <div className='b_passenger'>
                            <h3 className='bpassenger_titel'>Passenger</h3>
                            <p className='bpassenger_subtitel'>{item.destinationPassenger}</p>
                        </div>


                        <div className='bbox_btn'>

                        <div className='bbtn_confirm'>

<Button variant="contained" onClick={() => deleteItem(id)} >Confirm Ticket</Button>
                        </div>


                         <div className='b_btn'>

<Button variant="contained" onClick={() => deleteItem(id)} >Remove Ticket</Button>
                         </div>


                        </div>


                    </div>

                </div>

            ))}

        </>
    )
}

export default Bookbox




