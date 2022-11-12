import React from 'react';
import Layout from '../Layout';

const Login = () => {
  return (
    <Layout>
      <div class='login'>
        <div class='ui grid centered'>
          <form>
            <div class='fields'>
              <div class='required field'>
                <div class='ui icon input'>
                  <input type='text' name='username' placeholder='Username' />
                  <i class='user icon'></i>
                </div>
              </div>
              <div class='required field'>
                <div class='ui icon input'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                  <i class='lock icon'></i>
                </div>
              </div>
              <div class='field'>
                <div class='ui icon input'>
                  <input type='submit' value='Login' />
                  <i class='right chevron icon'></i>
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
