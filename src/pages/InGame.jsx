import React from 'react';
import Layout from '../Layout';

const InGame = () => {
  return (
    <Layout>
      <div class='ingame'>
        <div class='ui grid centered'>
          <div class='three wide column'>
            <div class='ui right floated secondary button inverted'>
              <i class='left chevron icon'></i>Back
            </div>
          </div>
          <div class='ten wide column'>
            <div id='game-launch'></div>
          </div>
          <div class='three wide column'></div>
        </div>
      </div>
    </Layout>
  );
};

export default InGame;
