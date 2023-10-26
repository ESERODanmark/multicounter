## Multi-tælleren
** Når du klikker på pæren eller de farvede tekster får du et tip **
![](https://github.com/ESERODanmark/multicounter/blob/master/klikForTip.gif)

## Tælle-variablen
Opret en variabel, til at tælle antal ryst skridt med. Kald den `||variables:antalRyst||`. 
**TIP:** Tryk på den farvede tekst.

## Sæt tælle-variablen
Når multi:tælleren rystes, skal den tælle et skridt. 
* Find blokken `||variables: ændr||` og træk den ind i  `||input.på ryst||`    

```blocks
input.onGesture(Gesture.Shake, function () {
    antalRyst += 1
})
```

## Nulstil multi:tælleren
* Find blokken `||input:når der trykkes på knap A||`. 

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## Nulstil multi:tælleren
* Find blokken `||variables: sæt||` og sæt den ind i `||input:når der trykkes på knap A||`

```blocks
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
})
```

## Nulstil multi:tælleren
* Find blokken `||basic.vis nummer||`. Sæt den ind i `||input:når der trykkes på knap A||` under `||variables: sæt||`

```blocks
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
    basic.showNumber()
})
```

## Nulstil multi:tælleren
* Indsæt variablen `||variables:antalRyst||` i `||basic.vis nummer||`

```blocks
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
    basic.showNumber(antalRyst)
})
```

## Vis antal ryst
* Indsæt blokken  `||loops:every||`

```blocks
loops.everyInterval(500, function () {
    
})
```

## Vis antal ryst
* Indstil `||loops:every||` til 1 sekund (1000 ms)

```blocks
loops.everyInterval(1000, function () {

})
```

## Vis antal ryst
* Indsæt  `||basic.vis nummer||` i `||loops:every||` 

```blocks
loops.everyInterval(1000, function () {
    basic.showNumber()
})
```

## Vis antal ryst
* Sæt variablen `||variables:antalRyst||` ind i `||basic.vis nummer||`
```blocks
loops.everyInterval(1000, function () {
    basic.showNumber(antalRyst)
})
```

## Koden er nu klar til brug!
* Tryk på knappen "Færdig" og fortsæt med opgaverne i elevhæftet


```template
input.onGesture(Gesture.Shake, function () {
})
```