/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@emotion/react"
import { mobileCss } from "../../theme/isMobile"
import { MyButton } from "../../components/button/MyButton"
import { MainConfig } from "../../../config/MainConfig"
import { openUrl } from "../../util/openUrl"

export const ATTRACTIONS_ID = 'attractions'

const AttractionsContentStyle = withMyTheme((theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('/images/peach_background_30.png');
    padding: 5rem 0;
    min-height: 75vh;
    width: 100%;
    color: ${theme.palette.text.primary};
    ${mobileCss(css`
        padding: 3rem 0;
        height: auto;
        min-height: none;
    `)}
`)

const AttractionsTitleStyle = withMyTheme((theme) => css`
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-family: ${theme.typography.h1.fontFamily};
    color: ${theme.palette.primary.main};
    margin-bottom: 3rem;
    text-align: center;
    ${mobileCss(css`
        font-size: clamp(2rem, 8vw, 3rem);
        margin-bottom: 2rem;
    `)}
`)

const AttractionsGridStyle = withMyTheme(() => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 0 2rem;
    ${mobileCss(css`
        flex-direction: column;
        gap: 1.5rem;
    `)}
`)

const AttractionCardStyle = withMyTheme((theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background: ${theme.palette.background.paper};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 350px;
    max-width: 90vw;
    text-align: center;
    gap: 1rem;
`)

const AttractionCardTitleStyle = withMyTheme((theme) => css`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${theme.palette.primary.main};
    font-family: ${theme.typography.h1.fontFamily};
`)

const AttractionCardDescriptionStyle = withMyTheme((theme) => css`
    font-size: 1rem;
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.body1.fontFamily};
    line-height: 1.6;
    margin-bottom: 1rem;
    white-space: pre-line;
`)

const AttractionCardFooterStyle = withMyTheme((theme) => css`
    font-size: 0.9rem;
    color: ${theme.palette.text.secondary};
    font-family: ${theme.typography.body1.fontFamily};
    font-style: italic;
`)

const QuizButtonStyle = withMyTheme(() => css`
    background-color: #d8b8ad;
    color: white;
    &:hover {
        background-color: #c9a79d;
    }
`)

interface AttractionCardProps {
    title: string;
    description: string;
    footer?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    disabled?: boolean;
}

const AttractionCard = ({ title, description, footer, buttonText, onButtonClick, disabled }: AttractionCardProps) => {
    return (
        <div css={AttractionCardStyle}>
            <div css={AttractionCardTitleStyle}>{title}</div>
            <div css={AttractionCardDescriptionStyle} dangerouslySetInnerHTML={{ __html: description }} />
            {buttonText && onButtonClick && (
                <MyButton
                    text={buttonText}
                    variant="contained"
                    onClick={onButtonClick}
                    additionalCss={QuizButtonStyle}
                    disabled={disabled}
                />
            )}
            {footer && <div css={AttractionCardFooterStyle}>{footer}</div>}
        </div>
    )
}

export const Attractions = () => {
    const { t } = useTranslation()

    const isQuizEnabled = () => {
        const quizStartDate = new Date('2025-07-07')
        const currentDate = new Date()
        return currentDate >= quizStartDate
    }

    const attractions = [
        {
            title: t('attractions.quiz.title'),
            description: t('attractions.quiz.description'),
            buttonText: t('attractions.quiz.button'),
            onButtonClick: () => { openUrl(MainConfig.attractions.quizUrl) },
            disabled: !isQuizEnabled()
        },
        {
            title: t('attractions.bingo.title'),
            description: t('attractions.bingo.description'),
            footer: t('attractions.bingo.footer')
        },
        {
            title: t('attractions.guestBook.title'),
            description: t('attractions.guestBook.description'),
            footer: t('attractions.guestBook.footer')
        }
    ]

    return (
        <section id={ATTRACTIONS_ID} css={AttractionsContentStyle}>
            <h2 css={AttractionsTitleStyle}>{t('attractions.title')}</h2>
            <div css={AttractionsGridStyle}>
                {attractions.map((attraction, index) => (
                    <AttractionCard
                        key={index}
                        title={attraction.title}
                        description={attraction.description}
                        footer={attraction.footer}
                        buttonText={attraction.buttonText}
                        onButtonClick={attraction.onButtonClick}
                        disabled={attraction.disabled}
                    />
                ))}
            </div>
        </section>
    )
} 
