# Tanári útmutató – Rocky Linux 10.2 szerverlabor

## Javasolt óraszám
8 × 45 perc + opcionális 45 perces záró kihívás.

## Topológia
Rocky:
- NIC1 NAT
- NIC2 Internal Network: LABNET
- belső IP: 192.168.50.1/24

Windows 7 x86:
- 1 NIC: Internal Network / LABNET
- DHCP kliens

## Modulok
1. VirtualBox, topológia, rendszerfelmérés
2. NIC2, NetworkManager, SSH és PuTTY
3. Felhasználók, csoportok, fájl- és könyvtárjogosultságok
4. Kea DHCPv4
5. BIND DNS
6. vsftpd és jogosultságok
7. Apache HTTP és saját weboldal
8. firewalld, szolgáltatásteszt, dokumentáció

## Kiemelten fontos Rocky 10 változás
Rocky Linux 10-ben az ISC DHCP-szerver helyét a Kea vette át.
A hálózati konfigurációhoz NetworkManager/nmcli használatos; a régi ifcfg/network-scripts módszer nem megfelelő.

## Tanulói fiókok a laborban
A feladat során:
- anna
- bela
- vendeg
- projekt csoport

FTP könyvtárstruktúra:
- /srv/ftp/anna      → csak anna
- /srv/ftp/bela      → csak bela
- /srv/ftp/kozos     → projekt csoport, setgid
- /srv/ftp/nyilvanos → mindenki olvashatja

## Javasolt értékelés – 100 pont
- VirtualBox/topológia: 8
- hálózat + SSH/PuTTY: 14
- felhasználók/jogosultságok: 16
- DHCP: 14
- DNS: 14
- FTP: 14
- HTTP: 10
- firewalld és integrált teszt: 6
- dokumentáció: 4

## Biztonsági megjegyzés
Az FTP ebben a laborban oktatási célú, elkülönített belső hálózaton fut. Valós környezetben az SFTP előnyösebb, mert az FTP hitelesítési adatai és adatforgalma alapértelmezetten nem titkosítottak.

## Windows 7 kliens
A kliensre érdemes előre feltenni vagy mellékelni:
- PuTTY 32-bit / portable
- egyszerű szövegszerkesztő
Az FTP teszt a beépített `ftp.exe` programmal is elvégezhető.

## Dokumentáció
A weboldal K01–K30 jelöléssel adja meg a kötelező képernyőképeket.
Javasolt beadás:
Vezeteknev_Keresztnev_RockyLinux_Labor.pdf
