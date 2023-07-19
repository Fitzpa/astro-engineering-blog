import { getImage } from 'astro:assets'
import WhenIWork from '@/assets/images/previous-work/when-i-work.webp'
import Space from '@/assets/images/previous-work/space.webp'
import RedWing from '@/assets/images/previous-work/red-wing.webp'
import Cubist from '@/assets/images/previous-work/cubist.webp'
import UV from '@/assets/images/previous-work/uv.webp'
import WPEngine from '@/assets/images/previous-work/wp-engine.webp'
import NikeCraft from '@/assets/images/previous-work/nikecraft.webp'

const whenIWork = await getImage({src: WhenIWork})
const space = await getImage({src: Space})
const redWing = await getImage({src: RedWing})
const cubist = await getImage({src: Cubist})
const uv = await getImage({src: UV})
const wpEngine = await getImage({src: WPEngine})
const nikeCraft = await getImage({src: NikeCraft})

export const workSectionData = [
  {
    name: "When I Work",
    role: "Frontend Software Engineer",
    path: whenIWork.src,
  },
  {
    name: "SPACE150",
    role: "Frontend Software Engineer",
    path: space.src,
  },
  {
    name: "Red Wing Shoes",
    role: "Frontend Software Engineer",
    path: redWing.src,
  },
  {
    name: "Phillips Distilling Company",
    role: "Frontend Software Engineer",
    path: cubist.src,
  },
  {
    name: "Phillips Distilling Company",
    role: "Frontend Software Engineer",
    path: uv.src,
  },
  {
    name: "WP Engine",
    role: "Frontend Software Engineer",
    path: wpEngine.src,
  },
  {
    name: "Nike X Tom Sachs",
    role: "Fullstack Software Engineer",
    path: nikeCraft.src,
  },
];
