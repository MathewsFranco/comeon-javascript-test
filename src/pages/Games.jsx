import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';

const Games = () => {
  const [userData, setUserData] = useState();
  const [games, setGames] = useState();
  const [filteredCategory, setFilteredCategory] = useState(0);
  const [filteredWord, setFilteredWord] = useState();

  const [categories, setCategories] = useState();
  const navigate = useNavigate();

  // check if user is logged in
  const checkCredentials = () => {
    const userData = JSON.parse(localStorage.getItem('credentials'));
    console.log(`🚀 ~ userData`, userData);
    userData ? setUserData(userData) : navigate('/login');
  };

  const getGamesList = () => {
    fetch('http://localhost:3001/games', { method: 'get' })
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        console.log(`🚀 ~ games`, data);
      });
  };
  const getCategoriesList = () => {
    fetch('http://localhost:3001/categories', { method: 'get' })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log(`🚀 ~ categories`, data);
      });
  };

  const handleLogout = () => {
    fetch('http://localhost:3001/logout', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userData.username,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          localStorage.removeItem('credentials');
          return navigate('/login');
        }
        return console.log('looks like you are trapped');
      });
  };

  const filterByCategory = (categoryId) => {
    setFilteredCategory(categoryId);
  };

  const handleSearch = (e) => {
    setFilteredWord(e.target.value.toLowerCase());
  };

  useEffect(() => {
    checkCredentials();
    getGamesList();
    getCategoriesList();
  }, []);

  return (
    <Layout>
      <div className='casino'>
        <div className='ui grid centered'>
          <div className='twelve wide column'>
            <div className='ui list'>
              {/* <!-- player item template --> */}
              <div className='player item'>
                <img
                  className='ui avatar image'
                  src={userData && userData.avatar}
                  alt='avatar'
                />

                <div className='content'>
                  <div className='header'>
                    <b className='name'>{userData && userData.name}</b>
                  </div>
                  <div className='description event'>
                    {userData && userData.event}
                  </div>
                </div>
              </div>
              {/* <!-- end player item template --> */}
            </div>
            <div
              className='logout ui left floated secondary button inverted'
              onClick={handleLogout}
            >
              <i className='left chevron icon'></i>Log Out
            </div>
          </div>
          <div className='four wide column'>
            <div className='search ui small icon input '>
              <input
                type='text'
                placeholder='Search Game'
                onChange={(e) => handleSearch(e)}
              />
              <i className='search icon'></i>
            </div>
          </div>
        </div>
        <div className='ui grid'>
          <div className='twelve wide column'>
            <h3 className='ui dividing header'>Games</h3>

            <div className='ui relaxed divided game items links'>
              {/* <!-- game item template --> */}
              {games &&
                games.map((game) => {
                  const filteredByCategory =
                    game.categoryIds.includes(filteredCategory);

                  const filteredByword = filteredWord
                    ? game.name.toLowerCase().includes(filteredWord)
                    : true;
                  return (
                    <div
                      className='game item'
                      key={game.code}
                      style={{
                        display:
                          filteredByCategory && filteredByword
                            ? 'block'
                            : 'none',
                      }}
                    >
                      <div className='ui small image'>
                        <img src={game.icon} alt='game-icon' />
                      </div>
                      <div className='content'>
                        <div className='header'>
                          <b className='name'>{game.name}</b>
                        </div>
                        <div className='description'>{game.description}</div>
                        <div className='extra'>
                          <div className='play ui right floated secondary button inverted'>
                            Play
                            <i className='right chevron icon'></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {/* <!-- end game item template --> */}
            </div>
          </div>
          <div className='four wide column'>
            <h3 className='ui dividing header'>Categories</h3>

            <div className='ui selection animated list category items'>
              {/* <!-- category item template --> */}
              {categories &&
                categories.map((category) => (
                  <div
                    className='category item'
                    key={category.id}
                    onClick={() => filterByCategory(category.id)}
                  >
                    <div className='content'>
                      <div className='header'>{category.name}</div>
                    </div>
                  </div>
                ))}
              {/* <!-- end category item template --> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Games;
