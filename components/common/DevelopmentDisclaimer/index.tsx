import { VscTools } from "react-icons/vsc";

export const DevelopmentDisclaimer: React.FC = () => {
  return (
    <section className="w-screen flex flex-col items-center justify-center min-h-[62vh] drop-shadow">
      <div className="max-w-md flex flex-col items-center w-full bg-blue-50 rounded-md border border-blue-300 lg:p-8 p-4">
        <h2 className="font-semibold text-blue-800 text-lg">Página em desenvolvimento</h2>
        <p className="text-sm text-blue-800">Qualquer erro entrar em contato com <span className="text-sm font-medium underline text-blue-800 cursor-pointer">Vitor Gabriel</span></p>
        <figure className="mt-4 w-full flex justify-center">
        <VscTools size={42} className="bold-blue-icon" />
        </figure>
      </div>
    </section>
  )
}