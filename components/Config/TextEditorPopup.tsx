import React from 'react'
import Popup from '../Popups/BasePopup'
import TextEditor from './TextEditor'

interface TextEditorPopupProps {
  value: string
  setValue(arg: string): void
  showEditor: boolean
  setShowEditor(arg: boolean): void
  title: string
  handleFunction(): void
}

const TextEditorPopup = ({value, setValue, showEditor, setShowEditor, title, handleFunction}: TextEditorPopupProps) => {
  return (
    <Popup showState={showEditor} title={title} setShowState={setShowEditor} description='Uma boa descrição para o seu perfil de usuário é fundamental dentro de uma plataforma, pense bem e crie uma maneira de atrativa para atrair possíveis clientes para o seu perfil!'>
      <TextEditor setValue={setValue} value={value} />
      <button type='button' className='w-full py-2 mt-8 text-sm text-white bg-principal rounded-full text-center cursor-pointer transition-all duration-300 hover:brightness-105' onClick={handleFunction}>
        Confirmar alterações
      </button>
    </Popup>
  )
}

export default TextEditorPopup