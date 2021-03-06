import React, {useState, useEffect} from 'react';
import pptxgen from 'pptxgenjs';
import sanityClient from 'part:@sanity/base/client';
import {withDocument} from 'part:@sanity/form-builder';
import bgimg from './static/bgimg.jpg';
import mainbg from './static/mainbg.jpg';

function toPlainText(blocks = []) {
  return (
    blocks
      // Loop through each block
      .map(block => {
        // If it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return '';
        }

        // Loop through the children spans, and join the
        // text strings
        return block.children.map(child => child.text).join('\n');
      })
  );
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x10';

pptx.defineSlideMaster({
  title: 'TITLE_SLIDE',
  objects: [
    {image: {x: 0, y: 0, w: '100%', h: '100%', path: bgimg}},
    {
      placeholder: {
        options: {
          name: 'title',
          type: 'title',
          x: 1.22,
          y: 0.76,
          w: 8.46,
          h: 3.07,
          align: 'left',
          bold: true,
          fontSize: 44,
          fontFace: 'Arial',
          color: 'D6FEFF',
          shadow: {
            type: 'outer',
            angle: 45,
            blur: 3,
            offset: 3
          }
        },
        text: 'title here'
      }
    },
    {
      placeholder: {
        options: {
          name: 'hymnNumber',
          type: 'body',
          x: 1.28,
          y: 2.85,
          w: 7,
          h: 1.6,
          align: 'left',
          bold: true,
          fontSize: 21,
          fontFace: 'Arial',
          color: 'FFFFFF',
          shadow: {
            type: 'outer',
            angle: 45,
            blur: 3,
            offset: 3
          }
        },
        text: 'hymn number here'
      }
    }
  ]
});

pptx.defineSlideMaster({
  title: 'LYRIC_SLIDE',
  bkgd: {path: mainbg},
  objects: [
    {
      placeholder: {
        options: {
          name: 'body',
          type: 'body',
          x: 0.17,
          y: 0.21,
          w: 9.58,
          h: 5.42,
          align: 'left',
          fontSize: 37,
          bold: true,
          fontFace: 'Arial',
          color: 'FFFFFF',
          shadow: {
            angle: 45,
            blur: 3,
            offset: 3
          }
        },
        text: 'Lyrics here'
      }
    }
  ]
});

function produceSlide({title, content, hymnNumber}) {
  const verses = toPlainText(content);

  pptx
    .addSlide('TITLE_SLIDE')
    .addText(title, {placeholder: 'title'})
    .addText(hymnNumber === 0 ? '' : `Rejoice ${hymnNumber}`, {
      placeholder: 'hymnNumber'
    });
  verses.map(para =>
    pptx.addSlide('LYRIC_SLIDE').addText(para, {placeholder: 'body'})
  );
  pptx.writeFile(
    `${hymnNumber !== 0 ? hymnNumber + '-' : ''}${slugify(title)}.pptx`
  );
}

export default produceSlide;
