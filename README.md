# Rocky Linux 10.2 szerverlabor – GitHub Pages

## Tartalom
8 × 45 perces, részletes gyakorlati tananyag:
1. VirtualBox és rendszerfelmérés
2. NetworkManager, belső IP, SSH/PuTTY
3. Felhasználók, csoportok, jogosultságok
4. Kea DHCP
5. BIND DNS
6. vsftpd
7. Apache HTTP
8. firewalld és integrált teszt

A weboldal:
- LocalStorage-ban menti a haladást;
- modulonként mini tesztet ad;
- 30 képernyőkép-bizonyítékot kér;
- másolható parancsblokkokat tartalmaz;
- 100 pontos értékelési rendszert ad.

## GitHub Pages
Töltsd fel a repository gyökerébe:
- index.html
- styles.css
- script.js

Settings → Pages → Deploy from a branch → main → /(root)

## OVA
Az `ova_builder` mappa a Rocky Linux 10.2 RAW OVA reprodukálható tanári elkészítéséhez szükséges fájlokat tartalmazza.

## Hálózat
Rocky:
- NIC1 NAT
- NIC2 Internal Network: LABNET
- 192.168.50.1/24

Windows 7:
- Internal Network: LABNET
- DHCP
