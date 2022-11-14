import { useNavigate } from 'react-router-dom';
import useToast from '../hooks/useToast';
import Layout from '../Layout';

const Login = () => {
  const navigate = useNavigate();
  const { errorToast, successToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    fetch('http://localhost:3001/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          localStorage.setItem(
            'credentials',
            JSON.stringify({ username, ...data.player })
          );
          successToast(`Welcome ${data.player.name}`);
          return navigate('/');
        }

        errorToast(data.error);
      });
  };

  return (
    <Layout>
      <div className='login'>
        <div className='ui grid centered'>
          <form onSubmit={handleSubmit}>
            <div className='fields'>
              <div className='required field'>
                <div className='ui icon input'>
                  <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    required
                  />
                  <i className='user icon'></i>
                </div>
              </div>
              <div className='required field'>
                <div className='ui icon input'>
                  <input
                    required
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                  <i className='lock icon'></i>
                </div>
              </div>
              <div className='field'>
                <div className='ui icon input'>
                  <input type='submit' value='Login' />
                  <i className='right chevron icon'></i>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
