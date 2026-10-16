# Rocky Linux 10.2 szerverlabor – GitHub Pages v2

## Mit tartalmaz?
- két OVA-letöltő kártya (Rocky + Windows 7), URL-jeik egyetlen `config.js` fájlban állíthatók;
- részletes OVA-import és VirtualBox hálózati ellenőrzés;
- 8 × 45 perces tanulói labor;
- rövid elmélet és modulonként mini teszt;
- 30 kötelező képernyőkép-bizonyíték;
- böngészőben mentett haladás (LocalStorage);
- előre elkészített Word dokumentációs sablon;
- 100 pontos értékelés;
- opcionális hibakeresési kihívás.

## GitHub Pages publikálás
A repository gyökerébe töltsd fel a teljes csomag tartalmát, majd:
Settings → Pages → Deploy from a branch → main → /(root)

## FONTOS: OVA-k
A nagy OVA-fájlokat ne tedd automatikusan a Pages repositoryba.
A `config.js` fájlban add meg a Rocky és a Windows OVA letöltési URL-jét.

Példa:
```js
url: "https://.../RockyLinux10_2_RAW.ova"
```

Lehetséges tárhely:
- GitHub Release asset, ha a fájl belefér az aktuális release asset méretkorlátba;
- iskolai Google Drive / OneDrive;
- saját NAS / webszerver;
- intézményi tárhely.

A linket publikálás előtt inkognitó ablakban is teszteld.

## Word sablon
`downloads/RockyLinux_10_2_Labor_Dokumentacio_Sablon.docx`
