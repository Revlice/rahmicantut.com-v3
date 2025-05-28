const Footer = () => {
    return (
        <footer className="w-full bg-background text-gray-300 p-6 justify-center flex flex-col items-center space-y-2">
            <h6 className="text-sm md:text-base font-semibold">
                © 2025 <span className='bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent'>Rahmican TUT</span>
            </h6>
            <span className="text-xs md:text-sm text-gray-400">
        Made with ⚡ by <span className="font-medium">Rahmican Tut</span>
      </span>
        </footer>
    );
};

export default Footer;
