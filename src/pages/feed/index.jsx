// import { Link } from 'react-router-dom'

import { Card } from '../../components/Card'
import { Header } from '../../components/Header'

import {
  Container,
} from './styles'

const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Card />
      </Container>
    </>
  )
}

export { Feed }