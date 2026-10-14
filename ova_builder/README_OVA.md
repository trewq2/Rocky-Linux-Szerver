# Rocky Linux 10.2 RAW OVA – tanári elkészítési útmutató

## Miért építőcsomag?
A valódi OVA egy már telepített, bootolható virtuális merevlemezt tartalmaz. Ezt VirtualBoxban egyszer létre kell hozni Rocky Linux 10.2-ből, majd exportálni. Ez a csomag a teljes, reprodukálható elkészítési menetet adja.

## Hivatalos ISO
Használd a Rocky Linux 10.2 x86_64 minimal ISO-t:
Rocky-10.2-x86_64-minimal.iso

A Rocky projekt hivatalos letöltési könyvtárában megtalálható.

## 1. VirtualBox VM
Név: RockyLinux10_2_RAW
Típus: Linux / Red Hat (64-bit)
RAM: 2048 MB
CPU: 2
Lemez: 20 GB, dinamikus VDI

Hálózat:
- Adapter 1: NAT
- Adapter 2: Internal Network
- Internal Network neve: LABNET
- Cable Connected: bekapcsolva

## 2. Rocky Linux telepítés
Telepítés: Minimal Install
Hostname: rocky-raw
Admin felhasználó:
- név: student
- jelszó: Rocky2026!
- legyen administrator / wheel csoporttag

A tantermi használat előtt a jelszavakat természetesen megváltoztathatod.

## 3. Első boot után
Másold fel és futtasd:
sudo bash rocky102_raw_prepare.sh

A script:
- frissíti a rendszert;
- feltesz néhány alap diagnosztikai eszközt;
- engedélyezi az sshd és firewalld szolgáltatást;
- eltávolítja a labor szolgáltatásokat, ha véletlenül felkerültek;
- kitakarítja a cache-eket;
- előkészíti a klónozható állapotot.

## 4. Ellenőrzés
sudo bash rocky102_raw_check.sh

Minden kritikus sor legyen OK.

## 5. Leállítás
sudo poweroff

## 6. OVA export Windows hoston
A VM LEGYEN KIKAPCSOLVA.
Futtasd a mellékelt export_ova.bat fájlt, vagy:

VBoxManage export "RockyLinux10_2_RAW" --output "RockyLinux10_2_RAW.ova" --ovf20

## 7. Próbaimport
Mindig importáld vissza egyszer tesztként:
VirtualBox → File → Import Appliance → RockyLinux10_2_RAW.ova

Ellenőrizd:
- elindul;
- student be tud lépni;
- Adapter 1 NAT;
- Adapter 2 Internal Network / LABNET;
- Rocky rendszerben még NINCS kész DHCP/DNS/FTP/HTTP labor-konfiguráció.

## 8. Tanulói induló állapot
A tanuló a RAW OVA-ból indul, és neki kell kialakítania:
- NIC2 statikus cím;
- SSH;
- felhasználók/csoportok/jogosultságok;
- Kea DHCP;
- BIND DNS;
- vsftpd;
- Apache;
- firewalld.

Ez biztosítja, hogy valóban ő dolgozza ki a laborfeladatot.
