import React, { useEffect, useState } from "react";

import * as S from "./styles";

export default function Row(props) {
  const [followersCount, setFollowersCount] = useState(0);

  // useEffect(() => {
  //   const followersDataUrl = props.followers;
  //   fetch(followersDataUrl)
  //     .then((res) => res.json())
  //     .then((data) => setFollowersCount(data.length));
  // });

  return (
    <S.Row>
      <S.Image src={props.imgUrl} alt="" />
      <S.RowDetails>
        <p>{props.name}</p>
        <p>{followersCount >= 0 ? `${followersCount} followers` : "Could not get followers count"}</p>
      </S.RowDetails>
    </S.Row>
  );
}
