const NavBar = () => {
    return (
        <nav className="w-full flex items-center justify-between py-4 px-16 bg-white">
            <div className="text-xl font-bold">Shreya Jamnadas</div>
            <div className="flex space-x-4">
                <a href="#about" className="hover:underline">About</a>
                <a href="#career" className="hover:underline">Career</a>
                <a href="#projects" className="hover:underline">Projects</a>
                <a href="#tech-stack" className="hover:underline">Tech Stack</a>
                <a href="#contact" className="hover:underline">Contact Me</a>
            </div>
        </nav>
    );
};

export default NavBar;