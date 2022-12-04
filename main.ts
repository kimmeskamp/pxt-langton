/**
 * Langtons Ameise
 */
//% weight=100 color=#0fbc11

namespace langton {

    export enum himmelsrichtungen {
        //% block="Norden"
        norden = 0,
        //% block="Osten"
        osten = 1,
        //% block="Süden"
        sueden = 2,
        //% block="Westen"
        westen = 3,
    }
    
    let y = 2
    let x = 2
    let richtung = 1

    /**
        * Setzt Niki auf die angegebenen Koordinaten mit Blick in die angegebene Richtung.
        */
    //% block="setze Ameise auf|x $x_neu|y $y_neu|Richtung $richtung_neu"
    export function setzeAmeise(x_neu: number, y_neu: number, richtung_neu: himmelsrichtungen): void {
        if (x_neu >= 0 && x_neu < 5) {
            x = x_neu
        }
        if (y_neu >= 0 && y_neu < 5) {
            y = y_neu
        }
        if (richtung_neu >= 0 && richtung_neu < 4) {
            richtung = richtung_neu
        }
        led.plot(x, y)
    }

    /**
    * Gehe ein Feld vor (wenn der Bildschirm zu Ende ist, fange an der gegenüberliegenden Seite an).
    */
    //% block="gehe vor"
    export function geheVor(): void {
        if (richtung == 0) {
            if (y > 0) {
                y += -1
            } else {
                y = 4
            }
        } else if (richtung == 1) {
            if (x < 4) {
                x += 1
            } else {
                x = 0
            }
        } else if (richtung == 2) {
            if (y < 4) {
                y += 1
            } else {
                y = 0
            }
        } else {
            if (x > 0) {
                x += -1
            } else {
                x = 4
            }
        }
    }

    /**
    * Drehe dich um 90° nach links.
    */
    //% block="drehe links"
    export function dreheLinks(): void {
        if (richtung > 0) {
            richtung += -1
        } else {
            richtung = 3
        }
    }

    /**
    * Drehe dich um 90° nach rechts.
    */
    //% block="drehe rechts"
    export function dreheRechts(): void {
        if (richtung < 3) {
            richtung += 1
        } else {
            richtung = 0
        }
    }

    /**
     * Lege eine Spur, wenn das Feld vorher leer war; ansonsten lösche sie.
     */
    //% block="markiere Feld"
    export function markiereFeld(): void {
        led.plot(0, 0)
    }

    /**
     * Lege eine Spur, wenn das Feld vorher leer war; ansonsten lösche sie.
     */
    //% block="lösche Spur"
    export function loescheSpur(): void {
        led.unplot(0, 0)
    }

    /**
    * Liefert "true", wenn sich die Ameise auf der Spur befindet.
    */
    //% block="auf Spur"
    export function aufSpur(): boolean {
        return led.point(x, y)
    }
}