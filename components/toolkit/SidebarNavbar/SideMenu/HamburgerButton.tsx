import { HamburgerButtonProps } from './types'

const genericHamburgerLine = `h-[2px] w-5 my-[2px] rounded-full bg-slate-50 transition ease transform duration-default`

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick
}) => {
  return (
    <button
      className="group flex flex-col items-center justify-center rounded-sm bg-slate-800 p-2 duration-default hover:bg-slate-700"
      onClick={onClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'translate-y-1.5 rotate-45' : ''
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : ''}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? '-translate-y-1.5 -rotate-45' : ''
        }`}
      />
    </button>
  )
}
