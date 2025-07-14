import { useEffect, useState } from "react";
import {Title} from "./landing/title/Title";
import {Location} from "./landing/location/Location";
import {Faq} from "./landing/faq/Faq";
import {WeddingWitnesses} from "./landing/weddingWitnesses/WeddingWitnesses";
import {Memories} from "./landing/memories/Memories";
import {Rsvp} from "./landing/rsvp/Rsvp";
import {Toaster} from "react-hot-toast";
import {Tables} from "./landing/tables/Tables";
import { Schedule } from "./landing/schedule/Schedule";
import { Menu } from "./landing/menu/Menu";
import { FloatingButtons } from "./components/FloatingButtons";
import { Attractions } from "./landing/attractions/Attractions";
import { Accomodation } from "./landing/accomodation/Accomodation";
import { CeremonyLocationDialog } from "./landing/accomodation/CeremonyLocationDialog";

export const AppContent = () => {
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        const show = localStorage.getItem('showCeremonyDialog');
        if (show === null || show === 'true') {
            setShowDialog(true);
        }
    }, []);

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    return <>
        {/* <CeremonyLocationDialog open={showDialog} onClose={handleCloseDialog} /> */}
        {/* <Navigation /> */}
        <Title/>
        <Location/>
        <Faq/>
        <WeddingWitnesses/>
        <Memories/>
        <Rsvp/>
        <Tables/>
        <Schedule/>
        <Attractions />
        <Accomodation />
        <Menu />

        <FloatingButtons />
        <Toaster/>
    </>
}
