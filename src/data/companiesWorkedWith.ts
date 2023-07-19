import { getImage } from 'astro:assets'
import WhenIWork from '@/assets/images/company-logos/when-i-work-logo.svg'
import Space150 from '@/assets/images/company-logos/space-logo.svg'
import Nike from '@/assets/images/company-logos/nike-logo.svg'
import Cargill from '@/assets/images/company-logos/cargill-logo.svg'
import ThreeM from '@/assets/images/company-logos/3M-logo.svg'
// import RedWing from '@/assets/images/company-logos/red-wing-logo.svg'
import PhillipsDistilling from '@/assets/images/company-logos/phillips-logo.svg'
import TomSachs from '@/assets/images/company-logos/tom-sachs-logo.svg'
import WPEngine from '@/assets/images/company-logos/WPE-LOGO-H-Default.svg'
import SMM from '@/assets/images/company-logos/science-museum-of-minnesota.svg'

const whenIWork = await getImage({src: WhenIWork})
const space150 = await getImage({src: Space150})
const nike = await getImage({src: Nike})
const cargill = await getImage({src: Cargill})
const threeM = await getImage({src: ThreeM})
// const redWing = await getImage({src: RedWing})
const phillipsDistilling = await getImage({src: PhillipsDistilling})
const tomSachs = await getImage({src: TomSachs})
const wpEngine = await getImage({src: WPEngine})
const smm = await getImage({src: SMM})
export const companiesWorkedWith = [
  {
    name: "When I Work",
    href: "/",
    logo: whenIWork.src,
    width: "250",
    height: "64",
    lightBg: true,
  },
  {
    name: "SPACE150",
    href: "/about",
    logo: space150.src,
    width: "250",
    height: "95",
    lightBg: true,
  },
  {
    name: "Nike",
    href: "#",
    logo: nike.src,
    width: "250",
    height: "75",
    lightBg: true,
  },
  {
    name: "Cargill",
    href: "#",
    logo: cargill.src,
    width: "250",
    height: "81",
    lightBg: true,
  },
  {
    name: "3M",
    href: "#",
    logo: threeM.src,
    width: "250",
    height: "95",
    lightBg: true,
  },
  {
    name: "Phillips Distilling Company",
    href: "#",
    logo: phillipsDistilling.src,
    width: "250",
    height: "93",
    lightBg: true,
  },
  {
    name: "Tom Sachs",
    href: "#",
    logo: tomSachs.src,
    width: "250",
    height: "64",
    lightBg: true,
  },
  {
    name: "WP Engine",
    href: "#",
    logo: wpEngine.src,
    width: "250",
    height: "95",
    lightBg: true,
  },
  {
    name: "Science Museum of Minnesota",
    href: "#",
    logo: smm.src,
    width: "250",
    height: "95",
    lightBg: true,
  },
];
