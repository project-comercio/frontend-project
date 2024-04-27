import { getMetaData } from '@/utils/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: 'Perfil Empresarial',
    description: 'Personalize essa secão e deixa ela com a cara da sua empresa',
    image: ''
  })
}

export default function Page() {
  return <div>company page</div>
}
