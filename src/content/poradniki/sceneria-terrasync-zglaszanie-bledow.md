---
title: "Sceneria w FlightGear: jak działa TerraSync i jak zgłosić błąd lotniska"
description: "Jak FlightGear pobiera scenerię w czasie lotu, dlaczego nie trzeba ściągać jej ręcznie oraz jak zgłosić brakujące obiekty lub błędy na lotnisku do bazy danych projektu."
date: 2026-06-20
poziom: "Początkujący"
czasCzytania: "5 min"
zrodlo:
  nazwa: "FlightGear Wiki – Scenery"
  url: "https://wiki.flightgear.org/Scenery"
---

Jedna z rzeczy, która najbardziej zaskakuje nowych pilotów FlightGeara: nie trzeba ręcznie ściągać scenerii dla każdego kraju, w który chcesz polecieć. System robi to sam, w tle, podczas lotu.

## Jak działa TerraSync

TerraSync to wbudowany mechanizm FlightGeara, który automatycznie pobiera aktualną wersję scenerii w trakcie lotu, w miarę jak się przemieszczasz. Nie musisz włączać żadnych dodatkowych opcji – domyślnie jest aktywny i ściąga dane w tle, buforując je na dysku, żeby nie pobierać tego samego terenu dwa razy.

Od pewnej wersji FlightGeara budynki, drogi, słupy energetyczne i inne obiekty pochodzą z projektu OSM2City, opartego na danych OpenStreetMap, i są ściągane automatycznie razem z resztą scenerii – również bez potrzeby ręcznej instalacji.

## Co jeśli mam starą, ręcznie zainstalowaną scenerię?

Jeśli kiedyś dograłeś ręcznie scenerię z folderami takimi jak `Buildings`, `Roads` czy `Pylons` (sprzed 2021 roku), mogą one nadpisywać nowsze, lepiej zoptymalizowane obiekty z TerraSync. W takim przypadku warto usunąć te podfoldery z listy scenerii w ustawieniach, zostawiając jedynie te, które rzeczywiście wprowadzają unikalne poprawki (np. własny `Terrain`).

## Sceneria specjalna i niestandardowa

Część regionów ma dedykowane, ręcznie tworzone projekty scenerii poprawiające jakość terenu ponad to, co dostarcza TerraSync. Zanim pobierzesz taką scenerię dla Polski lub innego regionu, sprawdź na forum FlightGeara w sekcji Scenery, czy projekt jest wciąż aktualny – niektóre starsze paczki mogą kolidować z nowszymi danymi.

## Jak zgłosić błąd lotniska lub brakujący obiekt

Polskie lotniska w naszej [bazie lotnisk](/lotniska/polska/) korzystają z tej samej, ogólnoświatowej bazy danych FlightGeara. Jeśli zauważysz błąd – np. nieprawidłowo ustawiony pas, brakujący budynek terminala albo zły kod ICAO – możesz to zgłosić:

1. Sprawdź **Scenery Portal** na FlightGear Wiki, gdzie znajdziesz formularze i narzędzia do zgłaszania poprawek w bazie scenerii.
2. Przeszukaj forum FlightGeara (sekcja Scenery) – możliwe, że ktoś już zgłosił ten sam problem.
3. Jeśli chcesz samodzielnie poprawić obiekt (np. dodać brakujący budynek), warto zapoznać się z dokumentacją Howto:Add details to your airport na FlightGear Wiki.

## Dla kogo to ważne

Każdy, kto lata nad mniej popularnymi, polskimi lotniskami, prędzej czy później natrafi na braki w scenerii – to normalne w projekcie opartym na danych społecznościowych. Zgłaszanie błędów i drobne poprawki realnie wpływają na jakość scenerii dla wszystkich pilotów FGPL.

Masz pytanie albo nie wiesz, gdzie zgłosić konkretny problem? Zapytaj na naszym [Discordzie](https://discord.gg/5J7uVYRhZV) – pomożemy znaleźć właściwe miejsce.
