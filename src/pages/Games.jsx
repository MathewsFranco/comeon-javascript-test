import React from 'react';
import Layout from '../Layout';

const Games = () => {
  return (
    <Layout>
      <div class='casino'>
        <div class='ui grid centered'>
          <div class='twelve wide column'>
            <div class='ui list'>
              {/* <!-- player item template --> */}
              <div class='player item'>
                <img class='ui avatar image' src='' alt='avatar' />

                <div class='content'>
                  <div class='header'>
                    <b class='name'></b>
                  </div>
                  <div class='description event'></div>
                </div>
              </div>
              {/* <!-- end player item template --> */}
            </div>
            <div class='logout ui left floated secondary button inverted'>
              <i class='left chevron icon'></i>Log Out
            </div>
          </div>
          <div class='four wide column'>
            <div class='search ui small icon input '>
              <input type='text' placeholder='Search Game' />
              <i class='search icon'></i>
            </div>
          </div>
        </div>
        <div class='ui grid'>
          <div class='twelve wide column'>
            <h3 class='ui dividing header'>Games</h3>

            <div class='ui relaxed divided game items links'>
              {/* <!-- game item template --> */}
              <div class='game item'>
                <div class='ui small image'>
                  <img src='' alt='game-icon' />
                </div>
                <div class='content'>
                  <div class='header'>
                    <b class='name'></b>
                  </div>
                  <div class='description'></div>
                  <div class='extra'>
                    <div class='play ui right floated secondary button inverted'>
                      Play
                      <i class='right chevron icon'></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end game item template --> */}
            </div>
          </div>
          <div class='four wide column'>
            <h3 class='ui dividing header'>Categories</h3>

            <div class='ui selection animated list category items'>
              {/* <!-- category item template --> */}
              <div class='category item'>
                <div class='content'>
                  <div class='header'></div>
                </div>
              </div>
              {/* <!-- end category item template --> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Games;
