# OVA letöltési linkek beállítása

Az OVA-k tipikusan túl nagyok ahhoz, hogy normál Git fájlként a GitHub Pages repositoryban tárold őket.

## 1. Ajánlott: külső letöltési tárhely
Töltsd fel a két OVA-t olyan helyre, ahonnan a tanulók linkkel letölthetik:
- GitHub Release (ha a fájlméret megfelelő),
- Google Drive / OneDrive,
- intézményi szerver,
- NAS / webtárhely.

## 2. config.js
Nyisd meg a `config.js` fájlt és cseréld ki:

`PASTE_ROCKY_OVA_DOWNLOAD_URL_HERE`

és

`PASTE_WINDOWS7_OVA_DOWNLOAD_URL_HERE`

értékeket a valódi linkekre.

Opcionálisan megadhatod a fájlméretet és SHA256 értéket is.

## 3. SHA256 készítése Windows alatt

```cmd
certutil -hashfile RockyLinux10_2_RAW.ova SHA256
certutil -hashfile Windows7_x86_Client.ova SHA256
```

A kapott értéket szóközök nélkül másold a `config.js` `sha256` mezőjébe.

## 4. Teszt
Publikálás után inkognitó ablakban nyomd meg mindkét OVA letöltőgombot.
