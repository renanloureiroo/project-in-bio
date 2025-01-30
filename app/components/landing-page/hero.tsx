import { LinkButtonProps } from '../common/link-button'
import { UserCard } from '../common/user-card'
import { Button, Input } from '../ui'

const links: LinkButtonProps[] = [
  {
    href: 'https://linkedin.com/in/renanloureiroo',
    icon: 'linkedin'
  },
  {
    href: 'https://github.com/renanloureiroo',
    icon: 'github'
  },
  {
    href: 'https://instagram.com/renanloureiroo',
    icon: 'instagram'
  },
  {
    href: 'https://twitter.com/renanloureiroo',
    icon: 'twitter'
  },
  {
    href: 'https://dribbble.com/renanloureiroo',
    icon: 'dribbble'
  },
  {
    href: 'https://www.youtube.com/@renanloureiro9564',
    icon: 'youtube'
  }
]

export const Hero = () => {
  return (
    <div className="flex">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-heading-large">
          Seus projetos e redes sociais em um único link
        </h1>

        <h2 className="text-body-large">
          Crie sua própria página de projetos e compartilhe eles com o mundo.
          <br />
          Acompanhe o engajamento com Analytics de cliques
        </h2>

        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-body-large text-content-heading">
            projectinbio.com/
          </span>
          <Input placeholder="Seu link" />
          <Button>Criar agora</Button>
        </div>
      </div>

      <div
        className="w-full flex items-center justify-center bg-[radial-gradient(circle at 50% 50%,
          accent-accent-purple, transparent 55%)]"
      >
        <div className="relative">
          <UserCard
            name="Renan Loureiro"
            position="Software Engineer"
            links={links}
            visits={1234}
            avatar="/me.webp"
          />
          <div className="absolute -bottom-[7%] -right-[45%]">
            {/* <TotalVisits/> */}
          </div>

          <div className="absolute top-[20%] -left[45%] -z-10">
            {/* <ProjectCard/> */}
          </div>

          <div className="absolute -top-[5%] -left[55%] -z-10">
            {/* <ProjectCard/> */}
          </div>
        </div>
      </div>
    </div>
  )
}
