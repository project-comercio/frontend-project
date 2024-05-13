import { VscTools } from "react-icons/vsc";

export const DevelopmentDisclaimer: React.FC = () => {
  return (
    <section className="w-screen flex flex-col items-center justify-center min-h-[68vh] drop-shadow">
      <div className="max-w-md flex flex-col gap-4 items-center w-full bg-blue-50 rounded-md border border-blue-300 lg:p-8 p-2">
        <figure className="w-full flex justify-center">
          <VscTools size={52} className="blue-icon" />
        </figure>
        <h2 className="font-semibold text-center text-blue-600 text-lg">
          Essa página ainda está em desenvolvimento
        </h2>
        <p className="text-sm text-center text-blue-800">
          Quaisquer dúvidas, por favor entrar em contato com {' '}
          <span className="text-sm font-medium underline text-blue-600 cursor-pointer">
            Vitor Gabriel
          </span>
        </p>
      </div>
    </section>
  )
}
