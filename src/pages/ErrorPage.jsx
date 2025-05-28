import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-yellow-400 px-4">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-2xl mt-4 text-yellow-300">Oops! Sayfa bulunamadı.</p>
            <p className="text-lg mt-2 text-yellow-500">Aradığınız sayfa mevcut değil ya da taşınmış olabilir.</p>

            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition duration-300"
            >
                Ana Sayfaya Dön
            </Link>
        </div>
    );
};

export default ErrorPage;
