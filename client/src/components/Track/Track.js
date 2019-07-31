import React from "react";

import Grid from "../../common/Grid";
import Image from "../../common/Image";
import P from "../../common/P";

import { PlayCircle } from "styled-icons/boxicons-regular/PlayCircle";
import styled from "styled-components";

import ConvertMs from "../../utils/ConvertMs";

const PlayButton = styled(PlayCircle)`
  color: gray;
  margin: auto;
  height: 45px;
  width: 45px;
  :hover {
    color: green;
  }
`;

const Track = ({ track, playTrack }) => {
  const { name, artists, album, id, duration_ms } = track;
  return (
    <Grid
      direction="column"
      height="100px"
      templateColumn="2fr 10fr 1fr 1fr"
      space={3}
    >
      <Image size="md" src={album.images[0].url} />
      <Grid direction="row" justify="center" alignItems="center">
        <P color="black" font="lg">
          {name}
        </P>
        <P font="sm" secondary>
          {artists.map(artists => `${artists.name} `)}
        </P>
      </Grid>
      <P>{ConvertMs(duration_ms)}</P>
      <PlayButton onClick={() => playTrack(id)} />
    </Grid>
  );
};

export default Track;
