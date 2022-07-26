import { userService } from 'services';
import { Link } from 'components';
import Image from "next/image";

export default Home;

function Home() {
    return (
        <div className="p-4">
            <div className="container">
                
                <h1>Bienvenido a MuniPay {userService.userValue?.firstName}!</h1>
                <p>Ingreso correcto 
                </p>
                <button className="btn btn-light" ><Link href="/users">Gestionar usuarios</Link></button>
            </div>
        </div>
    );
}
