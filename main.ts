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
    let richtung = 2

    /**
        * Setzt Niki auf die angegebenen Koordinaten mit Blick in die angegebene Richtung.
        */
    //% block
    export function setzeAmeise(x: number, y: number, richtung: himmelsrichtungen): void {
        if (x >= 0 && x < 5) {
            x = x
        }
        if (y >= 0 && y < 5) {
            y = y
        }
        if (richtung >= 0 && richtung < 4) {
            richtung = richtung
        }
        led.plot(x, y)
    }

    /**
    * Gehe ein Feld vor (wenn der Bildschirm zu Ende ist, fange an der gegenüberliegenden Seite an).
    */
    //% block
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
    //% block
    export function dreheLinks(): void {
        if (richtung < 3) {
            richtung += 1
        } else {
            richtung = 0
        }
    }

    /**
    * Drehe dich um 90° nach rechts.
    */
    //% block
    export function dreheRechts(): void {
        if (richtung > 0) {
            richtung += -1
        } else {
            richtung = 3
        }
    }

    /**
     * Lege eine Spur, wenn das Feld vorher leer war; ansonsten lösche sie.
     */
    //% block
    export function aendereSpur(): void {
        led.toggle(x, y)
    }

    /**
    * Liefert "true", wenn sich die Ameise auf der Spur befindet.
    */
    //% block
    export function aufSpur(): boolean {
        return led.point(x, y)
    }
}