import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://ping.pub/logo.svg',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  // if (isTestnet()) {
  //   chainMenus.push({
  //     title: 'Mainnet Explorer',
  //     href: 'https://ping.pub',
  //     icon: 'ChromeIcon',
  //   })
  // } else {
  //   chainMenus.push({
  //     title: 'Testnet Explorer',
  //     href: 'http://testnet.ping.pub',
  //     icon: 'LifeBuoyIcon',
  //   })
  // }
  chainMenus.push({
    title: 'Website',
    href: 'https://alymov.dev',
    icon: 'GlobeIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/ralymov',
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/HitNails',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Telegram',
    href: 'https://t.me/ralymov',
    icon: 'SendIcon',
  })

  return chainMenus
}

export default processMenu()
