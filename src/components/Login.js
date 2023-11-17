import "./Login.css";

function Login() {

    return (
        <div class="container">
            <div class="login">
                <h1 class="title-login">Login</h1>
                <input class="txt-user" type="text" placeholder="Usuário"></input>
                <input class="psw-password" type="password" placeholder="Senha"></input>
                <button class="btn-entry">Entrar</button>
            </div>
        </div>
    );
}

export default Login;