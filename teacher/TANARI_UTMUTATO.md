# Tanári útmutató – Rocky Linux 10.2 szerverlabor v2

## Javasolt felépítés
- előkészítés: OVA-k letöltése/importja és Word-sablon mentése;
- 8 × 45 perc labor;
- opcionális 45 perc hibakeresési kihívás.

## OVA-k
A weboldal `config.js` fájlja tartalmazza a két OVA külső letöltési linkjét.
A repositoryban nem szükséges tárolni a több GB-os virtuális gépeket.

## Topológia
Rocky Linux:
- Adapter 1: NAT
- Adapter 2: Internal Network / LABNET
- LABNET IP: 192.168.50.1/24

Windows 7:
- Adapter 1: Internal Network / LABNET
- kezdetben 192.168.50.10/24, majd DHCP

## Dokumentáció
A tanulók a `downloads/RockyLinux_10_2_Labor_Dokumentacio_Sablon.docx` fájlt használják.
A sablon K01–K30 helyőrzőket, rövid magyarázatmezőket és beadás előtti ellenőrzőlistát tartalmaz.

## Értékelés
- VirtualBox/topológia: 8
- hálózat + SSH/PuTTY: 14
- userek/jogosultságok: 16
- Kea DHCP: 14
- BIND DNS: 14
- FTP: 14
- Apache: 10
- firewalld/integrált teszt: 6
- dokumentáció: 4
- összesen: 100

## Módszertani javaslat
A dokumentációra ne csak „kép megléte” pontot adj. A kép alatti 1–2 mondat mutassa meg, hogy a tanuló érti, mit bizonyít az eredmény.
