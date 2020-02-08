import produceSlide from './ppt-producer';

export function PPTAction({published, type}) {
  return (
    ['hymn', 'prayer'].includes(type) && {
      label: 'Produce pptx',
      onHandle: () => {
        produceSlide(published);
      }
    }
  );
}
