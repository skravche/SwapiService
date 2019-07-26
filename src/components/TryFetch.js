import React, { Component } from 'react';

class SwapiService extends Component {
  state = {
    data: '',
  };

  render() {
    const getApiAsync = async url => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, received ${response.status}`);
      }
      const body = await response.json();
      return body;
    };

    getApiAsync('https://swapi.co/api/people/1')
      .then(body => {
        console.log(body);
      })
      .catch(error => {
        console.log('Could not fetch!', error);
      });

    // the same code: --
    // fetch()
    //   .then(response => {
    //     // console.log('Got Response', response.status);
    //     return response.json();
    //   })
    //   .then(body => {
    //     console.log(body);
    //   });
    // --

    return <div>111</div>;
  }
}

export default SwapiService;
