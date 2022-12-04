langton.setzeAmeise(2, 2, langton.himmelsrichtungen.norden)
basic.forever(function () {
    basic.pause(100)
    if (langton.aufSpur()) {
        langton.dreheLinks()
        langton.loescheSpur()
    } else {
        langton.dreheRechts()
        langton.markiereFeld()
    }
    langton.geheVor()
})
