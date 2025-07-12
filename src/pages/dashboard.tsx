export default function Dashboard() {
    function handleLogout() {
        localStorage.removeItem("@user");
        window.location.href = "/signin";
    }

    return (
        <div>
            <h1>Área privada - Dashboard</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
}
