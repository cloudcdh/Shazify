import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { getFeaturedPlaylists } from '../../api/spotify';

function FeaturedPlaylist({ history }) {
  const [featuredPlaylist, setFeaturedPlaylist] = useState([])
  useEffect(() => {
    fetchFeaturedPlaylist();
  }, []);

  async function fetchFeaturedPlaylist() {
    try {
      const data = await getFeaturedPlaylists();
      setFeaturedPlaylist(data.playlists.items);
    }
    catch (error) {
      toast.error("Some error occured when fetching featured playlists.");
      console.error('Some error occured when fetching Featured Playlists.', error);
    }
  }

  const photos = featuredPlaylist.map(playlist => {
    return {
      id: playlist.id,
      src: playlist.images[0].url,
      width: 1,
      height: 1
    };
  });

  return (
    <>
      {
        featuredPlaylist.length > 0
          ?
          <Gallery
            photos={photos}
            onClick={e => history.push(`/home/playlist/${e.target.id}`)}
          />
          :
          <div> Sorry could find the featured playlist. <i className="far fa-sad-tear"></i>  </div>
      }
    </>
  );
}

export default withRouter(FeaturedPlaylist);
