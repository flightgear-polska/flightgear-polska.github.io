---
title: "Jak zainstalować addon we FlightGear – instrukcja krok po kroku"
description: "Pełna instrukcja instalacji dodatków (addonów) do FlightGear: od pobrania pliku, przez launcher, aż po rozwiązywanie typowych problemów z wykrywaniem addonu."
date: 2026-06-10
poziom: "Początkujący"
czasCzytania: "5 min"
zrodlo:
  nazwa: "FlightGear Wiki – Addon"
  url: "https://wiki.flightgear.org/Addon"
---

Addony to jeden z największych atutów FlightGeara – małe, niezależne rozszerzenia tworzone przez społeczność, które dodają funkcje bez modyfikowania samego symulatora. Ten poradnik pokazuje, jak je zainstalować, niezależnie od tego, który z [naszej listy addonów](/addony/) wybierzesz.

## Krok 1: Pobierz addon

Większość addonów znajdziesz jako repozytorium na GitHubie albo GitLabie (przycisk „Code → Download ZIP") albo jako archiwum na forum FlightGeara. Pobierz i rozpakuj plik do dowolnego miejsca na dysku – addony nie muszą leżeć w folderze instalacyjnym symulatora.

## Krok 2: Sprawdź strukturę folderu

Po rozpakowaniu folder z addonem powinien zawierać co najmniej dwa pliki: `addon-config.xml` i `addon-main.nas`. Jeśli widzisz dodatkowy, zagnieżdżony podfolder z tą samą nazwą (np. `addon-nazwa/addon-nazwa/`), wskaż w kolejnym kroku ten głębszy, a nie zewnętrzny folder.

## Krok 3: Dodaj folder w launcherze

1. Otwórz launcher FlightGeara.
2. Przejdź do zakładki **Add-ons** w panelu po lewej stronie.
3. W sekcji **Add-on Module folders** kliknij przycisk **+**.
4. Wskaż folder z rozpakowanym addonem – jego nazwa powinna kończyć się na nazwę samego addonu (nie na ogólny folder „Downloads").

## Krok 4: Uruchom symulator

Po dodaniu folderu uruchom FlightGeara normalnie. Większość addonów dodaje nową pozycję w menu głównym symulatora – jeśli jej nie widzisz, sprawdź konsolę poleceń (Debug → konsola) w poszukiwaniu komunikatów błędów związanych z nazwą addonu.

## Alternatywa: linia komend

Jeśli wolisz uruchamiać FlightGeara z terminala albo skryptu, możesz wskazać addon bez launchera:

```
fgfs --addon=/pełna/ścieżka/do/addonu
```

Przydatne, jeśli testujesz kilka addonów naraz i chcesz szybko włączać/wyłączać je między sesjami.

## Najczęstsze problemy

**Addon nie pojawia się w menu po starcie.**
Sprawdź, czy folder wskazany w launcherze to dokładnie ten z plikiem `addon-main.nas`, a nie folder nadrzędny. To najczęstsza przyczyna „niewidzialnych" addonów.

**Symulator się nie uruchamia po dodaniu addonu.**
Niektóre addony wymagają konkretnej wersji FlightGeara lub innych addonów jako zależności – sprawdź plik README w repozytorium przed instalacją.

**Dwa addony kolidują ze sobą.**
Zdarza się przy addonach modyfikujących to samo menu lub te same skróty klawiszowe (np. dwa różne addony ATC). W takim przypadku wyłącz jeden z nich, usuwając jego folder z listy w launcherze.

## Co dalej

Zerknij na naszą [pełną listę addonów](/addony/) podzieloną na kategorie – każdy wpis ma własną, szczegółową instrukcję instalacji dopasowaną do konkretnego dodatku. Masz problem z konkretnym addonem? Zapytaj na naszym [Discordzie](https://discord.gg/5J7uVYRhZV).
