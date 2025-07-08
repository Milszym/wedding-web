/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next"
import { withMyTheme } from "../../theme/theme"
import { css, Theme } from "@emotion/react"
import { mobileCss } from "../../theme/isMobile"
import NavigationIcon from '@mui/icons-material/Navigation'

export const ACCOMODATION_ID = 'accomodation'

const AccomodationContentStyle = withMyTheme((theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 5rem 0;
    min-height: 75vh;
    width: 100vw;
    color: ${theme.palette.text.primary};
    ${mobileCss(css`
        padding: 3rem 0;
        height: auto;
    `)}
`)

const AccomodationTitleStyle = withMyTheme((theme) => css`
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-family: ${theme.typography.h1.fontFamily};
    color: #e6b6a7;
    margin-bottom: 1.2rem;
    text-align: center;
    font-weight: 400;
    font-style: italic;
    ${mobileCss(css`
        font-size: clamp(2rem, 8vw, 3rem);
        margin-bottom: 1.5rem;
    `)}
`)

const AccomodationSubtitleStyle = withMyTheme((theme) => css`
    font-size: 1.2rem;
    font-family: ${theme.typography.body1.fontFamily};
    color: ${theme.palette.text.primary};
    margin-bottom: .6rem;
    text-align: center;
    font-weight: 400;
`)

const AccomodationParagraphStyle = withMyTheme((theme) => css`
    font-size: 1.1rem;
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.body1.fontFamily};
    line-height: 1.6;
    margin-bottom: .4rem;
    max-width: 50vw;
    text-align: center;
    white-space: pre-line;
    ${mobileCss(`
        max-width: 85vw;    
    `)}
`)

const AccomodationImageStyle = withMyTheme(() => css`
    display: block;
    margin: 2rem auto 0 auto;
    max-width: 50vw;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    ${mobileCss(`
        max-width: 85vw;    
    `)}
`)

const AccomodationImageWrapperStyle = withMyTheme(() => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50vw;
    width: 100%;
    margin: 2rem auto 0 auto;
    ${mobileCss(`
        max-width: 85vw;    
    `)}
`)

const PhoneRowStyle = withMyTheme((theme) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    margin: 1.2rem 0 0.2rem 0;
`)

const PhoneNumberStyle = withMyTheme((theme) => css`
    color: ${theme.palette.primary.main};
    font-size: 1.15rem;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.18s cubic-bezier(.4,2,.6,1), color 0.18s;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
        color: ${theme.palette.primary.dark};
    }
    ${mobileCss(`
        font-size: 3vw;
    `)}
`)

const accomodationLinks = {
    pierogarnia: 'https://maps.app.goo.gl/RhQYWGZ9FHqfcbGV9', 
    pensjonatStajnia: 'https://maps.app.goo.gl/6ScsC6rbHGbDjoNu9',
    dworek: 'https://maps.app.goo.gl/AnmxHf8em8EtkoUF8',
    salaWeselna: 'https://maps.app.goo.gl/hhsURMWEM4CuZAWW8',
}

const labelPositions = [
    {
        key: 'pierogarnia',
        top: '68%',
        left: '44%'
    },
    {
        key: 'pensjonatStajnia',
        top: '31%',
        left: '15%'
    },
    {
        key: 'dworek',
        top: '77%',
        left: '65%'
    },
    {
        key: 'salaWeselna',
        top: '54%',
        left: '71%'
    }
]

const InteractiveLabelStyle = withMyTheme(() => css`
    position: absolute;
    background: rgba(255,255,255,0.85);
    padding: 0.2em 0.7em;
    border-radius: 8px;
    font-size: 1.1rem;
    font-family: inherit;
    white-space: nowrap;
    color: #a67c52;
    font-weight: 600;
    box-shadow: 0 1px 4px rgba(0,0,0,0.07);
    cursor: pointer;
    pointer-events: auto;
    transition: transform 0.2s cubic-bezier(.4,2,.6,1), box-shadow 0.2s;
    z-index: 2;
    &:hover {
        transform: scale(1.18) translate(-50%, -50%);
        box-shadow: 0 4px 16px rgba(0,0,0,0.13);
    }
    ${mobileCss(`
        font-size: 2.3vw;
    `)}
`)

const IconStyle = withMyTheme(() => css`
    font-size: 1.1em;
    margin-right: 0.35em;
    vertical-align: middle;
`)

export const Accomodation = () => {
    const { t } = useTranslation()
    const handleLabelClick = (key: string) => {
        const url = accomodationLinks[key as keyof typeof accomodationLinks]
        if (url) window.open(url, '_blank')
    }
    return (
        <section id={ACCOMODATION_ID} css={AccomodationContentStyle}>
            <h2 css={AccomodationTitleStyle}>{t('accomodation.title')}</h2>
            <div css={AccomodationSubtitleStyle}>{t('accomodation.subtitle')}</div>
            <div css={AccomodationParagraphStyle}>{t('accomodation.hotelInfo')}</div>
            <div css={AccomodationParagraphStyle}>{t('accomodation.smsInfo')}</div>
            <div css={PhoneRowStyle}>
                <a css={PhoneNumberStyle} href="tel:+48 517 218 195">Zielona Brama: +48 123 456 789</a>
                <a css={PhoneNumberStyle} href="tel:+48987654321">Świadek: +48 796 710 494</a>
            </div>
            <div css={AccomodationImageWrapperStyle}>
                <img
                    css={AccomodationImageStyle}
                    src={'/images/przywidz_3d_wedding.png'}
                    alt={t('accomodation.mapAlt')}
                />
                {labelPositions.map(label => (
                    <span
                        key={label.key}
                        css={[InteractiveLabelStyle, { top: label.top, left: label.left, transform: 'translate(-50%, -50%)' }]}
                        onClick={() => handleLabelClick(label.key)}
                        tabIndex={0}
                        role="button"
                        aria-label={t(`accomodation.${label.key}`)}
                    >
                        <NavigationIcon css={IconStyle} />
                        {t(`accomodation.${label.key}`)}
                    </span>
                ))}
            </div>
        </section>
    )
} 