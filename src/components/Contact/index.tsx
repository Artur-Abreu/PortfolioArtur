import { Container } from "../../styles/global";
import { TitleSections } from "../TitleSections";

import * as S from "./styles";

export const Contact = () => {
    return (
        <Container>
            <S.ContentContact id="contact">
                <TitleSections title="Contatos" />
                <S.TitleContact>Artur Damaceno Abreu</S.TitleContact>
                <S.TitleContact>Porto Alegre - RS</S.TitleContact>
                <S.TitleEmail href="mailto:arturabreu100@gmail.com">
                    arturabreu100@gmail.com
                </S.TitleEmail>
                <S.TitleContact>
                </S.TitleContact>
                <S.TitleContact>
                    <S.Call
                        href="https://github.com/ArturAbreuDev"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        Meu Linkedin
                    </S.Call>
                </S.TitleContact>

                <S.Copyrigth>
                    &copy; 2022 Todos direitos reservados a Artur Abreu
                </S.Copyrigth>
            </S.ContentContact>
        </Container>
    );
};
