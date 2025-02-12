import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';

const InGame = () => {
  const { gameCode } = useParams();

  useEffect(() => {
    comeon.game.launch(gameCode);
  }, []);

  return (
    <Layout>
      <div className='ingame'>
        <div className='ui grid centered'>
          <div className='three wide column'>
            <div
              className='ui right floated secondary button inverted'
              onClick={() => history.back()}
            >
              <i className='left chevron icon'></i>Back
            </div>
          </div>
          <div className='ten wide column'>
            <div id='game-launch'></div>
          </div>
          <div className='three wide column'></div>
        </div>
      </div>
    </Layout>
  );
};

export default InGame;
