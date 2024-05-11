import { ConstantOne } from '@/assets/achievements/ConstantOne'
import { ConstantThree } from '@/assets/achievements/ConstantThree'
import { ConstantTwo } from '@/assets/achievements/ConstantTwo'
import { DedicatedOne } from '@/assets/achievements/DedicatedOne'
import { DedicatedThree } from '@/assets/achievements/DedicatedThree'
import { DedicatedTwo } from '@/assets/achievements/DedicatedTwo'
import { Devoted } from '@/assets/achievements/Devoted'
import { LockedAchievement } from '@/assets/achievements/LockedAchievement'
import { MoreThanAYear } from '@/assets/achievements/MoreThanAYear'
import { Pioneer } from '@/assets/achievements/Pioneer'
import { ProfissionalPro } from '@/assets/achievements/ProfessionalPro'
import { ProfissionalSr } from '@/assets/achievements/ProfessionalSr'
import { ProfissionalJr } from '@/assets/achievements/ProfissionalJr'
import { ProfissionalPl } from '@/assets/achievements/ProfissionalPl'
import { Punctual } from '@/assets/achievements/Punctual'
import { TwoFactorVerification } from '@/assets/achievements/TwoFactorVerification'
import { Container } from '@/components/toolkit/Container'

export const Features: React.FC = () => {
  return (
    <section className="bg-white">
      <Container data-cid="features-academy" className="w-full py-12 lg:py-20">
        <div className="w-full flex flex-col items-center">
          <h2 className="font-semibold text-2xl lg:text-4xl">
            Aqui você vai encontrar
          </h2>
          <p>teste de icones abaixo:</p>
          <div className="w-full flex flex-wrap gap-8 items-center">
            <ConstantOne className="w-32" />
            <ConstantTwo className="w-32" />
            <ConstantThree className="w-32" />
            <DedicatedOne className="w-32" />
            <DedicatedTwo className="w-32" />
            <DedicatedThree className="w-32" />
            <LockedAchievement className="w-32" />
            <MoreThanAYear className="w-32" />
            <Pioneer className="w-32" />
            <Devoted className="w-32" />
            <ProfissionalJr className="w-32" />
            <ProfissionalPl className="w-32" />
            <ProfissionalSr className="w-32" />
            <ProfissionalPro className="w-32" />
            <Punctual className="w-32" />
            <TwoFactorVerification className="w-32" />
          </div>
        </div>
      </Container>
    </section>
  )
}
