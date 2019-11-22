import React from 'react';
import sanityClient from 'part:@sanity/base/client';
import {IntentLink} from 'part:@sanity/base/router';
import {withDocument} from 'part:@sanity/form-builder';

class ItemViewer extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    const query = `
    *[references("${this.props.document._id}")] {
      title,
      "id": _id,
      preachedDate,
      preacher ->{name}
    }`;
    sanityClient.fetch(query).then(response => {
      console.log(response);
      this.setState({
        items: response
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Members of this series</h2>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>
              <IntentLink intent="edit" params={{type: 'sermons', id: item.id}}>
                {item.title} - {item.preacher.name}
                <br /><small>{item.preachedDate}</small>
              </IntentLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withDocument(ItemViewer)