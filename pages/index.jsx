import { userService } from "services";
import { Link } from "components";
import Image from "next/image";
import munipay from '../public/images/munipay.png'
export default Home;


function Home() {
  return (
    <div className="p-4" >
      <div className="container" style={{display: "flex", flexDirection: "column",justifyContent: "space-evenly",alignItems: "center"}}>
        <Image
          src={munipay}
          alt="Logo"
          width={75}
          height={75}
        />
        <h1>Bienvenido a MuniPay {userService.userValue?.firstName}!</h1>
        <p>Ingreso correcto</p>
        <button className="btn btn-light">
          <Link href="/users">Gestionar usuarios</Link>
        </button>
      </div>
    </div>
  );
}
