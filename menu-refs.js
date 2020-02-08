import React, {useState, useEffect} from 'react';
import sanityClient from 'part:@sanity/base/client';

export default function MenuReference({id}) {
  const [referenced, setReferenced] = useState(false);
  const query = `*[references("${id}")]`;

  useEffect(() => {
    const subscription = sanityClient.observable.fetch(query).subscribe({
      next: res => {
        if (res[0] !== undefined) {
          setReferenced({
            items: res[0]._id === 'global-main'
          });
        }
      },
      error: error => {
        console.log('Observable failed:' + error);
      },
      complete: () => {
        console.log('Complete');
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [query]);

  return (
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
  );
}
