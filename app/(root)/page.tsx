import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  const loggedIn = {firstName : 'Sultan'}
  return (
    <section className='home' >
      <div className="home-content">
        <header className='home-header'>
            <HeaderBox
            type='greeting'
            title='welcome'
            user={loggedIn.firstName ?? 'Guest '}
            subtext='Access and mange your account and transactions efficiently .'
            />
            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35} />
        </header>
      </div>

    </section>
  )
}

export default Home