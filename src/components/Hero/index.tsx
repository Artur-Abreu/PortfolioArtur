import { Container } from "../../styles/global";
import gif from 'public/assets/gif.gif';
import Image from "next/image";

import * as S from "./styles";

export const Hero = () => {
    return (
        <Container>
            <S.ContentHero id="hero">
                <S.Wrapper>
                    <div>
                        <S.Title>
                            Olá, me chamo <br /> <S.Span>Artur Abreu</S.Span>
                        </S.Title>
                        <S.Paragraph>Desenvolvedor Web Front-End/Mobile</S.Paragraph>
                    </div>

                <Image src={gif} alt="Descrição do gif animado" />

                    
                </S.Wrapper>
            </S.ContentHero>
        </Container>
    );
};
