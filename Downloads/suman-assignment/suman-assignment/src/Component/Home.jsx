import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Home({ data, loading, fetcherror, up, setUp }) {

   
    const incNum = () => {
        if (up < 10) {
            setUp((up) + 1);
            
        }
    };
    const decNum = () => {
        if (up > 1) {
            setUp((up) - 1);
        }
    }
    const handleChange = (e) => {
        setUp(e.target.value);
       
    }



    return (
        <div>

            {loading && <p>Loading...</p>}
            {fetcherror && <p>{`Error : ${fetcherror}`}</p>}
            {!fetcherror && !loading &&




                <div className="container">
                    <h1>Image Galery</h1>
                    <div className="col-xl-1">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                            </div>
                            <input type="text" className="form-control" value={up} onChange={handleChange} />
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                            </div>
                        </div>
                    </div>

                    <div className="image-container flex">

                        {data.map((image, key) => <div className="image-layot" key={image.id}>

                            <Link to={`/individualimage/${image.id}`}><img src={`https://picsum.photos/id/${image.id}/200/200`} alt={image.author} /></Link>

                        </div>

                        )}
                    </div>
                </div>
            }
        </div>
    )
}
