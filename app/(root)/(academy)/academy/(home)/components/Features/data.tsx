import { Achievements } from "../icons/Achievements"
import { Articles } from "../icons/Articles"
import { Documents } from "../icons/Documents"
import { LikeThumb } from "../icons/LikeThumb"
import { PdfArchive } from "../icons/PdfArchive"
import { People } from "../icons/People"
import { Quiz } from "../icons/Quiz"
import { Routine } from "../icons/Routine"
import { Video } from "../icons/Video"


export const FEATURES_DATA = [
  {
    icon: 'video',
    title: 'Vídeos',
    description: 'Aprenda assistindo aos nossos vídeos em playlists por tema'
  },
  {
    icon: 'articles',
    title: 'Artigos',
    description: 'Estude lendo textos técnicos sobre os principais do mercado'
  },
  {
    icon: 'documents',
    title: 'Ebooks e Checklists',
    description: 'Baixe ebooks e checklists feitos por nossos especialistas'
  },
  {
    icon: 'pdf',
    title: 'PDFs',
    description: 'Acesse materiais prontos para download e impressão'
  },
  {
    icon: 'quiz',
    title: 'Quiz',
    description: 'Teste seu conhecimento em poucos minutos'
  },
  {
    icon: 'routine',
    title: 'Horário Flexível',
    description: 'Assista o material a qualquer hora do seu dia'
  },
  {
    icon: 'like',
    title: 'Redes Sociais',
    description: 'Aproveite os melhores conteúdos de como engajar nas redes sociais'
  },
  {
    icon: 'achievements',
    title: 'Medalhas',
    description: 'Obtenha medalhas e conquistas ao usar a nossa plataforma'
  },
  {
    icon: 'people',
    title: 'Crescimento',
    description: 'Impulse o seu comércio e se torne referência no seu nicho'
  }
]

export const FEATURES_ICONS: any = {
  video: <Video className="w-8 lg:w-16" />,
  articles: <Articles className="w-8 lg:w-16" />,
  documents: <Documents className="w-8 lg:w-16" />,
  pdf: <PdfArchive className="w-8 lg:w-16" />,
  quiz: <Quiz className="w-8 lg:w-16" />,
  routine: <Routine className="w-8 lg:w-16" />,
  like: <LikeThumb className="w-8 lg:w-16" />,
  achievements: <Achievements className="w-8 lg:w-16" />,
  people: <People className="w-8 lg:w-16" />
}
