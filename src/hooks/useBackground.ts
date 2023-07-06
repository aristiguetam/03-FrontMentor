import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const useBackground = () => {

    const pathname = usePathname()

    const windowScreen = window.innerWidth
    console.log({ windowScreen })


    useEffect(() => {

        if (pathname === '/') {
            document.body.style.backgroundImage = 'url("/assets/home/background-home-desktop.jpg")'
        }
        if (pathname === '/destination') {
            document.body.style.backgroundImage = 'url("/assets/destination/background-destination-desktop.jpg")'
        }
        if (pathname === '/crew') {
            document.body.style.backgroundImage = 'url("/assets/crew/background-crew-desktop.jpg")'
        }
        if (pathname === '/technology') {
            document.body.style.backgroundImage = 'url("/assets/technology/background-technology-desktop.jpg")'
        }
    }, [pathname])

}
