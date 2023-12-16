import { useRouter } from "next/router"
import Link from 'next/link'

export const Prediction = props => {
  const router = useRouter();
  return (
    <Link href={{
      pathname: '/prediction/prediction',
      query: {
        ...props,
      }
    }}>
      <div>{props.title}</div>
    </Link>
  )
}