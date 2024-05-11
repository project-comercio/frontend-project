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

export const Achievements: React.FC = () => {
  return (
    <section className="bg-white">
      <Container data-cid="achievements-academy" className="w-full py-12 lg:py-20">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-wrap gap-8 items-center">
            <ConstantOne className="w-28" />
            <ConstantTwo className="w-28" />
            <ConstantThree className="w-28" />
            <DedicatedOne className="w-28" />
            <DedicatedTwo className="w-28" />
            <DedicatedThree className="w-28" />
            <LockedAchievement className="w-28" />
            <MoreThanAYear className="w-28" />
            <Pioneer className="w-28" />
            <Devoted className="w-28" />
            <ProfissionalJr className="w-28" />
            <ProfissionalPl className="w-28" />
            <ProfissionalSr className="w-28" />
            <ProfissionalPro className="w-28" />
            <Punctual className="w-28" />
            <TwoFactorVerification className="w-28" />
          </div>
        </div>
      </Container>
    </section>
  )
}
