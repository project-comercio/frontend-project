import { Container } from '@/components/toolkit/Container'
import { FEATURES_DATA } from './data'
import { Feature } from './types'
import { FeatureCard } from './FeatureCard'

export const Features: React.FC = () => {
  return (
    <section className="bg-white">
      <Container data-cid="features-academy" className="w-full py-12 lg:py-20">
        <div className="w-full flex flex-col items-center">
          <h2 className="font-semibold text-2xl lg:text-4xl">
            Aqui você vai encontrar
          </h2>
          <div className="py-12 lg:py-20 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 place-items-center w-full">
            {FEATURES_DATA.map((feature: Feature, index: number) => (
              <FeatureCard
                featureItem={feature}
                key={`${feature.title}-${index}`}
              />
            ))}
          </div>
          <button className="mt-8 text-sm bg-gradient-to-tr from-blue-600 to-blue-500 transition-all duration-300 hover:brightness-110 text-white rounded-md px-12 py-2">
            Quero saber mais
          </button>
        </div>
      </Container>
    </section>
  )
}
