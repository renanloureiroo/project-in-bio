import { TrendingUp } from 'lucide-react'

type VisitsCountProps = {
  visits: number
}

const VisitsCount = ({ visits }: VisitsCountProps) => {
  return (
    <div className="flex gap-5 items-center px-8 py-5 bg-background-secondary rounded-xl">
      <span className="text-heading-small text-nowrap">Total de visitas</span>

      <div className="flex gap-1 items-center">
        <span className="text-heading-medium text-nowrap text-accent-green">
          {visits}
        </span>
        <TrendingUp className="size-6 stroke-accent-green" />
      </div>
    </div>
  )
}

export { VisitsCount }
export type { VisitsCountProps }
