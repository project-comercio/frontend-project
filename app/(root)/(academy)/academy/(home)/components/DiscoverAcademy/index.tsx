import { Container } from '@/components/toolkit/Container'
import { CARD_CONTENT } from './data'
import { Card } from './types'
import { CardItem } from './Card'

export const DiscoverAcademy: React.FC = () => {
  return (
    <section className="bg-white">
      <Container
        data-cid="discover-academy"
        className="max-w-5xl w-full py-12 lg:py-20"
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="font-semibold text-2xl lg:text-4xl">Descubra o Academy</h2>
          <div className="w-full flex justify-between gap-8 items-center py-12">
            {CARD_CONTENT.map((card: Card, index: number) => (
              <CardItem cardItem={card} key={`${card.title}-${index}`} />
            ))}
          </div>
          <button className="ease-in-out text-sm bg-gradient-to-tr from-blue-600 drop-shadow-sm to-blue-500 transition-all duration-300 hover:brightness-110 text-white rounded-md px-12 py-2">
            Quero saber mais
          </button>
        </div>
      </Container>
    </section>
  )
}
