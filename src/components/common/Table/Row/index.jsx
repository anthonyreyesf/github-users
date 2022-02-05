import React, { useEffect, useState } from "react";

import * as S from "./styles";

export default function Row(props) {
  const [followersCount, setFollowersCount] = useState();

  useEffect(() => {
    const followersDataUrl = props.followers;
    fetch(`${followersDataUrl}+per_page:100`)
      .then((res) => res.json())
      .then((data) => setFollowersCount(data.length));
  });

  function renderFollowers() {
    if (followersCount > 100) {
      return `+${followersCount} followers`;
    } else if (followersCount >= 0) {
      return `${followersCount} followers`;
    } else {
      return "Followers count not available at this time"
    }
  }

  return (
    <S.Row>
      <S.Image src={props.imgUrl} alt="" />
      <S.RowDetails>
        <p>{props.name}</p>
        <p>{renderFollowers()}</p>
      </S.RowDetails>
    </S.Row>
  );
}
