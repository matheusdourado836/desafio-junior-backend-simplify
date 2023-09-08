import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from 'components/Loading';
import { UserContext } from 'context/UserContext';
import { v4 as uuid } from 'uuid';

export default function LoginForm() {
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [setPassword] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleLogin = () => {
      const user = {
        id: uuid(),
        username: email.split('@')[0]
      };
      setLoading(true);
  
      setTimeout(() => {
        if (user) {
          setUser(user);
          navigate(`/home/${user.id}`, user);
        } else {
          alert('Login falhou. Verifique suas credenciais.');
        }

        setLoading(false); 
      }, 2000)
    };

    return (
        <>
          {loading
            ? <Loading />
            : <form className="space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-8 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Senha
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

              <div>
                  <button
                  type="submit"
                  onClick={handleLogin}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                  Entrar
                  </button>
              </div>
        </form>
          }
        </>
    )
}