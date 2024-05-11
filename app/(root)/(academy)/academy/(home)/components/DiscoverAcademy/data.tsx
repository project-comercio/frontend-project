import { Achievements } from '../icons/Achievements'
import { Geolocation } from '../icons/Geolocation'

export const CARD_CONTENT = [
  {
    icon: 'geolocation',
    title: 'Todos os conteúdos em um lugar só',
    description:
      'Navegue de forma prática e rápida pelos melhores materiais, úteis para o seu dia a dia, organizados por temas e formatos. Participe de eventos diretamente na plataforma e fique por dentro de tudo que acontece na comunidade.'
  },
  {
    icon: 'achievements',
    title: 'Ganhe conquistas ao longo do percurso',
    description:
      'Aqui você encontrará uma experiência única para estimular seu aprendizado e acompanhar seu desenvolvimento. Conforme você assiste às aulas, baixa materiais e participa de ações, você será recompensado com pontos e selos.'
  }
]

export const DISCOVER_ICONS: any = {
  geolocation: <Geolocation className="lg:w-16 w-8 text-yellow-500" />,
  achievements: <Achievements className="lg:w-16 w-8 text-yellow-500" />
}
