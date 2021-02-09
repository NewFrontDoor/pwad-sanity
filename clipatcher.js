import client from 'part:@sanity/base/client';

const value = {
  name: {
    first: 'Test',
    last: 'User'
  }
};

client
  .patch('5e3955ced8fd360d9f4dfa39')
  .set(value)
  .commit()
  .catch(error => {
    console.error('Oh no, the update failed: ' + error.message);
  });
