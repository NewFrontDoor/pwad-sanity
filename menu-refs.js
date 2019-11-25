import React, {useState, useEffect} from 'react';
import sanityClient from 'part:@sanity/base/client';

export default function MenuReference({id}) {
  const [referenced, setReferenced] = useState(false);
  const [fetched, setFetched] = useState(false);

  const query = `*[references("${id}")]`;

  useEffect(() => {
    sanityClient.fetch(query).then(response => {
      if (response[0] !== undefined) {
        setReferenced({
          items: response[0]._id === 'global-main'
        });
      }
    });
    setFetched(true);
  }, [query]);

  return (
    fetched && (
      <div
        key={id}
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: `2px solid ${referenced ? 'rgb(25, 179, 102)' : 'red'}`,
          backgroundColor: `${referenced ? 'rgb(25, 179, 102)' : 'none'}`
        }}
      />
    )
  );
}
