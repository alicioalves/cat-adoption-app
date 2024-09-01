import { Icon } from '@iconify/react'

const Header: React.FC = () => {
  return (
    <header className="w-full pb-4 border-b border-grey-7 text-main flex items-center gap-2">
      <Icon icon="ph:cat-fill" className="w-12 h-12" />
      <h1 className="text-xl">Cat Adoption Platform</h1>
    </header>
  )
}

export default Header