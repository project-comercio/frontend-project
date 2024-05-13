import { FEATURES_ICONS } from '../data'
import { FeatureCardItem } from '../types'

export const FeatureCard: React.FC<FeatureCardItem> = ({ featureItem }) => {
  return (
    <article className="w-full flex items-center flex-col gap-2 lg:last:col-span-1 last:col-span-2">
      <figure>{FEATURES_ICONS[featureItem.icon]}</figure>
      <h3 className="pt-2 font-semibold text-base lg:text-xl">
        {featureItem.title}
      </h3>
      <p className="text-xs max-w-[260px] sm:text-sm text-slate-500 text-center">
        {featureItem.description}
      </p>
    </article>
  )
}
