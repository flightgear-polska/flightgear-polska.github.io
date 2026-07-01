---
title: "Jak wycisnąć 60 FPS na słabszym PC: optymalizacja renderera FlightGear"
description: "Praktyczny przewodnik po ustawieniach grafiki FlightGear – co warto wyłączyć, co zostawić i jak zrozumieć technologię ALS, żeby zyskać płynność bez utraty realizmu."
date: 2026-02-14
poziom: "Średniozaawansowany"
czasCzytania: "8 min"
zrodlo:
  nazwa: "FlightGear Wiki – Howto: Improve performance"
  url: "https://wiki.flightgear.org/Howto:Improve_performance"
---

FlightGear to symulator open-source, który potrafi wyglądać oszałamiająco – ale domyślne ustawienia graficzne są skrojone pod nowoczesne karty graficzne, nie pod typowy laptop. Jeśli Twój sprzęt ma kilka lat, a liczba klatek na sekundę spada poniżej 20 przy lądowaniu w dużym mieście, ten poradnik pokaże Ci, gdzie szukać rezerw.

## Najpierw zrozum, co Cię spowalnia

Zanim zaczniesz wyłączać suwaki na chybił trafił, sprawdź licznik FPS (`Shift+F` lub menu *View → Show frame rate*) razem z monitorem obciążenia CPU/GPU systemu operacyjnego. Dwa najczęstsze wąskie gardła to:

- **Scenery i tekstury terenu** – obciążają głównie CPU przy generowaniu siatki terenu w locie.
- **Oświetlenie i cienie (ALS – Atmospheric Light Scattering)** – obciążają głównie GPU.

Rozróżnienie tego, co Cię realnie ogranicza, oszczędza godziny przekopywania się przez menu.

## Ustawienia, które dają największy zysk

### 1. Zasięg widoczności terenu (LOD Detailed)

W menu *Ustawienia → Rendering* zmniejsz suwak szczegółowości terenu. To pojedyncza zmiana, która na słabszych maszynach potrafi podnieść FPS nawet o kilkanaście klatek, bo ogranicza liczbę renderowanych obiektów w dalszym planie.

### 2. Gęstość roślinności i losowych obiektów

Drzewa, krzewy i losowe budynki (random buildings/vegetation) są generowane proceduralnie i potrafią mocno obciążyć CPU nad gęsto zabudowanym terenem. Zmniejszenie gęstości roślinności o połowę często jest niezauważalne wizualnie z typowej wysokości przelotowej, a odciąża procesor zauważalnie.

### 3. Cienie w czasie rzeczywistym

Cienie rzucane przez teren i obiekty (terrain shadows) są jednym z najdroższych efektów w silniku ALS. Jeśli Twoja karta graficzna nie jest świeżej daty, warto je całkowicie wyłączyć lub ograniczyć zasięg ich renderowania.

### 4. Rozdzielczość tekstur i anizotropia

Wysoka anizotropowa filtracja tekstur (16x) wygląda świetnie z bliska, ale rzadko robi różnicę z perspektywy kokpitu w ruchu. Obniżenie do 4x–8x zwykle nie jest zauważalne, a odciąża GPU.

### 5. Multi-threading silnika OSG

FlightGear potrafi rozkładać renderowanie na wiele wątków. W ustawieniach uruchomieniowych warto sprawdzić tryb wątkowania (`--threads` w opcjach startowych) – na procesorach wielordzeniowych daje to zauważalny wzrost płynności.

## Co zostawić włączone

Nie wszystko warto wyłączać. Model lotu (JSBSim) działa niezależnie od ustawień graficznych i jego wyłączenie niczego nie przyspieszy – a obniżenie częstotliwości fizyki psuje realizm sterowania. Podobnie systemy nawigacyjne (FMC, autopilot) praktycznie nie obciążają GPU.

## Zestaw startowy dla słabszego sprzętu

Jeśli chcesz szybko przetestować wydajność na nowej maszynie, zacznij od tego zestawu:

1. LOD terenu: średni
2. Roślinność: 30–40% gęstości domyślnej
3. Cienie terenu: wyłączone
4. Anizotropia: 4x
5. Rozdzielczość okna: natywna, ale bez supersamplingu (MSAA 2x zamiast 4x/8x)

Stąd możesz stopniowo podkręcać pojedyncze suwaki w górę, obserwując licznik FPS, aż znajdziesz granicę swojego sprzętu.

## Aktualizacja sterowników i wersji FlightGear

Brzmi banalnie, ale nowsze wersje FlightGera regularnie poprawiają wydajność silnika renderującego. Jeśli korzystasz z wersji sprzed kilku lat, sam upgrade do aktualnej kompilacji bywa równoważny połowie zmian opisanych powyżej.

Masz nietypowy problem z wydajnością, którego nie rozwiązuje powyższa lista? Wpadnij na nasz [Discord](https://discord.gg/5J7uVYRhZV) – społeczność FGPL chętnie pomoże dobrać ustawienia pod konkretny sprzęt.
