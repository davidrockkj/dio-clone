import { FiThumbsUp } from 'react-icons/fi'

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://img.freepik.com/premium-vector/web-development-coding-programming-futuristic-banner-computer-code-laptop_3482-5582.jpg' />
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/62350916?v=4' />
          <div>
            <h4>David Rocha</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito para o curso de HTML e CSS no bootcamp dio do Global avanade... <strong>Saiba Mais!</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card };