import React, {useEffect, useState} from "react";
import {profile} from "../../services/security-service";
import * as likeService from "../../services/likes-service";

const TuitStats = ({tuit, likeTuit = () => {}}) => {
    const [isLiked, setIsLiked] = useState(false);

    const initLike = async () => {
        const user = await profile();
        if (user) {
            const isLikeVal = await likeService.isUserLikeTuit("me", tuit._id);
            setIsLiked(isLikeVal.like);
        }
    }

    useEffect(initLike, []);

    return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"/>
          {tuit.stats && tuit.stats.replies}
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"/>
          {tuit.stats && tuit.stats.retuits}
        </div>
        <div className="col">
          <span onClick={() => likeTuit(tuit)}>
              {
                tuit.stats && isLiked &&
                  <i className="fas fa-heart me-1" style={{color: 'red'}}/>
              }
              {
                tuit.stats && isLiked===false &&
                  <i className="far fa-heart me-1"/>
              }
            {tuit.stats && tuit.stats.likes}
          </span>
        </div>
        <div className="col">
          <i className="far fa-inbox-out"/>
        </div>
      </div>
    );
}
export default TuitStats;