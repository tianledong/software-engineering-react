import React from "react";
import './tuits.css';
import Tuit from "./tuit";

<<<<<<< HEAD
function Tuits() {
    return (
        <ul class="ttr-tuits list-group">
            {
                tuits.map(tuit => {
                    return (
                        <Tuit tuit={tuit}/>
                    );
                })
            }
        </ul>
    );
=======
function Tuits({tuits = [], deleteTuit}) {
    return (
    <div>
      <ul className="ttr-tuits list-group">
        {
          tuits.map && tuits.map(tuit => {
            return (
              <Tuit key={tuit._id} deleteTuit={deleteTuit} tuit={tuit}/>
            );
          })
        }
      </ul>
    </div>
  );
>>>>>>> a3
}

export default Tuits;