---
title: "Multiplayer we FlightGear dla początkujących"
description: "Jak zacząć latać online we FlightGear: konfiguracja serwera multiplayer, kolizje z innymi pilotami, podstawy etykiety w powietrzu i przydatne addony."
date: 2026-06-15
poziom: "Początkujący"
czasCzytania: "6 min"
zrodlo:
  nazwa: "FlightGear Wiki – Howto: Multiplayer"
  url: "https://wiki.flightgear.org/Howto:Multiplayer"
---

Latanie samemu jest dobrym sposobem na nauczenie się podstaw, ale FlightGear naprawdę ożywa, gdy w powietrzu są też inni piloci. Ten poradnik pokazuje, jak skonfigurować multiplayer i czego się spodziewać przy pierwszych lotach online.

## Krok 1: Włącz multiplayer w launcherze

1. Otwórz launcher FlightGeara i przejdź do zakładki **Multiplayer**.
2. Zaznacz opcję włączającą połączenie z serwerem MP.
3. Wybierz serwer z listy – domyślny publiczny serwer FlightGeara obsługuje większość ruchu społeczności.
4. Ustaw swój **callsign** (znak wywoławczy) – widoczny dla innych pilotów, więc warto wybrać coś rozpoznawalnego.

## Krok 2: Pierwszy lot online – czego się spodziewać

Po starcie zobaczysz modele innych samolotów w pobliżu wraz z etykietami callsign i wysokości. Nie musisz się z nimi komunikować, żeby latać bezpiecznie, ale warto znać podstawowe zasady:

- **Zachowuj separację** – tak jak w realnym lotnictwie, unikaj zbliżania się zbyt blisko innych samolotów, zwłaszcza w okolicy lotnisk.
- **Obserwuj ruch na ziemi** – na popularnych lotniskach (np. EPWA w naszej [bazie lotnisk](/lotniska/polska/)) może kołować kilku pilotów jednocześnie.
- **Kolizje z innymi modelami nie zawsze działają fizycznie** – zależnie od konfiguracji serwera, przenikanie się modeli jest możliwe i nie powinno być traktowane jako błąd.

## Krok 3: Komunikacja tekstowa i głosowa

Domyślny czat tekstowy multiplayer otwiera się klawiszem `Enter`. Społeczność korzysta też z zewnętrznych kanałów głosowych – w przypadku FGPL to nasz [Discord](https://discord.gg/5J7uVYRhZV), gdzie organizowane są wspólne loty. Warto też zerknąć na nasze [Wydarzenia](/wydarzenia/) – tam zbieramy informacje o cyklicznych lotach grupowych.

## Krok 4: Loty na sieciach online (VATSIM, IVAO)

Jeśli chcesz latać z realnymi, żywymi kontrolerami ruchu lotniczego, sieci takie jak VATSIM czy IVAO wymagają osobnej rejestracji i klienta łączącego je z FlightGearem. Przydatne addony na start:

- [Hoppie ACARS Client](/addony/hoppie-acars/) – odbieranie zezwoleń i CPDLC.
- [SimBrief Import](/addony/simbrief-import/) – przygotowanie planu lotu zgodnego z procedurami online.

## Najczęstsze problemy

**Nie widzę innych pilotów, mimo że jestem online.**
Sprawdź, czy port multiplayer (domyślnie UDP 5000) nie jest blokowany przez firewall lub router (NAT).

**Mój samolot „skacze" lub teleportuje się u innych pilotów.**
To zwykle efekt niestabilnego połączenia internetowego – multiplayer FlightGeara wysyła pozycję okresowo, a przy dużych skokach lag spike'u animacja może wyglądać nienaturalnie. Sam lot pozostaje przy tym bezpieczny.

**Nie wiem, jak się przywitać z innymi pilotami.**
Prosty tekst na czacie w stylu „Cześć z Polski, miłych lotów!" wystarczy – społeczność FlightGeara jest zazwyczaj bardzo otwarta wobec nowych pilotów.

## Co dalej

Sprawdź nasze [Wydarzenia](/wydarzenia/), żeby dołączyć do najbliższego lotu grupowego, albo zapytaj na [Discordzie](https://discord.gg/5J7uVYRhZV), kto akurat lata online.
