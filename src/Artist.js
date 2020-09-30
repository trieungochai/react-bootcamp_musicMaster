import React from 'react';

const Artist = ({ artist }) => {
  // By returning from this overall, react knows not to render anything
  // and we can skip the rest of return(...) below
  if (!artist) return null;

  const { name, genres, followers, images } = artist;
  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} Followers</p>
      <p>{genres.join(', ')}</p>
      <img 
        src={images[0] && images[0].url}
        alt='artist-profile'
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

export default Artist;