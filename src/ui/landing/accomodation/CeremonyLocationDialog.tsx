/** @jsxImportSource @emotion/react */
import { Dialog, DialogContent, DialogTitle, Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { withMyTheme } from "../../theme/theme";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { MyButton } from "../../components/button/MyButton";
import ArrowBack from '@mui/icons-material/ArrowBack';

const CeremonyDialogContentStyle = withMyTheme((theme) => css`
    width: 100%;
    font-family: ${theme.typography.body1.fontFamily};
    font-weight: 300;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`)

const CeremonyDialogDescriptionStyle = withMyTheme((theme) => css`
    font-size: 1.3rem;
    color: black;
    text-align: center;
    margin-top: 1em;
    font-family: ${theme.typography.body1.fontFamily};
    font-weight: 300;
`)

const CeremonyDialogMapWrapperStyle = withMyTheme(() => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 350px;
    margin: 2rem auto 0 auto;
`)

const CeremonyDialogMapImageStyle = withMyTheme(() => css`
    display: block;
    width: 100%;
    max-width: 350px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
`)

const CeremonyDialogLabelStyle = withMyTheme(() => css`
    position: absolute;
    top: 50%;
    left: 21%;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.85);
    padding: 0.2em 0.7em;
    border-radius: 8px;
    font-size: .9rem;
    font-family: inherit;
    color: #a67c52;
    font-weight: 600;
    pointer-events: none;
    box-shadow: 0 1px 4px rgba(0,0,0,0.07);
    display: flex;
    align-items: center;
`)

const CeremonyDialogIconStyle = withMyTheme(() => css`
    font-size: 1.1em;
    margin-right: 0.35em;
    vertical-align: middle;
`)

const CeremonyDialogButtonWrapperStyle = withMyTheme(() => css`
    margin-top: 2vh;
`)

const CeremonyDialogCheckboxStyle = withMyTheme(() => css`
    margin-top: 1.5em;
    margin-bottom: 0.5em;
`)

const CeremonyDialogCheckboxCustomStyle = withMyTheme(() => css`
    & .MuiCheckbox-root {
        color: #666;
    }
    & .MuiCheckbox-root.Mui-checked {
        color: #1976d2;
    }
    & .MuiCheckbox-root:not(.Mui-checked) .MuiSvgIcon-root {
        border: 2px solid #999;
        border-radius: 3px;
        background-color: #f5f5f5;
    }
`)

export const CeremonyLocationDialog = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    const { t } = useTranslation();
    const [doNotShow, setDoNotShow] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDoNotShow(event.target.checked);
        if (event.target.checked) {
            localStorage.setItem('showCeremonyDialog', 'false');
        } else {
            localStorage.setItem('showCeremonyDialog', 'true');
        }
    };

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>{t('ceremonyDialog.title')}</DialogTitle>
            <DialogContent>
                <div css={CeremonyDialogContentStyle}>
                    <div css={CeremonyDialogDescriptionStyle}>{t('ceremonyDialog.description')}</div>
                    <div css={CeremonyDialogMapWrapperStyle}>
                        <img
                            css={CeremonyDialogMapImageStyle}
                            src={'/images/zielona_brama_mapka_noclegow.png'}
                            alt={t('accomodation.mapAlt')}
                        />
                        <span css={CeremonyDialogLabelStyle}>
                            <ArrowBack css={CeremonyDialogIconStyle} />
                            {t('ceremonyDialog.label')}
                        </span>
                    </div>
                    <FormControlLabel
                        css={[CeremonyDialogCheckboxStyle, CeremonyDialogCheckboxCustomStyle]}
                        control={
                            <Checkbox
                                checked={doNotShow}
                                onChange={handleCheckboxChange}
                                color="primary"
                            />
                        }
                        label={t('ceremonyDialog.checkbox')}
                    />
                    <div css={CeremonyDialogButtonWrapperStyle}>
                        <MyButton
                            variant="contained"
                            colorVariant="primary"
                            text={t('location.close')}
                            onClick={onClose}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
} 