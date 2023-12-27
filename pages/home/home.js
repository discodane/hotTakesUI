'use-client'
import Link from 'next/link'

export default function Home({data}) {
  console.log(data, 'in home');
  return (
    <div>
      <h1>HotTakes</h1>
      <ul>
        { data.map(caster => {
          return (
            <li key={caster.name}>
              <Link href={{
                pathname: "/profile/profile",
                query: {
                  caster: JSON.stringify(caster),
                },
              }}>{ caster.name }</Link>
            </li>
          )
        })}
      </ul>
      <Link href={'../addEditCaster/addEditCaster'}>Add Caster</Link>
    </div>
  )
}