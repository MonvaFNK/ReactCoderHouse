function UserInfo() {
    const checkoutClose = () =>{
        let comprar = document.querySelector('.container')
        comprar.style.display = 'none'
    }

    function checkoutEnd(){
        alert('Gracias por comprar se le enviara un mail en la brevedad');
        let limpiar = document.querySelector('.cart__container--contenido');
        limpiar.innerHTML = '';
        let valor = document.querySelector('.cart__container--total');
        valor.innerHTML = '0'
        let item = document.querySelector('.cart__container');
        item.style.display = 'none';
        checkoutClose();
    }
    return (
        <div className="container">
            <div className="container__box">
                <label for="nombre" className="container__box--nombre">Nombre</label>
                <input type="text" placeholder="Jorge Lopez"/>
                <label for="Email" className="container__box--email">Email</label>
                <input type="text" placeholder="usuario@gmail.com"/>
                <label for="Contacto" className="container__box--contacto">Numero de telefono</label>
                <input type="text" placeholder="+(54) 1234-5678"/>
                <button className="container__box--salir" onClick={checkoutClose}>Continuar comprando</button>
                <button className="container__box--comprar" onClick={checkoutEnd}>Realizar Compra</button>
            </div>
        </div>
    )
}
export default UserInfo;