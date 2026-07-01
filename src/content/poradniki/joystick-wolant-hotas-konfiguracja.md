---
title: "Joystick, wolant i HOTAS we FlightGear: instalacja i konfiguracja"
description: "Jak podłączyć i poprawnie skonfigurować joystick, wolant lub zestaw HOTAS we FlightGear na Windows, Linux i macOS – wraz z rozwiązywaniem typowych problemów."
date: 2026-01-20
poziom: "Początkujący"
czasCzytania: "7 min"
zrodlo:
  nazwa: "FlightGear Wiki – Joystick support"
  url: "https://wiki.flightgear.org/Joystick_support"
---

Latanie na klawiaturze jest możliwe, ale prawdziwa frajda z FlightGeara zaczyna się dopiero z fizycznym sterownikiem w ręku. Ten poradnik prowadzi przez podłączenie joysticka, wolantu lub zestawu HOTAS (throttle + stick) i najczęstsze problemy z ich wykrywaniem.

## Krok 1: Sprawdź, czy system widzi urządzenie

Zanim uruchomisz FlightGeara, upewnij się, że system operacyjny w ogóle rozpoznaje sterownik:

- **Windows**: Panel sterowania → Urządzenia i drukarki → kliknij prawym na joystick → Ustawienia gier. Powinieneś zobaczyć ruch osi w czasie rzeczywistym.
- **Linux**: użyj narzędzia `jstest` (pakiet `joystick`) lub `jstest-gtk`, by sprawdzić wykrywane osie i przyciski w `/dev/input/js0`.
- **macOS**: większość sterowników HID jest rozpoznawana automatycznie, ale warto zweryfikować w aplikacji *USB Overdrive* lub podobnym narzędziu diagnostycznym.

Jeśli urządzenie nie jest widoczne na tym etapie, problem leży w sterownikach systemowych, a nie w FlightGearze – zacznij od aktualizacji sterowników USB/HID producenta.

## Krok 2: Pierwsze uruchomienie w symulatorze

FlightGear zazwyczaj wykrywa podłączone urządzenia automatycznie przy starcie. W menu *Ustawienia → Sterowanie* powinieneś zobaczyć listę rozpoznanych kontrolerów. Jeśli Twojego urządzenia tam nie ma, zrestartuj symulator z już podłączonym sterownikiem – FlightGear skanuje porty w momencie startu, nie w trakcie działania.

## Krok 3: Mapowanie osi

Domyślne profile pokrywają najpopularniejsze modele (m.in. Logitech/Saitek, Thrustmaster, CH Products), ale warto je zweryfikować:

1. Wejdź w *Ustawienia → Sterowanie → Joystick*.
2. Przesuń każdą oś osobno i sprawdź, czy reakcja w symulatorze odpowiada ruchowi fizycznemu (np. czy wychylenie w prawo faktycznie przechyla samolot w prawo).
3. Zwróć szczególną uwagę na **odwrócenie osi pochylenia (pitch)** – to najczęstszy błąd konfiguracji, wynikający z różnic konwencji między producentami.

## Krok 4: Martwa strefa i czułość

Tania mechanika potencjometrów w niektórych joystickach powoduje drobny „szum" sygnału w pozycji neutralnej. Ustaw martwą strefę (dead zone) na 3–5%, żeby samolot nie dryfował samoczynnie przy puszczonych sterach. Krzywa czułości (sensitivity curve) pozwala z kolei na precyzyjniejsze sterowanie przy małych wychyleniach – przydatne zwłaszcza przy podejściu do lądowania.

## Krok 5: Konfiguracja HOTAS (osobny throttle)

Jeśli korzystasz z zestawu z osobną dźwignią ciągu, upewnij się, że:

- Throttle jest mapowany jako osobna oś, a nie duplikat osi steru wysokości.
- Zakres throttle'a pokrywa pełen skok – sprawdź, czy w pozycji „idle" silnik faktycznie schodzi do biegu jałowego, a w pozycji „full" osiąga maksymalny ciąg.
- W samolotach wielosilnikowych (np. naszym Boeingu 737-800) możesz przypisać oddzielne osie do poszczególnych silników, jeśli sterownik na to pozwala.

## Najczęstsze problemy i ich rozwiązania

**Joystick „skacze" losowo mimo spokojnego trzymania.**
Najczęściej winna jest zbyt mała martwa strefa albo zużyty potencjometr. Zwiększ dead zone w pierwszej kolejności.

**Urządzenie działa w systemie, ale nie w FlightGearze.**
Sprawdź, czy FlightGear nie ma już przypisanego innego, nieaktywnego urządzenia na tym samym indeksie portu – usuń stary profil i zrestartuj symulator z czystym podłączeniem.

**Przyciski na joysticku nie reagują.**
Część funkcji (np. trymowanie czy widoki kamery) trzeba przypisać ręcznie w menu *Sterowanie → Przyciski* – FlightGear nie zgaduje ich przeznaczenia automatycznie poza osiami ruchu.

## Polecane minimum sprzętowe

Do komfortowego latania VFR wystarczy prosty joystick z trzema osiami (x, y, obrót) i kilkoma przyciskami. Jeśli planujesz latać liniowcami z naszego katalogu samolotów, warto rozważyć osobną dźwignię ciągu (throttle quadrant) – znacznie ułatwia precyzyjne zarządzanie mocą podczas podejścia.

Masz nietypowy model sterownika i nie wiesz, czy zadziała? Zapytaj na naszym [Discordzie](https://discord.gg/5J7uVYRhZV) – ktoś w społeczności prawdopodobnie już go testował.
