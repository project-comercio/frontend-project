import Popup from "@/components/Popups/BasePopup";
import type { UpdateUserProfileProps } from "./types";

export default function UpdateUserProfile({showState, setShowState}: UpdateUserProfileProps) {
  return showState ? (
    <Popup title="Editar Perfil" description="Deixe o seu perfil do seu jeito, aproveite nossa diversidade de recursos de personalização ao seu favor" setShowState={setShowState} showState={showState} >
      teste
    </Popup>
  ) : null
}