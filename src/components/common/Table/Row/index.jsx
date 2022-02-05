import React, { useEffect, useState } from "react";

import * as S from "./styles";

export default function Row(props) {
  return (
    <S.Row>
      <S.Image src={props.imgUrl} alt="" />
      <S.RowDetails>
        <p>{props.name}</p>
        <a href={props.githubUrl}>{props.githubUrl.slice(8)}</a>
      </S.RowDetails>
    </S.Row>
  );
}
