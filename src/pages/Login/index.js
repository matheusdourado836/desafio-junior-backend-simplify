import appLogo from 'assets/images/notebook-logo.png';
import LoginForm from 'components/LoginForm';

export default function Form() {
    return (
        <>
        <div className="flex h-screen w-full bg-cyan-100 flex-1 flex-col justify-center px-6 py-10 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-14 w-auto"
                src={appLogo}
                alt="App logo"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
                Bem-Vindo ao TaskMaster
              </h2>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Entre na sua conta
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <LoginForm />
              <p className="mt-10 text-center text-sm text-gray-500">
                Não tem uma conta?{' '}
                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Cadastre-se
                </a>
              </p>
            </div>
          </div>
        </>
    );
}