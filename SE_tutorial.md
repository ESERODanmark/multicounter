## Multi-räknaren @unplugged
![Bildbeskrivning](https://newgamedk.github.io/skridt-taeller/intro.png)

## Räknevariabeln
Skapa en variabel för att räkna antalet skaksteg. Kalla den `||variables:antalRyst||`.
**TIPS:** Klicka på den färgade texten.

## Sätt räknevariabeln
När multi-räknaren skakas, ska den räkna ett steg.
* Hitta blocket `||variables: ändr||` och dra den in i  `||input.på ryst||`    

```blocks
input.onGesture(Gesture.Shake, function () {
    antalRyst += 1
})
```

## Nollställ multi-räknaren
* Hitta blocket `||input:när det trycks på knapp A||`

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## Nollställ multi-räknaren
* Hitta blocket `||variables: sätt||` och sätt den in i `||input:när det trycks på knapp A||`

```blocks
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
})
```

## Nollställ multi-räknaren
* Hitta blocket `||basic.visa nummer||. Sätt den in i `||input:när det trycks på knapp A||` under `||variables: sätt||`

```blocks
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
    basic.showNumber()
})
```

## Nollställ multi-räknaren
* Infoga variabeln `||variables:antalRyst||` i `||basic.visa nummer||`

```blocks
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
    basic.showNumber(antalRyst)
})
```

## Visa antal ryst
* Infoga blocket  `||loops:every||`

```blocks
loops.everyInterval(500, function () {
    
})
```

## Visa antal ryst
* Ställ in `||loops:every||` till 1 sekund (1000 ms)

```blocks
loops.everyInterval(1000, function () {

})
```

## Visa antal ryst
* Infoga  `||basic.visa nummer||` i `||loops:every||` 

```blocks
loops.everyInterval(1000, function () {
    basic.showNumber()
})
```

## Visa antal ryst
* Sätt variabeln `||variables:antalRyst||` ind i `||basic.visa nummer||`

```blocks
loops.everyInterval(1000, function () {
    basic.showNumber(antalRyst)
})
```

## Koden är nu klar för användning!
* Tryck på knappen "Färdig" och fortsätt med uppgifterna i elevhäftet

```template
input.onGesture(Gesture.Shake, function () {
})
```

<!-- All rights belong to ESERO Danmark, please contact ss@nvhus.dk for further information -->