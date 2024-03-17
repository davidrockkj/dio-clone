import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

const Home = () => {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <Button title='Teste 1' />
      <Button title='Teste 2' variant='secondary' />
      <Link to='/login'>Fazer login</Link>
    </>
  )
}

export { Home }