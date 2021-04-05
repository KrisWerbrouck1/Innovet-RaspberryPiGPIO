# RaspberryPi GPIO
## Inleiding

De Raspberry PI is een kleine single bord computer. De Raspberry Pi werd ontwikkeld aan de Universiteit van Cambridge en was bedoeld voor educatieve doeleinden. De productie van de eerste Raspberry Pi model B werd op 10 januari 2012 gestart. Sindsdien zijn er verschillende modellen en versies uitgebracht.

![Raspberry PI model B januari 2012 ](./assets/clip_image001.jpg)

De aanwezigheid van de General Purpose Input/output pinnen maakt het mogelijk om zelf sensoren en acutator aan te sluiten op de raspberry pi. Eveneens zijn er heel wat addon-board beschikbaar.

## Verschillende modellen

Na de introductie in 2012 zijn er nog verschillende modellen ontwikkeld.

Raspberry pi Model A uit 2012 zonder netwerkaansluiting.

![raspberry pi Model A uit 2012 zonder netwerkaansluiting](./assets/clip_image002.jpg)

Raspberry pi B+ uit 2014 met o.a. micro SD-kaart in plaats van SD kaart.

![raspberry pi B+ uit 2014 met o.a. micro SD-kaart in plaats van SD kaart](./assets/clip_image001.jpg)

Raspberry pi 3B uit 2018 met o.a. snellere 1,4 GHz processor, gigiabit ethernet aansluiting en dual band wifi.

![raspberry pi 3B uit 2018](./assets/clip_image004.gif)

Raspberry pi 4 uit 2019 met o.a. snellere 1,5 GHz processor, USB 3.0. De Raspberry pi 4 is eveneens te krijgen in versies met 2, 4 of 8 GB RAM-geheugen.

![raspberry pi 4 uit 2019](./assets/clip_image005.jpg)

De recentste versies van de raspberry pi beschikken onder andere over:

* Voldoende USB poorten voor toetsenbord, muis en extra randapparaten.
* 40 pins connector voor General Purpose Input/output (GPIO)
* 1 GB LAN aansluiting
* WIFI
* Bluetooth
*  ….

 

## Raspberry pi besturingssystemen
 
Er zijn verschillende besturingssystemen beschikbaar als image voor de raspberry pi. Momenteel is het meest gebruikte Raspbian, wat in deze cursus gebruikt wordt.
Andere besturingssystemen zijn onder andere Ubuntu Mate, Windows 10 IOT core, Risc OS, …

## Aanmaken bootable SD-kaart en opstarten Raspberry Pi

Er moet een bootable micro SD-kaart aangemaakt worden waar het besturingssysteem op staat. Download hiervoor volgende software en installeer deze.
https://www.raspberrypi.org/software/

Start de software 

![img](./assets/clip_image007.jpg)

Kies Raspberry Pi OS (32-bit) of een ander OS.

![img](./assets/clip_image009.jpg)

Kies als opslagapparaat de micro SD-card voor de raspberry pi.

![img](./assets/clip_image011.jpg)

Klik op SCHRIJF en vervolgens op JA

![img](./assets/clip_image013.jpg)

Plaats de micro SD-card in de raspberry pi en start op.

## Opstarten

Na het aansluiten van een toetsenbord, muis, voeding en een scherm via HDMI of micro HDMI aansluiting (Rapsberry Pi 4) krijg je een grafische omgeving.
![img](./assets/clip_image015.jpg)

Vervolgens moet het land, de taal en de tijdszone ingesteld worden.
De standaard gebruiker is pi en het paswoord raspberry. Het is echter aan te raden dit paswoord aan te passen.
Eveneens kan er een verbinding gemaakt worden met het wifi netwerk.
Als laatste stap wordt gevraagd om de software te updaten. Dit zal even duren. Neem gerust terug een kop koffie.

## GPIO Zero

GPIO Zero is een Python-bibliotheek die het relatief eenvoudig maakt sensoren en actuatoren aan te sluiten op de raspberry pi via de GPIO pinnen.

## Inschakelen GPIO pinnen

Kies “Voorkeuren” en vervolgens “Raspberry pi Configuratie programma”

![img](./assets/clip_image017.jpg)

Schakel in het “Raspberry pi Configuratie programma” op het tabblad “Interfaces” de nodige GPIO-communicatie in.

![img](./assets/clip_image019.jpg)

## Pin lay-out GPIO raspberry pi 

De GPIO pinnen van de raspberry pi

![img](./assets/clip_image021.jpg)

## gpiozero library

Zorg dat je gebruik maakt van python 3. Dit kan je controleren aan de hand van volgende uitleg. https://learn.sparkfun.com/tutorials/python-programming-tutorial-getting-started-with-the-raspberry-pi/configure-your-pi

Installeer indien nodig de bibliotheek gpiozero door in een terminal venster volgend instructie in te geven:

```cpp
sudo apt install python3-gpiozero
```
 
![img](./assets/clip_image023.jpg)

## led oplichten

Test volgende python script op de raspberry pi
 
```py
import gpiozero as io

led = io.LED(18)
led.on()
```

In het voorbeeld maken we gebruik van de bibliotheek gpiozero. De functie LED zit in deze bibliotheek.
Op de 2de regel wordt het object led aangemaakt en wordt de pin 18 toegewezen.
Op de 3de regel wordt met de methode on() de led ingeschakeld. 

Oefening:

* Laat 2 leds oplichten. Kies zelf een GPIO pin voor de 2de led.

## Leds knipperen

Test volgende python script op de raspberry pi

```py
from time import sleep
import gpiozero as io

led = io.LED(18)

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

Uitleg:

* Importeer uit de library time de functie sleep.
* Importeer de library gpiozero en wijs deze toe aan de klasse io.
* Maak het object led aan en wijs de pin 18 toe.
* Met de methode .on() wordt de led ingeschakeld en met .off() wordt de led uitgeschakeld.
* Sleep (1) Pauzeer de uitvoering van het script gedurende 1 seconde.

Onderzoek: geef met de functie print de toestand van led weer voor het inschakelen en na het inschakelen.

Oefening:

* Laat 2 externe leds afwisselend knipperen.

## Digitale ingang inlezen

Met volgende schakeling is het mogelijk een logische “1” en “0” te produceren aan een ingang van de raspberry pi.

![Schakeling met drukknop](./assets/clip_image025.gif) 
![Drukknopmodule](./assets/clip_image027.jpg)

Test volgende programma uit.

```py
# Button op GPIO04
import gpiozero as io
from time import sleep

knop = io.Button(4)

while True:
    sleep (0.1)
    if knop.value==1:
        print ("Knop niet ingedrukt")
    else:
        print ("Knop ingedrukt")
```
Onderzoek: geef met de functie print de toestand van knop.value weer. Wat stel je vast?


Oefeningen:

* Laat een led oplichten wanneer een drukknop ingedrukt is.
* Voorzie een drukknop voor de led in te schakelen en een drukknop om de led uit te schakelen. 


## DHT 11 temperatuur- en luchtvochtigheidssensor

De DHT11 is een temperatuur- en luchtvochtigheidssensor. 

Installeer de bijhorende bibliotheek in cd command line.
 
```
sudo pip3 install Adafruit_python_DHT
```
![img](./assets/clip_image029.jpg)

Voorzie een pull-up weerstand

![img](./assets/clip_image031.jpg)

Voorbeeldcode:

 
```py
import Adafruit_DHT

vocht,temp = Adafruit_DHT.read_retry(Adafruit_DHT.DHT11,2)
print("Relatieve vochtigheid in %",vocht)
print("Temperatuur in graden Celsius",temp)
```
 
[![Netlify Status](https://api.netlify.com/api/v1/badges/519b698d-5018-45eb-80d8-b740d63705a4/deploy-status)](https://app.netlify.com/sites/innovet-raspberrypigpio/deploys)
 