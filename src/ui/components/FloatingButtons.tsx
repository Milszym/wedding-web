/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { withMyTheme } from "../theme/theme"
import { MyButton } from "./button/MyButton"
import { isMobile, mobileCss } from "../theme/isMobile"
import { useTranslation } from "react-i18next"
import { Navigation, Restaurant, TableBar, FormatListNumbered } from "@mui/icons-material"
import { navigateToMap } from "../landing/location/Location"
import { SCHEDULE_ID } from "../landing/schedule/Schedule"
import { TABLES_ID } from "../landing/tables/Tables"
import { MENU_ID } from "../landing/menu/Menu"
import { useInView } from "react-intersection-observer"
import { TITLE_ID } from "../landing/title/Title"
import { useState, useEffect } from "react"

const FloatingButtonsContainerStyle = withMyTheme(() => css`
    position: fixed;
    bottom: 5vh;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1000;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    
    /* Hide on desktop */
    display: none;
    
    ${mobileCss(`
        display: flex;
    `)}
`)

const FloatingButtonStyle = withMyTheme(() => css`
    font-size: 0.9rem;
    padding: 0.8rem 1.2rem;
    border-radius: 25px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 120px;
`)

export const FloatingButtons = () => {
    const { t } = useTranslation()
    const [isVisible, setIsVisible] = useState(isMobile())

    // Observe title section
    const [titleRef, titleInView] = useInView({
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
    })

    useEffect(() => {
        // Set up observer for the title section
        const titleObserverElement = document.getElementById('title-observer')
        if (titleObserverElement) {
            titleRef(titleObserverElement)
        }
    }, [titleRef])

    useEffect(() => {
        // Only show buttons on mobile and when title is in view
        const shouldBeVisible = isMobile() && titleInView
        setIsVisible(shouldBeVisible)
    }, [titleInView])

    const scrollToMenu = () => { 
        scrollTo(MENU_ID)
    }

    const scrollToTables = () => {
        scrollTo(TABLES_ID)
    }

    const scrollToSchedule = () => {
        scrollTo(SCHEDULE_ID)
    }

    const scrollTo = (id: string) => {
        const menuElement = document.getElementById(id)
        if (menuElement) {
            menuElement.scrollIntoView({ behavior: 'smooth' })
        }
    }

    // Don't render anything if not on mobile
    if (!isMobile()) {
        return null
    }

    return (
        <div css={[
            FloatingButtonsContainerStyle,
            !isVisible && css`
                opacity: 0;
                transform: translateX(100%);
                pointer-events: none;
            `
        ]}>
            <MyButton
                text={t('navigate')}
                variant="contained"
                colorVariant="primary"
                startIcon={<Navigation />}
                onClick={navigateToMap}
                additionalCss={FloatingButtonStyle}
            />
            <MyButton
                text={t('tables.title')}
                variant="contained"
                colorVariant="primary"
                startIcon={<TableBar />}
                onClick={scrollToTables}
                additionalCss={FloatingButtonStyle}
            />
            <MyButton
                text={t('schedule.title')}
                variant="contained"
                colorVariant="primary"
                startIcon={<FormatListNumbered />}
                onClick={scrollToSchedule}
                additionalCss={FloatingButtonStyle}
            />
            <MyButton
                text={t('menu.title')}
                variant="contained"
                colorVariant="primary"
                startIcon={<Restaurant />}
                onClick={scrollToMenu}
                additionalCss={FloatingButtonStyle}
            />
        </div>
    )
} 