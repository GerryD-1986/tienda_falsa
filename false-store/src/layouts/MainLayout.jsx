import { Link, Outlet, useNavigate } from "react-router-dom";

const links = [
    { to: "/", label: "Home", authRequired: false },
    { to: "/productos", label: "Productos", authRequired: true },
    { to: "/login", label: "Login", authRequired: false },
];

export default function MainLayout(){
    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem("token");

    function handleLogout(){
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <main className="h-full min-h-dvh">
            <nav className="bg-white/50 flex flex-row justify-around text-lg p-1 font-semibold">
                {links.map((link)=>{
                    if(link.authRequired && !isAuth) return null;
                    if(isAuth && link.to == "/login") return null;

                    return(
                        <Link key={`link-${link.to}`} to={link.to}
                        className="hover:bg-black/50 w-full h-full text-center p-2 cursor-pointer"
                        >
                          {link.label}
                        </Link>
                    );
                })}
              {isAuth && (
                <button
                onClick={handleLogout}
                className="hover:bg-black/50 w-full h-full text-center p-2 cursor-pointer"
                >
                    Salir
                </button>
              )}
            </nav>
            <Outlet />
        </main>
    )
}