import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

const Cards = ({ results, page }) => {

    let display;
    results ? 
        display = results.map(card => {
            const { id, 
                    name, 
                    image, 
                    location, 
                    status } = card;
            return (
                <Link 
                    style={{textDecoration: "none"}}
                    to={`${page}${id}`} key={id}className="col-4 position-relative mb-4 text-dark">
                    <div className={`${styles.cards}`}>
                        <img src={image} alt="" className={`${styles.img} img-fluid`} />
                        <div className="content" style={{padding: "10px"}}>
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    
                    {(() => {
                        if(status === "Dead"){
                            return(
                                <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>
                            )
                        } else if(status === "Alive" ){
                            return(
                                <div className={`${styles.badge} badge bg-success position-absolute`}>{status}</div>
                            )
                        } else {
                            return(
                                <div className={`${styles.badge} badge bg-secondary position-absolute`}>{status}</div>
                            )
                        }
                    })()}                   
                </Link>
            );
        }) 
        :
        display = "No Characters Found :/"
    return (
        <>
            {display}
        </>
    )
}

export default Cards
