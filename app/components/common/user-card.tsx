import Image from 'next/image'
import { LinkButton, LinkButtonProps } from './link-button'
import { Button } from '../ui'
import { VisitsCount } from './visits-count'

type UserCardProps = {
  avatar?: string
  name: string
  position: string
  links: LinkButtonProps[]
  visits: number
}

const UserCard = ({
  name,
  links,
  position,
  visits,
  avatar = ''
}: UserCardProps) => {
  return (
    <div
      className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white
        border-opacity-10 bg-[#121212] rounded-3xl text-white"
    >
      {/* header */}
      <div className="size-48">
        <Image
          src={avatar}
          width={`${192}`}
          height={`${192}`}
          alt="Avatar"
          className="rounded-full object-cover w-full h-full overflow-hidden"
        />
      </div>

      <div className="flex flex-col items-start gap-2 w-full px-3">
        <h3 className="text-[2rem] leading-tight font-medium">{name}</h3>
        <p className="text-body-medium text-content-headline">{position}</p>
      </div>

      {/* body */}
      <div className="h-[1px] bg-background-quaternary w-[calc(100%-24px)] mx-auto" />

      <div className="flex flex-col w-full gap-2">
        <span className="uppercase text-xs font-medium">links</span>

        <div className="flex gap-3 flex-wrap">
          {links.map(link => (
            <LinkButton key={link.icon} {...link} />
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-background-quaternary w-[calc(100%-24px)] mx-auto" />

      <div className="w-full relative pb-[84px]">
        <Button className="w-full mb-2">Confira meu template Saas</Button>

        <div className="absolute -right-2/4 z-10">
          <VisitsCount visits={visits} />
        </div>
      </div>
    </div>
  )
}

export { UserCard }
