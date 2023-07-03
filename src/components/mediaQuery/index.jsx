import Qr from "../../assets/qr.svg";
export default function index() {
  return (
    <div className="hidden md:flex w-80 p-10 py-12 rounded bg-wapp-verde text-white flex-col justify-center items-center gap-2">
      <h2 className="text-lg font-bold">Ingresa escaneando acá</h2>
      <h4 className="text-lg">👇</h4>
      <img src={Qr} alt="" />
    </div>
  );
}
