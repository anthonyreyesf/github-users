import React, { useEffect, useState } from "react";

import * as S from "./styles";

export default function Row(props) {
  const [followersCount, setFollowersCount] = useState(0);

  useEffect(() => {
    const followersDataUrl = props.followers;
    fetch(`${followersDataUrl}+per_page:100`)
      .then((res) => res.json())
      .then((data) => setFollowersCount(data.length));
  });

  return (
    <S.Row>
      <S.Image src={props.imgUrl} alt="" />
      <S.RowDetails>
        <p>{props.name}</p>
        <p>{followersCount > 100 ? `+${followersCount} followers` : `${followersCount} followers`}</p>
      </S.RowDetails>
    </S.Row>
  );
}
