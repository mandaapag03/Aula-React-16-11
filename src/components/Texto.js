function Texto(obj) {
    console.log(obj)
    return (
        <div>
            <h1>Meu primeiro componente {obj.obj}</h1>
            <input type="text"></input>
        </div>
    );
}

export default Texto;